
var baseUrl = 'https://rest.ehrscape.com/rest/v1';
var queryUrl = baseUrl + '/query';

var username = "ois.seminar";
var password = "ois4fri";


var urlMale = 'http://quandl.com/api/v1/multisets.csv?trim_start=2009-12-31&trim_end=2009-12-31&auth_token=jmjzxxsnKYk9ypHHSz4R&columns=WHO.908_AFG.1,WHO.908_ALB.1,WHO.908_DZA.1,WHO.908_AGO.1,WHO.908_ATG.1,WHO.908_ARG.1,WHO.908_ARM.1,WHO.908_AUS.1,WHO.908_AUT.1,WHO.908_AZE.1,WHO.908_BHR.1,WHO.908_BGD.1,WHO.908_BRB.1,WHO.908_BLR.1,WHO.908_BEL.1,WHO.908_BLZ.1,WHO.908_BEN.1,WHO.908_BTN.1,WHO.908_BOL.1,WHO.908_BIH.1,WHO.908_BWA.1,WHO.908_BRA.1,WHO.908_BRN.1,WHO.908_BGR.1,WHO.908_BFA.1,WHO.908_BDI.1,WHO.908_KHM.1,WHO.908_CMR.1,WHO.908_CAN.1,WHO.908_CPV.1,WHO.908_CAF.1,WHO.908_TCD.1,WHO.908_CHL.1,WHO.908_CHN.1,WHO.908_COL.1,WHO.908_COM.1,WHO.908_COD.1,WHO.908_COG.1,WHO.908_CRI.1,WHO.908_HRV.1,WHO.908_CUB.1,WHO.908_CYP.1,WHO.908_CZE.1,WHO.908_DNK.1,WHO.908_DJI.1,WHO.908_DMA.1,WHO.908_DOM.1,WHO.908_ECU.1,WHO.908_EGY.1,WHO.908_SLV.1,WHO.908_GNQ.1,WHO.908_ERI.1,WHO.908_EST.1,WHO.908_ETH.1,WHO.908_FJI.1,WHO.908_FIN.1,WHO.908_FRA.1,WHO.908_GAB.1,WHO.908_GMB.1,WHO.908_GEO.1,WHO.908_DEU.1,WHO.908_GHA.1,WHO.908_GRC.1,WHO.908_GRD.1,WHO.908_GTM.1,WHO.908_GIN.1,WHO.908_GNB.1,WHO.908_GUY.1,WHO.908_HTI.1,WHO.908_HND.1,WHO.908_HUN.1,WHO.908_ISL.1,WHO.908_IND.1,WHO.908_IDN.1,WHO.908_IRN.1,WHO.908_IRQ.1,WHO.908_IRL.1,WHO.908_ISR.1,WHO.908_ITA.1,WHO.908_CIV.1,WHO.908_JAM.1,WHO.908_JPN.1,WHO.908_JOR.1,WHO.908_KAZ.1,WHO.908_KEN.1,WHO.908_KIR.1,WHO.908_KWT.1,WHO.908_KGZ.1,WHO.908_LAO.1,WHO.908_LVA.1,WHO.908_LBN.1,WHO.908_LSO.1,WHO.908_LBR.1,WHO.908_LBY.1,WHO.908_LTU.1,WHO.908_LUX.1,WHO.908_MKD.1,WHO.908_MDG.1,WHO.908_MWI.1,WHO.908_MYS.1,WHO.908_MDV.1,WHO.908_MLI.1,WHO.908_MLT.1,WHO.908_MRT.1,WHO.908_MUS.1,WHO.908_MEX.1,WHO.908_MDA.1,WHO.908_MNG.1,WHO.908_MNE.1,WHO.908_MAR.1,WHO.908_MOZ.1,WHO.908_MMR.1,WHO.908_NAM.1,WHO.908_NPL.1,WHO.908_NLD.1,WHO.908_NZL.1,WHO.908_NIC.1,WHO.908_NER.1,WHO.908_NGA.1,WHO.908_PRK.1,WHO.908_NOR.1,WHO.908_OMN.1,WHO.908_PAK.1,WHO.908_PAN.1,WHO.908_PNG.1,WHO.908_PRY.1,WHO.908_PER.1,WHO.908_PHL.1,WHO.908_POL.1,WHO.908_PRT.1,WHO.908_QAT.1,WHO.908_ROU.1,WHO.908_RUS.1,WHO.908_RWA.1,WHO.908_KNA.1,WHO.908_LCA.1,WHO.908_VCT.1,WHO.908_WSM.1,WHO.908_STP.1,WHO.908_SAU.1,WHO.908_SEN.1,WHO.908_SRB.1,WHO.908_SYC.1,WHO.908_SLE.1,WHO.908_SGP.1,WHO.908_SVK.1,WHO.908_SVN.1,WHO.908_SLB.1,WHO.908_SOM.1,WHO.908_ZAF.1,WHO.908_KOR.1,WHO.908_ESP.1,WHO.908_LKA.1,WHO.908_SDN.1,WHO.908_SUR.1,WHO.908_SWZ.1,WHO.908_SWE.1,WHO.908_CHE.1,WHO.908_SYR.1,WHO.908_TJK.1,WHO.908_TZA.1,WHO.908_THA.1,WHO.908_BHS.1,WHO.908_TLS.1,WHO.908_TGO.1,WHO.908_TON.1,WHO.908_TTO.1,WHO.908_TUN.1,WHO.908_TUR.1,WHO.908_TKM.1,WHO.908_ARE.1,WHO.908_UGA.1,WHO.908_GBR.1,WHO.908_UKR.1,WHO.908_URY.1,WHO.908_USA.1,WHO.908_UZB.1,WHO.908_VUT.1,WHO.908_VEN.1,WHO.908_VNM.1,WHO.908_YEM.1,WHO.908_ZMB.1'

