/**
 * Created by aayushchadha on 06/10/17.
 */
let sensordata = [
  {
    'id': 0,
    'Time': 1489,
    'Acc_X': 0.2,
    'Acc_Y': -0.98,
    'Acc_Z': -0.08,
    'Gyro_X': 61.4,
    'Gyro_Y': -34.83,
    'Gyro_Z': 12.47,
    'Heading (deg)': 33.69
  },
  {
    'id': 1,
    'Time': 1497,
    'Acc_X': 0.21,
    'Acc_Y': -0.97,
    'Acc_Z': 0.01,
    'Gyro_X': 35.48,
    'Gyro_Y': -26.15,
    'Gyro_Z': 1.68,
    'Heading (deg)': 33.69
  },
  {
    'id': 2,
    'Time': 1506,
    'Acc_X': 0.23,
    'Acc_Y': -0.98,
    'Acc_Z': -0.02,
    'Gyro_X': 39.87,
    'Gyro_Y': -14.52,
    'Gyro_Z': 10.93,
    'Heading (deg)': 33.69
  },
  {
    'id': 3,
    'Time': 1514,
    'Acc_X': 0.17,
    'Acc_Y': -0.86,
    'Acc_Z': 0,
    'Gyro_X': 61.69,
    'Gyro_Y': -24,
    'Gyro_Z': -8.6,
    'Heading (deg)': 33.69
  },
  {
    'id': 4,
    'Time': 1533,
    'Acc_X': 0.17,
    'Acc_Y': -0.99,
    'Acc_Z': -0.15,
    'Gyro_X': 53.82,
    'Gyro_Y': -5.42,
    'Gyro_Z': -1.84,
    'Heading (deg)': 30.32
  },
  {
    'id': 5,
    'Time': 1568,
    'Acc_X': 0.08,
    'Acc_Y': -0.81,
    'Acc_Z': -0.02,
    'Gyro_X': 123.93,
    'Gyro_Y': 102.88,
    'Gyro_Z': 29.41,
    'Heading (deg)': 32.47
  },
  {
    'id': 6,
    'Time': 1603,
    'Acc_X': 0.13,
    'Acc_Y': -0.75,
    'Acc_Z': 0.09,
    'Gyro_X': 201.69,
    'Gyro_Y': 142.39,
    'Gyro_Z': 21.77,
    'Heading (deg)': 39.7
  },
  {
    'id': 7,
    'Time': 1638,
    'Acc_X': -0.03,
    'Acc_Y': -0.68,
    'Acc_Z': 0.25,
    'Gyro_X': 250.13,
    'Gyro_Y': 93.12,
    'Gyro_Z': -40.53,
    'Heading (deg)': 39.97
  },
  {
    'id': 8,
    'Time': 1673,
    'Acc_X': 0.14,
    'Acc_Y': -0.61,
    'Acc_Z': 0.73,
    'Gyro_X': 250.13,
    'Gyro_Y': 38.83,
    'Gyro_Z': -85.24,
    'Heading (deg)': 43.91
  },
  {
    'id': 9,
    'Time': 1708,
    'Acc_X': 0.07,
    'Acc_Y': -0.57,
    'Acc_Z': 0.65,
    'Gyro_X': 250.13,
    'Gyro_Y': 42.98,
    'Gyro_Z': -67.55,
    'Heading (deg)': 37.3
  },
  {
    'id': 10,
    'Time': 1743,
    'Acc_X': 0.18,
    'Acc_Y': -0.31,
    'Acc_Z': 0.94,
    'Gyro_X': 250.12,
    'Gyro_Y': -30.94,
    'Gyro_Z': -49.38,
    'Heading (deg)': 41.59
  },
  {
    'id': 11,
    'Time': 1778,
    'Acc_X': 0.17,
    'Acc_Y': -0.42,
    'Acc_Z': 0.9,
    'Gyro_X': 173.7,
    'Gyro_Y': -45.41,
    'Gyro_Z': -53.02,
    'Heading (deg)': 33.38
  },
  {
    'id': 12,
    'Time': 1813,
    'Acc_X': 0.35,
    'Acc_Y': -0.21,
    'Acc_Z': 1.06,
    'Gyro_X': 181.79,
    'Gyro_Y': -64.48,
    'Gyro_Z': -52.34,
    'Heading (deg)': 26.05
  },
  {
    'id': 13,
    'Time': 1848,
    'Acc_X': 0.29,
    'Acc_Y': -0.24,
    'Acc_Z': 0.91,
    'Gyro_X': 92.08,
    'Gyro_Y': -47.95,
    'Gyro_Z': -40.45,
    'Heading (deg)': 12.67
  },
  {
    'id': 14,
    'Time': 1883,
    'Acc_X': 0.4,
    'Acc_Y': -0.19,
    'Acc_Z': 1.02,
    'Gyro_X': 30.49,
    'Gyro_Y': -54.45,
    'Gyro_Z': -20.74,
    'Heading (deg)': 4.55
  },
  {
    'id': 15,
    'Time': 1918,
    'Acc_X': 0.43,
    'Acc_Y': -0.19,
    'Acc_Z': 1.03,
    'Gyro_X': 25.15,
    'Gyro_Y': -20.7,
    'Gyro_Z': -9.63,
    'Heading (deg)': 7.29
  },
  {
    'id': 16,
    'Time': 1953,
    'Acc_X': 0.49,
    'Acc_Y': -0.37,
    'Acc_Z': 1.06,
    'Gyro_X': -4.17,
    'Gyro_Y': -3.13,
    'Gyro_Z': 9.21,
    'Heading (deg)': 352.87
  },
  {
    'id': 17,
    'Time': 1987,
    'Acc_X': 0.35,
    'Acc_Y': 0.45,
    'Acc_Z': 0.99,
    'Gyro_X': -112.18,
    'Gyro_Y': -26.4,
    'Gyro_Z': -20.34,
    'Heading (deg)': 1.53
  },
  {
    'id': 18,
    'Time': 2023,
    'Acc_X': 0.54,
    'Acc_Y': -0.56,
    'Acc_Z': 1.05,
    'Gyro_X': -55.19,
    'Gyro_Y': 14.27,
    'Gyro_Z': -36.83,
    'Heading (deg)': 358.05
  },
  {
    'id': 19,
    'Time': 2066,
    'Acc_X': 0.36,
    'Acc_Y': -0.42,
    'Acc_Z': 0.96,
    'Gyro_X': -4.3,
    'Gyro_Y': 5.43,
    'Gyro_Z': -54.5,
    'Heading (deg)': 354.14
  },
  {
    'id': 20,
    'Time': 2092,
    'Acc_X': 0.31,
    'Acc_Y': -0.17,
    'Acc_Z': 0.75,
    'Gyro_X': -44.86,
    'Gyro_Y': -23.76,
    'Gyro_Z': 26.18,
    'Heading (deg)': 350.19
  },
  {
    'id': 21,
    'Time': 2128,
    'Acc_X': 0.38,
    'Acc_Y': -0.29,
    'Acc_Z': 0.79,
    'Gyro_X': -10.34,
    'Gyro_Y': 11.5,
    'Gyro_Z': -1.05,
    'Heading (deg)': 349.8
  },
  {
    'id': 22,
    'Time': 2163,
    'Acc_X': 0.29,
    'Acc_Y': -0.22,
    'Acc_Z': 0.81,
    'Gyro_X': 33.62,
    'Gyro_Y': -27.81,
    'Gyro_Z': -29.98,
    'Heading (deg)': 350.82
  },
  {
    'id': 23,
    'Time': 2197,
    'Acc_X': 0.41,
    'Acc_Y': -0.26,
    'Acc_Z': 0.92,
    'Gyro_X': 24.85,
    'Gyro_Y': -46.69,
    'Gyro_Z': -63.37,
    'Heading (deg)': 350.19
  },
  {
    'id': 24,
    'Time': 2232,
    'Acc_X': 0.35,
    'Acc_Y': -0.2,
    'Acc_Z': 0.99,
    'Gyro_X': 57.81,
    'Gyro_Y': 15.73,
    'Gyro_Z': -80,
    'Heading (deg)': 343.24
  },
  {
    'id': 25,
    'Time': 2267,
    'Acc_X': 0.32,
    'Acc_Y': -0.2,
    'Acc_Z': 0.8,
    'Gyro_X': 201.19,
    'Gyro_Y': 17.15,
    'Gyro_Z': -87.53,
    'Heading (deg)': 334.06
  },
  {
    'id': 26,
    'Time': 2302,
    'Acc_X': 0.56,
    'Acc_Y': -0.09,
    'Acc_Z': 0.94,
    'Gyro_X': 83.19,
    'Gyro_Y': 9.18,
    'Gyro_Z': -22.04,
    'Heading (deg)': 330.52
  },
  {
    'id': 27,
    'Time': 2337,
    'Acc_X': 0.32,
    'Acc_Y': 0.21,
    'Acc_Z': 0.88,
    'Gyro_X': 119.99,
    'Gyro_Y': 68.13,
    'Gyro_Z': -7.82,
    'Heading (deg)': 317.29
  },
  {
    'id': 28,
    'Time': 2372,
    'Acc_X': 0.11,
    'Acc_Y': 1.17,
    'Acc_Z': 0.97,
    'Gyro_X': 27.84,
    'Gyro_Y': 41.83,
    'Gyro_Z': 49.63,
    'Heading (deg)': 302.17
  },
  {
    'id': 29,
    'Time': 2407,
    'Acc_X': 0.43,
    'Acc_Y': 0.07,
    'Acc_Z': 1.03,
    'Gyro_X': 9.75,
    'Gyro_Y': 35.37,
    'Gyro_Z': -26.73,
    'Heading (deg)': 305.75
  },
  {
    'id': 30,
    'Time': 2442,
    'Acc_X': -0.06,
    'Acc_Y': 1.94,
    'Acc_Z': -2,
    'Gyro_X': -46.98,
    'Gyro_Y': -249.41,
    'Gyro_Z': -22.28,
    'Heading (deg)': 311.19
  },
  {
    'id': 31,
    'Time': 2477,
    'Acc_X': 0.31,
    'Acc_Y': -0.01,
    'Acc_Z': 0.94,
    'Gyro_X': -58.48,
    'Gyro_Y': 39.95,
    'Gyro_Z': 9.33,
    'Heading (deg)': 316.06
  },
  {
    'id': 32,
    'Time': 2512,
    'Acc_X': 0.21,
    'Acc_Y': -0.06,
    'Acc_Z': 0.99,
    'Gyro_X': -11.24,
    'Gyro_Y': 61.6,
    'Gyro_Z': 8.59,
    'Heading (deg)': 323.67
  },
  {
    'id': 33,
    'Time': 2547,
    'Acc_X': 0.29,
    'Acc_Y': 0.02,
    'Acc_Z': 1,
    'Gyro_X': -43.11,
    'Gyro_Y': 5.19,
    'Gyro_Z': 9.34,
    'Heading (deg)': 328.93
  },
  {
    'id': 34,
    'Time': 2582,
    'Acc_X': 0.21,
    'Acc_Y': -0.23,
    'Acc_Z': 0.98,
    'Gyro_X': -88.44,
    'Gyro_Y': -74.18,
    'Gyro_Z': -7.76,
    'Heading (deg)': 320.84
  },
  {
    'id': 35,
    'Time': 2617,
    'Acc_X': 0.65,
    'Acc_Y': -0.13,
    'Acc_Z': 1.47,
    'Gyro_X': -1.6,
    'Gyro_Y': -104.86,
    'Gyro_Z': 9.69,
    'Heading (deg)': 324.54
  },
  {
    'id': 36,
    'Time': 2652,
    'Acc_X': 0.49,
    'Acc_Y': -0.13,
    'Acc_Z': 0.97,
    'Gyro_X': 19.5,
    'Gyro_Y': -26.05,
    'Gyro_Z': -7.34,
    'Heading (deg)': 319.16
  },
  {
    'id': 37,
    'Time': 2686,
    'Acc_X': 0.37,
    'Acc_Y': -0.08,
    'Acc_Z': 1.09,
    'Gyro_X': -52.42,
    'Gyro_Y': -53.53,
    'Gyro_Z': 20.69,
    'Heading (deg)': 321.77
  },
  {
    'id': 38,
    'Time': 2722,
    'Acc_X': 0.09,
    'Acc_Y': -0.4,
    'Acc_Z': 0.81,
    'Gyro_X': 25.31,
    'Gyro_Y': -123.25,
    'Gyro_Z': 2.37,
    'Heading (deg)': 319.24
  },
  {
    'id': 39,
    'Time': 2757,
    'Acc_X': 0.55,
    'Acc_Y': 0,
    'Acc_Z': 0.98,
    'Gyro_X': -42.86,
    'Gyro_Y': -65.5,
    'Gyro_Z': 11.86,
    'Heading (deg)': 311.63
  },
  {
    'id': 40,
    'Time': 2791,
    'Acc_X': 0.49,
    'Acc_Y': 0.35,
    'Acc_Z': 0.96,
    'Gyro_X': -55.67,
    'Gyro_Y': -75.11,
    'Gyro_Z': 86.71,
    'Heading (deg)': 317.34
  },
  {
    'id': 41,
    'Time': 2826,
    'Acc_X': 0.46,
    'Acc_Y': -0.4,
    'Acc_Z': 0.81,
    'Gyro_X': -80.15,
    'Gyro_Y': 30.23,
    'Gyro_Z': 72.61,
    'Heading (deg)': 316.17
  },
  {
    'id': 42,
    'Time': 2862,
    'Acc_X': 0.61,
    'Acc_Y': -0.17,
    'Acc_Z': 0.85,
    'Gyro_X': -87.72,
    'Gyro_Y': 25.16,
    'Gyro_Z': 35.72,
    'Heading (deg)': 319.64
  },
  {
    'id': 43,
    'Time': 2896,
    'Acc_X': 0.33,
    'Acc_Y': -0.46,
    'Acc_Z': 0.45,
    'Gyro_X': -160.94,
    'Gyro_Y': 132.02,
    'Gyro_Z': -4.53,
    'Heading (deg)': 337.75
  },
  {
    'id': 44,
    'Time': 2931,
    'Acc_X': 0.39,
    'Acc_Y': -0.5,
    'Acc_Z': 0.95,
    'Gyro_X': -94.04,
    'Gyro_Y': 201.79,
    'Gyro_Z': 73.4,
    'Heading (deg)': 348.23
  },
  {
    'id': 45,
    'Time': 2966,
    'Acc_X': 0.31,
    'Acc_Y': -0.36,
    'Acc_Z': 0.72,
    'Gyro_X': -92.62,
    'Gyro_Y': 102.1,
    'Gyro_Z': 73.85,
    'Heading (deg)': 1.04
  },
  {
    'id': 46,
    'Time': 3001,
    'Acc_X': 0.01,
    'Acc_Y': -0.58,
    'Acc_Z': 0.79,
    'Gyro_X': -44.93,
    'Gyro_Y': 53.53,
    'Gyro_Z': 57.17,
    'Heading (deg)': 3.37
  },
  {
    'id': 47,
    'Time': 3036,
    'Acc_X': -0.01,
    'Acc_Y': -0.57,
    'Acc_Z': 0.65,
    'Gyro_X': -41.15,
    'Gyro_Y': -31.81,
    'Gyro_Z': 50.57,
    'Heading (deg)': 15.38
  },
  {
    'id': 48,
    'Time': 3071,
    'Acc_X': 0.15,
    'Acc_Y': -0.58,
    'Acc_Z': 0.75,
    'Gyro_X': -30.76,
    'Gyro_Y': -6.99,
    'Gyro_Z': 47.67,
    'Heading (deg)': 13.36
  },
  {
    'id': 49,
    'Time': 3106,
    'Acc_X': 0.13,
    'Acc_Y': -0.74,
    'Acc_Z': 0.83,
    'Gyro_X': -21.68,
    'Gyro_Y': 46.53,
    'Gyro_Z': 92.5,
    'Heading (deg)': 18.43
  },
  {
    'id': 50,
    'Time': 3141,
    'Acc_X': 0.06,
    'Acc_Y': -0.65,
    'Acc_Z': 0.76,
    'Gyro_X': -53.89,
    'Gyro_Y': -6.56,
    'Gyro_Z': 57.05,
    'Heading (deg)': 25.64
  },
  {
    'id': 51,
    'Time': 3175,
    'Acc_X': 0.18,
    'Acc_Y': -0.76,
    'Acc_Z': 1.06,
    'Gyro_X': 44.21,
    'Gyro_Y': 49.52,
    'Gyro_Z': 13.1,
    'Heading (deg)': 26.82
  },
  {
    'id': 52,
    'Time': 3211,
    'Acc_X': 0.08,
    'Acc_Y': -0.7,
    'Acc_Z': 0.79,
    'Gyro_X': -54.6,
    'Gyro_Y': -25.33,
    'Gyro_Z': -2.57,
    'Heading (deg)': 29.32
  },
  {
    'id': 53,
    'Time': 3246,
    'Acc_X': 0.16,
    'Acc_Y': -0.65,
    'Acc_Z': 0.74,
    'Gyro_X': -64.58,
    'Gyro_Y': -39.37,
    'Gyro_Z': -7.35,
    'Heading (deg)': 29.11
  },
  {
    'id': 54,
    'Time': 3281,
    'Acc_X': 0.12,
    'Acc_Y': -0.75,
    'Acc_Z': 0.6,
    'Gyro_X': -138.28,
    'Gyro_Y': -77.31,
    'Gyro_Z': 54.91,
    'Heading (deg)': 30.12
  },
  {
    'id': 55,
    'Time': 3315,
    'Acc_X': 0.07,
    'Acc_Y': -0.84,
    'Acc_Z': 0.69,
    'Gyro_X': 20.25,
    'Gyro_Y': 11.66,
    'Gyro_Z': -25.14,
    'Heading (deg)': 37.61
  },
  {
    'id': 56,
    'Time': 3351,
    'Acc_X': 0.15,
    'Acc_Y': -0.58,
    'Acc_Z': 0.64,
    'Gyro_X': -11.47,
    'Gyro_Y': -69.69,
    'Gyro_Z': -39.82,
    'Heading (deg)': 31.06
  },
  {
    'id': 57,
    'Time': 3386,
    'Acc_X': 0.3,
    'Acc_Y': -0.78,
    'Acc_Z': 0.58,
    'Gyro_X': -1.27,
    'Gyro_Y': -94.55,
    'Gyro_Z': -29.18,
    'Heading (deg)': 32.56
  },
  {
    'id': 58,
    'Time': 3420,
    'Acc_X': 0.24,
    'Acc_Y': -0.78,
    'Acc_Z': 0.62,
    'Gyro_X': 22.65,
    'Gyro_Y': -40.4,
    'Gyro_Z': -39.83,
    'Heading (deg)': 39.04
  },
  {
    'id': 59,
    'Time': 3455,
    'Acc_X': 0.26,
    'Acc_Y': -0.69,
    'Acc_Z': 0.77,
    'Gyro_X': -8.7,
    'Gyro_Y': -40.09,
    'Gyro_Z': -30.71,
    'Heading (deg)': 32.15
  },
  {
    'id': 60,
    'Time': 3490,
    'Acc_X': 0.42,
    'Acc_Y': -0.74,
    'Acc_Z': 0.49,
    'Gyro_X': -30.67,
    'Gyro_Y': -82.4,
    'Gyro_Z': -35.49,
    'Heading (deg)': 36.29
  },
  {
    'id': 61,
    'Time': 3526,
    'Acc_X': 0.32,
    'Acc_Y': -0.93,
    'Acc_Z': 0.76,
    'Gyro_X': -41.95,
    'Gyro_Y': -99.33,
    'Gyro_Z': -70.42,
    'Heading (deg)': 33.14
  },
  {
    'id': 62,
    'Time': 3560,
    'Acc_X': 0.43,
    'Acc_Y': -0.67,
    'Acc_Z': 0.48,
    'Gyro_X': -73.18,
    'Gyro_Y': -117.69,
    'Gyro_Z': -58.52,
    'Heading (deg)': 34.93
  },
  {
    'id': 63,
    'Time': 3595,
    'Acc_X': 0.4,
    'Acc_Y': -0.85,
    'Acc_Z': 0.39,
    'Gyro_X': -125.89,
    'Gyro_Y': -124.91,
    'Gyro_Z': -49.53,
    'Heading (deg)': 29.13
  },
  {
    'id': 64,
    'Time': 3630,
    'Acc_X': 0.65,
    'Acc_Y': -0.74,
    'Acc_Z': 0.32,
    'Gyro_X': -76.08,
    'Gyro_Y': -82.45,
    'Gyro_Z': -29.61,
    'Heading (deg)': 28.3
  },
  {
    'id': 65,
    'Time': 3665,
    'Acc_X': 0.52,
    'Acc_Y': -0.7,
    'Acc_Z': 0.27,
    'Gyro_X': -48.02,
    'Gyro_Y': -54.43,
    'Gyro_Z': -7.11,
    'Heading (deg)': 26.08
  },
  {
    'id': 66,
    'Time': 3700,
    'Acc_X': 0.56,
    'Acc_Y': -0.7,
    'Acc_Z': 0.13,
    'Gyro_X': -65.09,
    'Gyro_Y': -38.15,
    'Gyro_Z': -10.5,
    'Heading (deg)': 14.62
  },
  {
    'id': 67,
    'Time': 3735,
    'Acc_X': 0.57,
    'Acc_Y': -0.75,
    'Acc_Z': 0.11,
    'Gyro_X': -38.39,
    'Gyro_Y': -10.89,
    'Gyro_Z': -1.84,
    'Heading (deg)': 7.82
  },
  {
    'id': 68,
    'Time': 3770,
    'Acc_X': 0.6,
    'Acc_Y': -0.78,
    'Acc_Z': 0.17,
    'Gyro_X': -5.49,
    'Gyro_Y': -13.47,
    'Gyro_Z': 15.97,
    'Heading (deg)': 9.64
  },
  {
    'id': 69,
    'Time': 3805,
    'Acc_X': 0.57,
    'Acc_Y': -0.74,
    'Acc_Z': 0.11,
    'Gyro_X': 8.43,
    'Gyro_Y': -10.53,
    'Gyro_Z': 7.92,
    'Heading (deg)': 7.13
  },
  {
    'id': 70,
    'Time': 3840,
    'Acc_X': 0.58,
    'Acc_Y': -0.71,
    'Acc_Z': 0.14,
    'Gyro_X': 2.4,
    'Gyro_Y': 17.09,
    'Gyro_Z': 4.67,
    'Heading (deg)': 7.52
  }
]

let exportedData = {}
let gyro = []
let accel = []
let timeValues = []
let headingValues = []

sensordata.forEach(function (each) {
  let accMagnitude = Math.sqrt(Math.pow(each.Acc_X, 2) + Math.pow(each.Acc_Y, 2) + Math.pow(each.Acc_Z, 2))
  let gyroMagnitude = Math.log(Math.sqrt(Math.pow(each.Gyro_X, 2) + Math.pow(each.Gyro_Y, 2) + Math.pow(each.Gyro_Z, 2)))
  gyro.push(gyroMagnitude)
  accel.push(accMagnitude)
  timeValues.push(each.Time)
  headingValues.push(each.heading)
})

exportedData.accel = accel
exportedData.gyro = gyro
exportedData.headingValues = headingValues
exportedData.timeValues = timeValues

console.log(exportedData)
export default {
  exportedData
}
