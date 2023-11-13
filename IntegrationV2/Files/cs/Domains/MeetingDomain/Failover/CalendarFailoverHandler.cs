namespace Terrasoft.Configuration
{
	using System.Collections.Generic;
	using global::IntegrationV2.Files.cs.Domains.MeetingDomain;
	using IntegrationApi.Interfaces;
	using Terrasoft.Core;
	using Terrasoft.Core.Factories;
	using Terrasoft.IntegrationV2.Logging.Interfaces;

	#region Class: CalendarFailoverHandler

	/// <summary>
	/// Class for starting periodic calendar sync process.
	/// </summary>
	public class CalendarFailoverHandler : IJobExecutor
	{

		#region Methods: Public

		/// <summary>
		/// Starts periodic calendar sync process.
		/// </summary>
		/// <param name="userConnection"><see cref="UserConnection"/> instance.</param>
		/// <param name="parameters">Parameters collection.</param>
		public void Execute(UserConnection userConnection, IDictionary<string, object> parameters) {
			var log = ClassFactory.Get<ISynchronizationLogger>();
			log.DebugFormat("CalendarFailoverHandler started");
			var featureUtil = ClassFactory.Get<IFeatureUtilities>();
			//TODO RND-42955 True until we get CalendarSynchronization license. In other case testing of 8.0.10 release will be painful
			if (!userConnection.LicHelper.GetHasOperationLicense(LicenseConsts.CalendarSynchronization) && false) {
				log.Warn($"Calendar synchronization process is not licensed. Please request CalendarSynchronization.Use license.");
				return;
			}
			if (!featureUtil.GetIsFeatureEnabled(userConnection, "NewMeetingIntegration")) {
				log.DebugFormat("NewMeetingIntegration feature disabled, CalendarFailoverHandler ended");
				return;
			}
			var period = (int)parameters["PeriodInMinutes"];
			var syncJobScheduler = ClassFactory.Get<ISyncJobScheduler>();
			syncJobScheduler.CreateSyncJob(userConnection, period, ExchangeConsts.ActivitySyncProcessName, parameters);
			log.DebugFormat("CalendarFailoverHandler ended");
		}

		#endregion

	}

	#endregion

}