﻿namespace Terrasoft.Configuration.NextSteps
{
	using System;
	using System.Collections.Generic;
	using System.Linq;
	using Terrasoft.Common;
	using Terrasoft.Common.Json;
	using Terrasoft.Core;
	using Terrasoft.Core.Entities;
	using Terrasoft.Core.Factories;

	#region Class: ActivityNextStepQueryExecutor

	/// <summary>
	/// Implementation <see cref="INextStepQueryExecutor"/> for 'Activity' entity.
	/// </summary>
	[DefaultBinding(typeof(INextStepQueryExecutor), Name = "ActivityNextStepQueryExecutor")]
	internal class ActivityNextStepQueryExecutor: INextStepQueryExecutor
	{

		#region Fields: Private

		private readonly UserConnection _userConnection;

		#endregion

		#region Constructors: Public

		public ActivityNextStepQueryExecutor(UserConnection uc) {
			_userConnection = uc;
		}

		#endregion

		#region Methods: Private

		private EntitySchemaColumn GetRelatedColumn(string relatedEntityName) {
			var esq = new EntitySchemaQuery(_userConnection.EntitySchemaManager, "EntityConnection") {
				UseAdminRights = false,
				CacheItemName = "EntityConnectionColumns"
			};
			string columnUIdName = esq.AddColumn("ColumnUId").Name;
			EntitySchema activitySchema = _userConnection.EntitySchemaManager.GetInstanceByName("Activity");
			esq.Filters.Add(esq.CreateFilterWithParameters(FilterComparisonType.Equal, "SysEntitySchemaUId",
					activitySchema.UId));
			EntityCollection activityConnections = esq.GetEntityCollection(_userConnection);
			return activityConnections.Select(connection =>
					activitySchema.Columns.FindByUId(connection.GetTypedColumnValue<Guid>(columnUIdName)))
				.Where(column => column != null && column.ReferenceSchema.Name == relatedEntityName)
				.FirstOrDefault();
		}

		#endregion

		#region Methods: Public

		/// <inheritdoc cref="INextStepQueryExecutor.GetNextSteps(string, Guid)"/>
		public List<NextStepModel> GetNextSteps(string entityName, Guid entityId) {
			var result = new List<NextStepModel>();
			var relatedColumn = GetRelatedColumn(entityName);
			if (relatedColumn == null) {
				return result;
			}
			var executingEntityName = "Activity";
			var esq = new EntitySchemaQuery(_userConnection.EntitySchemaManager, executingEntityName);
			esq.RowCount = 100;
			esq.AddColumn("Id");
			esq.AddColumn("Title");
			esq.AddColumn("ProcessElementId");
			esq.AddColumn("StartDate").OrderByAsc();
			esq.AddColumn("Owner");
			esq.AddColumn("OwnerRole");
			esq.AddColumn("ActivityCategory");
			esq.Filters.Add(esq.CreateFilterWithParameters(FilterComparisonType.IsNotNull, relatedColumn.Name));
			esq.Filters.Add(esq.CreateFilterWithParameters(FilterComparisonType.Equal, relatedColumn.Name, entityId));
			esq.Filters.Add(esq.CreateFilterWithParameters(FilterComparisonType.Equal, "Status.Finish", false));
			var messageTypeFilter = new EntitySchemaQueryFilterCollection(esq, LogicalOperationStrict.Or) {
				esq.CreateFilterWithParameters(FilterComparisonType.Equal, "MessageType",
					Guid.Parse("7f9d1f86-f36b-1410-068c-20cf30b39373")),
				esq.CreateFilterWithParameters(FilterComparisonType.IsNull, "MessageType"),
			};
			var emailFilter = new EntitySchemaQueryFilterCollection(esq, LogicalOperationStrict.And) {
				esq.CreateFilterWithParameters(FilterComparisonType.Equal, "Type",
					Guid.Parse("e2831dec-cfc0-df11-b00f-001d60e938c6")),
				esq.CreateFilterWithParameters(FilterComparisonType.Equal, "EmailSendStatus",
					Guid.Parse("20c0c460-6107-e011-a646-16d83cab0980"))
			};
			messageTypeFilter.Add(emailFilter);
			esq.Filters.Add(messageTypeFilter);
			EntityCollection entityCollection = esq.GetEntityCollection(_userConnection);
			foreach (var entity in entityCollection) {
				var ownerColumn = entity.Schema.GetSchemaColumnByPath("Owner");
				var ownerRoleColumn = entity.Schema.GetSchemaColumnByPath("OwnerRole");
				var ownerName = entity.GetTypedColumnValue<string>(ownerColumn.DisplayColumnValueName);
				var ownerRoleName = entity.GetTypedColumnValue<string>(ownerRoleColumn.DisplayColumnValueName);
				var hasOwnerRole = ownerName.IsNullOrEmpty();
				var additionalParams = new Dictionary<string, object>();
				var categoryId = entity.GetTypedColumnValue<Guid>("ActivityCategoryId");
				if (categoryId.IsNotEmpty()) {
					additionalParams["ActivityCategoryId"] = categoryId;
				}
				var nextStep = new NextStepModel {
					Id = entity.GetTypedColumnValue<Guid>("Id1"),
					ProcessElementId = entity.GetTypedColumnValue<Guid>("ProcessElementId"),
					Caption = entity.GetTypedColumnValue<string>("Title"),
					IsOwnerRole = hasOwnerRole,
					OwnerName = hasOwnerRole ? ownerRoleName : ownerName,
					OwnerId = hasOwnerRole 
						? entity.GetTypedColumnValue<Guid>(ownerRoleColumn.ColumnValueName)
						: entity.GetTypedColumnValue<Guid>(ownerColumn.ColumnValueName),
					OwnerPhotoId = entity.GetTypedColumnValue<Guid>(ownerColumn.PrimaryImageColumnValueName),
					MasterEntityId = entityId,
					MasterEntityName = entityName,
					EntityName = executingEntityName,
					IsRequired = false,
					Date = entity.GetTypedColumnValue<DateTime>("StartDate"),
					AdditionalInfo = Json.Serialize(additionalParams, true)
				};
				result.Add(nextStep);
			}
			return result;
		}

		#endregion

	}

	#endregion

}