function getSessionId() {
    var response = $.ajax({
        type: "POST",
        url: baseUrl + "/session?username=" + encodeURIComponent(username) +
                "&password=" + encodeURIComponent(password),
        async: false
    });
    return response.responseJSON.sessionId;
}


function BmiIzracun() {
	var BmiFCsv = $.csv.toObjects(BmiFemale.csv);
	var BmiMCsv = $.csv.toObjects("./BmiMale.csv");
	console.log(BmiFCsv);
	
	
}

function kreirajEHRzaBolnika() {
	sessionId = getSessionId();

	
	console.log('hello');
	
//	var BmiFCsv = $.csv.toObjects();
	var BmiMCsv = $.csv.toObjects('WHO.908_AFG - Value,WHO.908_ALB - Value,WHO.908_DZA - Value,WHO.908_AGO - Value,WHO.908_ATG - Value,WHO.908_ARG - Value,WHO.908_ARM - Value,WHO.908_AUS - Value,WHO.908_AUT - Value,WHO.908_AZE - Value,WHO.908_BHR - Value,WHO.908_BGD - Value,WHO.908_BRB - Value,WHO.908_BLR - Value,WHO.908_BEL - Value,WHO.908_BLZ - Value,WHO.908_BEN - Value,WHO.908_BTN - Value,WHO.908_BOL - Value,WHO.908_BIH - Value,WHO.908_BWA - Value,WHO.908_BRA - Value,WHO.908_BRN - Value,WHO.908_BGR - Value,WHO.908_BFA - Value,WHO.908_BDI - Value,WHO.908_KHM - Value,WHO.908_CMR - Value,WHO.908_CAN - Value,WHO.908_CPV - Value,WHO.908_CAF - Value,WHO.908_TCD - Value,WHO.908_CHL - Value,WHO.908_CHN - Value,WHO.908_COL - Value,WHO.908_COM - Value,WHO.908_COD - Value,WHO.908_COG - Value,WHO.908_CRI - Value,WHO.908_HRV - Value,WHO.908_CUB - Value,WHO.908_CYP - Value,WHO.908_CZE - Value,WHO.908_DNK - Value,WHO.908_DJI - Value,WHO.908_DMA - Value,WHO.908_DOM - Value,WHO.908_ECU - Value,WHO.908_EGY - Value,WHO.908_SLV - Value,WHO.908_GNQ - Value,WHO.908_ERI - Value,WHO.908_EST - Value,WHO.908_ETH - Value,WHO.908_FJI - Value,WHO.908_FIN - Value,WHO.908_FRA - Value,WHO.908_GAB - Value,WHO.908_GMB - Value,WHO.908_GEO - Value,WHO.908_DEU - Value,WHO.908_GHA - Value,WHO.908_GRC - Value,WHO.908_GRD - Value,WHO.908_GTM - Value,WHO.908_GIN - Value,WHO.908_GNB - Value,WHO.908_GUY - Value,WHO.908_HTI - Value,WHO.908_HND - Value,WHO.908_HUN - Value,WHO.908_ISL - Value,WHO.908_IND - Value,WHO.908_IDN - Value,WHO.908_IRN - Value,WHO.908_IRQ - Value,WHO.908_IRL - Value,WHO.908_ISR - Value,WHO.908_ITA - Value,WHO.908_CIV - Value,WHO.908_JAM - Value,WHO.908_JPN - Value,WHO.908_JOR - Value,WHO.908_KAZ - Value,WHO.908_KEN - Value,WHO.908_KIR - Value,WHO.908_KWT - Value,WHO.908_KGZ - Value,WHO.908_LAO - Value,WHO.908_LVA - Value,WHO.908_LBN - Value,WHO.908_LSO - Value,WHO.908_LBR - Value,WHO.908_LBY - Value,WHO.908_LTU - Value,WHO.908_LUX - Value,WHO.908_MKD - Value,WHO.908_MDG - Value,WHO.908_MWI - Value,WHO.908_MYS - Value,WHO.908_MDV - Value,WHO.908_MLI - Value,WHO.908_MLT - Value,WHO.908_MRT - Value,WHO.908_MUS - Value,WHO.908_MEX - Value,WHO.908_MDA - Value,WHO.908_MNG - Value,WHO.908_MNE - Value,WHO.908_MAR - Value,WHO.908_MOZ - Value,WHO.908_MMR - Value,WHO.908_NAM - Value,WHO.908_NPL - Value,WHO.908_NLD - Value,WHO.908_NZL - Value,WHO.908_NIC - Value,WHO.908_NER - Value,WHO.908_NGA - Value,WHO.908_PRK - Value,WHO.908_NOR - Value,WHO.908_OMN - Value,WHO.908_PAK - Value,WHO.908_PAN - Value,WHO.908_PNG - Value,WHO.908_PRY - Value,WHO.908_PER - Value,WHO.908_PHL - Value,WHO.908_POL - Value,WHO.908_PRT - Value,WHO.908_QAT - Value,WHO.908_ROU - Value,WHO.908_RUS - Value,WHO.908_RWA - Value,WHO.908_KNA - Value,WHO.908_LCA - Value,WHO.908_VCT - Value,WHO.908_WSM - Value,WHO.908_STP - Value,WHO.908_SAU - Value,WHO.908_SEN - Value,WHO.908_SRB - Value,WHO.908_SYC - Value,WHO.908_SLE - Value,WHO.908_SGP - Value,WHO.908_SVK - Value,WHO.908_SVN - Value,WHO.908_SLB - Value,WHO.908_SOM - Value,WHO.908_ZAF - Value,WHO.908_KOR - Value,WHO.908_ESP - Value,WHO.908_LKA - Value,WHO.908_SDN - Value,WHO.908_SUR - Value,WHO.908_SWZ - Value,WHO.908_SWE - Value,WHO.908_CHE - Value,WHO.908_SYR - Value,WHO.908_TJK - Value,WHO.908_TZA - Value,WHO.908_THA - Value,WHO.908_BHS - Value,WHO.908_TLS - Value,WHO.908_TGO - Value,WHO.908_TON - Value,WHO.908_TTO - Value,WHO.908_TUN - Value,WHO.908_TUR - Value,WHO.908_TKM - Value,WHO.908_ARE - Value,WHO.908_UGA - Value,WHO.908_GBR - Value,WHO.908_UKR - Value,WHO.908_URY - Value,WHO.908_USA - Value,WHO.908_UZB - Value,WHO.908_VUT - Value,WHO.908_VEN - Value,WHO.908_VNM - Value,WHO.908_YEM - Value,WHO.908_ZMB - Value,WHO.908_ZWE - Value',
20.7,26.7,24.8,22.4,26.1,27.6,25.5,27.7,26.5,25.8,28.0,20.5,26.7,26.4,26.9,27.2,22.5,22.9,24.6,26.9,22.3,25.9,24.2,26.8,21.3,21.7,21.4,23.8,27.5,23.7,21.1,21.6,27.2,23.0,25.1,22.2,20.0,22.0,26.6,26.9,25.4,27.5,28.1,26.2,23.5,24.7,25.6,25.7,26.8,26.5,23.8,20.9,26.4,20.4,26.7,26.8,25.9,24.2,21.8,25.7,27.2,23.0,26.5,25.5,25.4,22.6,21.7,24.0,24.0,25.2,27.5,27.3,21.0,22.0,25.4,26.8,27.7,27.3,26.6,22.7,24.7,23.5,27.6,26.4,21.7,29.4,29.3,24.9,21.2,26.6,27.5,22.0,22.0,26.6,27.0,27.5,26.7,21.5,22.2,24.8,23.4,21.9,27.8,22.7,25.2,27.5,24.4,25.1,26.9,24.9,22.1,21.7,22.8,20.8,26.0,27.9,25.9,21.3,23.2,22.2,27.1,26.4,22.4,26.4,25.1,25.7,24.9,23.0,26.9,26.8,28.3,25.8,26.2,22.8,28.5,25.0,25.8,30.5,23.7,28.0,22.0,27.4,25.7,22.7,23.9,27.2,27.7,27.3,22.2,27.1,24.1,27.6,22.1,22.6,25.8,23.3,26.5,26.3,27.0,23.9,22.7,23.1,27.5,20.8,22.0,31.1,26.7,25.3,26.8,25.3,28.2,22.6,27.5,25.6,26.5,28.5,25.4,26.9,27.6,21.1,24.5,20.8,22.2
);
	console.log(BmiMCsv);



	var ime = $("#kreirajIme").val();
	var priimek = $("#kreirajPriimek").val();
	var spol = $("kreirajSpol").val();
	
	if (!ime || !priimek || ime.trim().length == 0 || priimek.trim().length == 0 ) {
		$("#kreirajSporocilo").html("<span class='obvestilo label label-warning fade-in'>Prosim vnesite zahtevane podatke!</span>");
	} else {
		$.ajaxSetup({
		    headers: {"Ehr-Session": sessionId}
		});
		$.ajax({
		    url: baseUrl + "/ehr",
		    type: 'POST',
		    success: function (data) {
		        var ehrId = data.ehrId;
		        if(document.getElementById('MALE').checked) {
						spol = 'MALE';
				}
				else{
						spol = 'FEMALE';
				}
		        var partyData = {
		            firstNames: ime,
		            lastNames: priimek,
		            gender: spol,
		            partyAdditionalInfo: [{key: "ehrId", value: ehrId}]
		        };
		        //console.log(spol);
		        $.ajax({
		            url: baseUrl + "/demographics/party",
		            type: 'POST',
		            contentType: 'application/json',
		            data: JSON.stringify(partyData),
		            success: function (party) {
		                if (party.action == 'CREATE') {
		                    $("#kreirajSporocilo").html("<span class='obvestilo label label-success fade-in'>Uspešno kreiran EHR '" + ehrId + "'.</span>");
		                    console.log("Uspešno kreiran EHR '" + ehrId + "'.");
		                    $("#preberiEHRid").val(ehrId);
		                }
		            },
		            error: function(err) {
		            	$("#kreirajSporocilo").html("<span class='obvestilo label label-danger fade-in'>Napaka '" + JSON.parse(err.responseText).userMessage + "'!");
		            	console.log(JSON.parse(err.responseText).userMessage);
		            }
		        });
		    }
		});
	}
}


