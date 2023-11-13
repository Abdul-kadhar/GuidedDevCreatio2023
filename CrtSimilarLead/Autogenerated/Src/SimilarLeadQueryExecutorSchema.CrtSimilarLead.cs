﻿namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: SimilarLeadQueryExecutorSchema

	/// <exclude/>
	public class SimilarLeadQueryExecutorSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public SimilarLeadQueryExecutorSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public SimilarLeadQueryExecutorSchema(SimilarLeadQueryExecutorSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("63d72343-0b04-4d4e-9944-3044a9056a30");
			Name = "SimilarLeadQueryExecutor";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("faf31c6b-1789-4aa9-8b40-1ab9fa8da6fa");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,197,89,109,111,219,56,18,254,236,5,246,63,48,185,195,66,198,229,180,123,123,119,192,34,173,19,36,177,83,24,151,52,123,113,218,126,40,138,130,145,232,88,87,89,114,72,42,181,81,228,191,223,12,95,36,146,162,146,20,123,192,125,105,35,114,56,239,243,204,144,174,232,154,137,13,205,24,185,97,156,83,81,47,101,122,86,87,203,226,174,225,84,22,117,245,227,15,223,126,252,97,212,136,162,186,35,139,157,144,108,253,42,248,6,250,178,100,25,18,139,244,13,171,24,47,178,8,205,122,83,87,172,146,151,117,206,202,116,202,68,113,87,245,168,46,138,234,190,91,236,52,58,217,108,206,25,149,13,103,34,182,13,204,215,117,21,223,113,76,1,169,121,179,41,139,76,125,197,201,57,27,90,79,167,167,131,91,179,74,22,178,24,82,14,8,206,105,38,107,174,41,128,230,79,156,221,129,10,228,172,164,66,28,146,69,177,46,74,202,47,24,205,255,221,48,190,155,109,89,214,0,189,162,253,56,101,75,218,148,242,180,168,114,224,156,200,221,134,213,203,100,174,100,238,60,250,241,1,121,11,241,36,19,178,63,196,114,127,252,9,120,110,154,91,112,3,201,80,252,160,116,114,72,98,66,224,248,55,165,88,107,197,121,193,202,28,204,248,157,23,15,84,50,189,185,209,31,132,3,219,186,42,119,196,115,148,254,99,183,200,86,108,77,201,103,230,124,189,138,158,126,39,24,135,96,86,58,207,200,231,198,251,142,159,153,79,77,180,153,184,110,74,118,73,43,122,199,56,249,156,199,150,95,25,155,88,149,107,179,124,27,65,150,144,188,193,40,42,75,107,9,146,89,110,108,213,238,28,114,100,18,40,239,235,126,128,28,70,163,1,101,163,186,142,201,55,117,40,240,2,196,61,226,150,145,231,93,160,241,181,241,34,97,248,67,21,203,57,216,75,171,140,157,238,48,165,18,55,161,246,199,134,113,84,57,144,48,228,224,209,232,241,105,47,131,95,55,140,99,130,244,125,108,63,195,84,8,62,39,71,145,228,240,25,60,145,137,222,7,178,10,50,211,205,179,185,7,39,93,118,69,86,95,249,10,196,79,70,23,39,71,198,213,177,205,227,99,146,196,119,38,26,90,52,236,236,48,158,175,163,66,143,146,241,56,52,235,180,41,191,196,104,223,255,74,62,223,14,236,133,6,62,193,227,137,45,107,236,144,20,109,240,224,110,204,232,97,105,142,233,67,233,120,201,228,170,14,144,205,117,149,155,45,170,226,207,139,82,130,34,231,0,213,88,40,243,92,47,36,3,132,93,227,36,75,181,32,12,24,220,214,117,73,86,84,128,220,53,229,59,160,107,214,149,97,62,33,128,67,108,108,157,101,14,166,87,203,27,104,12,175,7,36,129,177,233,121,193,133,188,226,166,157,36,75,195,238,200,128,201,168,119,116,182,221,64,195,21,168,94,201,150,210,249,156,24,125,211,11,111,93,195,194,136,51,232,212,213,128,254,154,100,116,28,176,76,187,63,209,14,50,153,244,189,235,147,164,122,71,243,54,92,71,63,253,20,242,117,169,210,223,41,199,17,132,73,170,151,83,221,46,161,95,42,92,123,33,151,246,208,188,61,114,248,127,49,199,85,68,251,254,49,172,230,135,186,200,201,108,43,33,195,63,20,114,181,96,148,103,43,29,9,241,221,105,249,60,189,168,27,158,49,195,223,182,169,7,202,193,12,154,183,9,220,171,15,255,152,54,197,91,75,207,107,62,163,217,170,159,181,197,146,216,197,189,137,35,198,10,239,42,228,36,207,13,165,145,128,221,200,250,172,109,77,63,255,76,110,174,166,87,135,228,250,237,244,175,255,248,219,223,127,251,205,56,129,100,180,34,89,93,73,90,84,100,13,45,132,136,13,203,138,37,52,254,2,90,13,183,100,203,90,91,11,180,24,36,146,252,101,236,6,228,77,3,1,113,28,192,235,245,247,135,131,188,4,32,94,234,252,150,105,156,159,113,22,234,157,222,240,29,148,144,96,73,199,241,56,189,46,238,86,78,138,138,16,104,198,199,88,119,144,170,64,253,158,150,13,75,111,234,133,228,56,203,194,192,90,55,146,88,29,231,185,17,102,16,68,175,185,209,177,94,68,35,156,129,137,221,55,76,72,128,105,182,129,10,143,110,38,202,241,70,138,227,27,193,164,4,85,4,120,38,62,207,96,31,241,103,51,145,236,187,99,16,114,249,254,17,11,149,12,103,172,144,171,74,163,137,199,60,61,131,241,86,50,205,49,24,44,157,147,157,37,58,148,83,42,81,47,107,108,186,96,152,82,160,203,46,217,98,49,109,83,52,236,180,206,119,169,173,66,93,34,233,135,21,227,204,41,59,3,252,90,27,31,62,237,17,205,220,57,83,177,175,100,26,211,200,150,168,94,50,119,23,35,161,91,51,232,51,114,101,246,245,176,84,26,111,237,62,126,153,157,71,171,223,180,16,224,5,208,208,183,81,57,98,111,235,8,78,231,226,109,83,150,87,252,195,170,144,108,129,215,100,123,6,161,217,143,139,58,5,40,3,46,133,202,71,94,240,95,11,209,46,219,177,149,123,83,95,128,42,137,19,183,172,37,18,55,245,57,147,217,202,27,167,59,215,249,174,54,49,116,68,180,18,166,133,202,13,40,234,4,108,88,35,33,254,127,64,236,151,141,65,39,190,151,114,198,180,160,174,35,86,34,79,11,174,10,153,247,52,71,112,228,69,93,127,105,54,24,142,14,153,109,157,23,230,85,161,195,228,118,235,207,251,223,112,247,177,237,112,22,174,53,123,172,144,84,249,9,129,116,122,154,152,2,111,101,24,54,21,132,209,116,72,245,111,204,165,109,143,217,218,217,106,180,77,21,96,129,67,48,133,49,88,175,133,66,174,206,109,74,131,185,97,163,168,47,106,10,51,121,210,15,229,71,55,66,159,108,34,169,81,8,120,0,204,160,119,114,135,147,21,246,114,94,135,68,31,73,103,235,141,220,249,14,179,174,0,75,226,240,105,76,242,122,128,181,95,251,213,84,146,87,136,186,246,205,142,122,221,25,72,89,67,98,178,41,234,83,53,201,144,71,67,105,42,217,7,95,53,43,153,20,212,1,141,118,239,86,1,236,195,57,35,75,72,15,255,134,181,96,252,161,200,216,251,95,1,82,165,183,147,102,194,187,16,205,170,102,205,56,189,45,217,235,174,154,140,210,7,198,225,71,71,48,101,101,101,147,179,119,85,1,238,84,233,216,42,158,196,29,206,245,255,246,5,224,133,114,58,223,218,44,239,86,60,215,99,69,98,226,147,227,206,213,79,48,78,198,196,241,155,136,160,147,198,84,150,95,179,172,230,185,47,204,128,40,87,91,136,11,250,47,124,129,195,137,73,252,139,237,18,140,238,120,28,97,220,177,153,43,182,129,32,11,115,29,115,180,7,27,186,89,250,136,156,63,69,89,223,227,32,53,13,248,123,242,130,67,136,43,38,48,105,164,20,246,180,79,91,128,233,243,87,131,230,48,7,13,41,22,37,67,75,241,172,106,151,131,113,106,145,71,87,203,1,121,78,148,51,110,61,250,136,240,216,122,169,81,73,219,198,85,147,13,223,157,17,172,222,185,71,192,236,32,227,173,86,253,6,221,247,88,36,197,166,110,74,135,78,10,83,205,120,196,203,164,121,110,16,166,159,38,254,53,117,207,179,189,205,215,196,225,100,221,229,118,158,190,162,170,245,247,58,79,159,206,245,189,33,202,253,205,16,204,104,185,174,1,46,228,10,238,28,8,186,10,209,168,252,31,224,25,58,231,136,220,224,85,195,5,40,140,229,155,178,190,165,165,190,48,198,134,103,201,119,174,227,77,188,193,233,79,78,225,222,152,239,214,154,5,171,110,58,48,190,233,180,213,77,77,235,156,248,119,184,0,69,176,107,68,18,55,245,117,178,162,93,109,250,232,217,41,244,50,77,144,75,48,255,227,115,170,48,63,96,204,42,100,144,39,251,158,130,94,239,48,169,184,63,38,48,100,218,58,242,40,58,157,60,155,159,234,64,182,215,184,237,195,87,188,151,139,125,216,13,66,51,4,241,168,183,127,95,116,235,175,187,243,233,85,72,135,110,20,178,75,221,64,163,24,41,127,183,3,160,59,176,111,113,72,175,165,34,208,47,122,173,69,96,4,204,207,9,120,133,109,212,245,153,109,91,199,201,21,175,191,58,196,193,253,82,221,175,231,194,173,129,147,7,90,148,24,187,196,50,49,94,120,73,176,103,11,47,220,251,222,147,195,112,97,122,249,10,64,25,171,67,204,183,65,77,67,52,122,190,210,189,2,245,64,170,157,33,220,180,127,124,230,69,148,184,183,103,245,238,48,19,247,253,151,14,243,112,4,123,7,17,55,56,80,236,61,42,101,117,83,33,226,92,82,185,74,47,139,202,197,108,68,114,216,197,39,134,127,254,242,75,112,169,254,131,191,133,244,110,255,226,222,52,155,158,97,73,39,206,28,0,98,236,242,39,101,233,190,229,9,11,35,173,35,186,107,151,185,150,152,91,192,56,120,252,218,99,14,237,108,11,1,18,167,80,117,114,101,232,83,252,187,75,4,43,95,159,176,60,125,36,16,95,11,85,57,134,193,21,207,25,159,22,220,188,50,180,156,50,42,24,241,55,211,19,145,49,245,59,229,161,173,96,87,61,204,61,227,196,172,123,194,28,31,107,17,167,59,56,221,194,233,104,116,203,25,253,242,234,9,97,83,246,135,164,225,241,239,17,247,182,174,152,21,148,235,27,200,97,236,176,247,172,168,52,58,119,158,32,149,134,234,17,71,175,226,179,108,251,62,134,55,5,253,230,183,134,30,90,8,243,54,60,187,111,104,105,230,39,61,244,121,153,126,67,191,160,137,144,238,227,244,140,66,133,214,183,255,1,157,241,23,14,163,196,208,11,176,163,220,65,87,131,237,27,80,103,193,117,253,245,204,84,91,71,102,23,189,251,37,80,199,144,65,33,170,194,198,254,156,106,30,34,157,55,207,121,181,172,205,232,132,127,234,150,161,192,111,211,59,109,19,178,191,131,147,190,142,147,167,97,199,247,88,163,245,2,50,168,100,206,65,229,111,17,249,241,198,31,178,83,103,172,69,5,99,186,77,244,115,236,75,126,253,236,126,110,82,191,39,123,191,45,199,126,179,116,30,134,193,140,112,45,2,178,16,26,23,62,205,195,47,62,247,116,49,215,158,26,14,133,79,157,170,246,110,179,201,129,196,66,188,219,228,16,119,45,120,242,76,228,163,145,206,26,142,191,214,152,86,218,246,36,197,61,23,216,137,0,25,219,103,237,104,119,82,0,233,169,50,118,103,86,221,235,110,106,189,239,191,141,59,239,242,237,3,249,18,146,162,189,185,133,58,168,226,246,57,218,46,74,24,156,235,11,126,78,160,149,20,220,107,132,57,231,13,6,253,185,218,67,136,185,176,3,82,56,195,161,223,158,78,174,96,154,61,32,94,255,107,199,222,136,59,174,105,117,199,60,69,122,23,207,110,218,156,169,38,26,29,23,24,142,5,161,0,255,85,203,227,147,198,202,33,246,86,30,47,72,189,234,47,62,254,23,67,39,62,1,41,37,0,0 };
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("63d72343-0b04-4d4e-9944-3044a9056a30"));
		}

		#endregion

	}

	#endregion

}
