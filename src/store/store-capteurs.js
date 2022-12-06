import { api } from 'boot/axios'
import { afficherMessageErreur } from 'src/fonctions/message-erreur'
import { Loading, LocalStorage } from 'quasar'
// State : données du magasin
const state = {
  user: null,
  token: null,
  capteurs: [
      {
        "id": 1,
        "nom": "capteur-5574",
        "logo": "null",
        "code": "nd_6430",
        "salle": {
          "id": 1,
          "nom": "C595-119"
        },
        "mesures": [
          {
            "id": 177,
            "date": "2021-02-23",
            "sequence": 7606,
            "temperature": 29.66,
            "humidite": 95.67,
            "capteur_id": 1
          },
          {
            "id": 137,
            "date": "2017-12-16",
            "sequence": 5094,
            "temperature": 8.17,
            "humidite": 3.62,
            "capteur_id": 1
          },
          {
            "id": 179,
            "date": "2016-05-09",
            "sequence": 7205,
            "temperature": -6.76,
            "humidite": 52.89,
            "capteur_id": 1
          },
          {
            "id": 116,
            "date": "2004-12-28",
            "sequence": 6010,
            "temperature": 25.4,
            "humidite": 57.81,
            "capteur_id": 1
          },
          {
            "id": 106,
            "date": "1998-12-24",
            "sequence": 1562,
            "temperature": -1.82,
            "humidite": 13.17,
            "capteur_id": 1
          },
          {
            "id": 37,
            "date": "1992-08-28",
            "sequence": 4018,
            "temperature": 32.73,
            "humidite": 16.29,
            "capteur_id": 1
          },
          {
            "id": 187,
            "date": "1990-08-12",
            "sequence": 4664,
            "temperature": 14.4,
            "humidite": 53.23,
            "capteur_id": 1
          },
          {
            "id": 194,
            "date": "1990-06-24",
            "sequence": 2338,
            "temperature": -3.08,
            "humidite": 1.81,
            "capteur_id": 1
          },
          {
            "id": 149,
            "date": "1988-09-11",
            "sequence": 399,
            "temperature": 26.77,
            "humidite": 29.55,
            "capteur_id": 1
          },
          {
            "id": 200,
            "date": "1984-08-31",
            "sequence": 7497,
            "temperature": 5.91,
            "humidite": 73.88,
            "capteur_id": 1
          }
        ]
      },
      {
        "id": 2,
        "nom": "capteur-6774",
        "logo": "null",
        "code": "qe_6128",
        "salle": {
          "id": 2,
          "nom": "D866-139"
        },
        "mesures": [
          {
            "id": 90,
            "date": "2022-08-20",
            "sequence": 8761,
            "temperature": 34.61,
            "humidite": 54.64,
            "capteur_id": 2
          },
          {
            "id": 34,
            "date": "2019-10-07",
            "sequence": 4232,
            "temperature": 3.07,
            "humidite": 32.54,
            "capteur_id": 2
          },
          {
            "id": 188,
            "date": "2006-07-28",
            "sequence": 6539,
            "temperature": 10.98,
            "humidite": 43.33,
            "capteur_id": 2
          },
          {
            "id": 26,
            "date": "1989-08-30",
            "sequence": 9574,
            "temperature": 36.16,
            "humidite": 89,
            "capteur_id": 2
          },
          {
            "id": 32,
            "date": "1981-08-22",
            "sequence": 5019,
            "temperature": 39.78,
            "humidite": 31.46,
            "capteur_id": 2
          },
          {
            "id": 199,
            "date": "1978-06-27",
            "sequence": 8372,
            "temperature": 3.1,
            "humidite": 46.42,
            "capteur_id": 2
          },
          {
            "id": 13,
            "date": "1970-09-05",
            "sequence": 5456,
            "temperature": 18.03,
            "humidite": 86.39,
            "capteur_id": 2
          }
        ]
      },
      {
        "id": 3,
        "nom": "capteur-9820",
        "logo": "null",
        "code": "pv_6745",
        "salle": {
          "id": 2,
          "nom": "D866-139"
        },
        "mesures": [
          {
            "id": 4,
            "date": "2004-02-28",
            "sequence": 1607,
            "temperature": 4.04,
            "humidite": 63.49,
            "capteur_id": 3
          },
          {
            "id": 135,
            "date": "2001-12-18",
            "sequence": 2695,
            "temperature": 2.4,
            "humidite": 34.36,
            "capteur_id": 3
          },
          {
            "id": 125,
            "date": "1997-08-16",
            "sequence": 345,
            "temperature": 35.19,
            "humidite": 26.44,
            "capteur_id": 3
          },
          {
            "id": 143,
            "date": "1993-01-17",
            "sequence": 33,
            "temperature": -0.71,
            "humidite": 59.97,
            "capteur_id": 3
          },
          {
            "id": 184,
            "date": "1990-04-20",
            "sequence": 6019,
            "temperature": 22.4,
            "humidite": 90.64,
            "capteur_id": 3
          },
          {
            "id": 56,
            "date": "1986-09-02",
            "sequence": 6133,
            "temperature": 13.93,
            "humidite": 3.56,
            "capteur_id": 3
          },
          {
            "id": 197,
            "date": "1983-07-09",
            "sequence": 4456,
            "temperature": -5.33,
            "humidite": 14.72,
            "capteur_id": 3
          },
          {
            "id": 66,
            "date": "1981-08-28",
            "sequence": 8456,
            "temperature": 18.05,
            "humidite": 54.06,
            "capteur_id": 3
          }
        ]
      },
      {
        "id": 4,
        "nom": "capteur-6319",
        "logo": "null",
        "code": "aa_3602",
        "salle": {
          "id": 1,
          "nom": "C595-119"
        },
        "mesures": [
          {
            "id": 127,
            "date": "2022-09-13",
            "sequence": 5167,
            "temperature": 33.07,
            "humidite": 71.22,
            "capteur_id": 4
          },
          {
            "id": 123,
            "date": "2019-02-16",
            "sequence": 7395,
            "temperature": 1.58,
            "humidite": 14.08,
            "capteur_id": 4
          },
          {
            "id": 86,
            "date": "2013-08-28",
            "sequence": 9874,
            "temperature": -0.92,
            "humidite": 46.45,
            "capteur_id": 4
          },
          {
            "id": 174,
            "date": "2008-08-19",
            "sequence": 9203,
            "temperature": 16.32,
            "humidite": 15.13,
            "capteur_id": 4
          },
          {
            "id": 72,
            "date": "1998-06-11",
            "sequence": 5701,
            "temperature": 19.56,
            "humidite": 30.3,
            "capteur_id": 4
          },
          {
            "id": 12,
            "date": "1997-05-19",
            "sequence": 3479,
            "temperature": 16.9,
            "humidite": 64.74,
            "capteur_id": 4
          },
          {
            "id": 63,
            "date": "1994-07-03",
            "sequence": 4910,
            "temperature": 29.79,
            "humidite": 37.02,
            "capteur_id": 4
          },
          {
            "id": 169,
            "date": "1984-02-02",
            "sequence": 7300,
            "temperature": 28.3,
            "humidite": 73.2,
            "capteur_id": 4
          },
          {
            "id": 168,
            "date": "1981-04-16",
            "sequence": 5480,
            "temperature": 0.08,
            "humidite": 41.44,
            "capteur_id": 4
          },
          {
            "id": 181,
            "date": "1977-11-29",
            "sequence": 4632,
            "temperature": 8.96,
            "humidite": 72.01,
            "capteur_id": 4
          }
        ]
      },
      {
        "id": 5,
        "nom": "capteur-2455",
        "logo": "null",
        "code": "ua_9228",
        "salle": {
          "id": 2,
          "nom": "D866-139"
        },
        "mesures": [
          {
            "id": 3,
            "date": "2022-11-03",
            "sequence": 9071,
            "temperature": 38.8,
            "humidite": 68.61,
            "capteur_id": 5
          },
          {
            "id": 10,
            "date": "2015-04-14",
            "sequence": 4731,
            "temperature": 2.43,
            "humidite": 74.43,
            "capteur_id": 5
          },
          {
            "id": 11,
            "date": "2011-02-23",
            "sequence": 5846,
            "temperature": -9.26,
            "humidite": 16.45,
            "capteur_id": 5
          },
          {
            "id": 51,
            "date": "2007-11-08",
            "sequence": 5354,
            "temperature": 35.36,
            "humidite": 54.72,
            "capteur_id": 5
          },
          {
            "id": 6,
            "date": "2007-06-17",
            "sequence": 9323,
            "temperature": 16.48,
            "humidite": 73.49,
            "capteur_id": 5
          },
          {
            "id": 117,
            "date": "2000-07-28",
            "sequence": 7477,
            "temperature": 4.68,
            "humidite": 57.3,
            "capteur_id": 5
          },
          {
            "id": 91,
            "date": "1976-09-18",
            "sequence": 2756,
            "temperature": 38.82,
            "humidite": 51.1,
            "capteur_id": 5
          },
          {
            "id": 78,
            "date": "1973-05-29",
            "sequence": 1591,
            "temperature": 32.61,
            "humidite": 26.27,
            "capteur_id": 5
          }
        ]
      },
      {
        "id": 6,
        "nom": "capteur-7167",
        "logo": "null",
        "code": "go_4556",
        "salle": {
          "id": 2,
          "nom": "D866-139"
        },
        "mesures": [
          {
            "id": 47,
            "date": "2018-08-13",
            "sequence": 1298,
            "temperature": 25.39,
            "humidite": 5.9399999999999995,
            "capteur_id": 6
          },
          {
            "id": 124,
            "date": "2018-04-18",
            "sequence": 6075,
            "temperature": -0.69,
            "humidite": 55.9,
            "capteur_id": 6
          },
          {
            "id": 39,
            "date": "2011-07-19",
            "sequence": 5346,
            "temperature": 7.05,
            "humidite": 80.71,
            "capteur_id": 6
          },
          {
            "id": 148,
            "date": "2007-02-06",
            "sequence": 7360,
            "temperature": 27.9,
            "humidite": 71.39,
            "capteur_id": 6
          },
          {
            "id": 44,
            "date": "1994-08-17",
            "sequence": 7563,
            "temperature": -4.13,
            "humidite": 41.26,
            "capteur_id": 6
          },
          {
            "id": 23,
            "date": "1985-09-18",
            "sequence": 556,
            "temperature": 10.13,
            "humidite": 29.86,
            "capteur_id": 6
          },
          {
            "id": 172,
            "date": "1979-07-24",
            "sequence": 4104,
            "temperature": 24.14,
            "humidite": 1.46,
            "capteur_id": 6
          },
          {
            "id": 17,
            "date": "1978-03-01",
            "sequence": 8533,
            "temperature": 38.24,
            "humidite": 94.54,
            "capteur_id": 6
          },
          {
            "id": 97,
            "date": "1976-12-12",
            "sequence": 989,
            "temperature": 23.14,
            "humidite": 1.6800000000000002,
            "capteur_id": 6
          },
          {
            "id": 70,
            "date": "1976-02-12",
            "sequence": 8972,
            "temperature": 7.67,
            "humidite": 49.77,
            "capteur_id": 6
          }
        ]
      },
      {
        "id": 7,
        "nom": "capteur-4227",
        "logo": "null",
        "code": "og_0303",
        "salle": {
          "id": 1,
          "nom": "C595-119"
        },
        "mesures": [
          {
            "id": 146,
            "date": "2018-10-07",
            "sequence": 785,
            "temperature": -9.44,
            "humidite": 48.75,
            "capteur_id": 7
          },
          {
            "id": 133,
            "date": "2017-05-14",
            "sequence": 758,
            "temperature": 19.54,
            "humidite": 26.04,
            "capteur_id": 7
          },
          {
            "id": 180,
            "date": "2013-11-04",
            "sequence": 1666,
            "temperature": -1.58,
            "humidite": 48.05,
            "capteur_id": 7
          },
          {
            "id": 18,
            "date": "2009-04-19",
            "sequence": 9588,
            "temperature": 0.43,
            "humidite": 84.28,
            "capteur_id": 7
          },
          {
            "id": 42,
            "date": "2009-02-15",
            "sequence": 4964,
            "temperature": 16.85,
            "humidite": 86.65,
            "capteur_id": 7
          },
          {
            "id": 98,
            "date": "2008-08-09",
            "sequence": 2358,
            "temperature": 14.36,
            "humidite": 48.37,
            "capteur_id": 7
          },
          {
            "id": 53,
            "date": "2004-04-22",
            "sequence": 43,
            "temperature": 29.17,
            "humidite": 68.1,
            "capteur_id": 7
          },
          {
            "id": 109,
            "date": "1982-09-18",
            "sequence": 3305,
            "temperature": 26.59,
            "humidite": 32.57,
            "capteur_id": 7
          },
          {
            "id": 193,
            "date": "1981-12-08",
            "sequence": 3802,
            "temperature": -1.6,
            "humidite": 84.89,
            "capteur_id": 7
          }
        ]
      },
      {
        "id": 8,
        "nom": "capteur-7408",
        "logo": "null",
        "code": "jn_1214",
        "salle": {
          "id": 1,
          "nom": "C595-119"
        },
        "mesures": [
          {
            "id": 167,
            "date": "2013-12-19",
            "sequence": 4580,
            "temperature": 25.81,
            "humidite": 91.77,
            "capteur_id": 8
          },
          {
            "id": 84,
            "date": "2011-04-08",
            "sequence": 5705,
            "temperature": 33.8,
            "humidite": 65.16,
            "capteur_id": 8
          },
          {
            "id": 119,
            "date": "2010-07-13",
            "sequence": 2339,
            "temperature": -8.4,
            "humidite": 84.41,
            "capteur_id": 8
          },
          {
            "id": 192,
            "date": "2008-07-06",
            "sequence": 2153,
            "temperature": 7.29,
            "humidite": 3.22,
            "capteur_id": 8
          },
          {
            "id": 185,
            "date": "2007-09-20",
            "sequence": 9868,
            "temperature": 30.33,
            "humidite": 40.11,
            "capteur_id": 8
          },
          {
            "id": 96,
            "date": "2002-09-20",
            "sequence": 3246,
            "temperature": -6.96,
            "humidite": 39.37,
            "capteur_id": 8
          },
          {
            "id": 59,
            "date": "1997-07-25",
            "sequence": 3152,
            "temperature": 17.77,
            "humidite": 82.72,
            "capteur_id": 8
          },
          {
            "id": 158,
            "date": "1994-08-08",
            "sequence": 1021,
            "temperature": 11.6,
            "humidite": 95.83,
            "capteur_id": 8
          },
          {
            "id": 126,
            "date": "1985-11-15",
            "sequence": 3224,
            "temperature": 35.12,
            "humidite": 33.72,
            "capteur_id": 8
          },
          {
            "id": 58,
            "date": "1979-06-30",
            "sequence": 7817,
            "temperature": 39.39,
            "humidite": 71.25,
            "capteur_id": 8
          }
        ]
      },
      {
        "id": 9,
        "nom": "capteur-8893",
        "logo": "null",
        "code": "ku_2621",
        "salle": {
          "id": 1,
          "nom": "C595-119"
        },
        "mesures": [
          {
            "id": 140,
            "date": "2020-09-02",
            "sequence": 1628,
            "temperature": 7.45,
            "humidite": 47.33,
            "capteur_id": 9
          },
          {
            "id": 186,
            "date": "2020-07-29",
            "sequence": 3016,
            "temperature": 10.44,
            "humidite": 90.19,
            "capteur_id": 9
          },
          {
            "id": 52,
            "date": "2018-05-09",
            "sequence": 7211,
            "temperature": 15.79,
            "humidite": 32.78,
            "capteur_id": 9
          },
          {
            "id": 141,
            "date": "2009-12-01",
            "sequence": 529,
            "temperature": 6.75,
            "humidite": 78.44,
            "capteur_id": 9
          },
          {
            "id": 164,
            "date": "2007-12-23",
            "sequence": 2892,
            "temperature": 0.6,
            "humidite": 31.31,
            "capteur_id": 9
          },
          {
            "id": 195,
            "date": "2006-06-19",
            "sequence": 6245,
            "temperature": 6.02,
            "humidite": 61.14,
            "capteur_id": 9
          },
          {
            "id": 55,
            "date": "1994-09-28",
            "sequence": 6317,
            "temperature": 20.33,
            "humidite": 90.95,
            "capteur_id": 9
          },
          {
            "id": 151,
            "date": "1993-01-26",
            "sequence": 9400,
            "temperature": 24.02,
            "humidite": 49.2,
            "capteur_id": 9
          },
          {
            "id": 99,
            "date": "1992-05-16",
            "sequence": 9436,
            "temperature": 15.46,
            "humidite": 91.01,
            "capteur_id": 9
          },
          {
            "id": 139,
            "date": "1988-09-07",
            "sequence": 5386,
            "temperature": -9.43,
            "humidite": 95.45,
            "capteur_id": 9
          }
        ]
      },
      {
        "id": 10,
        "nom": "capteur-4553",
        "logo": "null",
        "code": "pr_3222",
        "salle": {
          "id": 1,
          "nom": "C595-119"
        },
        "mesures": [
          {
            "id": 122,
            "date": "2017-01-27",
            "sequence": 3571,
            "temperature": 29.17,
            "humidite": 48.79,
            "capteur_id": 10
          },
          {
            "id": 196,
            "date": "2011-07-04",
            "sequence": 3770,
            "temperature": 3.68,
            "humidite": 6.49,
            "capteur_id": 10
          },
          {
            "id": 25,
            "date": "2010-06-07",
            "sequence": 2193,
            "temperature": 36.46,
            "humidite": 24.45,
            "capteur_id": 10
          },
          {
            "id": 50,
            "date": "2004-09-17",
            "sequence": 1064,
            "temperature": 22.63,
            "humidite": 54.78,
            "capteur_id": 10
          },
          {
            "id": 36,
            "date": "1993-09-20",
            "sequence": 815,
            "temperature": 31.77,
            "humidite": 32.98,
            "capteur_id": 10
          },
          {
            "id": 21,
            "date": "1987-03-03",
            "sequence": 2023,
            "temperature": 20.68,
            "humidite": 73.08,
            "capteur_id": 10
          }
        ]
      },
      {
        "id": 11,
        "nom": "capteur-6404",
        "logo": "null",
        "code": "vz_7782",
        "salle": {
          "id": 1,
          "nom": "C595-119"
        },
        "mesures": [
          {
            "id": 165,
            "date": "2015-10-05",
            "sequence": 7130,
            "temperature": 5.28,
            "humidite": 23.13,
            "capteur_id": 11
          },
          {
            "id": 81,
            "date": "2013-05-10",
            "sequence": 9110,
            "temperature": -9.96,
            "humidite": 60.35,
            "capteur_id": 11
          },
          {
            "id": 16,
            "date": "2006-11-27",
            "sequence": 230,
            "temperature": 32.2,
            "humidite": 88.92,
            "capteur_id": 11
          },
          {
            "id": 103,
            "date": "2006-05-20",
            "sequence": 118,
            "temperature": -9.79,
            "humidite": 71.57,
            "capteur_id": 11
          },
          {
            "id": 138,
            "date": "1996-02-25",
            "sequence": 1376,
            "temperature": 25.99,
            "humidite": 81.99,
            "capteur_id": 11
          },
          {
            "id": 155,
            "date": "1993-12-08",
            "sequence": 8847,
            "temperature": 29.42,
            "humidite": 15.65,
            "capteur_id": 11
          },
          {
            "id": 67,
            "date": "1983-12-20",
            "sequence": 6022,
            "temperature": 5.18,
            "humidite": 96.91,
            "capteur_id": 11
          },
          {
            "id": 15,
            "date": "1976-08-10",
            "sequence": 8723,
            "temperature": 29.81,
            "humidite": 53.76,
            "capteur_id": 11
          }
        ]
      },
      {
        "id": 12,
        "nom": "capteur-8188",
        "logo": "null",
        "code": "si_4600",
        "salle": {
          "id": 2,
          "nom": "D866-139"
        },
        "mesures": [
          {
            "id": 153,
            "date": "1998-07-14",
            "sequence": 6463,
            "temperature": 23.41,
            "humidite": 42.32,
            "capteur_id": 12
          },
          {
            "id": 41,
            "date": "1994-06-26",
            "sequence": 5645,
            "temperature": 14.73,
            "humidite": 27.97,
            "capteur_id": 12
          },
          {
            "id": 43,
            "date": "1993-07-25",
            "sequence": 192,
            "temperature": 9.01,
            "humidite": 93.78,
            "capteur_id": 12
          },
          {
            "id": 111,
            "date": "1992-09-14",
            "sequence": 7304,
            "temperature": 23.16,
            "humidite": 46.22,
            "capteur_id": 12
          },
          {
            "id": 142,
            "date": "1991-06-11",
            "sequence": 7297,
            "temperature": 32.84,
            "humidite": 47.52,
            "capteur_id": 12
          },
          {
            "id": 65,
            "date": "1990-01-24",
            "sequence": 7751,
            "temperature": 4.71,
            "humidite": 0.91,
            "capteur_id": 12
          },
          {
            "id": 189,
            "date": "1987-09-12",
            "sequence": 4550,
            "temperature": -9.98,
            "humidite": 24.12,
            "capteur_id": 12
          },
          {
            "id": 35,
            "date": "1978-07-06",
            "sequence": 7458,
            "temperature": 33.65,
            "humidite": 27.33,
            "capteur_id": 12
          },
          {
            "id": 114,
            "date": "1977-09-21",
            "sequence": 6445,
            "temperature": 28.46,
            "humidite": 46.39,
            "capteur_id": 12
          },
          {
            "id": 190,
            "date": "1977-07-05",
            "sequence": 7464,
            "temperature": 30.14,
            "humidite": 65.46,
            "capteur_id": 12
          }
        ]
      },
      {
        "id": 13,
        "nom": "capteur-8994",
        "logo": "null",
        "code": "os_8918",
        "salle": {
          "id": 2,
          "nom": "D866-139"
        },
        "mesures": [
          {
            "id": 115,
            "date": "2020-10-19",
            "sequence": 3097,
            "temperature": 25.75,
            "humidite": 10.25,
            "capteur_id": 13
          },
          {
            "id": 22,
            "date": "2016-08-27",
            "sequence": 1758,
            "temperature": -1.93,
            "humidite": 77.84,
            "capteur_id": 13
          },
          {
            "id": 178,
            "date": "2003-01-08",
            "sequence": 8744,
            "temperature": 32.09,
            "humidite": 15.94,
            "capteur_id": 13
          },
          {
            "id": 173,
            "date": "2002-04-11",
            "sequence": 1356,
            "temperature": -0.62,
            "humidite": 10.28,
            "capteur_id": 13
          },
          {
            "id": 48,
            "date": "1999-01-22",
            "sequence": 6341,
            "temperature": -6.01,
            "humidite": 97.92,
            "capteur_id": 13
          },
          {
            "id": 40,
            "date": "1997-03-01",
            "sequence": 2278,
            "temperature": 6.82,
            "humidite": 43.7,
            "capteur_id": 13
          },
          {
            "id": 14,
            "date": "1995-07-25",
            "sequence": 7505,
            "temperature": 27.81,
            "humidite": 86.51,
            "capteur_id": 13
          },
          {
            "id": 89,
            "date": "1995-06-24",
            "sequence": 5242,
            "temperature": -0.20999999999999996,
            "humidite": 27.32,
            "capteur_id": 13
          },
          {
            "id": 129,
            "date": "1993-07-25",
            "sequence": 7713,
            "temperature": 20.13,
            "humidite": 98.11,
            "capteur_id": 13
          },
          {
            "id": 46,
            "date": "1992-02-09",
            "sequence": 3510,
            "temperature": -6.41,
            "humidite": 36.11,
            "capteur_id": 13
          }
        ]
      },
      {
        "id": 14,
        "nom": "capteur-7245",
        "logo": "null",
        "code": "nj_7980",
        "salle": {
          "id": 1,
          "nom": "C595-119"
        },
        "mesures": [
          {
            "id": 102,
            "date": "2017-12-23",
            "sequence": 8551,
            "temperature": 16.56,
            "humidite": 89.08,
            "capteur_id": 14
          },
          {
            "id": 71,
            "date": "2014-01-08",
            "sequence": 3483,
            "temperature": 3.9699999999999998,
            "humidite": 65.93,
            "capteur_id": 14
          },
          {
            "id": 160,
            "date": "2007-07-02",
            "sequence": 8765,
            "temperature": 38.16,
            "humidite": 63.41,
            "capteur_id": 14
          },
          {
            "id": 24,
            "date": "2001-03-04",
            "sequence": 9478,
            "temperature": 8.88,
            "humidite": 34.15,
            "capteur_id": 14
          },
          {
            "id": 19,
            "date": "1994-07-04",
            "sequence": 6404,
            "temperature": 35.3,
            "humidite": 65.31,
            "capteur_id": 14
          },
          {
            "id": 112,
            "date": "1982-04-26",
            "sequence": 6214,
            "temperature": 15.54,
            "humidite": 25.13,
            "capteur_id": 14
          },
          {
            "id": 175,
            "date": "1980-03-30",
            "sequence": 1907,
            "temperature": 5.53,
            "humidite": 63.6,
            "capteur_id": 14
          },
          {
            "id": 80,
            "date": "1978-07-26",
            "sequence": 865,
            "temperature": 5.07,
            "humidite": 1.9300000000000002,
            "capteur_id": 14
          },
          {
            "id": 107,
            "date": "1977-10-18",
            "sequence": 4478,
            "temperature": 35.78,
            "humidite": 69.56,
            "capteur_id": 14
          }
        ]
      },
      {
        "id": 15,
        "nom": "capteur-4791",
        "logo": "null",
        "code": "zv_1875",
        "salle": {
          "id": 2,
          "nom": "D866-139"
        },
        "mesures": [
          {
            "id": 120,
            "date": "2011-01-17",
            "sequence": 6105,
            "temperature": -7.21,
            "humidite": 6.91,
            "capteur_id": 15
          },
          {
            "id": 69,
            "date": "2001-11-07",
            "sequence": 9194,
            "temperature": 1.12,
            "humidite": 95.28,
            "capteur_id": 15
          },
          {
            "id": 163,
            "date": "1999-05-15",
            "sequence": 5018,
            "temperature": 35.93,
            "humidite": 91.92,
            "capteur_id": 15
          },
          {
            "id": 75,
            "date": "1989-11-09",
            "sequence": 2935,
            "temperature": 28.15,
            "humidite": 75.1,
            "capteur_id": 15
          },
          {
            "id": 31,
            "date": "1987-03-28",
            "sequence": 5010,
            "temperature": -5.38,
            "humidite": 61.02,
            "capteur_id": 15
          },
          {
            "id": 118,
            "date": "1981-01-09",
            "sequence": 7341,
            "temperature": 10.19,
            "humidite": 84.4,
            "capteur_id": 15
          },
          {
            "id": 145,
            "date": "1978-04-27",
            "sequence": 8761,
            "temperature": 18.66,
            "humidite": 29.39,
            "capteur_id": 15
          },
          {
            "id": 20,
            "date": "1976-06-18",
            "sequence": 8265,
            "temperature": 7.57,
            "humidite": 41.58,
            "capteur_id": 15
          },
          {
            "id": 74,
            "date": "1971-06-30",
            "sequence": 3161,
            "temperature": 31.52,
            "humidite": 70.89,
            "capteur_id": 15
          }
        ]
      },
      {
        "id": 16,
        "nom": "capteur-4075",
        "logo": "null",
        "code": "cn_5966",
        "salle": {
          "id": 1,
          "nom": "C595-119"
        },
        "mesures": [
          {
            "id": 110,
            "date": "2017-07-20",
            "sequence": 5438,
            "temperature": 5.92,
            "humidite": 76.37,
            "capteur_id": 16
          },
          {
            "id": 134,
            "date": "2007-11-21",
            "sequence": 4274,
            "temperature": -8.9,
            "humidite": 61.18,
            "capteur_id": 16
          },
          {
            "id": 38,
            "date": "2002-08-18",
            "sequence": 5323,
            "temperature": 24.16,
            "humidite": 29.8,
            "capteur_id": 16
          },
          {
            "id": 68,
            "date": "1996-12-23",
            "sequence": 9701,
            "temperature": -0.81,
            "humidite": 56.34,
            "capteur_id": 16
          },
          {
            "id": 93,
            "date": "1995-05-24",
            "sequence": 423,
            "temperature": 20.17,
            "humidite": 53.95,
            "capteur_id": 16
          },
          {
            "id": 104,
            "date": "1988-08-12",
            "sequence": 6543,
            "temperature": 30.32,
            "humidite": 12.21,
            "capteur_id": 16
          },
          {
            "id": 57,
            "date": "1971-07-12",
            "sequence": 3128,
            "temperature": 15.73,
            "humidite": 16.9,
            "capteur_id": 16
          }
        ]
      },
      {
        "id": 17,
        "nom": "capteur-8054",
        "logo": "null",
        "code": "sr_7388",
        "salle": {
          "id": 1,
          "nom": "C595-119"
        },
        "mesures": [
          {
            "id": 150,
            "date": "2020-01-05",
            "sequence": 7351,
            "temperature": 22.4,
            "humidite": 25.5,
            "capteur_id": 17
          },
          {
            "id": 113,
            "date": "2017-03-06",
            "sequence": 803,
            "temperature": 26.97,
            "humidite": 20.51,
            "capteur_id": 17
          },
          {
            "id": 73,
            "date": "2001-05-21",
            "sequence": 3155,
            "temperature": 38.66,
            "humidite": 27.3,
            "capteur_id": 17
          },
          {
            "id": 27,
            "date": "1993-09-22",
            "sequence": 8775,
            "temperature": 27.24,
            "humidite": 20.09,
            "capteur_id": 17
          },
          {
            "id": 60,
            "date": "1992-01-30",
            "sequence": 329,
            "temperature": 37.58,
            "humidite": 24.76,
            "capteur_id": 17
          },
          {
            "id": 182,
            "date": "1977-12-14",
            "sequence": 5650,
            "temperature": 12.05,
            "humidite": 19.26,
            "capteur_id": 17
          },
          {
            "id": 88,
            "date": "1977-08-11",
            "sequence": 9425,
            "temperature": 13.53,
            "humidite": 34.27,
            "capteur_id": 17
          },
          {
            "id": 108,
            "date": "1976-11-08",
            "sequence": 3096,
            "temperature": 21.59,
            "humidite": 89.18,
            "capteur_id": 17
          }
        ]
      },
      {
        "id": 18,
        "nom": "capteur-1991",
        "logo": "null",
        "code": "nl_1103",
        "salle": {
          "id": 1,
          "nom": "C595-119"
        },
        "mesures": [
          {
            "id": 171,
            "date": "2016-11-21",
            "sequence": 7349,
            "temperature": 36.51,
            "humidite": 13.69,
            "capteur_id": 18
          },
          {
            "id": 45,
            "date": "2013-06-01",
            "sequence": 6893,
            "temperature": 16.67,
            "humidite": 86.18,
            "capteur_id": 18
          },
          {
            "id": 191,
            "date": "2005-02-24",
            "sequence": 420,
            "temperature": 38.36,
            "humidite": 82.9,
            "capteur_id": 18
          },
          {
            "id": 100,
            "date": "2003-01-20",
            "sequence": 2129,
            "temperature": 20.19,
            "humidite": 25.05,
            "capteur_id": 18
          },
          {
            "id": 131,
            "date": "1990-03-13",
            "sequence": 202,
            "temperature": 19.09,
            "humidite": 39.5,
            "capteur_id": 18
          },
          {
            "id": 157,
            "date": "1982-05-03",
            "sequence": 7019,
            "temperature": 37.23,
            "humidite": 17.72,
            "capteur_id": 18
          },
          {
            "id": 132,
            "date": "1982-04-04",
            "sequence": 6467,
            "temperature": 22.75,
            "humidite": 64.34,
            "capteur_id": 18
          },
          {
            "id": 128,
            "date": "1981-09-15",
            "sequence": 9360,
            "temperature": -5.3100000000000005,
            "humidite": 70.49,
            "capteur_id": 18
          },
          {
            "id": 30,
            "date": "1975-07-11",
            "sequence": 4054,
            "temperature": 2.07,
            "humidite": 19.65,
            "capteur_id": 18
          },
          {
            "id": 162,
            "date": "1972-10-03",
            "sequence": 2289,
            "temperature": 7.25,
            "humidite": 98.92,
            "capteur_id": 18
          }
        ]
      },
      {
        "id": 19,
        "nom": "capteur-4682",
        "logo": "null",
        "code": "au_3201",
        "salle": {
          "id": 2,
          "nom": "D866-139"
        },
        "mesures": [
          {
            "id": 147,
            "date": "2017-09-26",
            "sequence": 7159,
            "temperature": 27.65,
            "humidite": 61.62,
            "capteur_id": 19
          },
          {
            "id": 7,
            "date": "2012-05-14",
            "sequence": 858,
            "temperature": 13.24,
            "humidite": 59.18,
            "capteur_id": 19
          },
          {
            "id": 130,
            "date": "2011-10-24",
            "sequence": 2183,
            "temperature": 27.85,
            "humidite": 80.48,
            "capteur_id": 19
          },
          {
            "id": 64,
            "date": "2008-09-11",
            "sequence": 5939,
            "temperature": 19.93,
            "humidite": 64.16,
            "capteur_id": 19
          },
          {
            "id": 136,
            "date": "1995-10-28",
            "sequence": 6653,
            "temperature": 14.17,
            "humidite": 13.13,
            "capteur_id": 19
          },
          {
            "id": 183,
            "date": "1994-07-08",
            "sequence": 9173,
            "temperature": 18.15,
            "humidite": 22.05,
            "capteur_id": 19
          },
          {
            "id": 176,
            "date": "1991-07-02",
            "sequence": 923,
            "temperature": 19.6,
            "humidite": 46.4,
            "capteur_id": 19
          },
          {
            "id": 95,
            "date": "1982-05-16",
            "sequence": 1766,
            "temperature": 19.71,
            "humidite": 71.44,
            "capteur_id": 19
          },
          {
            "id": 198,
            "date": "1974-07-13",
            "sequence": 1208,
            "temperature": 29.81,
            "humidite": 7.9,
            "capteur_id": 19
          }
        ]
      },
      {
        "id": 20,
        "nom": "capteur-4251",
        "logo": "null",
        "code": "oq_3676",
        "salle": {
          "id": 1,
          "nom": "C595-119"
        },
        "mesures": [
          {
            "id": 76,
            "date": "2021-07-17",
            "sequence": 7202,
            "temperature": -7.73,
            "humidite": 20.03,
            "capteur_id": 20
          },
          {
            "id": 161,
            "date": "2020-03-06",
            "sequence": 5522,
            "temperature": -7.3100000000000005,
            "humidite": 2.23,
            "capteur_id": 20
          },
          {
            "id": 166,
            "date": "2009-06-12",
            "sequence": 9739,
            "temperature": -9.88,
            "humidite": 98.03,
            "capteur_id": 20
          },
          {
            "id": 85,
            "date": "2002-11-24",
            "sequence": 7819,
            "temperature": 6.28,
            "humidite": 82.97,
            "capteur_id": 20
          },
          {
            "id": 33,
            "date": "1993-05-18",
            "sequence": 7367,
            "temperature": 11.33,
            "humidite": 55.89,
            "capteur_id": 20
          },
          {
            "id": 170,
            "date": "1993-03-20",
            "sequence": 4614,
            "temperature": -9.91,
            "humidite": 37.43,
            "capteur_id": 20
          },
          {
            "id": 156,
            "date": "1991-10-22",
            "sequence": 6096,
            "temperature": 17.01,
            "humidite": 64.73,
            "capteur_id": 20
          },
          {
            "id": 83,
            "date": "1977-01-18",
            "sequence": 3288,
            "temperature": 28.53,
            "humidite": 93.32,
            "capteur_id": 20
          }
        ]
      }
    ]
}

/*
Mutations : méthode qui manipulent les données
Les mutations ne peuvent pas être asynchrones !!!
 */
const mutations = {

}

/*
Actions : méthodes du magasin qui font appel aux mutations
Elles peuvent être asynchrones !
 */
const actions = {
  /**
   * affichage capteurs
   * @param commit
   * @param dispatch
   * @param payload
   */
  afficherCapteurs ({ commit, dispatch }, payload) {
    Loading.show()
    api.post('/capteurs', payload)
      .then(function (response) {
        console.log(response)
        dispatch('setCapteur', response.data)
      })
      .catch(function (error) {
        Loading.hide()
        console.log(error)
        afficherMessageErreur(
          'Affichage des capteurs impossible !',
          Object.values(error.response.data)
        )
        throw error
      })
  },
}

/*
Getters : retourne les données du magasin
Fonctionne comme les propriétés calculées
Sert à calculer, trier, filtrer ou formater les donneés
 */
const getters = {

}

/*
Exporte les constantes, variables du fichier
On pourra ainsi les récupérer, les importer dans un autre fichier JS.

namespace: true, ajoute un namespace à notre objet retourné.
 */
export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