function preberiEHRodBolnika() {
	sessionId = getSessionId();

	var ehrId = $("#preberiEHRid").val();

	if (!ehrId || ehrId.trim().length == 0) {
		$("#preberiSporocilo").html("<span class='obvestilo label label-warning fade-in'>Prosim vnesite zahtevan podatek!");
	} else {
		$.ajax({
			url: baseUrl + "/demographics/ehr/" + ehrId + "/party",
			type: 'GET',
			headers: {"Ehr-Session": sessionId},
	    	success: function (data) {
				var party = data.party;
				$("#preberiSporocilo").html("<span class='obvestilo label label-success fade-in'>Bolnik '" + party.firstNames + " " + party.lastNames + "'.</span>");
				console.log("Bolnik '" + party.firstNames + " " + party.lastNames +".");
			},
			error: function(err) {
				$("#preberiSporocilo").html("<span class='obvestilo label label-danger fade-in'>Napaka '" + JSON.parse(err.responseText).userMessage + "'!");
				console.log(JSON.parse(err.responseText).userMessage);
			}
		});
	}	
}


function dodajMeritveVitalnihZnakov() {
	sessionId = getSessionId();

	var ehrId = $("#dodajVitalnoEHR").val();
	var datumInUra = $("#dodajVitalnoDatumInUra").val();
	var telesnaVisina = $("#dodajVitalnoTelesnaVisina").val();
	var telesnaTeza = $("#dodajVitalnoTelesnaTeza").val();


	if (!ehrId || ehrId.trim().length == 0) {
		$("#dodajMeritveVitalnihZnakovSporocilo").html("<span class='obvestilo label label-warning fade-in'>Prosim vnesite zahtevane podatke!</span>");
	} else {
		$.ajaxSetup({
		    headers: {"Ehr-Session": sessionId}
		});
		var podatki = {
			// Preview Structure: https://rest.ehrscape.com/rest/v1/template/Vital%20Signs/example
		    "ctx/language": "en",
		    "ctx/territory": "SI",
		    "ctx/time": datumInUra,
		    "vital_signs/height_length/any_event/body_height_length": telesnaVisina,
		    "vital_signs/body_weight/any_event/body_weight": telesnaTeza,

		};
		var parametriZahteve = {
		    "ehrId": ehrId,
		    templateId: 'Vital Signs',
		    format: 'FLAT',
		};
		$.ajax({
		    url: baseUrl + "/composition?" + $.param(parametriZahteve),
		    type: 'POST',
		    contentType: 'application/json',
		    data: JSON.stringify(podatki),
		    success: function (res) {
		    	console.log(res.meta.href);
		        $("#dodajMeritveVitalnihZnakovSporocilo").html("<span class='obvestilo label label-success fade-in'>" + res.meta.href + ".</span>");
		    },
		    error: function(err) {
		    	$("#dodajMeritveVitalnihZnakovSporocilo").html("<span class='obvestilo label label-danger fade-in'>Napaka '" + JSON.parse(err.responseText).userMessage + "'!");
				console.log(JSON.parse(err.responseText).userMessage);
		    }
		});
	}
}


function preberiMeritveVitalnihZnakov() {
	sessionId = getSessionId();	

	var ehrId = $("#meritveVitalnihZnakovEHRid").val();
	var tip = $("#preberiTipZaVitalneZnake").val();

	if (!ehrId || ehrId.trim().length == 0 || !tip || tip.trim().length == 0) {
		$("#preberiMeritveVitalnihZnakovSporocilo").html("<span class='obvestilo label label-warning fade-in'>Prosim vnesite zahtevan podatek!");
	} else {
		$.ajax({
			url: baseUrl + "/demographics/ehr/" + ehrId + "/party",
	    	type: 'GET',
	    	headers: {"Ehr-Session": sessionId},
	    	success: function (data) {
				var party = data.party;
				$("#rezultatMeritveVitalnihZnakov").html("<br/><span>Pridobivanje podatkov za <b>'" + tip + "'</b> bolnika <b>'" + party.firstNames + " " + party.lastNames + "'</b>.</span><br/><br/>");
				if (tip == "telesna temperatura") {
					$.ajax({
					    url: baseUrl + "/view/" + ehrId + "/" + "body_temperature",
					    type: 'GET',
					    headers: {"Ehr-Session": sessionId},
					    success: function (res) {
					    	if (res.length > 0) {
						    	var results = "<table class='table table-striped table-hover'><tr><th>Datum in ura</th><th class='text-right'>Telesna temperatura</th></tr>";
						        for (var i in res) {
						            results += "<tr><td>" + res[i].time + "</td><td class='text-right'>" + res[i].temperature + " " 	+ res[i].unit + "</td>";
						        }
						        results += "</table>";
						        $("#rezultatMeritveVitalnihZnakov").append(results);
					    	} else {
					    		$("#preberiMeritveVitalnihZnakovSporocilo").html("<span class='obvestilo label label-warning fade-in'>Ni podatkov!</span>");
					    	}
					    },
					    error: function() {
					    	$("#preberiMeritveVitalnihZnakovSporocilo").html("<span class='obvestilo label label-danger fade-in'>Napaka '" + JSON.parse(err.responseText).userMessage + "'!");
							console.log(JSON.parse(err.responseText).userMessage);
					    }
					});
				} else if (tip == "telesna teža") {
					$.ajax({
					    url: baseUrl + "/view/" + ehrId + "/" + "weight",
					    type: 'GET',
					    headers: {"Ehr-Session": sessionId},
					    success: function (res) {
					    	if (res.length > 0) {
						    	var results = "<table class='table table-striped table-hover'><tr><th>Datum in ura</th><th class='text-right'>Telesna teža</th></tr>";
						        for (var i in res) {
						            results += "<tr><td>" + res[i].time + "</td><td class='text-right'>" + res[i].weight + " " 	+ res[i].unit + "</td>";
						        }
						        results += "</table>";
						        $("#rezultatMeritveVitalnihZnakov").append(results);
					    	} else {
					    		$("#preberiMeritveVitalnihZnakovSporocilo").html("<span class='obvestilo label label-warning fade-in'>Ni podatkov!</span>");
					    	}
					    },
					    error: function() {
					    	$("#preberiMeritveVitalnihZnakovSporocilo").html("<span class='obvestilo label label-danger fade-in'>Napaka '" + JSON.parse(err.responseText).userMessage + "'!");
							console.log(JSON.parse(err.responseText).userMessage);
					    }
					});					
				} else if (tip == "telesna temperatura AQL") {
					var AQL = 
						"select " +
    						"t/data[at0002]/events[at0003]/time/value as cas, " +
    						"t/data[at0002]/events[at0003]/data[at0001]/items[at0004]/value/magnitude as temperatura_vrednost, " +
    						"t/data[at0002]/events[at0003]/data[at0001]/items[at0004]/value/units as temperatura_enota " +
						"from EHR e[e/ehr_id/value='" + ehrId + "'] " +
						"contains OBSERVATION t[openEHR-EHR-OBSERVATION.body_temperature.v1] " +
						"where t/data[at0002]/events[at0003]/data[at0001]/items[at0004]/value/magnitude<35 " +
						"order by t/data[at0002]/events[at0003]/time/value desc " +
						"limit 10";
					$.ajax({
					    url: baseUrl + "/query?" + $.param({"aql": AQL}),
					    type: 'GET',
					    headers: {"Ehr-Session": sessionId},
					    success: function (res) {
					    	var results = "<table class='table table-striped table-hover'><tr><th>Datum in ura</th><th class='text-right'>Telesna temperatura</th></tr>";
					    	if (res) {
					    		var rows = res.resultSet;
						        for (var i in rows) {
						            results += "<tr><td>" + rows[i].cas + "</td><td class='text-right'>" + rows[i].temperatura_vrednost + " " 	+ rows[i].temperatura_enota + "</td>";
						        }
						        results += "</table>";
						        $("#rezultatMeritveVitalnihZnakov").append(results);
					    	} else {
					    		$("#preberiMeritveVitalnihZnakovSporocilo").html("<span class='obvestilo label label-warning fade-in'>Ni podatkov!</span>");
					    	}

					    },
					    error: function() {
					    	$("#preberiMeritveVitalnihZnakovSporocilo").html("<span class='obvestilo label label-danger fade-in'>Napaka '" + JSON.parse(err.responseText).userMessage + "'!");
							console.log(JSON.parse(err.responseText).userMessage);
					    }
					});
				}
	    	},
	    	error: function(err) {
	    		$("#preberiMeritveVitalnihZnakovSporocilo").html("<span class='obvestilo label label-danger fade-in'>Napaka '" + JSON.parse(err.responseText).userMessage + "'!");
				console.log(JSON.parse(err.responseText).userMessage);
	    	}
		});
	}
}


$(document).ready(function() {
	$('#preberiObstojeciEHR').change(function() {
		$("#preberiSporocilo").html("");
		$("#preberiEHRid").val($(this).val());
	});
	$('#preberiObstojeciVitalniZnak').change(function() {
		$("#dodajMeritveVitalnihZnakovSporocilo").html("");
		var podatki = $(this).val().split("|");
		$("#dodajVitalnoEHR").val(podatki[0]);
		$("#dodajVitalnoDatumInUra").val(podatki[1]);
		$("#dodajVitalnoTelesnaVisina").val(podatki[2]);
		$("#dodajVitalnoTelesnaTeza").val(podatki[3]);
		$("#dodajVitalnoTelesnaTemperatura").val(podatki[4]);
		$("#dodajVitalnoKrvniTlakSistolicni").val(podatki[5]);
		$("#dodajVitalnoKrvniTlakDiastolicni").val(podatki[6]);
		$("#dodajVitalnoNasicenostKrviSKisikom").val(podatki[7]);
		$("#dodajVitalnoMerilec").val(podatki[8]);
	});
	$('#preberiEhrIdZaVitalneZnake').change(function() {
		$("#preberiMeritveVitalnihZnakovSporocilo").html("");
		$("#rezultatMeritveVitalnihZnakov").html("");
		$("#meritveVitalnihZnakovEHRid").val($(this).val());
	});
});