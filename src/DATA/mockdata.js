/**
 * Created by aayushchadha on 06/10/17.
 */
let sensordata = [
  {
    'time': 1442,
    'acc_x': 0.18,
    'acc_y': 0.79,
    'acc_z': -0.63,
    'gyro_x': -0.65,
    'gyro_y': -1.09,
    'gyro_z': -0.15,
    'heading': 359.58
  },
  {
    'time': 1478,
    'acc_x': 0.18,
    'acc_y': 0.78,
    'acc_z': -0.61,
    'gyro_x': -0.26,
    'gyro_y': -1.25,
    'gyro_z': -0.11,
    'heading': 1.98
  },
  {
    'time': 1559,
    'acc_x': 0.19,
    'acc_y': 0.79,
    'acc_z': -0.62,
    'gyro_x': 0.27,
    'gyro_y': -1.4,
    'gyro_z': 0.04,
    'heading': 1.96
  },
  {
    'time': 1568,
    'acc_x': 0.19,
    'acc_y': 0.79,
    'acc_z': -0.62,
    'gyro_x': -0.73,
    'gyro_y': -1.06,
    'gyro_z': -0.11,
    'heading': 0.28
  },
  {
    'time': 1583,
    'acc_x': 0.19,
    'acc_y': 0.79,
    'acc_z': -0.61,
    'gyro_x': -0.38,
    'gyro_y': -1.16,
    'gyro_z': -0.02,
    'heading': 0.28
  },
  {
    'time': 1617,
    'acc_x': 0.19,
    'acc_y': 0.78,
    'acc_z': -0.63,
    'gyro_x': -0.15,
    'gyro_y': -1.24,
    'gyro_z': -0.02,
    'heading': 1.11
  },
  {
    'time': 1652,
    'acc_x': 0.19,
    'acc_y': 0.79,
    'acc_z': -0.61,
    'gyro_x': -0.44,
    'gyro_y': -1.2,
    'gyro_z': -0.13,
    'heading': 1.23
  },
  {
    'time': 1687,
    'acc_x': 0.19,
    'acc_y': 0.78,
    'acc_z': -0.62,
    'gyro_x': -0.16,
    'gyro_y': -1.34,
    'gyro_z': -0.1,
    'heading': 1.13
  },
  {
    'time': 1722,
    'acc_x': 0.18,
    'acc_y': 0.78,
    'acc_z': -0.62,
    'gyro_x': -0.08,
    'gyro_y': -1.12,
    'gyro_z': -0.12,
    'heading': 2.5
  },
  {
    'time': 1757,
    'acc_x': 0.19,
    'acc_y': 0.79,
    'acc_z': -0.62,
    'gyro_x': -0.37,
    'gyro_y': -1.27,
    'gyro_z': -0.06,
    'heading': 1.11
  },
  {
    'time': 1792,
    'acc_x': 0.19,
    'acc_y': 0.79,
    'acc_z': -0.61,
    'gyro_x': -0.53,
    'gyro_y': -1.18,
    'gyro_z': -0.08,
    'heading': 0.55
  },
  {
    'time': 1827,
    'acc_x': 0.19,
    'acc_y': 0.79,
    'acc_z': -0.62,
    'gyro_x': -0.31,
    'gyro_y': -1.3,
    'gyro_z': -0.09,
    'heading': 0.14
  },
  {
    'time': 1862,
    'acc_x': 0.19,
    'acc_y': 0.79,
    'acc_z': -0.61,
    'gyro_x': -0.4,
    'gyro_y': -1.2,
    'gyro_z': -0.06,
    'heading': 2.39
  },
  {
    'time': 1897,
    'acc_x': 0.2,
    'acc_y': 0.8,
    'acc_z': -0.62,
    'gyro_x': -0.57,
    'gyro_y': -1.12,
    'gyro_z': -0.18,
    'heading': 1.11
  },
  {
    'time': 1932,
    'acc_x': 0.18,
    'acc_y': 0.79,
    'acc_z': -0.63,
    'gyro_x': 0.34,
    'gyro_y': -1.32,
    'gyro_z': 0.03,
    'heading': 1.87
  },
  {
    'time': 1967,
    'acc_x': 0.19,
    'acc_y': 0.8,
    'acc_z': -0.63,
    'gyro_x': -0.75,
    'gyro_y': -1.16,
    'gyro_z': -0.08,
    'heading': 1.09
  },
  {
    'time': 2002,
    'acc_x': 0.18,
    'acc_y': 0.79,
    'acc_z': -0.61,
    'gyro_x': -0.54,
    'gyro_y': -1.21,
    'gyro_z': -0.12,
    'heading': 0.57
  },
  {
    'time': 2037,
    'acc_x': 0.19,
    'acc_y': 0.78,
    'acc_z': -0.62,
    'gyro_x': 0.18,
    'gyro_y': -1.23,
    'gyro_z': 0.11,
    'heading': 1.51
  },
  {
    'time': 2072,
    'acc_x': 0.18,
    'acc_y': 0.79,
    'acc_z': -0.61,
    'gyro_x': -0.47,
    'gyro_y': -0.99,
    'gyro_z': -0.24,
    'heading': 0.96
  },
  {
    'time': 2107,
    'acc_x': 0.19,
    'acc_y': 0.79,
    'acc_z': -0.63,
    'gyro_x': -0.19,
    'gyro_y': -1.43,
    'gyro_z': -0.14,
    'heading': 0.28
  },
  {
    'time': 2141,
    'acc_x': 0.19,
    'acc_y': 0.79,
    'acc_z': -0.61,
    'gyro_x': -1.02,
    'gyro_y': -1.05,
    'gyro_z': -0.13,
    'heading': 2.08
  },
  {
    'time': 2176,
    'acc_x': 0.18,
    'acc_y': 0.79,
    'acc_z': -0.63,
    'gyro_x': 0.63,
    'gyro_y': -1.27,
    'gyro_z': -0.03,
    'heading': 2.08
  },
  {
    'time': 2211,
    'acc_x': 0.18,
    'acc_y': 0.79,
    'acc_z': -0.63,
    'gyro_x': -0.33,
    'gyro_y': -1.18,
    'gyro_z': 0,
    'heading': 1.77
  },
  {
    'time': 2247,
    'acc_x': 0.19,
    'acc_y': 0.79,
    'acc_z': -0.62,
    'gyro_x': -0.34,
    'gyro_y': -1.25,
    'gyro_z': -0.11,
    'heading': 0.14
  },
  {
    'time': 2282,
    'acc_x': 0.18,
    'acc_y': 0.78,
    'acc_z': -0.62,
    'gyro_x': -0.73,
    'gyro_y': -1.34,
    'gyro_z': -0.15,
    'heading': 0.42
  },
  {
    'time': 2317,
    'acc_x': 0.18,
    'acc_y': 0.79,
    'acc_z': -0.61,
    'gyro_x': -0.22,
    'gyro_y': -1.19,
    'gyro_z': -0.05,
    'heading': 1.5
  },
  {
    'time': 2351,
    'acc_x': 0.19,
    'acc_y': 0.79,
    'acc_z': -0.62,
    'gyro_x': 0.52,
    'gyro_y': -1.45,
    'gyro_z': -0.02,
    'heading': 0.82
  },
  {
    'time': 2386,
    'acc_x': 0.18,
    'acc_y': 0.79,
    'acc_z': -0.62,
    'gyro_x': -1.54,
    'gyro_y': -0.93,
    'gyro_z': -0.12,
    'heading': 1.55
  },
  {
    'time': 2421,
    'acc_x': 0.19,
    'acc_y': 0.79,
    'acc_z': -0.62,
    'gyro_x': 1.08,
    'gyro_y': -1.52,
    'gyro_z': 0.08,
    'heading': 1.81
  },
  {
    'time': 2456,
    'acc_x': 0.19,
    'acc_y': 0.8,
    'acc_z': -0.63,
    'gyro_x': -0.85,
    'gyro_y': -1.2,
    'gyro_z': -0.2,
    'heading': 1.25
  },
  {
    'time': 2491,
    'acc_x': 0.18,
    'acc_y': 0.79,
    'acc_z': -0.62,
    'gyro_x': -1.18,
    'gyro_y': -1.12,
    'gyro_z': -0.12,
    'heading': 1.26
  },
  {
    'time': 2526,
    'acc_x': 0.18,
    'acc_y': 0.79,
    'acc_z': -0.62,
    'gyro_x': 0.48,
    'gyro_y': -1.37,
    'gyro_z': -0.03,
    'heading': 1.68
  },
  {
    'time': 2561,
    'acc_x': 0.18,
    'acc_y': 0.78,
    'acc_z': -0.62,
    'gyro_x': -0.05,
    'gyro_y': -1.34,
    'gyro_z': 0,
    'heading': 0.28
  },
  {
    'time': 2596,
    'acc_x': 0.18,
    'acc_y': 0.8,
    'acc_z': -0.61,
    'gyro_x': -0.69,
    'gyro_y': -1.23,
    'gyro_z': -0.14,
    'heading': 0.14
  },
  {
    'time': 2630,
    'acc_x': 0.18,
    'acc_y': 0.79,
    'acc_z': -0.61,
    'gyro_x': -0.22,
    'gyro_y': -1.25,
    'gyro_z': -0.03,
    'heading': 1.25
  },
  {
    'time': 2665,
    'acc_x': 0.19,
    'acc_y': 0.79,
    'acc_z': -0.6,
    'gyro_x': -0.07,
    'gyro_y': -1.19,
    'gyro_z': -0.09,
    'heading': 0.14
  },
  {
    'time': 2701,
    'acc_x': 0.18,
    'acc_y': 0.8,
    'acc_z': -0.62,
    'gyro_x': 0.16,
    'gyro_y': -1.34,
    'gyro_z': -0.11,
    'heading': 0.41
  },
  {
    'time': 2736,
    'acc_x': 0.18,
    'acc_y': 0.8,
    'acc_z': -0.62,
    'gyro_x': -1.47,
    'gyro_y': -1.02,
    'gyro_z': -0.13,
    'heading': 0.84
  },
  {
    'time': 2771,
    'acc_x': 0.2,
    'acc_y': 0.78,
    'acc_z': -0.61,
    'gyro_x': 0.02,
    'gyro_y': -1.21,
    'gyro_z': 0.02,
    'heading': 0.56
  },
  {
    'time': 2806,
    'acc_x': 0.19,
    'acc_y': 0.79,
    'acc_z': -0.63,
    'gyro_x': 1.44,
    'gyro_y': -1.53,
    'gyro_z': 0.07,
    'heading': 0.55
  },
  {
    'time': 2841,
    'acc_x': 0.19,
    'acc_y': 0.79,
    'acc_z': -0.62,
    'gyro_x': -2.69,
    'gyro_y': -0.61,
    'gyro_z': -0.19,
    'heading': 2.13
  },
  {
    'time': 2876,
    'acc_x': 0.19,
    'acc_y': 0.8,
    'acc_z': -0.6,
    'gyro_x': 0.26,
    'gyro_y': -1.42,
    'gyro_z': -0.15,
    'heading': 0.97
  },
  {
    'time': 2911,
    'acc_x': 0.2,
    'acc_y': 0.79,
    'acc_z': -0.61,
    'gyro_x': -0.12,
    'gyro_y': -0.98,
    'gyro_z': 0,
    'heading': 359.73
  },
  {
    'time': 2945,
    'acc_x': 0.18,
    'acc_y': 0.81,
    'acc_z': -0.61,
    'gyro_x': -0.02,
    'gyro_y': -1.27,
    'gyro_z': -0.09,
    'heading': 0.42
  },
  {
    'time': 2980,
    'acc_x': 0.18,
    'acc_y': 0.78,
    'acc_z': -0.61,
    'gyro_x': -1.69,
    'gyro_y': -0.86,
    'gyro_z': -0.24,
    'heading': 1.94
  },
  {
    'time': 3015,
    'acc_x': 0.19,
    'acc_y': 0.79,
    'acc_z': -0.6,
    'gyro_x': 0.53,
    'gyro_y': -1.43,
    'gyro_z': -0.08,
    'heading': 1.81
  },
  {
    'time': 3050,
    'acc_x': 0.18,
    'acc_y': 0.78,
    'acc_z': -0.62,
    'gyro_x': 0.42,
    'gyro_y': -1.4,
    'gyro_z': 0.08,
    'heading': 0.98
  },
  {
    'time': 3085,
    'acc_x': 0.19,
    'acc_y': 0.8,
    'acc_z': -0.63,
    'gyro_x': -1.45,
    'gyro_y': -1.04,
    'gyro_z': -0.2,
    'heading': 0.55
  },
  {
    'time': 3120,
    'acc_x': 0.19,
    'acc_y': 0.79,
    'acc_z': -0.61,
    'gyro_x': -0.61,
    'gyro_y': -1.15,
    'gyro_z': -0.09,
    'heading': 0.27
  },
  {
    'time': 3155,
    'acc_x': 0.19,
    'acc_y': 0.8,
    'acc_z': -0.61,
    'gyro_x': 0.86,
    'gyro_y': -1.46,
    'gyro_z': 0.02,
    'heading': 3.6
  },
  {
    'time': 3190,
    'acc_x': 0.19,
    'acc_y': 0.79,
    'acc_z': -0.61,
    'gyro_x': -0.82,
    'gyro_y': -1.11,
    'gyro_z': -0.13,
    'heading': 0.97
  },
  {
    'time': 3225,
    'acc_x': 0.18,
    'acc_y': 0.8,
    'acc_z': -0.61,
    'gyro_x': -0.85,
    'gyro_y': -1.14,
    'gyro_z': -0.1,
    'heading': 0.14
  },
  {
    'time': 3260,
    'acc_x': 0.18,
    'acc_y': 0.8,
    'acc_z': -0.6,
    'gyro_x': -0.31,
    'gyro_y': -1.29,
    'gyro_z': 0.05,
    'heading': 358.91
  },
  {
    'time': 3295,
    'acc_x': 0.19,
    'acc_y': 0.79,
    'acc_z': -0.63,
    'gyro_x': 1.66,
    'gyro_y': -1.79,
    'gyro_z': 0.21,
    'heading': 1.13
  },
  {
    'time': 3330,
    'acc_x': 0.19,
    'acc_y': 0.79,
    'acc_z': -0.62,
    'gyro_x': -3.94,
    'gyro_y': -0.56,
    'gyro_z': -0.44,
    'heading': 1.68
  },
  {
    'time': 3365,
    'acc_x': 0.18,
    'acc_y': 0.8,
    'acc_z': -0.63,
    'gyro_x': 0.23,
    'gyro_y': -1.75,
    'gyro_z': -0.1,
    'heading': 0.41
  },
  {
    'time': 3400,
    'acc_x': 0.18,
    'acc_y': 0.79,
    'acc_z': -0.61,
    'gyro_x': 2.33,
    'gyro_y': -1.71,
    'gyro_z': 0.04,
    'heading': 0
  },
  {
    'time': 3434,
    'acc_x': 0.18,
    'acc_y': 0.8,
    'acc_z': -0.63,
    'gyro_x': -2.17,
    'gyro_y': -1.1,
    'gyro_z': -0.34,
    'heading': 1.81
  },
  {
    'time': 3469,
    'acc_x': 0.18,
    'acc_y': 0.79,
    'acc_z': -0.62,
    'gyro_x': -2.61,
    'gyro_y': -0.69,
    'gyro_z': -0.27,
    'heading': 0.83
  },
  {
    'time': 3504,
    'acc_x': 0.19,
    'acc_y': 0.8,
    'acc_z': -0.62,
    'gyro_x': 2.92,
    'gyro_y': -2,
    'gyro_z': 0.28,
    'heading': 1.25
  },
  {
    'time': 3540,
    'acc_x': 0.19,
    'acc_y': 0.79,
    'acc_z': -0.62,
    'gyro_x': -0.95,
    'gyro_y': -0.97,
    'gyro_z': -0.16,
    'heading': 0.84
  },
  {
    'time': 3575,
    'acc_x': 0.19,
    'acc_y': 0.79,
    'acc_z': -0.63,
    'gyro_x': -1.65,
    'gyro_y': -1.18,
    'gyro_z': -0.23,
    'heading': 0.54
  },
  {
    'time': 3610,
    'acc_x': 0.19,
    'acc_y': 0.79,
    'acc_z': -0.6,
    'gyro_x': -0.35,
    'gyro_y': -1.28,
    'gyro_z': -0.09,
    'heading': 0.55
  },
  {
    'time': 3645,
    'acc_x': 0.18,
    'acc_y': 0.79,
    'acc_z': -0.62,
    'gyro_x': 2.06,
    'gyro_y': -1.62,
    'gyro_z': 0.25,
    'heading': 359.46
  },
  {
    'time': 3680,
    'acc_x': 0.18,
    'acc_y': 0.8,
    'acc_z': -0.62,
    'gyro_x': -1.89,
    'gyro_y': -1.14,
    'gyro_z': -0.25,
    'heading': 1.68
  },
  {
    'time': 3715,
    'acc_x': 0.19,
    'acc_y': 0.79,
    'acc_z': -0.62,
    'gyro_x': -1.73,
    'gyro_y': -0.98,
    'gyro_z': -0.18,
    'heading': 0.56
  },
  {
    'time': 3749,
    'acc_x': 0.19,
    'acc_y': 0.8,
    'acc_z': -0.62,
    'gyro_x': 1.37,
    'gyro_y': -1.53,
    'gyro_z': 0.14,
    'heading': 0.55
  },
  {
    'time': 3784,
    'acc_x': 0.18,
    'acc_y': 0.79,
    'acc_z': -0.63,
    'gyro_x': 0.27,
    'gyro_y': -1.4,
    'gyro_z': -0.12,
    'heading': 1.09
  },
  {
    'time': 3819,
    'acc_x': 0.18,
    'acc_y': 0.79,
    'acc_z': -0.62,
    'gyro_x': -2.12,
    'gyro_y': -0.98,
    'gyro_z': -0.25,
    'heading': 0.84
  },
  {
    'time': 3854,
    'acc_x': 0.19,
    'acc_y': 0.8,
    'acc_z': -0.62,
    'gyro_x': 0.58,
    'gyro_y': -1.27,
    'gyro_z': -0.05,
    'heading': 1.55
  },
  {
    'time': 3889,
    'acc_x': 0.19,
    'acc_y': 0.79,
    'acc_z': -0.63,
    'gyro_x': 0.33,
    'gyro_y': -1.5,
    'gyro_z': 0.04,
    'heading': 1.1
  },
  {
    'time': 3924,
    'acc_x': 0.19,
    'acc_y': 0.79,
    'acc_z': -0.61,
    'gyro_x': -0.95,
    'gyro_y': -1.15,
    'gyro_z': -0.14,
    'heading': 0.14
  },
  {
    'time': 3959,
    'acc_x': 0.19,
    'acc_y': 0.8,
    'acc_z': -0.6,
    'gyro_x': -0.95,
    'gyro_y': -0.95,
    'gyro_z': -0.18,
    'heading': 1.51
  },
  {
    'time': 3994,
    'acc_x': 0.19,
    'acc_y': 0.8,
    'acc_z': -0.61,
    'gyro_x': 1,
    'gyro_y': -1.45,
    'gyro_z': 0.02,
    'heading': 0.14
  },
  {
    'time': 4029,
    'acc_x': 0.19,
    'acc_y': 0.79,
    'acc_z': -0.62,
    'gyro_x': -0.5,
    'gyro_y': -1.15,
    'gyro_z': -0.11,
    'heading': 0.96
  },
  {
    'time': 4064,
    'acc_x': 0.18,
    'acc_y': 0.79,
    'acc_z': -0.61,
    'gyro_x': -1.06,
    'gyro_y': -1.1,
    'gyro_z': -0.14,
    'heading': 0.43
  },
  {
    'time': 4099,
    'acc_x': 0.19,
    'acc_y': 0.8,
    'acc_z': -0.62,
    'gyro_x': 0.89,
    'gyro_y': -1.47,
    'gyro_z': 0.12,
    'heading': 1.26
  },
  {
    'time': 4133,
    'acc_x': 0.19,
    'acc_y': 0.79,
    'acc_z': -0.62,
    'gyro_x': -0.05,
    'gyro_y': -1.35,
    'gyro_z': -0.03,
    'heading': 0.28
  },
  {
    'time': 4169,
    'acc_x': 0.19,
    'acc_y': 0.8,
    'acc_z': -0.62,
    'gyro_x': -1.47,
    'gyro_y': -1.09,
    'gyro_z': -0.21,
    'heading': 0.83
  },
  {
    'time': 4204,
    'acc_x': 0.19,
    'acc_y': 0.79,
    'acc_z': -0.62,
    'gyro_x': 0.25,
    'gyro_y': -1.38,
    'gyro_z': -0.02,
    'heading': 2.09
  },
  {
    'time': 4239,
    'acc_x': 0.19,
    'acc_y': 0.79,
    'acc_z': -0.62,
    'gyro_x': 0.19,
    'gyro_y': -1.3,
    'gyro_z': -0.18,
    'heading': 0.54
  },
  {
    'time': 4274,
    'acc_x': 0.18,
    'acc_y': 0.8,
    'acc_z': -0.62,
    'gyro_x': -0.69,
    'gyro_y': -1.15,
    'gyro_z': -0.24,
    'heading': 1.26
  },
  {
    'time': 4309,
    'acc_x': 0.18,
    'acc_y': 0.8,
    'acc_z': -0.61,
    'gyro_x': -0.74,
    'gyro_y': -1.33,
    'gyro_z': -0.15,
    'heading': 2.32
  },
  {
    'time': 4344,
    'acc_x': 0.2,
    'acc_y': 0.8,
    'acc_z': -0.62,
    'gyro_x': 1.02,
    'gyro_y': -1.54,
    'gyro_z': -0.02,
    'heading': 1.11
  },
  {
    'time': 4379,
    'acc_x': 0.2,
    'acc_y': 0.79,
    'acc_z': -0.61,
    'gyro_x': -1.22,
    'gyro_y': -1.05,
    'gyro_z': -0.15,
    'heading': 1.66
  },
  {
    'time': 4413,
    'acc_x': 0.19,
    'acc_y': 0.8,
    'acc_z': -0.61,
    'gyro_x': -0.73,
    'gyro_y': -1.15,
    'gyro_z': -0.11,
    'heading': 0.83
  },
  {
    'time': 4448,
    'acc_x': 0.19,
    'acc_y': 0.79,
    'acc_z': -0.62,
    'gyro_x': 0.92,
    'gyro_y': -1.46,
    'gyro_z': 0.05,
    'heading': 1.1
  },
  {
    'time': 4483,
    'acc_x': 0.19,
    'acc_y': 0.79,
    'acc_z': -0.61,
    'gyro_x': -0.47,
    'gyro_y': -1.17,
    'gyro_z': -0.09,
    'heading': 0
  },
  {
    'time': 4519,
    'acc_x': 0.18,
    'acc_y': 0.8,
    'acc_z': -0.62,
    'gyro_x': -1.31,
    'gyro_y': -0.82,
    'gyro_z': -0.08,
    'heading': 0.83
  },
  {
    'time': 4553,
    'acc_x': 0.19,
    'acc_y': 0.8,
    'acc_z': -0.62,
    'gyro_x': 0.61,
    'gyro_y': -1.56,
    'gyro_z': 0.02,
    'heading': 1.93
  },
  {
    'time': 4588,
    'acc_x': 0.18,
    'acc_y': 0.8,
    'acc_z': -0.62,
    'gyro_x': -0.08,
    'gyro_y': -1.34,
    'gyro_z': -0.02,
    'heading': 1.78
  },
  {
    'time': 4623,
    'acc_x': 0.19,
    'acc_y': 0.8,
    'acc_z': -0.64,
    'gyro_x': 2.35,
    'gyro_y': -2.02,
    'gyro_z': 0.21,
    'heading': 0.27
  },
  {
    'time': 4658,
    'acc_x': 0.18,
    'acc_y': 0.77,
    'acc_z': -0.62,
    'gyro_x': -5.37,
    'gyro_y': 0.11,
    'gyro_z': -0.49,
    'heading': 0.98
  },
  {
    'time': 4693,
    'acc_x': 0.18,
    'acc_y': 0.81,
    'acc_z': -0.63,
    'gyro_x': 3.98,
    'gyro_y': -2.23,
    'gyro_z': 0.17,
    'heading': 359.44
  },
  {
    'time': 4728,
    'acc_x': 0.19,
    'acc_y': 0.78,
    'acc_z': -0.64,
    'gyro_x': -1.14,
    'gyro_y': -1.17,
    'gyro_z': -0.15,
    'heading': 0.42
  },
  {
    'time': 4763,
    'acc_x': 0.18,
    'acc_y': 0.8,
    'acc_z': -0.61,
    'gyro_x': -0.22,
    'gyro_y': -1.32,
    'gyro_z': -0.27,
    'heading': 359.59
  },
  {
    'time': 4798,
    'acc_x': 0.19,
    'acc_y': 0.78,
    'acc_z': -0.62,
    'gyro_x': -1.34,
    'gyro_y': -0.85,
    'gyro_z': -0.05,
    'heading': 0.41
  },
  {
    'time': 4833,
    'acc_x': 0.19,
    'acc_y': 0.8,
    'acc_z': -0.63,
    'gyro_x': 1.14,
    'gyro_y': -1.69,
    'gyro_z': 0.05,
    'heading': 1.94
  },
  {
    'time': 4867,
    'acc_x': 0.19,
    'acc_y': 0.78,
    'acc_z': -0.62,
    'gyro_x': -0.44,
    'gyro_y': -1.04,
    'gyro_z': 0,
    'heading': 0.56
  },
  {
    'time': 4903,
    'acc_x': 0.18,
    'acc_y': 0.8,
    'acc_z': -0.62,
    'gyro_x': -0.92,
    'gyro_y': -1.14,
    'gyro_z': -0.15,
    'heading': 0.42
  },
  {
    'time': 4938,
    'acc_x': 0.19,
    'acc_y': 0.79,
    'acc_z': -0.62,
    'gyro_x': -0.85,
    'gyro_y': -1.14,
    'gyro_z': -0.15,
    'heading': 0.42
  },
  {
    'time': 4973,
    'acc_x': 0.18,
    'acc_y': 0.81,
    'acc_z': -0.62,
    'gyro_x': 0.7,
    'gyro_y': -1.48,
    'gyro_z': -0.03,
    'heading': 1.92
  },
  {
    'time': 5008,
    'acc_x': 0.18,
    'acc_y': 0.78,
    'acc_z': -0.61,
    'gyro_x': -0.93,
    'gyro_y': -1.05,
    'gyro_z': -0.15,
    'heading': 0.98
  },
  {
    'time': 5043,
    'acc_x': 0.18,
    'acc_y': 0.79,
    'acc_z': -0.62,
    'gyro_x': 0.03,
    'gyro_y': -1.44,
    'gyro_z': -0.02,
    'heading': 0.27
  },
  {
    'time': 5077,
    'acc_x': 0.19,
    'acc_y': 0.79,
    'acc_z': -0.61,
    'gyro_x': -1.85,
    'gyro_y': -0.89,
    'gyro_z': -0.15,
    'heading': 1.64
  },
  {
    'time': 5112,
    'acc_x': 0.19,
    'acc_y': 0.79,
    'acc_z': -0.62,
    'gyro_x': 1.31,
    'gyro_y': -1.6,
    'gyro_z': 0.02,
    'heading': 0.55
  },
  {
    'time': 5147,
    'acc_x': 0.18,
    'acc_y': 0.79,
    'acc_z': -0.61,
    'gyro_x': -0.61,
    'gyro_y': -1.1,
    'gyro_z': -0.11,
    'heading': 0.42
  },
  {
    'time': 5182,
    'acc_x': 0.19,
    'acc_y': 0.8,
    'acc_z': -0.61,
    'gyro_x': -0.32,
    'gyro_y': -1.34,
    'gyro_z': -0.07,
    'heading': 0.14
  },
  {
    'time': 5217,
    'acc_x': 0.19,
    'acc_y': 0.78,
    'acc_z': -0.61,
    'gyro_x': -1.56,
    'gyro_y': -1.04,
    'gyro_z': -0.21,
    'heading': 0.55
  },
  {
    'time': 5253,
    'acc_x': 0.18,
    'acc_y': 0.8,
    'acc_z': -0.64,
    'gyro_x': 2.53,
    'gyro_y': -2.19,
    'gyro_z': 0.15,
    'heading': 2.48
  },
  {
    'time': 5288,
    'acc_x': 0.2,
    'acc_y': 0.79,
    'acc_z': -0.6,
    'gyro_x': -1.66,
    'gyro_y': -0.88,
    'gyro_z': -0.12,
    'heading': 0.96
  },
  {
    'time': 5322,
    'acc_x': 0.18,
    'acc_y': 0.81,
    'acc_z': -0.62,
    'gyro_x': -0.6,
    'gyro_y': -1.1,
    'gyro_z': -0.13,
    'heading': 0.41
  },
  {
    'time': 5357,
    'acc_x': 0.19,
    'acc_y': 0.79,
    'acc_z': -0.63,
    'gyro_x': -0.47,
    'gyro_y': -1.13,
    'gyro_z': 0.02,
    'heading': 0.28
  },
  {
    'time': 5392,
    'acc_x': 0.18,
    'acc_y': 0.79,
    'acc_z': -0.62,
    'gyro_x': 1.05,
    'gyro_y': -1.69,
    'gyro_z': 0.07,
    'heading': 0.55
  },
  {
    'time': 5427,
    'acc_x': 0.18,
    'acc_y': 0.8,
    'acc_z': -0.61,
    'gyro_x': -1.74,
    'gyro_y': -0.92,
    'gyro_z': -0.18,
    'heading': 0.83
  },
  {
    'time': 5462,
    'acc_x': 0.19,
    'acc_y': 0.8,
    'acc_z': -0.62,
    'gyro_x': 0.3,
    'gyro_y': -1.42,
    'gyro_z': 0.1,
    'heading': 1.08
  },
  {
    'time': 5497,
    'acc_x': 0.19,
    'acc_y': 0.79,
    'acc_z': -0.63,
    'gyro_x': -0.15,
    'gyro_y': -1.4,
    'gyro_z': 0,
    'heading': 1.22
  },
  {
    'time': 5532,
    'acc_x': 0.19,
    'acc_y': 0.79,
    'acc_z': -0.63,
    'gyro_x': -0.98,
    'gyro_y': -1.08,
    'gyro_z': -0.19,
    'heading': 1.5
  },
  {
    'time': 5567,
    'acc_x': 0.18,
    'acc_y': 0.79,
    'acc_z': -0.61,
    'gyro_x': 0.08,
    'gyro_y': -1.4,
    'gyro_z': -0.02,
    'heading': 0.42
  },
  {
    'time': 5602,
    'acc_x': 0.18,
    'acc_y': 0.79,
    'acc_z': -0.62,
    'gyro_x': -0.53,
    'gyro_y': -1.2,
    'gyro_z': 0.02,
    'heading': 1.51
  },
  {
    'time': 5636,
    'acc_x': 0.19,
    'acc_y': 0.79,
    'acc_z': -0.62,
    'gyro_x': 0.05,
    'gyro_y': -1.54,
    'gyro_z': -0.06,
    'heading': 0.27
  },
  {
    'time': 5672,
    'acc_x': 0.18,
    'acc_y': 0.79,
    'acc_z': -0.61,
    'gyro_x': -0.5,
    'gyro_y': -0.99,
    'gyro_z': -0.08,
    'heading': 1.11
  },
  {
    'time': 5707,
    'acc_x': 0.18,
    'acc_y': 0.79,
    'acc_z': -0.62,
    'gyro_x': -0.05,
    'gyro_y': -1.29,
    'gyro_z': 0,
    'heading': 359.73
  },
  {
    'time': 5742,
    'acc_x': 0.19,
    'acc_y': 0.79,
    'acc_z': -0.61,
    'gyro_x': -0.17,
    'gyro_y': -1.16,
    'gyro_z': -0.13,
    'heading': 1.64
  },
  {
    'time': 5777,
    'acc_x': 0.18,
    'acc_y': 0.79,
    'acc_z': -0.62,
    'gyro_x': -1.2,
    'gyro_y': -1.02,
    'gyro_z': -0.18,
    'heading': 0.84
  },
  {
    'time': 5812,
    'acc_x': 0.18,
    'acc_y': 0.8,
    'acc_z': -0.61,
    'gyro_x': 0.63,
    'gyro_y': -1.4,
    'gyro_z': 0,
    'heading': 1.09
  },
  {
    'time': 5846,
    'acc_x': 0.19,
    'acc_y': 0.79,
    'acc_z': -0.61,
    'gyro_x': -0.09,
    'gyro_y': -1.34,
    'gyro_z': 0,
    'heading': 2.65
  },
  {
    'time': 5881,
    'acc_x': 0.18,
    'acc_y': 0.8,
    'acc_z': -0.61,
    'gyro_x': -1.37,
    'gyro_y': -1.05,
    'gyro_z': -0.15,
    'heading': 0.41
  },
  {
    'time': 5917,
    'acc_x': 0.19,
    'acc_y': 0.79,
    'acc_z': -0.63,
    'gyro_x': 0.24,
    'gyro_y': -1.37,
    'gyro_z': 0.04,
    'heading': 0.97
  },
  {
    'time': 5952,
    'acc_x': 0.18,
    'acc_y': 0.79,
    'acc_z': -0.62,
    'gyro_x': 0.37,
    'gyro_y': -1.29,
    'gyro_z': 0,
    'heading': 1.62
  },
  {
    'time': 5986,
    'acc_x': 0.19,
    'acc_y': 0.8,
    'acc_z': -0.61,
    'gyro_x': -0.59,
    'gyro_y': -1.16,
    'gyro_z': -0.17,
    'heading': 0.55
  },
  {
    'time': 6021,
    'acc_x': 0.18,
    'acc_y': 0.79,
    'acc_z': -0.61,
    'gyro_x': -0.61,
    'gyro_y': -1.31,
    'gyro_z': -0.11,
    'heading': 0.83
  },
  {
    'time': 6056,
    'acc_x': 0.18,
    'acc_y': 0.79,
    'acc_z': -0.62,
    'gyro_x': 0.05,
    'gyro_y': -1.39,
    'gyro_z': -0.06,
    'heading': 0.95
  },
  {
    'time': 6091,
    'acc_x': 0.18,
    'acc_y': 0.8,
    'acc_z': -0.61,
    'gyro_x': 0.03,
    'gyro_y': -1.27,
    'gyro_z': 0,
    'heading': 359.04
  },
  {
    'time': 6126,
    'acc_x': 0.19,
    'acc_y': 0.79,
    'acc_z': -0.62,
    'gyro_x': -1.37,
    'gyro_y': -0.9,
    'gyro_z': 0.01,
    'heading': 1.79
  },
  {
    'time': 6161,
    'acc_x': 0.19,
    'acc_y': 0.79,
    'acc_z': -0.62,
    'gyro_x': 0.94,
    'gyro_y': -1.3,
    'gyro_z': 0.11,
    'heading': 2.04
  },
  {
    'time': 6196,
    'acc_x': 0.18,
    'acc_y': 0.79,
    'acc_z': -0.62,
    'gyro_x': -0.95,
    'gyro_y': -1.09,
    'gyro_z': -0.03,
    'heading': 1.66
  },
  {
    'time': 6231,
    'acc_x': 0.18,
    'acc_y': 0.81,
    'acc_z': -0.6,
    'gyro_x': -0.58,
    'gyro_y': -1.03,
    'gyro_z': -0.05,
    'heading': 0.41
  },
  {
    'time': 6266,
    'acc_x': 0.19,
    'acc_y': 0.8,
    'acc_z': -0.63,
    'gyro_x': 1.12,
    'gyro_y': -1.54,
    'gyro_z': 0.01,
    'heading': 0.83
  },
  {
    'time': 6301,
    'acc_x': 0.19,
    'acc_y': 0.8,
    'acc_z': -0.64,
    'gyro_x': -1.76,
    'gyro_y': -1.02,
    'gyro_z': -0.22,
    'heading': 0.14
  },
  {
    'time': 6336,
    'acc_x': 0.19,
    'acc_y': 0.8,
    'acc_z': -0.61,
    'gyro_x': -0.73,
    'gyro_y': -1.15,
    'gyro_z': -0.18,
    'heading': 0.82
  },
  {
    'time': 6371,
    'acc_x': 0.19,
    'acc_y': 0.81,
    'acc_z': -0.62,
    'gyro_x': 1.79,
    'gyro_y': -1.59,
    'gyro_z': 0.09,
    'heading': 359.58
  },
  {
    'time': 6406,
    'acc_x': 0.18,
    'acc_y': 0.79,
    'acc_z': -0.61,
    'gyro_x': -0.41,
    'gyro_y': -0.98,
    'gyro_z': -0.02,
    'heading': 0.82
  },
  {
    'time': 6441,
    'acc_x': 0.17,
    'acc_y': 0.81,
    'acc_z': -0.61,
    'gyro_x': -1.5,
    'gyro_y': -0.76,
    'gyro_z': -0.12,
    'heading': 2.37
  },
  {
    'time': 6476,
    'acc_x': 0.18,
    'acc_y': 0.8,
    'acc_z': -0.62,
    'gyro_x': 0.19,
    'gyro_y': -1.31,
    'gyro_z': -0.05,
    'heading': 0.55
  },
  {
    'time': 6511,
    'acc_x': 0.19,
    'acc_y': 0.79,
    'acc_z': -0.62,
    'gyro_x': -0.98,
    'gyro_y': -0.95,
    'gyro_z': -0.12,
    'heading': 1.52
  },
  {
    'time': 6546,
    'acc_x': 0.18,
    'acc_y': 0.8,
    'acc_z': -0.62,
    'gyro_x': 1.98,
    'gyro_y': -1.73,
    'gyro_z': 0.08,
    'heading': 0.27
  },
  {
    'time': 6581,
    'acc_x': 0.18,
    'acc_y': 0.79,
    'acc_z': -0.63,
    'gyro_x': -1.16,
    'gyro_y': -0.95,
    'gyro_z': -0.18,
    'heading': 2.45
  },
  {
    'time': 6615,
    'acc_x': 0.17,
    'acc_y': 0.78,
    'acc_z': -0.6,
    'gyro_x': -3.66,
    'gyro_y': -0.57,
    'gyro_z': -0.33,
    'heading': 1.54
  },
  {
    'time': 6650,
    'acc_x': 0.2,
    'acc_y': 0.81,
    'acc_z': -0.63,
    'gyro_x': 4.72,
    'gyro_y': -2.39,
    'gyro_z': 0.18,
    'heading': 1.66
  },
  {
    'time': 6685,
    'acc_x': 0.19,
    'acc_y': 0.79,
    'acc_z': -0.61,
    'gyro_x': -2.42,
    'gyro_y': -0.62,
    'gyro_z': -0.34,
    'heading': 1.53
  },
  {
    'time': 6720,
    'acc_x': 0.18,
    'acc_y': 0.8,
    'acc_z': -0.61,
    'gyro_x': -1.97,
    'gyro_y': -0.82,
    'gyro_z': -0.21,
    'heading': 0.55
  },
  {
    'time': 6755,
    'acc_x': 0.19,
    'acc_y': 0.8,
    'acc_z': -0.62,
    'gyro_x': 2.35,
    'gyro_y': -1.69,
    'gyro_z': 0.17,
    'heading': 0.97
  },
  {
    'time': 6791,
    'acc_x': 0.18,
    'acc_y': 0.79,
    'acc_z': -0.62,
    'gyro_x': -0.19,
    'gyro_y': -1.35,
    'gyro_z': -0.08,
    'heading': 1.09
  },
  {
    'time': 6826,
    'acc_x': 0.2,
    'acc_y': 0.79,
    'acc_z': -0.62,
    'gyro_x': -2.89,
    'gyro_y': -0.63,
    'gyro_z': -0.26,
    'heading': 1.13
  },
  {
    'time': 6860,
    'acc_x': 0.19,
    'acc_y': 0.8,
    'acc_z': -0.61,
    'gyro_x': 0.06,
    'gyro_y': -1.37,
    'gyro_z': 0.02,
    'heading': 0.95
  },
  {
    'time': 6895,
    'acc_x': 0.19,
    'acc_y': 0.79,
    'acc_z': -0.63,
    'gyro_x': 2.24,
    'gyro_y': -1.79,
    'gyro_z': 0.23,
    'heading': 359.72
  },
  {
    'time': 6930,
    'acc_x': 0.18,
    'acc_y': 0.8,
    'acc_z': -0.62,
    'gyro_x': -2.5,
    'gyro_y': -0.88,
    'gyro_z': -0.24,
    'heading': 0.82
  },
  {
    'time': 6965,
    'acc_x': 0.19,
    'acc_y': 0.79,
    'acc_z': -0.6,
    'gyro_x': -1.3,
    'gyro_y': -1.1,
    'gyro_z': -0.15,
    'heading': 1.12
  },
  {
    'time': 7000,
    'acc_x': 0.18,
    'acc_y': 0.8,
    'acc_z': -0.62,
    'gyro_x': 3.08,
    'gyro_y': -1.82,
    'gyro_z': 0.23,
    'heading': 0.99
  },
  {
    'time': 7035,
    'acc_x': 0.19,
    'acc_y': 0.8,
    'acc_z': -0.62,
    'gyro_x': -1.33,
    'gyro_y': -1.1,
    'gyro_z': -0.04,
    'heading': 1.68
  },
  {
    'time': 7070,
    'acc_x': 0.19,
    'acc_y': 0.77,
    'acc_z': -0.62,
    'gyro_x': -1.92,
    'gyro_y': -0.83,
    'gyro_z': -0.13,
    'heading': 0.42
  },
  {
    'time': 7105,
    'acc_x': 0.19,
    'acc_y': 0.78,
    'acc_z': -0.62,
    'gyro_x': 0.97,
    'gyro_y': -1.58,
    'gyro_z': 0.05,
    'heading': 1.21
  },
  {
    'time': 7140,
    'acc_x': 0.19,
    'acc_y': 0.82,
    'acc_z': -0.62,
    'gyro_x': 0.31,
    'gyro_y': -1.37,
    'gyro_z': 0.03,
    'heading': 1.92
  },
  {
    'time': 7175,
    'acc_x': 0.19,
    'acc_y': 0.78,
    'acc_z': -0.62,
    'gyro_x': 0.76,
    'gyro_y': -1.44,
    'gyro_z': 0.02,
    'heading': 1.23
  },
  {
    'time': 7209,
    'acc_x': 0.18,
    'acc_y': 0.79,
    'acc_z': -0.63,
    'gyro_x': -1.78,
    'gyro_y': -1.1,
    'gyro_z': -0.14,
    'heading': 2.49
  },
  {
    'time': 7244,
    'acc_x': 0.19,
    'acc_y': 0.79,
    'acc_z': -0.61,
    'gyro_x': -2.19,
    'gyro_y': -0.76,
    'gyro_z': -0.27,
    'heading': 1.09
  },
  {
    'time': 7280,
    'acc_x': 0.19,
    'acc_y': 0.8,
    'acc_z': -0.61,
    'gyro_x': 2.3,
    'gyro_y': -1.78,
    'gyro_z': 0.14,
    'heading': 0.14
  },
  {
    'time': 7315,
    'acc_x': 0.19,
    'acc_y': 0.79,
    'acc_z': -0.61,
    'gyro_x': -0.56,
    'gyro_y': -1.15,
    'gyro_z': -0.05,
    'heading': 0.14
  },
  {
    'time': 7350,
    'acc_x': 0.18,
    'acc_y': 0.79,
    'acc_z': -0.61,
    'gyro_x': -1.62,
    'gyro_y': -0.97,
    'gyro_z': -0.22,
    'heading': 2.77
  },
  {
    'time': 7385,
    'acc_x': 0.18,
    'acc_y': 0.79,
    'acc_z': -0.61,
    'gyro_x': 0.48,
    'gyro_y': -1.28,
    'gyro_z': -0.02,
    'heading': 1.53
  },
  {
    'time': 7420,
    'acc_x': 0.19,
    'acc_y': 0.79,
    'acc_z': -0.62,
    'gyro_x': 1.19,
    'gyro_y': -1.59,
    'gyro_z': 0.11,
    'heading': 1.64
  },
  {
    'time': 7455,
    'acc_x': 0.18,
    'acc_y': 0.8,
    'acc_z': -0.62,
    'gyro_x': -1.87,
    'gyro_y': -0.96,
    'gyro_z': -0.23,
    'heading': 1.64
  },
  {
    'time': 7489,
    'acc_x': 0.19,
    'acc_y': 0.79,
    'acc_z': -0.61,
    'gyro_x': -1.58,
    'gyro_y': -0.98,
    'gyro_z': -0.31,
    'heading': 359.59
  },
  {
    'time': 7524,
    'acc_x': 0.19,
    'acc_y': 0.8,
    'acc_z': -0.62,
    'gyro_x': 1.36,
    'gyro_y': -1.42,
    'gyro_z': -0.04,
    'heading': 2.07
  },
  {
    'time': 7559,
    'acc_x': 0.18,
    'acc_y': 0.79,
    'acc_z': -0.63,
    'gyro_x': 0.5,
    'gyro_y': -1.32,
    'gyro_z': -0.04,
    'heading': 0.83
  },
  {
    'time': 7594,
    'acc_x': 0.19,
    'acc_y': 0.79,
    'acc_z': -0.62,
    'gyro_x': -2.37,
    'gyro_y': -0.89,
    'gyro_z': -0.23,
    'heading': 0.14
  },
  {
    'time': 7629,
    'acc_x': 0.19,
    'acc_y': 0.79,
    'acc_z': -0.61,
    'gyro_x': 0.6,
    'gyro_y': -1.37,
    'gyro_z': 0.05,
    'heading': 0.55
  },
  {
    'time': 7664,
    'acc_x': 0.19,
    'acc_y': 0.8,
    'acc_z': -0.62,
    'gyro_x': 0.16,
    'gyro_y': -1.45,
    'gyro_z': -0.02,
    'heading': 1.66
  },
  {
    'time': 7699,
    'acc_x': 0.19,
    'acc_y': 0.78,
    'acc_z': -0.62,
    'gyro_x': -1.08,
    'gyro_y': -1.11,
    'gyro_z': -0.11,
    'heading': 0.83
  },
  {
    'time': 7734,
    'acc_x': 0.2,
    'acc_y': 0.79,
    'acc_z': -0.61,
    'gyro_x': -1.13,
    'gyro_y': -1.04,
    'gyro_z': -0.08,
    'heading': 0.96
  },
  {
    'time': 7769,
    'acc_x': 0.18,
    'acc_y': 0.8,
    'acc_z': -0.61,
    'gyro_x': 0.95,
    'gyro_y': -1.4,
    'gyro_z': 0.08,
    'heading': 0.96
  },
  {
    'time': 7804,
    'acc_x': 0.18,
    'acc_y': 0.79,
    'acc_z': -0.61,
    'gyro_x': 0.13,
    'gyro_y': -1.35,
    'gyro_z': -0.02,
    'heading': 1.66
  },
  {
    'time': 7839,
    'acc_x': 0.19,
    'acc_y': 0.79,
    'acc_z': -0.61,
    'gyro_x': -1.32,
    'gyro_y': -0.95,
    'gyro_z': -0.09,
    'heading': 0.82
  },
  {
    'time': 7874,
    'acc_x': 0.19,
    'acc_y': 0.79,
    'acc_z': -0.61,
    'gyro_x': -0.24,
    'gyro_y': -1.27,
    'gyro_z': -0.08,
    'heading': 0.42
  },
  {
    'time': 7909,
    'acc_x': 0.18,
    'acc_y': 0.79,
    'acc_z': -0.61,
    'gyro_x': 0.72,
    'gyro_y': -1.4,
    'gyro_z': 0.06,
    'heading': 2.49
  },
  {
    'time': 7944,
    'acc_x': 0.19,
    'acc_y': 0.8,
    'acc_z': -0.62,
    'gyro_x': -0.95,
    'gyro_y': -1.11,
    'gyro_z': -0.14,
    'heading': 0.82
  },
  {
    'time': 7979,
    'acc_x': 0.19,
    'acc_y': 0.8,
    'acc_z': -0.62,
    'gyro_x': -0.71,
    'gyro_y': -1.27,
    'gyro_z': -0.15,
    'heading': 0.55
  },
  {
    'time': 8014,
    'acc_x': 0.19,
    'acc_y': 0.8,
    'acc_z': -0.63,
    'gyro_x': 0.44,
    'gyro_y': -1.37,
    'gyro_z': 0,
    'heading': 1.51
  },
  {
    'time': 8048,
    'acc_x': 0.18,
    'acc_y': 0.79,
    'acc_z': -0.63,
    'gyro_x': -0.11,
    'gyro_y': -1.37,
    'gyro_z': 0.01,
    'heading': 1.09
  },
  {
    'time': 8083,
    'acc_x': 0.18,
    'acc_y': 0.79,
    'acc_z': -0.6,
    'gyro_x': -1.29,
    'gyro_y': -1.2,
    'gyro_z': -0.11,
    'heading': 1.66
  },
  {
    'time': 8119,
    'acc_x': 0.19,
    'acc_y': 0.79,
    'acc_z': -0.6,
    'gyro_x': -0.08,
    'gyro_y': -1.38,
    'gyro_z': 0.02,
    'heading': 0.56
  },
  {
    'time': 8154,
    'acc_x': 0.19,
    'acc_y': 0.81,
    'acc_z': -0.61,
    'gyro_x': -0.01,
    'gyro_y': -1.17,
    'gyro_z': -0.11,
    'heading': 0.99
  },
  {
    'time': 8189,
    'acc_x': 0.19,
    'acc_y': 0.79,
    'acc_z': -0.61,
    'gyro_x': -0.51,
    'gyro_y': -1.3,
    'gyro_z': -0.06,
    'heading': 1.11
  },
  {
    'time': 8224,
    'acc_x': 0.19,
    'acc_y': 0.79,
    'acc_z': -0.61,
    'gyro_x': -0.29,
    'gyro_y': -1.2,
    'gyro_z': -0.06,
    'heading': 0.42
  },
  {
    'time': 8259,
    'acc_x': 0.19,
    'acc_y': 0.79,
    'acc_z': -0.61,
    'gyro_x': 0.19,
    'gyro_y': -1.28,
    'gyro_z': -0.17,
    'heading': 0
  },
  {
    'time': 8293,
    'acc_x': 0.19,
    'acc_y': 0.8,
    'acc_z': -0.63,
    'gyro_x': -0.75,
    'gyro_y': -1.16,
    'gyro_z': -0.05,
    'heading': 3.22
  },
  {
    'time': 8328,
    'acc_x': 0.19,
    'acc_y': 0.79,
    'acc_z': -0.61,
    'gyro_x': -0.59,
    'gyro_y': -1.13,
    'gyro_z': -0.12,
    'heading': 0.55
  },
  {
    'time': 8364,
    'acc_x': 0.19,
    'acc_y': 0.8,
    'acc_z': -0.62,
    'gyro_x': 0.08,
    'gyro_y': -1.39,
    'gyro_z': 0.02,
    'heading': 1.09
  },
  {
    'time': 8399,
    'acc_x': 0.19,
    'acc_y': 0.79,
    'acc_z': -0.62,
    'gyro_x': -0.27,
    'gyro_y': -1.3,
    'gyro_z': -0.11,
    'heading': 0.83
  },
  {
    'time': 8433,
    'acc_x': 0.19,
    'acc_y': 0.8,
    'acc_z': -0.63,
    'gyro_x': -0.87,
    'gyro_y': -1.13,
    'gyro_z': -0.15,
    'heading': 0.28
  },
  {
    'time': 8468,
    'acc_x': 0.18,
    'acc_y': 0.8,
    'acc_z': -0.62,
    'gyro_x': 0.24,
    'gyro_y': -1.26,
    'gyro_z': 0,
    'heading': 1.51
  },
  {
    'time': 8503,
    'acc_x': 0.19,
    'acc_y': 0.79,
    'acc_z': -0.61,
    'gyro_x': -0.27,
    'gyro_y': -1.21,
    'gyro_z': 0.03,
    'heading': 0.83
  },
  {
    'time': 8538,
    'acc_x': 0.19,
    'acc_y': 0.79,
    'acc_z': -0.61,
    'gyro_x': -0.72,
    'gyro_y': -1.15,
    'gyro_z': -0.12,
    'heading': 1.54
  },
  {
    'time': 8573,
    'acc_x': 0.18,
    'acc_y': 0.79,
    'acc_z': -0.62,
    'gyro_x': -0.08,
    'gyro_y': -1.24,
    'gyro_z': -0.06,
    'heading': 1.55
  },
  {
    'time': 8608,
    'acc_x': 0.19,
    'acc_y': 0.79,
    'acc_z': -0.61,
    'gyro_x': -0.16,
    'gyro_y': -1.35,
    'gyro_z': -0.02,
    'heading': 0.43
  },
  {
    'time': 8643,
    'acc_x': 0.18,
    'acc_y': 0.79,
    'acc_z': -0.62,
    'gyro_x': -0.35,
    'gyro_y': -1.22,
    'gyro_z': 0.04,
    'heading': 0.14
  },
  {
    'time': 8678,
    'acc_x': 0.19,
    'acc_y': 0.79,
    'acc_z': -0.61,
    'gyro_x': -0.45,
    'gyro_y': -1.16,
    'gyro_z': 0,
    'heading': 1.8
  },
  {
    'time': 8713,
    'acc_x': 0.18,
    'acc_y': 0.79,
    'acc_z': -0.62,
    'gyro_x': -0.29,
    'gyro_y': -1.24,
    'gyro_z': -0.07,
    'heading': 0.42
  },
  {
    'time': 8748,
    'acc_x': 0.19,
    'acc_y': 0.78,
    'acc_z': -0.62,
    'gyro_x': -0.29,
    'gyro_y': -1.27,
    'gyro_z': 0.02,
    'heading': 1.26
  },
  {
    'time': 8783,
    'acc_x': 0.18,
    'acc_y': 0.8,
    'acc_z': -0.61,
    'gyro_x': -0.6,
    'gyro_y': -0.97,
    'gyro_z': -0.09,
    'heading': 0.41
  },
  {
    'time': 8817,
    'acc_x': 0.19,
    'acc_y': 0.79,
    'acc_z': -0.61,
    'gyro_x': -0.08,
    'gyro_y': -1.4,
    'gyro_z': -0.02,
    'heading': 359.59
  },
  {
    'time': 8852,
    'acc_x': 0.2,
    'acc_y': 0.79,
    'acc_z': -0.61,
    'gyro_x': -0.38,
    'gyro_y': -1.16,
    'gyro_z': -0.06,
    'heading': 2.08
  },
  {
    'time': 8887,
    'acc_x': 0.19,
    'acc_y': 0.79,
    'acc_z': -0.62,
    'gyro_x': -0.4,
    'gyro_y': -1.25,
    'gyro_z': -0.11,
    'heading': 0.42
  },
  {
    'time': 8923,
    'acc_x': 0.19,
    'acc_y': 0.79,
    'acc_z': -0.62,
    'gyro_x': -0.23,
    'gyro_y': -1.15,
    'gyro_z': 0,
    'heading': 1.81
  },
  {
    'time': 8958,
    'acc_x': 0.18,
    'acc_y': 0.79,
    'acc_z': -0.62,
    'gyro_x': -0.24,
    'gyro_y': -1.29,
    'gyro_z': -0.12,
    'heading': 359.72
  },
  {
    'time': 8993,
    'acc_x': 0.19,
    'acc_y': 0.79,
    'acc_z': -0.62,
    'gyro_x': -0.38,
    'gyro_y': -1.28,
    'gyro_z': -0.09,
    'heading': 1.96
  },
  {
    'time': 9028,
    'acc_x': 0.19,
    'acc_y': 0.79,
    'acc_z': -0.62,
    'gyro_x': -0.2,
    'gyro_y': -1.21,
    'gyro_z': -0.15,
    'heading': 0.98
  },
  {
    'time': 9062,
    'acc_x': 0.18,
    'acc_y': 0.8,
    'acc_z': -0.61,
    'gyro_x': -0.08,
    'gyro_y': -1.16,
    'gyro_z': -0.09,
    'heading': 359.72
  },
  {
    'time': 9097,
    'acc_x': 0.2,
    'acc_y': 0.79,
    'acc_z': -0.62,
    'gyro_x': -0.48,
    'gyro_y': -1.27,
    'gyro_z': -0.09,
    'heading': 0.41
  },
  {
    'time': 9132,
    'acc_x': 0.18,
    'acc_y': 0.79,
    'acc_z': -0.63,
    'gyro_x': -0.36,
    'gyro_y': -1.18,
    'gyro_z': -0.05,
    'heading': 0.28
  },
  {
    'time': 9167,
    'acc_x': 0.19,
    'acc_y': 0.8,
    'acc_z': -0.6,
    'gyro_x': -0.12,
    'gyro_y': -1.11,
    'gyro_z': -0.05,
    'heading': 1.11
  },
  {
    'time': 9202,
    'acc_x': 0.19,
    'acc_y': 0.79,
    'acc_z': -0.61,
    'gyro_x': -0.37,
    'gyro_y': -1.27,
    'gyro_z': -0.2,
    'heading': 0
  },
  {
    'time': 9237,
    'acc_x': 0.19,
    'acc_y': 0.79,
    'acc_z': -0.62,
    'gyro_x': -0.19,
    'gyro_y': -1.3,
    'gyro_z': -0.05,
    'heading': 0.55
  },
  {
    'time': 9272,
    'acc_x': 0.18,
    'acc_y': 0.81,
    'acc_z': -0.61,
    'gyro_x': 0.09,
    'gyro_y': -1.25,
    'gyro_z': -0.13,
    'heading': 0.41
  },
  {
    'time': 9307,
    'acc_x': 0.19,
    'acc_y': 0.8,
    'acc_z': -0.63,
    'gyro_x': -0.47,
    'gyro_y': -1.21,
    'gyro_z': -0.09,
    'heading': 359.58
  },
  {
    'time': 9342,
    'acc_x': 0.19,
    'acc_y': 0.8,
    'acc_z': -0.61,
    'gyro_x': -0.46,
    'gyro_y': -1.08,
    'gyro_z': -0.18,
    'heading': 0.84
  },
  {
    'time': 9377,
    'acc_x': 0.19,
    'acc_y': 0.79,
    'acc_z': -0.61,
    'gyro_x': -0.14,
    'gyro_y': -1.15,
    'gyro_z': 0,
    'heading': 0.42
  },
  {
    'time': 9412,
    'acc_x': 0.18,
    'acc_y': 0.8,
    'acc_z': -0.61,
    'gyro_x': -0.27,
    'gyro_y': -1.26,
    'gyro_z': -0.2,
    'heading': 1.66
  },
  {
    'time': 9447,
    'acc_x': 0.18,
    'acc_y': 0.79,
    'acc_z': -0.62,
    'gyro_x': -0.5,
    'gyro_y': -1.15,
    'gyro_z': -0.07,
    'heading': 0.41
  },
  {
    'time': 9482,
    'acc_x': 0.19,
    'acc_y': 0.8,
    'acc_z': -0.62,
    'gyro_x': -0.17,
    'gyro_y': -1.3,
    'gyro_z': -0.11,
    'heading': 0.27
  },
  {
    'time': 9516,
    'acc_x': 0.18,
    'acc_y': 0.8,
    'acc_z': -0.62,
    'gyro_x': -0.12,
    'gyro_y': -1.13,
    'gyro_z': -0.02,
    'heading': 1.23
  },
  {
    'time': 9551,
    'acc_x': 0.18,
    'acc_y': 0.79,
    'acc_z': -0.61,
    'gyro_x': -0.37,
    'gyro_y': -1.24,
    'gyro_z': -0.05,
    'heading': 0.83
  },
  {
    'time': 9587,
    'acc_x': 0.18,
    'acc_y': 0.79,
    'acc_z': -0.62,
    'gyro_x': -0.41,
    'gyro_y': -1.07,
    'gyro_z': -0.07,
    'heading': 0.57
  },
  {
    'time': 9622,
    'acc_x': 0.19,
    'acc_y': 0.8,
    'acc_z': -0.62,
    'gyro_x': -0.21,
    'gyro_y': -1.23,
    'gyro_z': -0.1,
    'heading': 1.78
  },
  {
    'time': 9657,
    'acc_x': 0.18,
    'acc_y': 0.79,
    'acc_z': -0.62,
    'gyro_x': -0.46,
    'gyro_y': -1.18,
    'gyro_z': -0.03,
    'heading': 0.27
  },
  {
    'time': 9692,
    'acc_x': 0.18,
    'acc_y': 0.8,
    'acc_z': -0.61,
    'gyro_x': -0.24,
    'gyro_y': -1.27,
    'gyro_z': -0.06,
    'heading': 359.72
  },
  {
    'time': 9727,
    'acc_x': 0.2,
    'acc_y': 0.79,
    'acc_z': -0.61,
    'gyro_x': -0.15,
    'gyro_y': -1.25,
    'gyro_z': -0.05,
    'heading': 0
  },
  {
    'time': 9761,
    'acc_x': 0.19,
    'acc_y': 0.8,
    'acc_z': -0.61,
    'gyro_x': -0.54,
    'gyro_y': -1.17,
    'gyro_z': -0.17,
    'heading': 1.09
  },
  {
    'time': 9796,
    'acc_x': 0.18,
    'acc_y': 0.8,
    'acc_z': -0.62,
    'gyro_x': -0.37,
    'gyro_y': -1.26,
    'gyro_z': -0.14,
    'heading': 0.28
  },
  {
    'time': 9831,
    'acc_x': 0.19,
    'acc_y': 0.79,
    'acc_z': -0.62,
    'gyro_x': -0.13,
    'gyro_y': -1.19,
    'gyro_z': 0,
    'heading': 0.54
  },
  {
    'time': 9867,
    'acc_x': 0.19,
    'acc_y': 0.79,
    'acc_z': -0.61,
    'gyro_x': -0.21,
    'gyro_y': -1.34,
    'gyro_z': -0.05,
    'heading': 0
  },
  {
    'time': 9901,
    'acc_x': 0.19,
    'acc_y': 0.8,
    'acc_z': -0.6,
    'gyro_x': -0.65,
    'gyro_y': -1.18,
    'gyro_z': -0.05,
    'heading': 0.28
  },
  {
    'time': 9936,
    'acc_x': 0.19,
    'acc_y': 0.79,
    'acc_z': -0.62,
    'gyro_x': -0.08,
    'gyro_y': -1.32,
    'gyro_z': -0.15,
    'heading': 0.41
  },
  {
    'time': 9971,
    'acc_x': 0.19,
    'acc_y': 0.79,
    'acc_z': -0.62,
    'gyro_x': 0.08,
    'gyro_y': -1.34,
    'gyro_z': -0.03,
    'heading': 0.56
  },
  {
    'time': 10007,
    'acc_x': 0.18,
    'acc_y': 0.79,
    'acc_z': -0.61,
    'gyro_x': -0.5,
    'gyro_y': -1.18,
    'gyro_z': -0.09,
    'heading': 1.64
  },
  {
    'time': 10041,
    'acc_x': 0.18,
    'acc_y': 0.79,
    'acc_z': -0.61,
    'gyro_x': -0.46,
    'gyro_y': -1.26,
    'gyro_z': -0.07,
    'heading': 0.56
  },
  {
    'time': 10076,
    'acc_x': 0.19,
    'acc_y': 0.79,
    'acc_z': -0.61,
    'gyro_x': -0.1,
    'gyro_y': -1.34,
    'gyro_z': -0.04,
    'heading': 1.52
  },
  {
    'time': 10111,
    'acc_x': 0.19,
    'acc_y': 0.79,
    'acc_z': -0.61,
    'gyro_x': -0.35,
    'gyro_y': -1.27,
    'gyro_z': -0.19,
    'heading': 359.45
  },
  {
    'time': 10146,
    'acc_x': 0.19,
    'acc_y': 0.78,
    'acc_z': -0.61,
    'gyro_x': -0.6,
    'gyro_y': -1.08,
    'gyro_z': -0.08,
    'heading': 0.95
  },
  {
    'time': 10181,
    'acc_x': 0.19,
    'acc_y': 0.8,
    'acc_z': -0.61,
    'gyro_x': -0.04,
    'gyro_y': -1.31,
    'gyro_z': -0.03,
    'heading': 0.82
  },
  {
    'time': 10216,
    'acc_x': 0.18,
    'acc_y': 0.8,
    'acc_z': -0.62,
    'gyro_x': -0.1,
    'gyro_y': -1.34,
    'gyro_z': -0.08,
    'heading': 359.44
  },
  {
    'time': 10251,
    'acc_x': 0.18,
    'acc_y': 0.8,
    'acc_z': -0.62,
    'gyro_x': -0.52,
    'gyro_y': -1.24,
    'gyro_z': 0.03,
    'heading': 0.55
  },
  {
    'time': 10285,
    'acc_x': 0.18,
    'acc_y': 0.8,
    'acc_z': -0.62,
    'gyro_x': -0.35,
    'gyro_y': -1.32,
    'gyro_z': 0.03,
    'heading': 0.14
  },
  {
    'time': 10321,
    'acc_x': 0.18,
    'acc_y': 0.79,
    'acc_z': -0.61,
    'gyro_x': 0.03,
    'gyro_y': -1.25,
    'gyro_z': 0.05,
    'heading': 0.83
  },
  {
    'time': 10356,
    'acc_x': 0.19,
    'acc_y': 0.79,
    'acc_z': -0.61,
    'gyro_x': -0.66,
    'gyro_y': -1.32,
    'gyro_z': -0.11,
    'heading': 0.55
  },
  {
    'time': 10391,
    'acc_x': 0.19,
    'acc_y': 0.79,
    'acc_z': -0.61,
    'gyro_x': -0.27,
    'gyro_y': -1.2,
    'gyro_z': -0.1,
    'heading': 1.09
  },
  {
    'time': 10426,
    'acc_x': 0.19,
    'acc_y': 0.81,
    'acc_z': -0.63,
    'gyro_x': 0.12,
    'gyro_y': -1.34,
    'gyro_z': -0.08,
    'heading': 0.84
  },
  {
    'time': 10461,
    'acc_x': 0.19,
    'acc_y': 0.8,
    'acc_z': -0.62,
    'gyro_x': -0.46,
    'gyro_y': -1.03,
    'gyro_z': -0.16,
    'heading': 0.28
  },
  {
    'time': 10496,
    'acc_x': 0.18,
    'acc_y': 0.79,
    'acc_z': -0.62,
    'gyro_x': -0.35,
    'gyro_y': -1.36,
    'gyro_z': -0.05,
    'heading': 2.3
  },
  {
    'time': 10531,
    'acc_x': 0.19,
    'acc_y': 0.8,
    'acc_z': -0.62,
    'gyro_x': -0.02,
    'gyro_y': -1.34,
    'gyro_z': -0.18,
    'heading': 0.95
  },
  {
    'time': 10565,
    'acc_x': 0.19,
    'acc_y': 0.79,
    'acc_z': -0.61,
    'gyro_x': -0.51,
    'gyro_y': -1.36,
    'gyro_z': -0.02,
    'heading': 1.25
  },
  {
    'time': 10600,
    'acc_x': 0.19,
    'acc_y': 0.79,
    'acc_z': -0.61,
    'gyro_x': -0.73,
    'gyro_y': -1.07,
    'gyro_z': -0.11,
    'heading': 0.28
  },
  {
    'time': 10635,
    'acc_x': 0.19,
    'acc_y': 0.79,
    'acc_z': -0.61,
    'gyro_x': -0.1,
    'gyro_y': -1.32,
    'gyro_z': 0.07,
    'heading': 2.08
  },
  {
    'time': 10670,
    'acc_x': 0.19,
    'acc_y': 0.8,
    'acc_z': -0.61,
    'gyro_x': -0.09,
    'gyro_y': -1.23,
    'gyro_z': -0.02,
    'heading': 0.83
  },
  {
    'time': 10705,
    'acc_x': 0.19,
    'acc_y': 0.8,
    'acc_z': -0.62,
    'gyro_x': -0.58,
    'gyro_y': -1.21,
    'gyro_z': -0.07,
    'heading': 359.46
  },
  {
    'time': 10740,
    'acc_x': 0.18,
    'acc_y': 0.79,
    'acc_z': -0.6,
    'gyro_x': -0.27,
    'gyro_y': -1.15,
    'gyro_z': -0.06,
    'heading': 0.56
  },
  {
    'time': 10776,
    'acc_x': 0.19,
    'acc_y': 0.8,
    'acc_z': -0.61,
    'gyro_x': -0.16,
    'gyro_y': -1.2,
    'gyro_z': -0.02,
    'heading': 0.55
  },
  {
    'time': 10811,
    'acc_x': 0.18,
    'acc_y': 0.79,
    'acc_z': -0.62,
    'gyro_x': -0.58,
    'gyro_y': -1.15,
    'gyro_z': -0.05,
    'heading': 0.95
  },
  {
    'time': 10845,
    'acc_x': 0.19,
    'acc_y': 0.79,
    'acc_z': -0.61,
    'gyro_x': -0.28,
    'gyro_y': -1.37,
    'gyro_z': -0.05,
    'heading': 1.93
  },
  {
    'time': 10880,
    'acc_x': 0.18,
    'acc_y': 0.8,
    'acc_z': -0.62,
    'gyro_x': 0.08,
    'gyro_y': -1.21,
    'gyro_z': -0.05,
    'heading': 0.83
  },
  {
    'time': 10915,
    'acc_x': 0.18,
    'acc_y': 0.79,
    'acc_z': -0.61,
    'gyro_x': -0.33,
    'gyro_y': -1.21,
    'gyro_z': -0.04,
    'heading': 1.8
  },
  {
    'time': 10950,
    'acc_x': 0.18,
    'acc_y': 0.8,
    'acc_z': -0.6,
    'gyro_x': -0.79,
    'gyro_y': -1.15,
    'gyro_z': -0.15,
    'heading': 1.09
  },
  {
    'time': 10985,
    'acc_x': 0.19,
    'acc_y': 0.79,
    'acc_z': -0.61,
    'gyro_x': -0.16,
    'gyro_y': -1.33,
    'gyro_z': 0.04,
    'heading': 1.64
  },
  {
    'time': 11020,
    'acc_x': 0.18,
    'acc_y': 0.8,
    'acc_z': -0.62,
    'gyro_x': -0.25,
    'gyro_y': -1.21,
    'gyro_z': -0.13,
    'heading': 359.58
  },
  {
    'time': 11055,
    'acc_x': 0.19,
    'acc_y': 0.8,
    'acc_z': -0.62,
    'gyro_x': -0.66,
    'gyro_y': -1.36,
    'gyro_z': -0.18,
    'heading': 1.54
  },
  {
    'time': 11090,
    'acc_x': 0.19,
    'acc_y': 0.8,
    'acc_z': -0.61,
    'gyro_x': -0.01,
    'gyro_y': -1.23,
    'gyro_z': -0.11,
    'heading': 0.56
  },
  {
    'time': 11125,
    'acc_x': 0.18,
    'acc_y': 0.79,
    'acc_z': -0.63,
    'gyro_x': 0.34,
    'gyro_y': -1.89,
    'gyro_z': -0.15,
    'heading': 0.27
  },
  {
    'time': 11159,
    'acc_x': 0.19,
    'acc_y': 0.79,
    'acc_z': -0.6,
    'gyro_x': -1.63,
    'gyro_y': -0.75,
    'gyro_z': -0.19,
    'heading': 0.82
  },
  {
    'time': 11194,
    'acc_x': 0.19,
    'acc_y': 0.8,
    'acc_z': -0.62,
    'gyro_x': 0.65,
    'gyro_y': -1.62,
    'gyro_z': -0.1,
    'heading': 358.87
  },
  {
    'time': 11229,
    'acc_x': 0.18,
    'acc_y': 0.81,
    'acc_z': -0.61,
    'gyro_x': -1.2,
    'gyro_y': -0.91,
    'gyro_z': -0.05,
    'heading': 359.59
  },
  {
    'time': 11264,
    'acc_x': 0.17,
    'acc_y': 0.8,
    'acc_z': -0.6,
    'gyro_x': 0.3,
    'gyro_y': -1.5,
    'gyro_z': -0.06,
    'heading': 359.73
  },
  {
    'time': 11299,
    'acc_x': 0.18,
    'acc_y': 0.8,
    'acc_z': -0.62,
    'gyro_x': -0.38,
    'gyro_y': -1.16,
    'gyro_z': -0.04,
    'heading': 1.92
  },
  {
    'time': 11334,
    'acc_x': 0.19,
    'acc_y': 0.79,
    'acc_z': -0.61,
    'gyro_x': -0.47,
    'gyro_y': -1.03,
    'gyro_z': -0.1,
    'heading': 0.94
  },
  {
    'time': 11370,
    'acc_x': 0.18,
    'acc_y': 0.8,
    'acc_z': -0.61,
    'gyro_x': 0.13,
    'gyro_y': -1.27,
    'gyro_z': -0.04,
    'heading': 0.14
  },
  {
    'time': 11405,
    'acc_x': 0.19,
    'acc_y': 0.79,
    'acc_z': -0.62,
    'gyro_x': -0.96,
    'gyro_y': -1.03,
    'gyro_z': -0.08,
    'heading': 0.97
  },
  {
    'time': 11440,
    'acc_x': 0.19,
    'acc_y': 0.8,
    'acc_z': -0.61,
    'gyro_x': 0.36,
    'gyro_y': -1.37,
    'gyro_z': -0.06,
    'heading': 0.83
  },
  {
    'time': 11475,
    'acc_x': 0.18,
    'acc_y': 0.79,
    'acc_z': -0.62,
    'gyro_x': -0.44,
    'gyro_y': -1.36,
    'gyro_z': -0.09,
    'heading': 0.55
  },
  {
    'time': 11509,
    'acc_x': 0.19,
    'acc_y': 0.8,
    'acc_z': -0.62,
    'gyro_x': -1.01,
    'gyro_y': -1.06,
    'gyro_z': -0.09,
    'heading': 2.37
  },
  {
    'time': 11544,
    'acc_x': 0.18,
    'acc_y': 0.81,
    'acc_z': -0.61,
    'gyro_x': 1.24,
    'gyro_y': -0.56,
    'gyro_z': -0.05,
    'heading': 1.91
  },
  {
    'time': 11579,
    'acc_x': 0.22,
    'acc_y': 0.75,
    'acc_z': -0.65,
    'gyro_x': 106.46,
    'gyro_y': -15.32,
    'gyro_z': 15.57,
    'heading': 2.56
  },
  {
    'time': 11614,
    'acc_x': 0.29,
    'acc_y': 1.23,
    'acc_z': -1.73,
    'gyro_x': 9.64,
    'gyro_y': -29.76,
    'gyro_z': 33.27,
    'heading': 2.32
  },
  {
    'time': 11649,
    'acc_x': 0.09,
    'acc_y': 0.72,
    'acc_z': 0.05,
    'gyro_x': -115.09,
    'gyro_y': 29.92,
    'gyro_z': -43.4,
    'heading': 0.54
  },
  {
    'time': 11684,
    'acc_x': 0.39,
    'acc_y': 1.25,
    'acc_z': -0.95,
    'gyro_x': -51.61,
    'gyro_y': -9.89,
    'gyro_z': -24.17,
    'heading': 0
  },
  {
    'time': 11719,
    'acc_x': 0.4,
    'acc_y': 1.31,
    'acc_z': -0.81,
    'gyro_x': 109.08,
    'gyro_y': 30.22,
    'gyro_z': 65.56,
    'heading': 359.33
  },
  {
    'time': 11754,
    'acc_x': 0.45,
    'acc_y': 0.75,
    'acc_z': -0.26,
    'gyro_x': 64.08,
    'gyro_y': 32.24,
    'gyro_z': 116.7,
    'heading': 0
  },
  {
    'time': 11789,
    'acc_x': 0.34,
    'acc_y': 0.84,
    'acc_z': -0.67,
    'gyro_x': 99.75,
    'gyro_y': -45.4,
    'gyro_z': 117.3,
    'heading': 358.45
  },
  {
    'time': 11824,
    'acc_x': 0.33,
    'acc_y': 0.43,
    'acc_z': -0.61,
    'gyro_x': 93.82,
    'gyro_y': -60.75,
    'gyro_z': 108.94,
    'heading': 355.21
  },
  {
    'time': 11859,
    'acc_x': 0.35,
    'acc_y': 0.5,
    'acc_z': -0.85,
    'gyro_x': 110.53,
    'gyro_y': -34.44,
    'gyro_z': 75.7,
    'heading': 351.16
  },
  {
    'time': 11894,
    'acc_x': 0.29,
    'acc_y': 0.53,
    'acc_z': -0.84,
    'gyro_x': 110.24,
    'gyro_y': -43.99,
    'gyro_z': 52.85,
    'heading': 347.47
  },
  {
    'time': 11929,
    'acc_x': 0.33,
    'acc_y': 0.45,
    'acc_z': -0.85,
    'gyro_x': 121.02,
    'gyro_y': -36.49,
    'gyro_z': 48.35,
    'heading': 343.77
  },
  {
    'time': 11963,
    'acc_x': 0.41,
    'acc_y': 0.42,
    'acc_z': -0.73,
    'gyro_x': 81.86,
    'gyro_y': -22.34,
    'gyro_z': 41.27,
    'heading': 340.53
  },
  {
    'time': 11999,
    'acc_x': 0.28,
    'acc_y': 0.23,
    'acc_z': -0.82,
    'gyro_x': 84.99,
    'gyro_y': -32.45,
    'gyro_z': 44.68,
    'heading': 337.64
  },
  {
    'time': 12034,
    'acc_x': 0.31,
    'acc_y': 0.3,
    'acc_z': -0.83,
    'gyro_x': 76.6,
    'gyro_y': -42.37,
    'gyro_z': 34.39,
    'heading': 335.73
  },
  {
    'time': 12068,
    'acc_x': 0.33,
    'acc_y': 0.31,
    'acc_z': -0.86,
    'gyro_x': 57.44,
    'gyro_y': -38.48,
    'gyro_z': 32.86,
    'heading': 334.87
  },
  {
    'time': 12104,
    'acc_x': 0.21,
    'acc_y': 0.06,
    'acc_z': -0.83,
    'gyro_x': 49.34,
    'gyro_y': -36.64,
    'gyro_z': 38.58,
    'heading': 333.92
  },
  {
    'time': 12138,
    'acc_x': 0.24,
    'acc_y': 0.15,
    'acc_z': -0.92,
    'gyro_x': 39.6,
    'gyro_y': -35.5,
    'gyro_z': 23.82,
    'heading': 334.35
  },
  {
    'time': 12173,
    'acc_x': 0.25,
    'acc_y': 0.21,
    'acc_z': -0.98,
    'gyro_x': 9.85,
    'gyro_y': -30.7,
    'gyro_z': 31.53,
    'heading': 334.4
  },
  {
    'time': 12209,
    'acc_x': 0.23,
    'acc_y': 0.15,
    'acc_z': -0.91,
    'gyro_x': 2.51,
    'gyro_y': -5.19,
    'gyro_z': 30.11,
    'heading': 333.64
  },
  {
    'time': 12244,
    'acc_x': 0.22,
    'acc_y': 0.08,
    'acc_z': -0.95,
    'gyro_x': 0.8,
    'gyro_y': -15.45,
    'gyro_z': 22.02,
    'heading': 334.97
  },
  {
    'time': 12278,
    'acc_x': 0.28,
    'acc_y': 0.21,
    'acc_z': -1.04,
    'gyro_x': 2.78,
    'gyro_y': -5.69,
    'gyro_z': 25.1,
    'heading': 332.78
  },
  {
    'time': 12313,
    'acc_x': 0.2,
    'acc_y': 0.06,
    'acc_z': -0.94,
    'gyro_x': -6.12,
    'gyro_y': -2.77,
    'gyro_z': 25.85,
    'heading': 333.14
  },
  {
    'time': 12348,
    'acc_x': 0.28,
    'acc_y': 0.19,
    'acc_z': -0.93,
    'gyro_x': -8.14,
    'gyro_y': -10.12,
    'gyro_z': 13.44,
    'heading': 333.96
  },
  {
    'time': 12383,
    'acc_x': 0.23,
    'acc_y': 0.12,
    'acc_z': -1.09,
    'gyro_x': -3.47,
    'gyro_y': -4.13,
    'gyro_z': 25.44,
    'heading': 335.15
  },
  {
    'time': 12418,
    'acc_x': 0.23,
    'acc_y': 0.09,
    'acc_z': -0.9,
    'gyro_x': -7.31,
    'gyro_y': 0.08,
    'gyro_z': 23.77,
    'heading': 334.57
  },
  {
    'time': 12453,
    'acc_x': 0.27,
    'acc_y': 0.18,
    'acc_z': -0.9,
    'gyro_x': -5.87,
    'gyro_y': -11.62,
    'gyro_z': 19.06,
    'heading': 332.15
  },
  {
    'time': 12488,
    'acc_x': 0.32,
    'acc_y': 0.24,
    'acc_z': -1.13,
    'gyro_x': -0.73,
    'gyro_y': -14.6,
    'gyro_z': 18.6,
    'heading': 333.12
  },
  {
    'time': 12523,
    'acc_x': 0.2,
    'acc_y': 0.07,
    'acc_z': -0.89,
    'gyro_x': -3.76,
    'gyro_y': -4.73,
    'gyro_z': 17.21,
    'heading': 333.11
  },
  {
    'time': 12558,
    'acc_x': 0.27,
    'acc_y': 0.24,
    'acc_z': -1.05,
    'gyro_x': -15.29,
    'gyro_y': -14.66,
    'gyro_z': 14.58,
    'heading': 331.64
  },
  {
    'time': 12593,
    'acc_x': 0.97,
    'acc_y': 0.36,
    'acc_z': -2,
    'gyro_x': 1.44,
    'gyro_y': -55.06,
    'gyro_z': 21.51,
    'heading': 333.11
  },
  {
    'time': 12628,
    'acc_x': 0.24,
    'acc_y': -0.03,
    'acc_z': -1.23,
    'gyro_x': -27.76,
    'gyro_y': -32.66,
    'gyro_z': 17.34,
    'heading': 334.31
  },
  {
    'time': 12662,
    'acc_x': 0.28,
    'acc_y': 0.05,
    'acc_z': -0.83,
    'gyro_x': -12.73,
    'gyro_y': 57.26,
    'gyro_z': -64.82,
    'heading': 332.68
  },
  {
    'time': 12698,
    'acc_x': 0.24,
    'acc_y': 0.06,
    'acc_z': -0.68,
    'gyro_x': -3.4,
    'gyro_y': -16.4,
    'gyro_z': -63.66,
    'heading': 333.69
  },
  {
    'time': 12733,
    'acc_x': 0.22,
    'acc_y': 0.31,
    'acc_z': -0.95,
    'gyro_x': 0.16,
    'gyro_y': -85.6,
    'gyro_z': -92.18,
    'heading': 331.92
  },
  {
    'time': 12768,
    'acc_x': 0.21,
    'acc_y': 0.11,
    'acc_z': -0.95,
    'gyro_x': 15.06,
    'gyro_y': -54.07,
    'gyro_z': -51.24,
    'heading': 333.52
  },
  {
    'time': 12802,
    'acc_x': -0.01,
    'acc_y': 0.24,
    'acc_z': -1.13,
    'gyro_x': -21.08,
    'gyro_y': -42.34,
    'gyro_z': -58.94,
    'heading': 333.19
  },
  {
    'time': 12838,
    'acc_x': 0.08,
    'acc_y': 0.1,
    'acc_z': -0.97,
    'gyro_x': -16.93,
    'gyro_y': -43.78,
    'gyro_z': -55.89,
    'heading': 334.46
  },
  {
    'time': 12873,
    'acc_x': 0.11,
    'acc_y': 0.4,
    'acc_z': -1.07,
    'gyro_x': 62.41,
    'gyro_y': -59.84,
    'gyro_z': -71.65,
    'heading': 335.74
  },
  {
    'time': 12907,
    'acc_x': 0.05,
    'acc_y': 0.3,
    'acc_z': -0.94,
    'gyro_x': -30.59,
    'gyro_y': -4.03,
    'gyro_z': -36.46,
    'heading': 338.07
  },
  {
    'time': 12942,
    'acc_x': 0.07,
    'acc_y': 0.46,
    'acc_z': -1.19,
    'gyro_x': -20.43,
    'gyro_y': -20.83,
    'gyro_z': -17.73,
    'heading': 339.66
  },
  {
    'time': 12978,
    'acc_x': -0.12,
    'acc_y': -0.27,
    'acc_z': -0.97,
    'gyro_x': -20.44,
    'gyro_y': 25.35,
    'gyro_z': -31.48,
    'heading': 337.66
  },
  {
    'time': 13013,
    'acc_x': 0.05,
    'acc_y': 0.18,
    'acc_z': -0.76,
    'gyro_x': 10.89,
    'gyro_y': 11.79,
    'gyro_z': -81.71,
    'heading': 340.43
  },
  {
    'time': 13047,
    'acc_x': 0.1,
    'acc_y': 0.65,
    'acc_z': -1,
    'gyro_x': -45.52,
    'gyro_y': -15.11,
    'gyro_z': -19.44,
    'heading': 342.36
  },
  {
    'time': 13082,
    'acc_x': 0,
    'acc_y': 0.14,
    'acc_z': -1.12,
    'gyro_x': -11.7,
    'gyro_y': -12.3,
    'gyro_z': -10.69,
    'heading': 343.93
  },
  {
    'time': 13117,
    'acc_x': -0.03,
    'acc_y': 0.7,
    'acc_z': 0.4,
    'gyro_x': 30.74,
    'gyro_y': 6.82,
    'gyro_z': -37.43,
    'heading': 342.26
  },
  {
    'time': 13153,
    'acc_x': -0.14,
    'acc_y': 0.01,
    'acc_z': -0.16,
    'gyro_x': 31.94,
    'gyro_y': 107.89,
    'gyro_z': -57.52,
    'heading': 343.16
  },
  {
    'time': 13187,
    'acc_x': 0.02,
    'acc_y': -0.33,
    'acc_z': -2,
    'gyro_x': 80.18,
    'gyro_y': -117.27,
    'gyro_z': 77.03,
    'heading': 343.77
  },
  {
    'time': 13222,
    'acc_x': 0.09,
    'acc_y': 0.29,
    'acc_z': -0.74,
    'gyro_x': 29.83,
    'gyro_y': 3.43,
    'gyro_z': 6,
    'heading': 344.36
  },
  {
    'time': 13257,
    'acc_x': 0.05,
    'acc_y': 0.17,
    'acc_z': -1.08,
    'gyro_x': -16.62,
    'gyro_y': -12.36,
    'gyro_z': -8.33,
    'heading': 345.86
  },
  {
    'time': 13292,
    'acc_x': 0.11,
    'acc_y': 0.11,
    'acc_z': -0.86,
    'gyro_x': -8.2,
    'gyro_y': 8.9,
    'gyro_z': -11.89,
    'heading': 346.68
  },
  {
    'time': 13327,
    'acc_x': 0.12,
    'acc_y': 0.28,
    'acc_z': -1.07,
    'gyro_x': 39.99,
    'gyro_y': -12.08,
    'gyro_z': -14.5,
    'heading': 348.1
  },
  {
    'time': 13362,
    'acc_x': 0.07,
    'acc_y': 0.17,
    'acc_z': -1,
    'gyro_x': 41.35,
    'gyro_y': -16.62,
    'gyro_z': 0.51,
    'heading': 348.66
  },
  {
    'time': 13397,
    'acc_x': 0.03,
    'acc_y': 0.08,
    'acc_z': -1.06,
    'gyro_x': -21.24,
    'gyro_y': 7.69,
    'gyro_z': -11.97,
    'heading': 349.57
  },
  {
    'time': 13432,
    'acc_x': 0.08,
    'acc_y': 0.33,
    'acc_z': -1.04,
    'gyro_x': -112.69,
    'gyro_y': 25.94,
    'gyro_z': -11.34,
    'heading': 348.25
  },
  {
    'time': 13467,
    'acc_x': 0.09,
    'acc_y': 0.23,
    'acc_z': -0.79,
    'gyro_x': -125.53,
    'gyro_y': 28.76,
    'gyro_z': 24.63,
    'heading': 349.33
  },
  {
    'time': 13502,
    'acc_x': 0.08,
    'acc_y': 0.27,
    'acc_z': -0.93,
    'gyro_x': -99.4,
    'gyro_y': 7.6,
    'gyro_z': 6.26,
    'heading': 346.93
  },
  {
    'time': 13537,
    'acc_x': 0.09,
    'acc_y': 0.32,
    'acc_z': -0.87,
    'gyro_x': -89.55,
    'gyro_y': 6.69,
    'gyro_z': 15.44,
    'heading': 343.03
  },
  {
    'time': 13572,
    'acc_x': 0.06,
    'acc_y': 0.5,
    'acc_z': -0.55,
    'gyro_x': 61.83,
    'gyro_y': 2.27,
    'gyro_z': 0.59,
    'heading': 343.41
  },
  {
    'time': 13607,
    'acc_x': 0.09,
    'acc_y': 0.5,
    'acc_z': -0.93,
    'gyro_x': -8.6,
    'gyro_y': 24.84,
    'gyro_z': -76.34,
    'heading': 342.78
  },
  {
    'time': 13642,
    'acc_x': 0.06,
    'acc_y': 0.3,
    'acc_z': -1,
    'gyro_x': -11.77,
    'gyro_y': 4.25,
    'gyro_z': -18.02,
    'heading': 343.79
  },
  {
    'time': 13677,
    'acc_x': 0.03,
    'acc_y': 0.54,
    'acc_z': -0.95,
    'gyro_x': 80.88,
    'gyro_y': 19.79,
    'gyro_z': -84.54,
    'heading': 343.95
  },
  {
    'time': 13711,
    'acc_x': 0.22,
    'acc_y': 0.47,
    'acc_z': -1.24,
    'gyro_x': 149.93,
    'gyro_y': 95.78,
    'gyro_z': -91.92,
    'heading': 345.96
  },
  {
    'time': 13747,
    'acc_x': 0.33,
    'acc_y': 0.04,
    'acc_z': -0.75,
    'gyro_x': 250.13,
    'gyro_y': 67.01,
    'gyro_z': -105.37,
    'heading': 348.33
  },
  {
    'time': 13782,
    'acc_x': 0.24,
    'acc_y': 0.05,
    'acc_z': -0.83,
    'gyro_x': 78.55,
    'gyro_y': -1.66,
    'gyro_z': -41.05,
    'heading': 352.42
  },
  {
    'time': 13816,
    'acc_x': 0.3,
    'acc_y': 0.26,
    'acc_z': -1.14,
    'gyro_x': -44.79,
    'gyro_y': -7.18,
    'gyro_z': -21.01,
    'heading': 357.32
  },
  {
    'time': 13851,
    'acc_x': 0.07,
    'acc_y': 0.13,
    'acc_z': -1.07,
    'gyro_x': -82.12,
    'gyro_y': 8.92,
    'gyro_z': -2.41,
    'heading': 359.08
  },
  {
    'time': 13886,
    'acc_x': 0.15,
    'acc_y': 0.28,
    'acc_z': -1.08,
    'gyro_x': -33.04,
    'gyro_y': -10.53,
    'gyro_z': -15.77,
    'heading': 358.99
  },
  {
    'time': 13921,
    'acc_x': 0.21,
    'acc_y': 0.31,
    'acc_z': -1.1,
    'gyro_x': 38.57,
    'gyro_y': -38.15,
    'gyro_z': -26.32,
    'heading': 358.09
  },
  {
    'time': 13956,
    'acc_x': 0.17,
    'acc_y': 0.26,
    'acc_z': -1.15,
    'gyro_x': 29.58,
    'gyro_y': -47.03,
    'gyro_z': -30.08,
    'heading': 356.92
  },
  {
    'time': 13991,
    'acc_x': 0.12,
    'acc_y': 0.18,
    'acc_z': -0.96,
    'gyro_x': -5.54,
    'gyro_y': -45.29,
    'gyro_z': -16.15,
    'heading': 358.17
  },
  {
    'time': 14026,
    'acc_x': -0.07,
    'acc_y': 0.1,
    'acc_z': -1,
    'gyro_x': -9.99,
    'gyro_y': -49.25,
    'gyro_z': 4.6,
    'heading': 358.18
  },
  {
    'time': 14061,
    'acc_x': -0.04,
    'acc_y': 0.03,
    'acc_z': -0.88,
    'gyro_x': 74.9,
    'gyro_y': -11.41,
    'gyro_z': 15.98,
    'heading': 355.71
  },
  {
    'time': 14096,
    'acc_x': -0.12,
    'acc_y': 0.04,
    'acc_z': -1.16,
    'gyro_x': 106.81,
    'gyro_y': -58.7,
    'gyro_z': -44.34,
    'heading': 357.52
  },
  {
    'time': 14131,
    'acc_x': -0.14,
    'acc_y': -0.15,
    'acc_z': -0.9,
    'gyro_x': 21.54,
    'gyro_y': -29.56,
    'gyro_z': -6.02,
    'heading': 359
  },
  {
    'time': 14166,
    'acc_x': -0.1,
    'acc_y': -0.03,
    'acc_z': -0.98,
    'gyro_x': 29.62,
    'gyro_y': -10.44,
    'gyro_z': -11.27,
    'heading': 0.88
  },
  {
    'time': 14201,
    'acc_x': -0.05,
    'acc_y': -0.14,
    'acc_z': -0.82,
    'gyro_x': 7.86,
    'gyro_y': -6.65,
    'gyro_z': -2.08,
    'heading': 1.95
  },
  {
    'time': 14236,
    'acc_x': -0.09,
    'acc_y': 0.02,
    'acc_z': -0.98,
    'gyro_x': 25.1,
    'gyro_y': -27.76,
    'gyro_z': -11.41,
    'heading': 2.63
  },
  {
    'time': 14271,
    'acc_x': -0.09,
    'acc_y': -0.19,
    'acc_z': -0.88,
    'gyro_x': 7.06,
    'gyro_y': -12.99,
    'gyro_z': 2.61,
    'heading': 4.47
  },
  {
    'time': 14306,
    'acc_x': -0.11,
    'acc_y': -0.11,
    'acc_z': -0.87,
    'gyro_x': -15.12,
    'gyro_y': -9.36,
    'gyro_z': -7.33,
    'heading': 2.34
  },
  {
    'time': 14341,
    'acc_x': -0.1,
    'acc_y': -0.04,
    'acc_z': -0.98,
    'gyro_x': -17.66,
    'gyro_y': -27.63,
    'gyro_z': -28.79,
    'heading': 5.48
  },
  {
    'time': 14376,
    'acc_x': -0.09,
    'acc_y': 0.1,
    'acc_z': -1.18,
    'gyro_x': -4.2,
    'gyro_y': -21.74,
    'gyro_z': -15.35,
    'heading': 4.58
  },
  {
    'time': 14411,
    'acc_x': -0.1,
    'acc_y': 0.04,
    'acc_z': -1.14,
    'gyro_x': -12.21,
    'gyro_y': -4.4,
    'gyro_z': -7.26,
    'heading': 4.86
  },
  {
    'time': 14446,
    'acc_x': -0.09,
    'acc_y': 0.05,
    'acc_z': -1.1,
    'gyro_x': 12.45,
    'gyro_y': -6.79,
    'gyro_z': -9.31,
    'heading': 5.59
  },
  {
    'time': 14481,
    'acc_x': -0.06,
    'acc_y': 0.06,
    'acc_z': -1.12,
    'gyro_x': 7.2,
    'gyro_y': 4.7,
    'gyro_z': -2.93,
    'heading': 7.79
  },
  {
    'time': 14516,
    'acc_x': -0.01,
    'acc_y': 0.01,
    'acc_z': -1.04,
    'gyro_x': 5.66,
    'gyro_y': 16.85,
    'gyro_z': 9.37,
    'heading': 6.84
  },
  {
    'time': 14551,
    'acc_x': 0.06,
    'acc_y': -0.1,
    'acc_z': -0.84,
    'gyro_x': 28.97,
    'gyro_y': 9.15,
    'gyro_z': 15.81,
    'heading': 6.69
  },
  {
    'time': 14585,
    'acc_x': -0.01,
    'acc_y': -0.2,
    'acc_z': -0.8,
    'gyro_x': -8.51,
    'gyro_y': -2.57,
    'gyro_z': 12.71,
    'heading': 7.43
  },
  {
    'time': 14620,
    'acc_x': -0.26,
    'acc_y': -0.08,
    'acc_z': -1.18,
    'gyro_x': -9.66,
    'gyro_y': -26.54,
    'gyro_z': -7.44,
    'heading': 8.6
  },
  {
    'time': 14655,
    'acc_x': -0.27,
    'acc_y': -0.05,
    'acc_z': -1.27,
    'gyro_x': 20.87,
    'gyro_y': -8.95,
    'gyro_z': -9.82,
    'heading': 7.77
  },
  {
    'time': 14690,
    'acc_x': -0.14,
    'acc_y': -0.02,
    'acc_z': -1.1,
    'gyro_x': 32.43,
    'gyro_y': 21.79,
    'gyro_z': 1.55,
    'heading': 7.63
  },
  {
    'time': 14725,
    'acc_x': -0.08,
    'acc_y': -0.14,
    'acc_z': -0.88,
    'gyro_x': 11.07,
    'gyro_y': 20.18,
    'gyro_z': 1.47,
    'heading': 9.07
  },
  {
    'time': 14760,
    'acc_x': -0.02,
    'acc_y': -0.12,
    'acc_z': -0.9,
    'gyro_x': -11.68,
    'gyro_y': 15.03,
    'gyro_z': -0.34,
    'heading': 10.43
  },
  {
    'time': 14795,
    'acc_x': 0.02,
    'acc_y': -0.11,
    'acc_z': -0.75,
    'gyro_x': 24.88,
    'gyro_y': 0.91,
    'gyro_z': -3.73,
    'heading': 9.14
  },
  {
    'time': 14830,
    'acc_x': -0.04,
    'acc_y': -0.13,
    'acc_z': -0.82,
    'gyro_x': 6.81,
    'gyro_y': -20.72,
    'gyro_z': -3.71,
    'heading': 10.29
  },
  {
    'time': 14865,
    'acc_x': -0.09,
    'acc_y': -0.1,
    'acc_z': -0.97,
    'gyro_x': -14.53,
    'gyro_y': -22.89,
    'gyro_z': -10.64,
    'heading': 9.59
  },
  {
    'time': 14900,
    'acc_x': -0.03,
    'acc_y': -0.03,
    'acc_z': -1.11,
    'gyro_x': -15.12,
    'gyro_y': -27.27,
    'gyro_z': -11,
    'heading': 10.8
  },
  {
    'time': 14935,
    'acc_x': -0.18,
    'acc_y': 0.08,
    'acc_z': -1.45,
    'gyro_x': 6.31,
    'gyro_y': -25.14,
    'gyro_z': -3.49,
    'heading': 10.41
  },
  {
    'time': 14970,
    'acc_x': -0.13,
    'acc_y': 0.05,
    'acc_z': -1.24,
    'gyro_x': 8.85,
    'gyro_y': 17.31,
    'gyro_z': 5.47,
    'heading': 10.26
  },
  {
    'time': 15005,
    'acc_x': -0.1,
    'acc_y': -0.1,
    'acc_z': -0.84,
    'gyro_x': 64.56,
    'gyro_y': 17.81,
    'gyro_z': 9.89,
    'heading': 11.77
  },
  {
    'time': 15040,
    'acc_x': 0.06,
    'acc_y': -0.33,
    'acc_z': -0.56,
    'gyro_x': 27.43,
    'gyro_y': 8.69,
    'gyro_z': 7.61,
    'heading': 11.87
  },
  {
    'time': 15075,
    'acc_x': -0.09,
    'acc_y': -0.06,
    'acc_z': -1.05,
    'gyro_x': -0.83,
    'gyro_y': -33.73,
    'gyro_z': 2.46,
    'heading': 11.69
  },
  {
    'time': 15110,
    'acc_x': -0.64,
    'acc_y': 0.02,
    'acc_z': -2,
    'gyro_x': 48.8,
    'gyro_y': -44.82,
    'gyro_z': -5.38,
    'heading': 13.63
  },
  {
    'time': 15145,
    'acc_x': -0.33,
    'acc_y': -0.17,
    'acc_z': -1.05,
    'gyro_x': 52.55,
    'gyro_y': 109.87,
    'gyro_z': -1.43,
    'heading': 12.15
  },
  {
    'time': 15180,
    'acc_x': 0.29,
    'acc_y': -0.62,
    'acc_z': 0.12,
    'gyro_x': -39.6,
    'gyro_y': 155.54,
    'gyro_z': 19.63,
    'heading': 12.85
  },
  {
    'time': 15215,
    'acc_x': 0.39,
    'acc_y': -0.35,
    'acc_z': 0.16,
    'gyro_x': -108.62,
    'gyro_y': -54.61,
    'gyro_z': -19.07,
    'heading': 13.05
  },
  {
    'time': 15250,
    'acc_x': -0.67,
    'acc_y': 0.22,
    'acc_z': -2,
    'gyro_x': -8.02,
    'gyro_y': -164.99,
    'gyro_z': -65.25,
    'heading': 12.36
  },
  {
    'time': 15284,
    'acc_x': -0.13,
    'acc_y': -0.19,
    'acc_z': -1.16,
    'gyro_x': 33.02,
    'gyro_y': 65.82,
    'gyro_z': -0.85,
    'heading': 10.54
  },
  {
    'time': 15319,
    'acc_x': 0.49,
    'acc_y': -0.11,
    'acc_z': 0.11,
    'gyro_x': 0.57,
    'gyro_y': 43.24,
    'gyro_z': -3.17,
    'heading': 11.83
  },
  {
    'time': 15354,
    'acc_x': -0.37,
    'acc_y': 0.21,
    'acc_z': -1.92,
    'gyro_x': -7.64,
    'gyro_y': -129.95,
    'gyro_z': -44.3,
    'heading': 12.21
  },
  {
    'time': 15390,
    'acc_x': -0.06,
    'acc_y': -0.03,
    'acc_z': -1.12,
    'gyro_x': 65.73,
    'gyro_y': 39.53,
    'gyro_z': 5.79,
    'heading': 12.15
  },
  {
    'time': 15425,
    'acc_x': 0.3,
    'acc_y': -0.43,
    'acc_z': -0.18,
    'gyro_x': 15.05,
    'gyro_y': 78.72,
    'gyro_z': 38.28,
    'heading': 13.42
  },
  {
    'time': 15460,
    'acc_x': -0.1,
    'acc_y': -0.31,
    'acc_z': -0.78,
    'gyro_x': -45.15,
    'gyro_y': -95.31,
    'gyro_z': -14.02,
    'heading': 12.06
  },
  {
    'time': 15494,
    'acc_x': -0.43,
    'acc_y': 0.02,
    'acc_z': -1.75,
    'gyro_x': -10.44,
    'gyro_y': -63.54,
    'gyro_z': -23.93,
    'heading': 11.54
  },
  {
    'time': 15529,
    'acc_x': -0.15,
    'acc_y': -0.17,
    'acc_z': -1.06,
    'gyro_x': 33.39,
    'gyro_y': 27.63,
    'gyro_z': -3.47,
    'heading': 12.7
  },
  {
    'time': 15564,
    'acc_x': -0.03,
    'acc_y': -0.19,
    'acc_z': -0.65,
    'gyro_x': 12.73,
    'gyro_y': -2.66,
    'gyro_z': -7.52,
    'heading': 12.07
  },
  {
    'time': 15599,
    'acc_x': 0.02,
    'acc_y': -0.06,
    'acc_z': -0.84,
    'gyro_x': -11.39,
    'gyro_y': -29.74,
    'gyro_z': -11.27,
    'heading': 13.08
  },
  {
    'time': 15635,
    'acc_x': -0.1,
    'acc_y': -0.19,
    'acc_z': -0.85,
    'gyro_x': 10.96,
    'gyro_y': -37.88,
    'gyro_z': 2.32,
    'heading': 12.76
  },
  {
    'time': 15669,
    'acc_x': -0.43,
    'acc_y': -0.23,
    'acc_z': -1.15,
    'gyro_x': 0.79,
    'gyro_y': -59.21,
    'gyro_z': -1.69,
    'heading': 14.56
  },
  {
    'time': 15704,
    'acc_x': -0.66,
    'acc_y': -0.32,
    'acc_z': -1.32,
    'gyro_x': 6.57,
    'gyro_y': -12.96,
    'gyro_z': -11.15,
    'heading': 12.89
  },
  {
    'time': 15739,
    'acc_x': -0.51,
    'acc_y': -0.52,
    'acc_z': -0.86,
    'gyro_x': 8.15,
    'gyro_y': 28.08,
    'gyro_z': -31.68,
    'heading': 13.47
  },
  {
    'time': 15774,
    'acc_x': -0.06,
    'acc_y': -0.26,
    'acc_z': -0.67,
    'gyro_x': -6.3,
    'gyro_y': 9.73,
    'gyro_z': -62.29,
    'heading': 15.27
  },
  {
    'time': 15809,
    'acc_x': 0.3,
    'acc_y': 0.13,
    'acc_z': -0.97,
    'gyro_x': -50.34,
    'gyro_y': -41.47,
    'gyro_z': -33.64,
    'heading': 16.33
  },
  {
    'time': 15844,
    'acc_x': -0.01,
    'acc_y': 0.21,
    'acc_z': -1.59,
    'gyro_x': 20.08,
    'gyro_y': -54.23,
    'gyro_z': -17.91,
    'heading': 17.11
  },
  {
    'time': 15879,
    'acc_x': -0.03,
    'acc_y': 0.09,
    'acc_z': -1.37,
    'gyro_x': 35.06,
    'gyro_y': 13.98,
    'gyro_z': 17.64,
    'heading': 18.29
  },
  {
    'time': 15914,
    'acc_x': -0.05,
    'acc_y': -0.22,
    'acc_z': -0.76,
    'gyro_x': 27.89,
    'gyro_y': 44.72,
    'gyro_z': 36.11,
    'heading': 18.4
  },
  {
    'time': 15949,
    'acc_x': -0.22,
    'acc_y': -0.51,
    'acc_z': -0.45,
    'gyro_x': 9.6,
    'gyro_y': 21.42,
    'gyro_z': 29.05,
    'heading': 17.9
  },
  {
    'time': 15984,
    'acc_x': -0.38,
    'acc_y': -0.51,
    'acc_z': -0.48,
    'gyro_x': -16.22,
    'gyro_y': -29.05,
    'gyro_z': -3.49,
    'heading': 16.99
  },
  {
    'time': 16019,
    'acc_x': -0.46,
    'acc_y': 0.06,
    'acc_z': -1.35,
    'gyro_x': -43.26,
    'gyro_y': -43.06,
    'gyro_z': -26.23,
    'heading': 17.94
  },
  {
    'time': 16053,
    'acc_x': -0.43,
    'acc_y': -0.1,
    'acc_z': -1.63,
    'gyro_x': 17.82,
    'gyro_y': -12.88,
    'gyro_z': -16.28,
    'heading': 17.66
  },
  {
    'time': 16089,
    'acc_x': -0.11,
    'acc_y': -0.07,
    'acc_z': -1.22,
    'gyro_x': 28.44,
    'gyro_y': 33.07,
    'gyro_z': -5.61,
    'heading': 18.63
  },
  {
    'time': 16124,
    'acc_x': 0,
    'acc_y': -0.25,
    'acc_z': -0.82,
    'gyro_x': 7.83,
    'gyro_y': 50.98,
    'gyro_z': 11.9,
    'heading': 17.66
  },
  {
    'time': 16159,
    'acc_x': -0.01,
    'acc_y': -0.39,
    'acc_z': -0.52,
    'gyro_x': 26.04,
    'gyro_y': 11.78,
    'gyro_z': 1.82,
    'heading': 18.92
  },
  {
    'time': 16194,
    'acc_x': -0.14,
    'acc_y': -0.37,
    'acc_z': -0.51,
    'gyro_x': -11.43,
    'gyro_y': -18.81,
    'gyro_z': -7.23,
    'heading': 17.04
  },
  {
    'time': 16229,
    'acc_x': -0.27,
    'acc_y': -0.02,
    'acc_z': -1.2,
    'gyro_x': -40.34,
    'gyro_y': -33.72,
    'gyro_z': -1.37,
    'heading': 18.25
  },
  {
    'time': 16263,
    'acc_x': -0.32,
    'acc_y': -0.18,
    'acc_z': -1.21,
    'gyro_x': 2.98,
    'gyro_y': -13.22,
    'gyro_z': -9.47,
    'heading': 17.35
  },
  {
    'time': 16298,
    'acc_x': -0.15,
    'acc_y': -0.23,
    'acc_z': -0.93,
    'gyro_x': -7.77,
    'gyro_y': 9.94,
    'gyro_z': -1.8,
    'heading': 18.3
  },
  {
    'time': 16333,
    'acc_x': -0.09,
    'acc_y': -0.24,
    'acc_z': -0.87,
    'gyro_x': -29.04,
    'gyro_y': 0.72,
    'gyro_z': -0.28,
    'heading': 20.03
  },
  {
    'time': 16368,
    'acc_x': -0.16,
    'acc_y': -0.18,
    'acc_z': -0.97,
    'gyro_x': -13.56,
    'gyro_y': -20.56,
    'gyro_z': -8.64,
    'heading': 19.03
  },
  {
    'time': 16403,
    'acc_x': -0.18,
    'acc_y': -0.11,
    'acc_z': -1.03,
    'gyro_x': -10.35,
    'gyro_y': -17.33,
    'gyro_z': -8.59,
    'heading': 18.78
  },
  {
    'time': 16438,
    'acc_x': -0.2,
    'acc_y': -0.11,
    'acc_z': -1.05,
    'gyro_x': 5.15,
    'gyro_y': -20.44,
    'gyro_z': -4.74,
    'heading': 18.98
  },
  {
    'time': 16474,
    'acc_x': -0.27,
    'acc_y': -0.12,
    'acc_z': -1.06,
    'gyro_x': 5.4,
    'gyro_y': -23.46,
    'gyro_z': -3.95,
    'heading': 19.79
  },
  {
    'time': 16508,
    'acc_x': -0.25,
    'acc_y': -0.17,
    'acc_z': -1.04,
    'gyro_x': 23.73,
    'gyro_y': -9.02,
    'gyro_z': -3.2,
    'heading': 18.63
  },
  {
    'time': 16543,
    'acc_x': -0.2,
    'acc_y': -0.23,
    'acc_z': -0.92,
    'gyro_x': 13.63,
    'gyro_y': -7.05,
    'gyro_z': -3.76,
    'heading': 19.62
  },
  {
    'time': 16578,
    'acc_x': -0.23,
    'acc_y': -0.23,
    'acc_z': -0.98,
    'gyro_x': 21.61,
    'gyro_y': -34.32,
    'gyro_z': -15.27,
    'heading': 19.76
  },
  {
    'time': 16613,
    'acc_x': -0.25,
    'acc_y': -0.18,
    'acc_z': -1.05,
    'gyro_x': 5.92,
    'gyro_y': -18.44,
    'gyro_z': -9.11,
    'heading': 20.35
  },
  {
    'time': 16648,
    'acc_x': -0.24,
    'acc_y': -0.21,
    'acc_z': -0.98,
    'gyro_x': -7.75,
    'gyro_y': 3.37,
    'gyro_z': 4.56,
    'heading': 19.65
  },
  {
    'time': 16683,
    'acc_x': -0.24,
    'acc_y': -0.22,
    'acc_z': -0.92,
    'gyro_x': 0.31,
    'gyro_y': 0.25,
    'gyro_z': 2.73,
    'heading': 20.48
  },
  {
    'time': 16718,
    'acc_x': -0.24,
    'acc_y': -0.19,
    'acc_z': -0.96,
    'gyro_x': -4.25,
    'gyro_y': -6.44,
    'gyro_z': -1.73,
    'heading': 20.18
  },
  {
    'time': 16753,
    'acc_x': -0.25,
    'acc_y': -0.22,
    'acc_z': -0.93,
    'gyro_x': -9.08,
    'gyro_y': -0.47,
    'gyro_z': 3.86,
    'heading': 19.7
  },
  {
    'time': 16788,
    'acc_x': -0.28,
    'acc_y': -0.21,
    'acc_z': -0.96,
    'gyro_x': 6.54,
    'gyro_y': -7.57,
    'gyro_z': -3.44,
    'heading': 19.78
  },
  {
    'time': 16823,
    'acc_x': -0.27,
    'acc_y': -0.17,
    'acc_z': -0.95,
    'gyro_x': 4.01,
    'gyro_y': 0.61,
    'gyro_z': -3.02,
    'heading': 20.53
  },
  {
    'time': 16858,
    'acc_x': -0.27,
    'acc_y': -0.2,
    'acc_z': -0.94,
    'gyro_x': -2.81,
    'gyro_y': -2.27,
    'gyro_z': -5.28,
    'heading': 19.42
  },
  {
    'time': 16893,
    'acc_x': -0.28,
    'acc_y': -0.21,
    'acc_z': -0.97,
    'gyro_x': -9.32,
    'gyro_y': -2.55,
    'gyro_z': -4.21,
    'heading': 20.48
  },
  {
    'time': 16928,
    'acc_x': -0.25,
    'acc_y': -0.19,
    'acc_z': -1.04,
    'gyro_x': -0.05,
    'gyro_y': -0.74,
    'gyro_z': -7.97,
    'heading': 20.06
  },
  {
    'time': 16963,
    'acc_x': -0.22,
    'acc_y': -0.2,
    'acc_z': -0.95,
    'gyro_x': 1.43,
    'gyro_y': 6.25,
    'gyro_z': -7.6,
    'heading': 21.5
  },
  {
    'time': 16998,
    'acc_x': -0.2,
    'acc_y': -0.24,
    'acc_z': -0.91,
    'gyro_x': -13.03,
    'gyro_y': 2.49,
    'gyro_z': -7.04,
    'heading': 20.43
  },
  {
    'time': 17033,
    'acc_x': -0.28,
    'acc_y': -0.19,
    'acc_z': -0.96,
    'gyro_x': -10.8,
    'gyro_y': -1.23,
    'gyro_z': -0.55,
    'heading': 20.56
  },
  {
    'time': 17068,
    'acc_x': -0.26,
    'acc_y': -0.16,
    'acc_z': -1.06,
    'gyro_x': -7.24,
    'gyro_y': 0.89,
    'gyro_z': -5.58,
    'heading': 20.11
  },
  {
    'time': 17102,
    'acc_x': -0.24,
    'acc_y': -0.17,
    'acc_z': -1,
    'gyro_x': -1.48,
    'gyro_y': -0.71,
    'gyro_z': -2.99,
    'heading': 21.59
  },
  {
    'time': 17137,
    'acc_x': -0.23,
    'acc_y': -0.19,
    'acc_z': -1.01,
    'gyro_x': -1.77,
    'gyro_y': 4.11,
    'gyro_z': -1.23,
    'heading': 20.42
  },
  {
    'time': 17172,
    'acc_x': -0.19,
    'acc_y': -0.16,
    'acc_z': -0.95,
    'gyro_x': 10.82,
    'gyro_y': 4.66,
    'gyro_z': -3.12,
    'heading': 19.11
  },
  {
    'time': 17207,
    'acc_x': -0.17,
    'acc_y': -0.19,
    'acc_z': -0.9,
    'gyro_x': 4.34,
    'gyro_y': 5.6,
    'gyro_z': 2.37,
    'heading': 19.7
  },
  {
    'time': 17242,
    'acc_x': -0.21,
    'acc_y': -0.21,
    'acc_z': -0.89,
    'gyro_x': 8.52,
    'gyro_y': -3.85,
    'gyro_z': 1.19,
    'heading': 20.81
  },
  {
    'time': 17277,
    'acc_x': -0.21,
    'acc_y': -0.15,
    'acc_z': -0.98,
    'gyro_x': 16.64,
    'gyro_y': -12.08,
    'gyro_z': -1.13,
    'heading': 19.99
  },
  {
    'time': 17312,
    'acc_x': -0.23,
    'acc_y': -0.22,
    'acc_z': -0.99,
    'gyro_x': -3.27,
    'gyro_y': -3.21,
    'gyro_z': 10.08,
    'heading': 20.49
  },
  {
    'time': 17347,
    'acc_x': -0.26,
    'acc_y': -0.26,
    'acc_z': -1,
    'gyro_x': 13.49,
    'gyro_y': -3.45,
    'gyro_z': 0.42,
    'heading': 19.86
  },
  {
    'time': 17382,
    'acc_x': -0.2,
    'acc_y': -0.17,
    'acc_z': -0.99,
    'gyro_x': 16.18,
    'gyro_y': -1.66,
    'gyro_z': -3.63,
    'heading': 20.31
  },
  {
    'time': 17417,
    'acc_x': -0.23,
    'acc_y': -0.28,
    'acc_z': -1.07,
    'gyro_x': 8.47,
    'gyro_y': -8.31,
    'gyro_z': 11.47,
    'heading': 18.76
  },
  {
    'time': 17452,
    'acc_x': -0.25,
    'acc_y': -0.23,
    'acc_z': -0.98,
    'gyro_x': 11.96,
    'gyro_y': -4.44,
    'gyro_z': -1.93,
    'heading': 20.17
  },
  {
    'time': 17487,
    'acc_x': -0.21,
    'acc_y': -0.18,
    'acc_z': -0.97,
    'gyro_x': 10.56,
    'gyro_y': 4.28,
    'gyro_z': 2,
    'heading': 20.05
  },
  {
    'time': 17522,
    'acc_x': -0.24,
    'acc_y': -0.3,
    'acc_z': -0.8,
    'gyro_x': 18.49,
    'gyro_y': 8.63,
    'gyro_z': 18.59,
    'heading': 21.02
  },
  {
    'time': 17557,
    'acc_x': -0.31,
    'acc_y': -0.32,
    'acc_z': -0.97,
    'gyro_x': 24.53,
    'gyro_y': -6.58,
    'gyro_z': -9.6,
    'heading': 21.31
  },
  {
    'time': 17592,
    'acc_x': -0.23,
    'acc_y': -0.24,
    'acc_z': -0.91,
    'gyro_x': -5.69,
    'gyro_y': -1.25,
    'gyro_z': -6.5,
    'heading': 20.53
  },
  {
    'time': 17627,
    'acc_x': -0.24,
    'acc_y': -0.29,
    'acc_z': -0.88,
    'gyro_x': -6.81,
    'gyro_y': -14.94,
    'gyro_z': 7.5,
    'heading': 21.58
  },
  {
    'time': 17662,
    'acc_x': -0.26,
    'acc_y': -0.24,
    'acc_z': -1.02,
    'gyro_x': -2.48,
    'gyro_y': -17.29,
    'gyro_z': -7.4,
    'heading': 19.89
  },
  {
    'time': 17697,
    'acc_x': -0.27,
    'acc_y': -0.28,
    'acc_z': -0.95,
    'gyro_x': -10.45,
    'gyro_y': 0.18,
    'gyro_z': 3.31,
    'heading': 21.17
  },
  {
    'time': 17732,
    'acc_x': -0.26,
    'acc_y': -0.24,
    'acc_z': -0.89,
    'gyro_x': -18.92,
    'gyro_y': -10.58,
    'gyro_z': -6.15,
    'heading': 21.67
  },
  {
    'time': 17767,
    'acc_x': -0.27,
    'acc_y': -0.29,
    'acc_z': -0.96,
    'gyro_x': -11.56,
    'gyro_y': -13.33,
    'gyro_z': 0.21,
    'heading': 21.18
  },
  {
    'time': 17802,
    'acc_x': -0.32,
    'acc_y': -0.26,
    'acc_z': -1.02,
    'gyro_x': 20.92,
    'gyro_y': -11.02,
    'gyro_z': -5.19,
    'heading': 19.96
  },
  {
    'time': 17837,
    'acc_x': -0.26,
    'acc_y': -0.28,
    'acc_z': -0.95,
    'gyro_x': 10.18,
    'gyro_y': 2.82,
    'gyro_z': -3.63,
    'heading': 21.1
  },
  {
    'time': 17871,
    'acc_x': -0.24,
    'acc_y': -0.25,
    'acc_z': -0.95,
    'gyro_x': 10.8,
    'gyro_y': 0.17,
    'gyro_z': -7.76,
    'heading': 20.42
  },
  {
    'time': 17906,
    'acc_x': -0.27,
    'acc_y': -0.26,
    'acc_z': -0.96,
    'gyro_x': 11.28,
    'gyro_y': 0.59,
    'gyro_z': -7.96,
    'heading': 20.83
  },
  {
    'time': 17941,
    'acc_x': -0.23,
    'acc_y': -0.25,
    'acc_z': -0.94,
    'gyro_x': 3.79,
    'gyro_y': 1.83,
    'gyro_z': -10.96,
    'heading': 21.58
  },
  {
    'time': 17976,
    'acc_x': -0.25,
    'acc_y': -0.27,
    'acc_z': -0.93,
    'gyro_x': 0.11,
    'gyro_y': 5.44,
    'gyro_z': -4.71,
    'heading': 20.83
  },
  {
    'time': 18011,
    'acc_x': -0.25,
    'acc_y': -0.28,
    'acc_z': -0.86,
    'gyro_x': 5.87,
    'gyro_y': 4.65,
    'gyro_z': -8.31,
    'heading': 21.61
  },
  {
    'time': 18046,
    'acc_x': -0.27,
    'acc_y': -0.32,
    'acc_z': -0.88,
    'gyro_x': 1.57,
    'gyro_y': -5.15,
    'gyro_z': -14.6,
    'heading': 21.93
  },
  {
    'time': 18081,
    'acc_x': -0.22,
    'acc_y': -0.26,
    'acc_z': -0.87,
    'gyro_x': 27.07,
    'gyro_y': -9.66,
    'gyro_z': -14.08,
    'heading': 22.74
  },
  {
    'time': 18116,
    'acc_x': -0.26,
    'acc_y': -0.32,
    'acc_z': -0.98,
    'gyro_x': 20.79,
    'gyro_y': 5.51,
    'gyro_z': -1.06,
    'heading': 21.47
  },
  {
    'time': 18151,
    'acc_x': -0.28,
    'acc_y': -0.31,
    'acc_z': -0.95,
    'gyro_x': 6.39,
    'gyro_y': -0.09,
    'gyro_z': -20.68,
    'heading': 23.56
  },
  {
    'time': 18186,
    'acc_x': -0.19,
    'acc_y': -0.31,
    'acc_z': -0.91,
    'gyro_x': -4.21,
    'gyro_y': 5.28,
    'gyro_z': -4.63,
    'heading': 23.02
  },
  {
    'time': 18221,
    'acc_x': -0.23,
    'acc_y': -0.36,
    'acc_z': -1.04,
    'gyro_x': -19.73,
    'gyro_y': 14.99,
    'gyro_z': -7.11,
    'heading': 24.05
  },
  {
    'time': 18256,
    'acc_x': -0.2,
    'acc_y': -0.26,
    'acc_z': -0.98,
    'gyro_x': -30.96,
    'gyro_y': 8.14,
    'gyro_z': -20.67,
    'heading': 24.38
  },
  {
    'time': 18291,
    'acc_x': -0.19,
    'acc_y': -0.24,
    'acc_z': -1,
    'gyro_x': -13.1,
    'gyro_y': -9.79,
    'gyro_z': -18.3,
    'heading': 24.72
  },
  {
    'time': 18326,
    'acc_x': -0.27,
    'acc_y': -0.44,
    'acc_z': -1.01,
    'gyro_x': -5.92,
    'gyro_y': 3.39,
    'gyro_z': -34.63,
    'heading': 24.51
  },
  {
    'time': 18361,
    'acc_x': -0.15,
    'acc_y': -0.26,
    'acc_z': -0.94,
    'gyro_x': -27.43,
    'gyro_y': 12.46,
    'gyro_z': -60.47,
    'heading': 23.84
  },
  {
    'time': 18396,
    'acc_x': -0.18,
    'acc_y': -0.31,
    'acc_z': -0.9,
    'gyro_x': 4.89,
    'gyro_y': 14.4,
    'gyro_z': -19.57,
    'heading': 26.14
  },
  {
    'time': 18431,
    'acc_x': -0.19,
    'acc_y': -0.31,
    'acc_z': -1.02,
    'gyro_x': 12.57,
    'gyro_y': 0.66,
    'gyro_z': -1.53,
    'heading': 26.52
  },
  {
    'time': 18466,
    'acc_x': -0.15,
    'acc_y': -0.27,
    'acc_z': -0.97,
    'gyro_x': 20.6,
    'gyro_y': -8.09,
    'gyro_z': -15.32,
    'heading': 26.61
  },
  {
    'time': 18501,
    'acc_x': -0.19,
    'acc_y': -0.36,
    'acc_z': -0.88,
    'gyro_x': 22.98,
    'gyro_y': -8.87,
    'gyro_z': 0.14,
    'heading': 27.39
  },
  {
    'time': 18535,
    'acc_x': -0.18,
    'acc_y': -0.38,
    'acc_z': -0.93,
    'gyro_x': 59.07,
    'gyro_y': -14.94,
    'gyro_z': -13.18,
    'heading': 28.36
  },
  {
    'time': 18571,
    'acc_x': -0.19,
    'acc_y': -0.36,
    'acc_z': -0.9,
    'gyro_x': 59.05,
    'gyro_y': -20.2,
    'gyro_z': -13.51,
    'heading': 28.32
  },
  {
    'time': 18606,
    'acc_x': -0.24,
    'acc_y': -0.5,
    'acc_z': -0.89,
    'gyro_x': 44.58,
    'gyro_y': -3.87,
    'gyro_z': -13.5,
    'heading': 30.44
  },
  {
    'time': 18641,
    'acc_x': -0.14,
    'acc_y': -0.37,
    'acc_z': -0.87,
    'gyro_x': 22.93,
    'gyro_y': -4.75,
    'gyro_z': -23.69,
    'heading': 32.05
  },
  {
    'time': 18675,
    'acc_x': -0.18,
    'acc_y': -0.47,
    'acc_z': -0.87,
    'gyro_x': 16.44,
    'gyro_y': -4.06,
    'gyro_z': -14.16,
    'heading': 30.75
  },
  {
    'time': 18711,
    'acc_x': -0.21,
    'acc_y': -0.47,
    'acc_z': -0.82,
    'gyro_x': -15.4,
    'gyro_y': -2.52,
    'gyro_z': -20.73,
    'heading': 32.69
  },
  {
    'time': 18746,
    'acc_x': -0.19,
    'acc_y': -0.42,
    'acc_z': -0.95,
    'gyro_x': -23.95,
    'gyro_y': -5.56,
    'gyro_z': -14.53,
    'heading': 34.09
  },
  {
    'time': 18780,
    'acc_x': -0.21,
    'acc_y': -0.47,
    'acc_z': -0.9,
    'gyro_x': -22.89,
    'gyro_y': 0.05,
    'gyro_z': -7.86,
    'heading': 34.69
  },
  {
    'time': 18815,
    'acc_x': -0.25,
    'acc_y': -0.51,
    'acc_z': -0.94,
    'gyro_x': 0.56,
    'gyro_y': -7.36,
    'gyro_z': -12.9,
    'heading': 33.86
  },
  {
    'time': 18850,
    'acc_x': -0.24,
    'acc_y': -0.5,
    'acc_z': -0.96,
    'gyro_x': -2.35,
    'gyro_y': -1.83,
    'gyro_z': -21.79,
    'heading': 32.66
  },
  {
    'time': 18885,
    'acc_x': -0.19,
    'acc_y': -0.46,
    'acc_z': -0.97,
    'gyro_x': 21.44,
    'gyro_y': 5.13,
    'gyro_z': -27.71,
    'heading': 34.84
  },
  {
    'time': 18921,
    'acc_x': -0.14,
    'acc_y': -0.45,
    'acc_z': -0.99,
    'gyro_x': 11.86,
    'gyro_y': 16.11,
    'gyro_z': -24.07,
    'heading': 34.84
  },
  {
    'time': 18955,
    'acc_x': -0.13,
    'acc_y': -0.4,
    'acc_z': -0.86,
    'gyro_x': -6.71,
    'gyro_y': 13.5,
    'gyro_z': -22.1,
    'heading': 35.7
  },
  {
    'time': 18990,
    'acc_x': -0.08,
    'acc_y': -0.38,
    'acc_z': -0.98,
    'gyro_x': -8.71,
    'gyro_y': 8.62,
    'gyro_z': -16.27,
    'heading': 35.16
  },
  {
    'time': 19025,
    'acc_x': -0.05,
    'acc_y': -0.37,
    'acc_z': -0.89,
    'gyro_x': -28.45,
    'gyro_y': 19.47,
    'gyro_z': -7.36,
    'heading': 35.15
  },
  {
    'time': 19060,
    'acc_x': -0.04,
    'acc_y': -0.35,
    'acc_z': -0.91,
    'gyro_x': -33.83,
    'gyro_y': 16.47,
    'gyro_z': -0.44,
    'heading': 34.05
  },
  {
    'time': 19095,
    'acc_x': -0.1,
    'acc_y': -0.43,
    'acc_z': -0.94,
    'gyro_x': 2.07,
    'gyro_y': 3.24,
    'gyro_z': 4.76,
    'heading': 35.17
  },
  {
    'time': 19130,
    'acc_x': -0.11,
    'acc_y': -0.4,
    'acc_z': -0.93,
    'gyro_x': -2.77,
    'gyro_y': 7.28,
    'gyro_z': 2.14,
    'heading': 34.52
  },
  {
    'time': 19165,
    'acc_x': -0.07,
    'acc_y': -0.6,
    'acc_z': -0.55,
    'gyro_x': -1.87,
    'gyro_y': 31.28,
    'gyro_z': 11.75,
    'heading': 34.16
  },
  {
    'time': 19200,
    'acc_x': -0.09,
    'acc_y': -0.43,
    'acc_z': -0.95,
    'gyro_x': 11.62,
    'gyro_y': 1.72,
    'gyro_z': 1.48,
    'heading': 34.55
  },
  {
    'time': 19235,
    'acc_x': -0.01,
    'acc_y': -0.34,
    'acc_z': -0.86,
    'gyro_x': 9.3,
    'gyro_y': 35.94,
    'gyro_z': 13.98,
    'heading': 34.51
  },
  {
    'time': 19270,
    'acc_x': -0.09,
    'acc_y': -0.5,
    'acc_z': -0.78,
    'gyro_x': 16.1,
    'gyro_y': 7.85,
    'gyro_z': 8.73,
    'heading': 34.9
  },
  {
    'time': 19304,
    'acc_x': -0.02,
    'acc_y': -0.39,
    'acc_z': -1.02,
    'gyro_x': 24.95,
    'gyro_y': -4.69,
    'gyro_z': -7.22,
    'heading': 34.99
  },
  {
    'time': 19340,
    'acc_x': -0.02,
    'acc_y': -0.31,
    'acc_z': -1,
    'gyro_x': 47.55,
    'gyro_y': 11.37,
    'gyro_z': 0.02,
    'heading': 34.03
  },
  {
    'time': 19375,
    'acc_x': -0.04,
    'acc_y': -0.47,
    'acc_z': -0.85,
    'gyro_x': 49.3,
    'gyro_y': 33.86,
    'gyro_z': 25.42,
    'heading': 34.17
  },
  {
    'time': 19410,
    'acc_x': -0.04,
    'acc_y': -0.55,
    'acc_z': -0.78,
    'gyro_x': 29.73,
    'gyro_y': 3.67,
    'gyro_z': 6.08,
    'heading': 34.72
  },
  {
    'time': 19444,
    'acc_x': -0.01,
    'acc_y': -0.48,
    'acc_z': -0.79,
    'gyro_x': 3.54,
    'gyro_y': 14.68,
    'gyro_z': 3.14,
    'heading': 35.85
  },
  {
    'time': 19479,
    'acc_x': -0.11,
    'acc_y': -0.52,
    'acc_z': -0.66,
    'gyro_x': 61.27,
    'gyro_y': 64.53,
    'gyro_z': 32.59,
    'heading': 37
  },
  {
    'time': 19515,
    'acc_x': -0.09,
    'acc_y': -0.53,
    'acc_z': -0.77,
    'gyro_x': 33.75,
    'gyro_y': 14.72,
    'gyro_z': 4.59,
    'heading': 36.09
  },
  {
    'time': 19550,
    'acc_x': -0.03,
    'acc_y': -0.58,
    'acc_z': -0.76,
    'gyro_x': -2.18,
    'gyro_y': 6.63,
    'gyro_z': -9.14,
    'heading': 36.89
  },
  {
    'time': 19585,
    'acc_x': -0.05,
    'acc_y': -0.58,
    'acc_z': -0.75,
    'gyro_x': -57.17,
    'gyro_y': 2.25,
    'gyro_z': -12.61,
    'heading': 36.12
  },
  {
    'time': 19619,
    'acc_x': 0.02,
    'acc_y': -0.52,
    'acc_z': -0.79,
    'gyro_x': -111.08,
    'gyro_y': -8.9,
    'gyro_z': -19.83,
    'heading': 35.54
  },
  {
    'time': 19655,
    'acc_x': -0.02,
    'acc_y': -0.39,
    'acc_z': -1,
    'gyro_x': -66.11,
    'gyro_y': -38.08,
    'gyro_z': -30.94,
    'heading': 34.65
  },
  {
    'time': 19690,
    'acc_x': -0.02,
    'acc_y': -0.4,
    'acc_z': -0.95,
    'gyro_x': -74.79,
    'gyro_y': -11.74,
    'gyro_z': -25.87,
    'heading': 36.48
  },
  {
    'time': 19724,
    'acc_x': 0.02,
    'acc_y': -0.26,
    'acc_z': -0.97,
    'gyro_x': -88.33,
    'gyro_y': 17.89,
    'gyro_z': -49.43,
    'heading': 35.45
  },
  {
    'time': 19759,
    'acc_x': 0.03,
    'acc_y': -0.25,
    'acc_z': -0.95,
    'gyro_x': 121.44,
    'gyro_y': -29.05,
    'gyro_z': -28.79,
    'heading': 33.58
  },
  {
    'time': 19795,
    'acc_x': -0.03,
    'acc_y': -0.36,
    'acc_z': -0.86,
    'gyro_x': 58.7,
    'gyro_y': -6.82,
    'gyro_z': -16.98,
    'heading': 35.05
  },
  {
    'time': 19829,
    'acc_x': -0.03,
    'acc_y': -0.4,
    'acc_z': -0.9,
    'gyro_x': -68.83,
    'gyro_y': 26.21,
    'gyro_z': -5.6,
    'heading': 37.6
  },
  {
    'time': 19864,
    'acc_x': -0.06,
    'acc_y': -0.52,
    'acc_z': -0.7,
    'gyro_x': -45.05,
    'gyro_y': 7.95,
    'gyro_z': -35.58,
    'heading': 37.9
  },
  {
    'time': 19899,
    'acc_x': 0,
    'acc_y': -0.35,
    'acc_z': -0.92,
    'gyro_x': 42.2,
    'gyro_y': -22.7,
    'gyro_z': -78.23,
    'heading': 37.18
  },
  {
    'time': 19934,
    'acc_x': -0.03,
    'acc_y': -0.39,
    'acc_z': -0.95,
    'gyro_x': -1.07,
    'gyro_y': -4.76,
    'gyro_z': -21.63,
    'heading': 38.54
  },
  {
    'time': 19969,
    'acc_x': 0.04,
    'acc_y': -0.41,
    'acc_z': -0.94,
    'gyro_x': -14.69,
    'gyro_y': -8.49,
    'gyro_z': -18.5,
    'heading': 42.04
  },
  {
    'time': 20004,
    'acc_x': 0.13,
    'acc_y': -0.15,
    'acc_z': -1.12,
    'gyro_x': -58.81,
    'gyro_y': -18.6,
    'gyro_z': -10.04,
    'heading': 42.38
  },
  {
    'time': 20039,
    'acc_x': 0.04,
    'acc_y': -0.31,
    'acc_z': -1.05,
    'gyro_x': -2.05,
    'gyro_y': -14.89,
    'gyro_z': 13.3,
    'heading': 43.33
  },
  {
    'time': 20074,
    'acc_x': -0.02,
    'acc_y': -0.38,
    'acc_z': -1.04,
    'gyro_x': -28.09,
    'gyro_y': -21.41,
    'gyro_z': -5.39,
    'heading': 44.4
  },
  {
    'time': 20108,
    'acc_x': -0.01,
    'acc_y': -0.26,
    'acc_z': -1.07,
    'gyro_x': -47.17,
    'gyro_y': -7.97,
    'gyro_z': -3.07,
    'heading': 42.38
  },
  {
    'time': 20144,
    'acc_x': -0.06,
    'acc_y': -0.45,
    'acc_z': -1.13,
    'gyro_x': -45.61,
    'gyro_y': -13.36,
    'gyro_z': -11.21,
    'heading': 43.47
  },
  {
    'time': 20179,
    'acc_x': 0.1,
    'acc_y': -0.27,
    'acc_z': -0.98,
    'gyro_x': -19.74,
    'gyro_y': -16.37,
    'gyro_z': -29.37,
    'heading': 42.15
  },
  {
    'time': 20214,
    'acc_x': 0,
    'acc_y': -0.23,
    'acc_z': -1.02,
    'gyro_x': -54.21,
    'gyro_y': 1.91,
    'gyro_z': 0.77,
    'heading': 41.66
  },
  {
    'time': 20249,
    'acc_x': -0.09,
    'acc_y': -0.37,
    'acc_z': -0.98,
    'gyro_x': -52.6,
    'gyro_y': -5.56,
    'gyro_z': -30.94,
    'heading': 41.78
  },
  {
    'time': 20284,
    'acc_x': -0.13,
    'acc_y': -0.38,
    'acc_z': -1.32,
    'gyro_x': -44.79,
    'gyro_y': -14.5,
    'gyro_z': -51.63,
    'heading': 40.49
  },
  {
    'time': 20318,
    'acc_x': 0.08,
    'acc_y': -0.05,
    'acc_z': -0.97,
    'gyro_x': -38.45,
    'gyro_y': 1.22,
    'gyro_z': -24.2,
    'heading': 39.87
  },
  {
    'time': 20353,
    'acc_x': -0.14,
    'acc_y': -0.38,
    'acc_z': -1.13,
    'gyro_x': -76.29,
    'gyro_y': 18.3,
    'gyro_z': -29.02,
    'heading': 39.87
  },
  {
    'time': 20389,
    'acc_x': 0.01,
    'acc_y': 0.08,
    'acc_z': -1.18,
    'gyro_x': -125.42,
    'gyro_y': 42.47,
    'gyro_z': 18.64,
    'heading': 38.85
  },
  {
    'time': 20424,
    'acc_x': 0.02,
    'acc_y': -0.04,
    'acc_z': -0.92,
    'gyro_x': -40.72,
    'gyro_y': 16.17,
    'gyro_z': 20.78,
    'heading': 37.91
  },
  {
    'time': 20458,
    'acc_x': -0.1,
    'acc_y': -0.24,
    'acc_z': -0.94,
    'gyro_x': -30.21,
    'gyro_y': 17.15,
    'gyro_z': -22.09,
    'heading': 35.26
  },
  {
    'time': 20493,
    'acc_x': 0.18,
    'acc_y': 0.22,
    'acc_z': -0.86,
    'gyro_x': 8.76,
    'gyro_y': 9.08,
    'gyro_z': -31.75,
    'heading': 34.31
  },
  {
    'time': 20529,
    'acc_x': 0.1,
    'acc_y': -0.05,
    'acc_z': -0.89,
    'gyro_x': 20.09,
    'gyro_y': -1.97,
    'gyro_z': -9.53,
    'heading': 33.73
  },
  {
    'time': 20564,
    'acc_x': 0.09,
    'acc_y': 0,
    'acc_z': -0.96,
    'gyro_x': 12.79,
    'gyro_y': -9.94,
    'gyro_z': -3.98,
    'heading': 33.58
  },
  {
    'time': 20598,
    'acc_x': 0,
    'acc_y': -0.13,
    'acc_z': -0.96,
    'gyro_x': 17.4,
    'gyro_y': -24.05,
    'gyro_z': -19.66,
    'heading': 35.09
  },
  {
    'time': 20633,
    'acc_x': 0.07,
    'acc_y': 0.07,
    'acc_z': -1.1,
    'gyro_x': 8.07,
    'gyro_y': -14.63,
    'gyro_z': -27.64,
    'heading': 35.39
  },
  {
    'time': 20668,
    'acc_x': 0.07,
    'acc_y': 0.02,
    'acc_z': -0.98,
    'gyro_x': 16.43,
    'gyro_y': -4.62,
    'gyro_z': -0.63,
    'heading': 36.46
  },
  {
    'time': 20703,
    'acc_x': 0,
    'acc_y': -0.08,
    'acc_z': -1.11,
    'gyro_x': 8.98,
    'gyro_y': -9.27,
    'gyro_z': 2.38,
    'heading': 36.47
  },
  {
    'time': 20738,
    'acc_x': 0.02,
    'acc_y': -0.01,
    'acc_z': -1.23,
    'gyro_x': 9.06,
    'gyro_y': 3.47,
    'gyro_z': -9.15,
    'heading': 38.87
  },
  {
    'time': 20773,
    'acc_x': 0.07,
    'acc_y': -0.02,
    'acc_z': -1.13,
    'gyro_x': 2.02,
    'gyro_y': 5.73,
    'gyro_z': 6.17,
    'heading': 38.49
  },
  {
    'time': 20808,
    'acc_x': 0.02,
    'acc_y': -0.15,
    'acc_z': -1.06,
    'gyro_x': -6.03,
    'gyro_y': 10.17,
    'gyro_z': 3.15,
    'heading': 37.41
  },
  {
    'time': 20843,
    'acc_x': 0.11,
    'acc_y': -0.02,
    'acc_z': -0.78,
    'gyro_x': 3.88,
    'gyro_y': 5.77,
    'gyro_z': -15.49,
    'heading': 39.69
  },
  {
    'time': 20878,
    'acc_x': 0.04,
    'acc_y': -0.02,
    'acc_z': -1.04,
    'gyro_x': -12.36,
    'gyro_y': -7.15,
    'gyro_z': 2.86,
    'heading': 39.64
  },
  {
    'time': 20913,
    'acc_x': -0.09,
    'acc_y': -0.09,
    'acc_z': -1.28,
    'gyro_x': 3.39,
    'gyro_y': -4.11,
    'gyro_z': -0.13,
    'heading': 38.19
  },
  {
    'time': 20948,
    'acc_x': 0.04,
    'acc_y': 0.02,
    'acc_z': -1.21,
    'gyro_x': 15.63,
    'gyro_y': 22.92,
    'gyro_z': -12.4,
    'heading': 37.75
  },
  {
    'time': 20983,
    'acc_x': 0.14,
    'acc_y': -0.03,
    'acc_z': -0.66,
    'gyro_x': 19.56,
    'gyro_y': 46.85,
    'gyro_z': -2.34,
    'heading': 38.3
  },
  {
    'time': 21018,
    'acc_x': 0.18,
    'acc_y': -0.13,
    'acc_z': -0.64,
    'gyro_x': -0.44,
    'gyro_y': 11.03,
    'gyro_z': 0.31,
    'heading': 37.69
  },
  {
    'time': 21052,
    'acc_x': 0.13,
    'acc_y': -0.11,
    'acc_z': -0.8,
    'gyro_x': -10.01,
    'gyro_y': -16.47,
    'gyro_z': -6.98,
    'heading': 36.96
  },
  {
    'time': 21088,
    'acc_x': 0.07,
    'acc_y': 0.04,
    'acc_z': -1.16,
    'gyro_x': 0.11,
    'gyro_y': -25.21,
    'gyro_z': -0.97,
    'heading': 36.96
  },
  {
    'time': 21123,
    'acc_x': -0.11,
    'acc_y': -0.26,
    'acc_z': -1.34,
    'gyro_x': 23.9,
    'gyro_y': -6.89,
    'gyro_z': -6.77,
    'heading': 38.68
  },
  {
    'time': 21158,
    'acc_x': 0.22,
    'acc_y': 0.09,
    'acc_z': -0.65,
    'gyro_x': -4.85,
    'gyro_y': -2.17,
    'gyro_z': -14.68,
    'heading': 37.57
  },
  {
    'time': 21193,
    'acc_x': 0.08,
    'acc_y': -0.06,
    'acc_z': -1.03,
    'gyro_x': -43.44,
    'gyro_y': -6.47,
    'gyro_z': 22.79,
    'heading': 37.95
  },
  {
    'time': 21227,
    'acc_x': -0.1,
    'acc_y': -0.23,
    'acc_z': -1.29,
    'gyro_x': 18.85,
    'gyro_y': -23.4,
    'gyro_z': -23.18,
    'heading': 38.45
  },
  {
    'time': 21262,
    'acc_x': 0.16,
    'acc_y': 0.2,
    'acc_z': -0.63,
    'gyro_x': 29.17,
    'gyro_y': 9.95,
    'gyro_z': -38.98,
    'heading': 38.05
  },
  {
    'time': 21298,
    'acc_x': 0.12,
    'acc_y': -0.03,
    'acc_z': -1.05,
    'gyro_x': -63.24,
    'gyro_y': 26.16,
    'gyro_z': 45.5,
    'heading': 38.26
  },
  {
    'time': 21333,
    'acc_x': -0.07,
    'acc_y': -0.31,
    'acc_z': -1.2,
    'gyro_x': 1.14,
    'gyro_y': -1.44,
    'gyro_z': -2.2,
    'heading': 36.67
  },
  {
    'time': 21368,
    'acc_x': 0.26,
    'acc_y': 0.32,
    'acc_z': -0.75,
    'gyro_x': 53.36,
    'gyro_y': 15.69,
    'gyro_z': -31.89,
    'heading': 36.67
  },
  {
    'time': 21402,
    'acc_x': 0,
    'acc_y': -0.18,
    'acc_z': -0.86,
    'gyro_x': -4.53,
    'gyro_y': 3.43,
    'gyro_z': 48.56,
    'heading': 36.9
  },
  {
    'time': 21437,
    'acc_x': -0.06,
    'acc_y': -0.32,
    'acc_z': -1.05,
    'gyro_x': 2.53,
    'gyro_y': -6.46,
    'gyro_z': -2.98,
    'heading': 35.74
  },
  {
    'time': 21472,
    'acc_x': 0.54,
    'acc_y': 0.67,
    'acc_z': -0.96,
    'gyro_x': 19.95,
    'gyro_y': -19.23,
    'gyro_z': -13.23,
    'heading': 37.1
  },
  {
    'time': 21508,
    'acc_x': -0.32,
    'acc_y': -0.56,
    'acc_z': -1.14,
    'gyro_x': -22.31,
    'gyro_y': 22.73,
    'gyro_z': 103.48,
    'heading': 40.17
  },
  {
    'time': 21542,
    'acc_x': -0.14,
    'acc_y': -0.42,
    'acc_z': -1.19,
    'gyro_x': 50.62,
    'gyro_y': -12.25,
    'gyro_z': -93.68,
    'heading': 38.16
  },
  {
    'time': 21577,
    'acc_x': 0.72,
    'acc_y': 0.85,
    'acc_z': -0.67,
    'gyro_x': -54.62,
    'gyro_y': 9.24,
    'gyro_z': -40.53,
    'heading': 38.49
  },
  {
    'time': 21612,
    'acc_x': -0.3,
    'acc_y': -0.48,
    'acc_z': -1.26,
    'gyro_x': -41.96,
    'gyro_y': 17.27,
    'gyro_z': 83.56,
    'heading': 40.42
  },
  {
    'time': 21647,
    'acc_x': -0.16,
    'acc_y': -0.35,
    'acc_z': -1.28,
    'gyro_x': 87.01,
    'gyro_y': -38.29,
    'gyro_z': -72.74,
    'heading': 37.99
  },
  {
    'time': 21682,
    'acc_x': 0.65,
    'acc_y': 1.06,
    'acc_z': -0.87,
    'gyro_x': -35.9,
    'gyro_y': 19.44,
    'gyro_z': 13.83,
    'heading': 38.47
  },
  {
    'time': 21717,
    'acc_x': -0.49,
    'acc_y': -0.87,
    'acc_z': -0.77,
    'gyro_x': -27.5,
    'gyro_y': 44.22,
    'gyro_z': 86.44,
    'heading': 39.86
  },
  {
    'time': 21752,
    'acc_x': -0.02,
    'acc_y': -0.3,
    'acc_z': -1,
    'gyro_x': 24.88,
    'gyro_y': -20.61,
    'gyro_z': -65.85,
    'heading': 39.13
  },
  {
    'time': 21787,
    'acc_x': 0.62,
    'acc_y': 0.98,
    'acc_z': -0.88,
    'gyro_x': -22.96,
    'gyro_y': 10.85,
    'gyro_z': -0.19,
    'heading': 39.33
  },
  {
    'time': 21822,
    'acc_x': -0.35,
    'acc_y': -0.69,
    'acc_z': -0.77,
    'gyro_x': 4.92,
    'gyro_y': 41.69,
    'gyro_z': 86.31,
    'heading': 38.1
  },
  {
    'time': 21856,
    'acc_x': -0.01,
    'acc_y': -0.27,
    'acc_z': -0.98,
    'gyro_x': 7.83,
    'gyro_y': -22.95,
    'gyro_z': -86.16,
    'heading': 37.07
  },
  {
    'time': 21892,
    'acc_x': 0.64,
    'acc_y': 1.1,
    'acc_z': -1.1,
    'gyro_x': -86.26,
    'gyro_y': 6.63,
    'gyro_z': 3.52,
    'heading': 37.21
  },
  {
    'time': 21927,
    'acc_x': -0.47,
    'acc_y': -0.65,
    'acc_z': -0.95,
    'gyro_x': 8.79,
    'gyro_y': 25.37,
    'gyro_z': 97.4,
    'heading': 38.3
  },
  {
    'time': 21962,
    'acc_x': 0.04,
    'acc_y': -0.13,
    'acc_z': -1.05,
    'gyro_x': 20.82,
    'gyro_y': -30.14,
    'gyro_z': -98.73,
    'heading': 37.3
  },
  {
    'time': 21997,
    'acc_x': 0.72,
    'acc_y': 1.3,
    'acc_z': -1.01,
    'gyro_x': -43.27,
    'gyro_y': -4.64,
    'gyro_z': -11.57,
    'heading': 38.22
  },
  {
    'time': 22031,
    'acc_x': -0.38,
    'acc_y': -0.44,
    'acc_z': -0.95,
    'gyro_x': 7.83,
    'gyro_y': 41.24,
    'gyro_z': 110.49,
    'heading': 36.51
  },
  {
    'time': 22067,
    'acc_x': 0.01,
    'acc_y': -0.24,
    'acc_z': -0.98,
    'gyro_x': 35.69,
    'gyro_y': -25.05,
    'gyro_z': -89.98,
    'heading': 35.89
  },
  {
    'time': 22101,
    'acc_x': 0.59,
    'acc_y': 1.02,
    'acc_z': -1,
    'gyro_x': -21.63,
    'gyro_y': -1.42,
    'gyro_z': -27.11,
    'heading': 37.44
  },
  {
    'time': 22136,
    'acc_x': -0.3,
    'acc_y': -0.36,
    'acc_z': -1.03,
    'gyro_x': 8.18,
    'gyro_y': 29.47,
    'gyro_z': 89.51,
    'heading': 37.8
  },
  {
    'time': 22171,
    'acc_x': 0.04,
    'acc_y': -0.2,
    'acc_z': -0.92,
    'gyro_x': 31.92,
    'gyro_y': -18.68,
    'gyro_z': -89.86,
    'heading': 36.93
  },
  {
    'time': 22207,
    'acc_x': 0.66,
    'acc_y': 1.08,
    'acc_z': -0.91,
    'gyro_x': -44.19,
    'gyro_y': -3.23,
    'gyro_z': -49.27,
    'heading': 37.41
  },
  {
    'time': 22242,
    'acc_x': -0.22,
    'acc_y': -0.24,
    'acc_z': -1.15,
    'gyro_x': -45.03,
    'gyro_y': 31.18,
    'gyro_z': 104.6,
    'heading': 38.78
  },
  {
    'time': 22276,
    'acc_x': -0.06,
    'acc_y': -0.39,
    'acc_z': -0.93,
    'gyro_x': 42.74,
    'gyro_y': -17.72,
    'gyro_z': -79.6,
    'heading': 37.66
  },
  {
    'time': 22311,
    'acc_x': 0.54,
    'acc_y': 0.85,
    'acc_z': -0.97,
    'gyro_x': -41.86,
    'gyro_y': -2.9,
    'gyro_z': -78.97,
    'heading': 36.31
  },
  {
    'time': 22346,
    'acc_x': 0.09,
    'acc_y': 0,
    'acc_z': -1.13,
    'gyro_x': -69.45,
    'gyro_y': 27.09,
    'gyro_z': 73.2,
    'heading': 40.68
  },
  {
    'time': 22381,
    'acc_x': -0.07,
    'acc_y': -0.43,
    'acc_z': -1.21,
    'gyro_x': -56.92,
    'gyro_y': 16.06,
    'gyro_z': -64.88,
    'heading': 37.84
  },
  {
    'time': 22416,
    'acc_x': 0.48,
    'acc_y': 0.76,
    'acc_z': -0.89,
    'gyro_x': -160.21,
    'gyro_y': 36.18,
    'gyro_z': -76.48,
    'heading': 36.42
  },
  {
    'time': 22451,
    'acc_x': 0.13,
    'acc_y': 0.18,
    'acc_z': -1.38,
    'gyro_x': -154.31,
    'gyro_y': 39.54,
    'gyro_z': 50.65,
    'heading': 37.16
  },
  {
    'time': 22486,
    'acc_x': 0.12,
    'acc_y': 0.12,
    'acc_z': -1.05,
    'gyro_x': -13.07,
    'gyro_y': 10.89,
    'gyro_z': -22.97,
    'heading': 31.77
  },
  {
    'time': 22521,
    'acc_x': 0.43,
    'acc_y': 0.76,
    'acc_z': -0.74,
    'gyro_x': 26.04,
    'gyro_y': 9.15,
    'gyro_z': -16.92,
    'heading': 29.81
  },
  {
    'time': 22556,
    'acc_x': 0.07,
    'acc_y': 0.15,
    'acc_z': -1.03,
    'gyro_x': 85.01,
    'gyro_y': -11.74,
    'gyro_z': 42.05,
    'heading': 28.89
  },
  {
    'time': 22591,
    'acc_x': 0.03,
    'acc_y': -0.04,
    'acc_z': -1.06,
    'gyro_x': 238.94,
    'gyro_y': -37.49,
    'gyro_z': -43.27,
    'heading': 30.8
  },
  {
    'time': 22626,
    'acc_x': 0.38,
    'acc_y': 0.38,
    'acc_z': -0.8,
    'gyro_x': 159.43,
    'gyro_y': -75.28,
    'gyro_z': -39.57,
    'heading': 35.24
  },
  {
    'time': 22661,
    'acc_x': -0.15,
    'acc_y': -0.32,
    'acc_z': -1.26,
    'gyro_x': 143.76,
    'gyro_y': -46.03,
    'gyro_z': 17.62,
    'heading': 38.5
  },
  {
    'time': 22696,
    'acc_x': 0.06,
    'acc_y': -0.24,
    'acc_z': -0.98,
    'gyro_x': 157.4,
    'gyro_y': -47.73,
    'gyro_z': -44.79,
    'heading': 41.32
  },
  {
    'time': 22731,
    'acc_x': 0.37,
    'acc_y': 0.38,
    'acc_z': -0.87,
    'gyro_x': -95.82,
    'gyro_y': 23.72,
    'gyro_z': 48.81,
    'heading': 42.45
  },
  {
    'time': 22766,
    'acc_x': -0.44,
    'acc_y': -0.75,
    'acc_z': -1.26,
    'gyro_x': -123.27,
    'gyro_y': 59.46,
    'gyro_z': 70.46,
    'heading': 44.06
  },
  {
    'time': 22801,
    'acc_x': 0.08,
    'acc_y': -0.16,
    'acc_z': -1,
    'gyro_x': 38.18,
    'gyro_y': -12.78,
    'gyro_z': -90.64,
    'heading': 42.2
  },
  {
    'time': 22835,
    'acc_x': 0.63,
    'acc_y': 1.05,
    'acc_z': -0.99,
    'gyro_x': -203.48,
    'gyro_y': 51.97,
    'gyro_z': 80.71,
    'heading': 40.9
  },
  {
    'time': 22871,
    'acc_x': -0.44,
    'acc_y': -0.82,
    'acc_z': -0.91,
    'gyro_x': 10.31,
    'gyro_y': 47,
    'gyro_z': 88.29,
    'heading': 40.34
  },
  {
    'time': 22906,
    'acc_x': 0.17,
    'acc_y': -0.15,
    'acc_z': -0.85,
    'gyro_x': 61.06,
    'gyro_y': -30.67,
    'gyro_z': -76.82,
    'heading': 36.65
  },
  {
    'time': 22940,
    'acc_x': 0.61,
    'acc_y': 1.01,
    'acc_z': -0.77,
    'gyro_x': -126.86,
    'gyro_y': 15.44,
    'gyro_z': -9.78,
    'heading': 39.47
  },
  {
    'time': 22975,
    'acc_x': -0.18,
    'acc_y': -0.34,
    'acc_z': -1.53,
    'gyro_x': -32.33,
    'gyro_y': 50.11,
    'gyro_z': 71.24,
    'heading': 38.55
  },
  {
    'time': 23011,
    'acc_x': 0.09,
    'acc_y': -0.26,
    'acc_z': -1.04,
    'gyro_x': 169.22,
    'gyro_y': -57.56,
    'gyro_z': -48.56,
    'heading': 37.27
  },
  {
    'time': 23045,
    'acc_x': 0.63,
    'acc_y': 0.51,
    'acc_z': -0.41,
    'gyro_x': -44.63,
    'gyro_y': -23.17,
    'gyro_z': -32.48,
    'heading': 39.38
  },
  {
    'time': 23080,
    'acc_x': -0.07,
    'acc_y': -0.09,
    'acc_z': -1.72,
    'gyro_x': -171.87,
    'gyro_y': 82.55,
    'gyro_z': 39.17,
    'heading': 40.07
  },
  {
    'time': 23116,
    'acc_x': 0.1,
    'acc_y': -0.14,
    'acc_z': -0.98,
    'gyro_x': 54.74,
    'gyro_y': -27.99,
    'gyro_z': -46.88,
    'heading': 39.74
  },
  {
    'time': 23150,
    'acc_x': 0.39,
    'acc_y': 0.35,
    'acc_z': -0.66,
    'gyro_x': 23.44,
    'gyro_y': 2.52,
    'gyro_z': -52.01,
    'heading': 37.87
  },
  {
    'time': 23185,
    'acc_x': 0.15,
    'acc_y': 0.26,
    'acc_z': -1.37,
    'gyro_x': -66.35,
    'gyro_y': -18.49,
    'gyro_z': 27.26,
    'heading': 37.75
  },
  {
    'time': 23220,
    'acc_x': -0.04,
    'acc_y': -0.18,
    'acc_z': -1.05,
    'gyro_x': 179.39,
    'gyro_y': -66.72,
    'gyro_z': -4.52,
    'heading': 36.8
  },
  {
    'time': 23256,
    'acc_x': 0.12,
    'acc_y': -0.09,
    'acc_z': -1.18,
    'gyro_x': 154.45,
    'gyro_y': -59.07,
    'gyro_z': -57.28,
    'heading': 39.96
  },
  {
    'time': 23290,
    'acc_x': 0.11,
    'acc_y': 0.16,
    'acc_z': -0.97,
    'gyro_x': -103.06,
    'gyro_y': 6.17,
    'gyro_z': 50.95,
    'heading': 40.91
  },
  {
    'time': 23325,
    'acc_x': -0.33,
    'acc_y': -0.73,
    'acc_z': -1.22,
    'gyro_x': -44.37,
    'gyro_y': 76.27,
    'gyro_z': 83.44,
    'heading': 41.32
  },
  {
    'time': 23360,
    'acc_x': 0.03,
    'acc_y': -0.31,
    'acc_z': -0.98,
    'gyro_x': 73.9,
    'gyro_y': -5.32,
    'gyro_z': -78.5,
    'heading': 41.01
  },
  {
    'time': 23395,
    'acc_x': 0.71,
    'acc_y': 0.83,
    'acc_z': -0.52,
    'gyro_x': -86.27,
    'gyro_y': 7.16,
    'gyro_z': 35.01,
    'heading': 41.47
  },
  {
    'time': 23430,
    'acc_x': -0.32,
    'acc_y': -0.51,
    'acc_z': -1.71,
    'gyro_x': -132.63,
    'gyro_y': 76.44,
    'gyro_z': 153.61,
    'heading': 42.92
  },
  {
    'time': 23465,
    'acc_x': 0.02,
    'acc_y': -0.31,
    'acc_z': -1.01,
    'gyro_x': 83.47,
    'gyro_y': -24.5,
    'gyro_z': -37.33,
    'heading': 38.69
  },
  {
    'time': 23500,
    'acc_x': 0.55,
    'acc_y': 0.6,
    'acc_z': -0.5,
    'gyro_x': 20.82,
    'gyro_y': 8.39,
    'gyro_z': -50.18,
    'heading': 38.02
  },
  {
    'time': 23535,
    'acc_x': 0.06,
    'acc_y': 0.09,
    'acc_z': -1.39,
    'gyro_x': -8.95,
    'gyro_y': -7.87,
    'gyro_z': 53.02,
    'heading': 37.63
  },
  {
    'time': 23569,
    'acc_x': -0.14,
    'acc_y': -0.6,
    'acc_z': -0.95,
    'gyro_x': 250.12,
    'gyro_y': -87.2,
    'gyro_z': -9.04,
    'heading': 37.01
  },
  {
    'time': 23605,
    'acc_x': 0.29,
    'acc_y': -0.19,
    'acc_z': -0.79,
    'gyro_x': 157.15,
    'gyro_y': -58.57,
    'gyro_z': -66.61,
    'heading': 41.49
  },
  {
    'time': 23640,
    'acc_x': 0.25,
    'acc_y': 0.11,
    'acc_z': -1.2,
    'gyro_x': -134.92,
    'gyro_y': 24.43,
    'gyro_z': 62.43,
    'heading': 42.39
  },
  {
    'time': 23675,
    'acc_x': -0.25,
    'acc_y': -0.71,
    'acc_z': -1.16,
    'gyro_x': -120.01,
    'gyro_y': 76.63,
    'gyro_z': 49.69,
    'heading': 43.5
  },
  {
    'time': 23709,
    'acc_x': 0.06,
    'acc_y': -0.25,
    'acc_z': -1.19,
    'gyro_x': 8.82,
    'gyro_y': -37.91,
    'gyro_z': -93.59,
    'heading': 40.83
  },
  {
    'time': 23745,
    'acc_x': 0.5,
    'acc_y': 0.69,
    'acc_z': -0.93,
    'gyro_x': -236.54,
    'gyro_y': 46.24,
    'gyro_z': 33.12,
    'heading': 41.38
  },
  {
    'time': 23780,
    'acc_x': -0.23,
    'acc_y': -0.48,
    'acc_z': -1.25,
    'gyro_x': -129.02,
    'gyro_y': 112.87,
    'gyro_z': 113.26,
    'heading': 39.76
  },
  {
    'time': 23814,
    'acc_x': 0.17,
    'acc_y': -0.02,
    'acc_z': -0.94,
    'gyro_x': -28.4,
    'gyro_y': -18.92,
    'gyro_z': -67.3,
    'heading': 35.25
  },
  {
    'time': 23850,
    'acc_x': 0.51,
    'acc_y': 0.56,
    'acc_z': -0.44,
    'gyro_x': -45.41,
    'gyro_y': 2.25,
    'gyro_z': -72.14,
    'heading': 33.89
  },
  {
    'time': 23885,
    'acc_x': 0.25,
    'acc_y': 0.32,
    'acc_z': -1.2,
    'gyro_x': 27.35,
    'gyro_y': -39.69,
    'gyro_z': 29.46,
    'heading': 32.89
  },
  {
    'time': 23919,
    'acc_x': -0.03,
    'acc_y': -0.3,
    'acc_z': -1.07,
    'gyro_x': 250.12,
    'gyro_y': -188.53,
    'gyro_z': -6.53,
    'heading': 31.47
  },
  {
    'time': 23954,
    'acc_x': 0.04,
    'acc_y': -0.36,
    'acc_z': -1.14,
    'gyro_x': 243.84,
    'gyro_y': -101.7,
    'gyro_z': -45.88,
    'heading': 38.85
  },
  {
    'time': 23989,
    'acc_x': 0,
    'acc_y': -0.3,
    'acc_z': -1.16,
    'gyro_x': -12.02,
    'gyro_y': 22.68,
    'gyro_z': 19.15,
    'heading': 43.63
  },
  {
    'time': 24025,
    'acc_x': -0.14,
    'acc_y': -0.54,
    'acc_z': -1.05,
    'gyro_x': -65.85,
    'gyro_y': 73.53,
    'gyro_z': 44.06,
    'heading': 44.6
  },
  {
    'time': 24059,
    'acc_x': 0.07,
    'acc_y': -0.39,
    'acc_z': -0.92,
    'gyro_x': 17.56,
    'gyro_y': -1.28,
    'gyro_z': -22.95,
    'heading': 44.08
  },
  {
    'time': 24094,
    'acc_x': 0.31,
    'acc_y': 0.1,
    'acc_z': -1.01,
    'gyro_x': -126.56,
    'gyro_y': 29.42,
    'gyro_z': 5.79,
    'heading': 43.87
  },
  {
    'time': 24129,
    'acc_x': -0.16,
    'acc_y': -0.46,
    'acc_z': -0.85,
    'gyro_x': -167.84,
    'gyro_y': 71.93,
    'gyro_z': 54.4,
    'heading': 43
  },
  {
    'time': 24164,
    'acc_x': 0.08,
    'acc_y': -0.18,
    'acc_z': -1.26,
    'gyro_x': -69.05,
    'gyro_y': 17.4,
    'gyro_z': -38.95,
    'heading': 39.91
  },
  {
    'time': 24199,
    'acc_x': 0.49,
    'acc_y': 0.37,
    'acc_z': -0.48,
    'gyro_x': -33.21,
    'gyro_y': 8.93,
    'gyro_z': -33.89,
    'heading': 38.48
  },
  {
    'time': 24234,
    'acc_x': 0.12,
    'acc_y': 0.03,
    'acc_z': -1.1,
    'gyro_x': 42.02,
    'gyro_y': 1.73,
    'gyro_z': 50.85,
    'heading': 38.17
  },
  {
    'time': 24269,
    'acc_x': -0.1,
    'acc_y': -0.35,
    'acc_z': -0.94,
    'gyro_x': 112.11,
    'gyro_y': -60.13,
    'gyro_z': -36.44,
    'heading': 36.35
  },
  {
    'time': 24304,
    'acc_x': 0.44,
    'acc_y': 0.36,
    'acc_z': -0.88,
    'gyro_x': 84.11,
    'gyro_y': -32.61,
    'gyro_z': -63.55,
    'heading': 38.66
  },
  {
    'time': 24339,
    'acc_x': 0.2,
    'acc_y': 0.14,
    'acc_z': -1.29,
    'gyro_x': -9.82,
    'gyro_y': 4.76,
    'gyro_z': 89.47,
    'heading': 39.76
  },
  {
    'time': 24374,
    'acc_x': -0.46,
    'acc_y': -0.97,
    'acc_z': -0.75,
    'gyro_x': 26.77,
    'gyro_y': 50.48,
    'gyro_z': 37.44,
    'heading': 40.71
  },
  {
    'time': 24408,
    'acc_x': 0.03,
    'acc_y': -0.37,
    'acc_z': -0.89,
    'gyro_x': 64.02,
    'gyro_y': -47.02,
    'gyro_z': -130.85,
    'heading': 41.9
  },
  {
    'time': 24444,
    'acc_x': 0.66,
    'acc_y': 0.96,
    'acc_z': -0.77,
    'gyro_x': -189.09,
    'gyro_y': 42.12,
    'gyro_z': 0.82,
    'heading': 42.7
  },
  {
    'time': 24479,
    'acc_x': -0.17,
    'acc_y': -0.4,
    'acc_z': -1.4,
    'gyro_x': -130.91,
    'gyro_y': 97.93,
    'gyro_z': 151.85,
    'heading': 41.43
  },
  {
    'time': 24513,
    'acc_x': -0.04,
    'acc_y': -0.46,
    'acc_z': -1.17,
    'gyro_x': 54.43,
    'gyro_y': -25.42,
    'gyro_z': -58.31,
    'heading': 38.69
  },
  {
    'time': 24548,
    'acc_x': 0.5,
    'acc_y': 0.43,
    'acc_z': -0.56,
    'gyro_x': 3.32,
    'gyro_y': -1.54,
    'gyro_z': -89.58,
    'heading': 38.5
  },
  {
    'time': 24584,
    'acc_x': 0.27,
    'acc_y': 0.39,
    'acc_z': -1.26,
    'gyro_x': -129.47,
    'gyro_y': 14.35,
    'gyro_z': 84.39,
    'heading': 38.28
  },
  {
    'time': 24619,
    'acc_x': -0.24,
    'acc_y': -0.61,
    'acc_z': -0.89,
    'gyro_x': 59.47,
    'gyro_y': -9.19,
    'gyro_z': 16.25,
    'heading': 36.29
  },
  {
    'time': 24654,
    'acc_x': 0.17,
    'acc_y': -0.16,
    'acc_z': -1.09,
    'gyro_x': 77.03,
    'gyro_y': -41.5,
    'gyro_z': -80.4,
    'heading': 36.69
  },
  {
    'time': 24688,
    'acc_x': 0.5,
    'acc_y': 0.62,
    'acc_z': -0.94,
    'gyro_x': -84.21,
    'gyro_y': 8.25,
    'gyro_z': 21.44,
    'heading': 36.87
  },
  {
    'time': 24723,
    'acc_x': -0.13,
    'acc_y': -0.25,
    'acc_z': -1.23,
    'gyro_x': -35.65,
    'gyro_y': 75.38,
    'gyro_z': 103.74,
    'heading': 37.99
  },
  {
    'time': 24759,
    'acc_x': 0.2,
    'acc_y': -0.12,
    'acc_z': -0.9,
    'gyro_x': 106.08,
    'gyro_y': -23.57,
    'gyro_z': -42.8,
    'heading': 35.01
  },
  {
    'time': 24793,
    'acc_x': 0.6,
    'acc_y': 0.47,
    'acc_z': -0.93,
    'gyro_x': 21.06,
    'gyro_y': -0.11,
    'gyro_z': -1.69,
    'heading': 37.44
  },
  {
    'time': 24828,
    'acc_x': 0.34,
    'acc_y': 0.12,
    'acc_z': -1.03,
    'gyro_x': -38.73,
    'gyro_y': 46.43,
    'gyro_z': 70.13,
    'heading': 38.55
  },
  {
    'time': 24863,
    'acc_x': 0.23,
    'acc_y': -0.1,
    'acc_z': -0.72,
    'gyro_x': 1.98,
    'gyro_y': 21.09,
    'gyro_z': 64.9,
    'heading': 39.48
  },
  {
    'time': 24899,
    'acc_x': 0.24,
    'acc_y': -0.17,
    'acc_z': -1.09,
    'gyro_x': -27.6,
    'gyro_y': 24.24,
    'gyro_z': 66.93,
    'heading': 38.71
  },
  {
    'time': 24933,
    'acc_x': 0.25,
    'acc_y': -0.17,
    'acc_z': -0.8,
    'gyro_x': -24.98,
    'gyro_y': 24.08,
    'gyro_z': 32.4,
    'heading': 42.74
  },
  {
    'time': 24968,
    'acc_x': 0.27,
    'acc_y': 0.02,
    'acc_z': -1.22,
    'gyro_x': -22.68,
    'gyro_y': -1.67,
    'gyro_z': 26.28,
    'heading': 45.42
  },
  {
    'time': 25003,
    'acc_x': 0.17,
    'acc_y': -0.32,
    'acc_z': -1.2,
    'gyro_x': -24.89,
    'gyro_y': 6.88,
    'gyro_z': 29.68,
    'heading': 48.81
  },
  {
    'time': 25038,
    'acc_x': 0.44,
    'acc_y': 0.12,
    'acc_z': -1.28,
    'gyro_x': -35.07,
    'gyro_y': -2.76,
    'gyro_z': -31.87,
    'heading': 53.36
  },
  {
    'time': 25073,
    'acc_x': 0.23,
    'acc_y': 0.13,
    'acc_z': -1.68,
    'gyro_x': -33.17,
    'gyro_y': -43.59,
    'gyro_z': 29.23,
    'heading': 58.72
  },
  {
    'time': 25108,
    'acc_x': 0.17,
    'acc_y': -0.01,
    'acc_z': -1.29,
    'gyro_x': -34,
    'gyro_y': 10.34,
    'gyro_z': 5.4,
    'heading': 66.01
  },
  {
    'time': 25143,
    'acc_x': 0.38,
    'acc_y': 0.27,
    'acc_z': -1.2,
    'gyro_x': -31.02,
    'gyro_y': 4.59,
    'gyro_z': 29.26,
    'heading': 75.14
  },
  {
    'time': 25178,
    'acc_x': 0.05,
    'acc_y': -0.23,
    'acc_z': -1.02,
    'gyro_x': -33.03,
    'gyro_y': 0.21,
    'gyro_z': 46.61,
    'heading': 84.59
  },
  {
    'time': 25213,
    'acc_x': 0.2,
    'acc_y': 0,
    'acc_z': -0.85,
    'gyro_x': -19.21,
    'gyro_y': -20.08,
    'gyro_z': 8.44,
    'heading': 98.67
  },
  {
    'time': 25247,
    'acc_x': 0.25,
    'acc_y': 0.15,
    'acc_z': -1,
    'gyro_x': -49.54,
    'gyro_y': 0.31,
    'gyro_z': 37.01,
    'heading': 115.72
  },
  {
    'time': 25283,
    'acc_x': 0.11,
    'acc_y': -0.11,
    'acc_z': -0.87,
    'gyro_x': -55.82,
    'gyro_y': 29.19,
    'gyro_z': 44.6,
    'heading': 141.63
  },
  {
    'time': 25318,
    'acc_x': 0.19,
    'acc_y': -0.01,
    'acc_z': -1.05,
    'gyro_x': -17.63,
    'gyro_y': -13.79,
    'gyro_z': 18.64,
    'heading': 172.28
  },
  {
    'time': 25353,
    'acc_x': 0.12,
    'acc_y': -0.08,
    'acc_z': -1.16,
    'gyro_x': 22.94,
    'gyro_y': -15.64,
    'gyro_z': -2.68,
    'heading': 188.34
  },
  {
    'time': 25387,
    'acc_x': 0.14,
    'acc_y': -0.05,
    'acc_z': -1.01,
    'gyro_x': 65.62,
    'gyro_y': -30.95,
    'gyro_z': -26.02,
    'heading': 191.12
  },
  {
    'time': 25422,
    'acc_x': 0.2,
    'acc_y': 0.05,
    'acc_z': -1.24,
    'gyro_x': 27.85,
    'gyro_y': -37.31,
    'gyro_z': -25.59,
    'heading': 188.27
  },
  {
    'time': 25458,
    'acc_x': 0.2,
    'acc_y': 0.86,
    'acc_z': -1.81,
    'gyro_x': 77.16,
    'gyro_y': -63.04,
    'gyro_z': -13.13,
    'heading': 182.22
  },
  {
    'time': 25493,
    'acc_x': 0.19,
    'acc_y': 0.02,
    'acc_z': -1.19,
    'gyro_x': 27.09,
    'gyro_y': 3.31,
    'gyro_z': -12.39,
    'heading': 171.35
  },
  {
    'time': 25527,
    'acc_x': 0.35,
    'acc_y': 0.17,
    'acc_z': -1.15,
    'gyro_x': -3.95,
    'gyro_y': 5.39,
    'gyro_z': -10.15,
    'heading': 162.96
  },
  {
    'time': 25562,
    'acc_x': 0.34,
    'acc_y': 0.24,
    'acc_z': -0.67,
    'gyro_x': 19.86,
    'gyro_y': 2.02,
    'gyro_z': 14.73,
    'heading': 155.12
  },
  {
    'time': 25597,
    'acc_x': 0.12,
    'acc_y': -0.12,
    'acc_z': -1.18,
    'gyro_x': 11.78,
    'gyro_y': -44.89,
    'gyro_z': -12.53,
    'heading': 151.11
  },
  {
    'time': 25632,
    'acc_x': 0.15,
    'acc_y': -0.08,
    'acc_z': -1.23,
    'gyro_x': 11.46,
    'gyro_y': -38.75,
    'gyro_z': -29.66,
    'heading': 154.6
  },
  {
    'time': 25667,
    'acc_x': 0.16,
    'acc_y': -0.02,
    'acc_z': -0.84,
    'gyro_x': 50.54,
    'gyro_y': -28.5,
    'gyro_z': -3.09,
    'heading': 159.08
  },
  {
    'time': 25702,
    'acc_x': -0.05,
    'acc_y': -0.39,
    'acc_z': -1.25,
    'gyro_x': 3.62,
    'gyro_y': -30.72,
    'gyro_z': -9.46,
    'heading': 161.39
  },
  {
    'time': 25737,
    'acc_x': 0.24,
    'acc_y': 0.2,
    'acc_z': -0.85,
    'gyro_x': -2.56,
    'gyro_y': 1.71,
    'gyro_z': -16.65,
    'heading': 165.77
  },
  {
    'time': 25772,
    'acc_x': 0.04,
    'acc_y': -0.17,
    'acc_z': -0.99,
    'gyro_x': -18.95,
    'gyro_y': 3.63,
    'gyro_z': 21.66,
    'heading': 167.14
  },
  {
    'time': 25807,
    'acc_x': 0.2,
    'acc_y': 0,
    'acc_z': -0.58,
    'gyro_x': -28.64,
    'gyro_y': 16.6,
    'gyro_z': -28.14,
    'heading': 172.76
  },
  {
    'time': 25842,
    'acc_x': 0.18,
    'acc_y': 0.03,
    'acc_z': -2,
    'gyro_x': -39.9,
    'gyro_y': 18.41,
    'gyro_z': 53.56,
    'heading': 177.02
  },
  {
    'time': 25877,
    'acc_x': 0.01,
    'acc_y': -0.4,
    'acc_z': -0.89,
    'gyro_x': -32.89,
    'gyro_y': 33.15,
    'gyro_z': 9.77,
    'heading': 182.37
  },
  {
    'time': 25912,
    'acc_x': 0.26,
    'acc_y': 0.11,
    'acc_z': -0.89,
    'gyro_x': -57.71,
    'gyro_y': -6.41,
    'gyro_z': -21.72,
    'heading': 184.48
  },
  {
    'time': 25947,
    'acc_x': 0.15,
    'acc_y': 0.09,
    'acc_z': -0.69,
    'gyro_x': -15.31,
    'gyro_y': 10.37,
    'gyro_z': 5.49,
    'heading': 183.81
  },
  {
    'time': 25982,
    'acc_x': 0.12,
    'acc_y': 0.1,
    'acc_z': -0.99,
    'gyro_x': -23.6,
    'gyro_y': -18.51,
    'gyro_z': -5.73,
    'heading': 183.08
  },
  {
    'time': 26017,
    'acc_x': 0.06,
    'acc_y': -0.03,
    'acc_z': -1.1,
    'gyro_x': 15.42,
    'gyro_y': -13.88,
    'gyro_z': 13.65,
    'heading': 180.56
  },
  {
    'time': 26052,
    'acc_x': 0.07,
    'acc_y': -0.08,
    'acc_z': -0.94,
    'gyro_x': -0.69,
    'gyro_y': -4.87,
    'gyro_z': -7.63,
    'heading': 183.58
  },
  {
    'time': 26087,
    'acc_x': 0.19,
    'acc_y': 0.09,
    'acc_z': -1.07,
    'gyro_x': -17.6,
    'gyro_y': -3.1,
    'gyro_z': -10.29,
    'heading': 186.81
  },
  {
    'time': 26122,
    'acc_x': 0.06,
    'acc_y': -0.13,
    'acc_z': -1.24,
    'gyro_x': 1.02,
    'gyro_y': 16.58,
    'gyro_z': 28.65,
    'heading': 186.97
  },
  {
    'time': 26157,
    'acc_x': 0.17,
    'acc_y': -0.04,
    'acc_z': -0.92,
    'gyro_x': -7.64,
    'gyro_y': 5.47,
    'gyro_z': -17.47,
    'heading': 187.23
  },
  {
    'time': 26192,
    'acc_x': 0.28,
    'acc_y': 0.23,
    'acc_z': -0.67,
    'gyro_x': 2.94,
    'gyro_y': 5.08,
    'gyro_z': 2.52,
    'heading': 187.6
  },
  {
    'time': 26227,
    'acc_x': 0.09,
    'acc_y': -0.03,
    'acc_z': -1.1,
    'gyro_x': -1.93,
    'gyro_y': -8.69,
    'gyro_z': 8.75,
    'heading': 188.6
  },
  {
    'time': 26262,
    'acc_x': 0.15,
    'acc_y': -0.02,
    'acc_z': -0.88,
    'gyro_x': -6.21,
    'gyro_y': 1.29,
    'gyro_z': -4.09,
    'heading': 191.51
  },
  {
    'time': 26296,
    'acc_x': 0.21,
    'acc_y': 0.22,
    'acc_z': -1.02,
    'gyro_x': -11.64,
    'gyro_y': -9.24,
    'gyro_z': 0.92,
    'heading': 190.77
  },
  {
    'time': 26331,
    'acc_x': 0.14,
    'acc_y': -0.02,
    'acc_z': -0.88,
    'gyro_x': -11.16,
    'gyro_y': 0.66,
    'gyro_z': -2.79,
    'heading': 187.89
  },
  {
    'time': 26366,
    'acc_x': 0.15,
    'acc_y': -0.01,
    'acc_z': -0.89,
    'gyro_x': -9.24,
    'gyro_y': -9.02,
    'gyro_z': 3.53,
    'heading': 184.23
  },
  {
    'time': 26401,
    'acc_x': 0.08,
    'acc_y': -0.04,
    'acc_z': -0.94,
    'gyro_x': 22.79,
    'gyro_y': -15.14,
    'gyro_z': 7.13,
    'heading': 178.88
  },
  {
    'time': 26436,
    'acc_x': 0.07,
    'acc_y': -0.12,
    'acc_z': -1.04,
    'gyro_x': 68.19,
    'gyro_y': -25.54,
    'gyro_z': -9.08,
    'heading': 172.05
  },
  {
    'time': 26471,
    'acc_x': 0.11,
    'acc_y': -0.09,
    'acc_z': -0.93,
    'gyro_x': 91.36,
    'gyro_y': -25.16,
    'gyro_z': -2.81,
    'heading': 162.37
  },
  {
    'time': 26506,
    'acc_x': 0.13,
    'acc_y': -0.01,
    'acc_z': -0.91,
    'gyro_x': 50.75,
    'gyro_y': -23.99,
    'gyro_z': 7.15,
    'heading': 148.01
  },
  {
    'time': 26541,
    'acc_x': 0.22,
    'acc_y': 0.11,
    'acc_z': -2,
    'gyro_x': 70.12,
    'gyro_y': -8.24,
    'gyro_z': 24.25,
    'heading': 135.47
  },
  {
    'time': 26577,
    'acc_x': 0.14,
    'acc_y': -0.23,
    'acc_z': -1.04,
    'gyro_x': 67.32,
    'gyro_y': -14.76,
    'gyro_z': 20.29,
    'heading': 136.39
  },
  {
    'time': 26611,
    'acc_x': 0.16,
    'acc_y': -0.19,
    'acc_z': -1.37,
    'gyro_x': 72.53,
    'gyro_y': -24.17,
    'gyro_z': -22.81,
    'heading': 134.18
  },
  {
    'time': 26646,
    'acc_x': 0.13,
    'acc_y': -0.34,
    'acc_z': -0.78,
    'gyro_x': 77.56,
    'gyro_y': 18.1,
    'gyro_z': -7.94,
    'heading': 135
  },
  {
    'time': 26681,
    'acc_x': 0.05,
    'acc_y': -0.41,
    'acc_z': -0.91,
    'gyro_x': 50.67,
    'gyro_y': 8.65,
    'gyro_z': -13.17,
    'heading': 131.69
  },
  {
    'time': 26716,
    'acc_x': 0.2,
    'acc_y': -0.21,
    'acc_z': -1.18,
    'gyro_x': 61.48,
    'gyro_y': 7.21,
    'gyro_z': -10.73,
    'heading': 128.15
  },
  {
    'time': 26751,
    'acc_x': 0.14,
    'acc_y': -0.45,
    'acc_z': -0.86,
    'gyro_x': 36.35,
    'gyro_y': 22.72,
    'gyro_z': 2.14,
    'heading': 124.76
  },
  {
    'time': 26786,
    'acc_x': -0.01,
    'acc_y': -0.59,
    'acc_z': -1.11,
    'gyro_x': 41.83,
    'gyro_y': 25.03,
    'gyro_z': 4.31,
    'heading': 119.6
  },
  {
    'time': 26821,
    'acc_x': 0.14,
    'acc_y': -0.54,
    'acc_z': -0.84,
    'gyro_x': 12.05,
    'gyro_y': 7.95,
    'gyro_z': -38.69,
    'heading': 117.95
  },
  {
    'time': 26856,
    'acc_x': 0.2,
    'acc_y': -0.37,
    'acc_z': -0.93,
    'gyro_x': 10.21,
    'gyro_y': 17.02,
    'gyro_z': -31.64,
    'heading': 112.08
  },
  {
    'time': 26891,
    'acc_x': 0.17,
    'acc_y': -0.42,
    'acc_z': -0.85,
    'gyro_x': 33.66,
    'gyro_y': 10.42,
    'gyro_z': -23.98,
    'heading': 107.07
  },
  {
    'time': 26926,
    'acc_x': 0.1,
    'acc_y': -0.49,
    'acc_z': -1.06,
    'gyro_x': 39.44,
    'gyro_y': 3.38,
    'gyro_z': -15.53,
    'heading': 100.9
  },
  {
    'time': 26960,
    'acc_x': 0.13,
    'acc_y': -0.41,
    'acc_z': -0.99,
    'gyro_x': 5.27,
    'gyro_y': 35.41,
    'gyro_z': -35.88,
    'heading': 94.83
  },
  {
    'time': 26996,
    'acc_x': 0.18,
    'acc_y': -0.46,
    'acc_z': -0.93,
    'gyro_x': 9.31,
    'gyro_y': 16.48,
    'gyro_z': -32.1,
    'heading': 86.44
  },
  {
    'time': 27031,
    'acc_x': 0.2,
    'acc_y': -0.4,
    'acc_z': -1.01,
    'gyro_x': 18.85,
    'gyro_y': 18.69,
    'gyro_z': -35.79,
    'heading': 77.95
  },
  {
    'time': 27066,
    'acc_x': 0.17,
    'acc_y': -0.54,
    'acc_z': -0.81,
    'gyro_x': 57.18,
    'gyro_y': 8.76,
    'gyro_z': -36.97,
    'heading': 70.66
  },
  {
    'time': 27100,
    'acc_x': 0.32,
    'acc_y': -0.44,
    'acc_z': -0.84,
    'gyro_x': 40.29,
    'gyro_y': -0.86,
    'gyro_z': -39.49,
    'heading': 66.87
  },
  {
    'time': 27135,
    'acc_x': 0.32,
    'acc_y': -0.44,
    'acc_z': -0.87,
    'gyro_x': 59.19,
    'gyro_y': -12.09,
    'gyro_z': -37.82,
    'heading': 62.73
  },
  {
    'time': 27170,
    'acc_x': 0.28,
    'acc_y': -0.41,
    'acc_z': -0.73,
    'gyro_x': 22.44,
    'gyro_y': -18.08,
    'gyro_z': -19.44,
    'heading': 58.35
  },
  {
    'time': 27206,
    'acc_x': 0.26,
    'acc_y': -0.62,
    'acc_z': -0.92,
    'gyro_x': 28.27,
    'gyro_y': -13.78,
    'gyro_z': -28.58,
    'heading': 54.25
  },
  {
    'time': 27240,
    'acc_x': 0.35,
    'acc_y': -0.36,
    'acc_z': -0.76,
    'gyro_x': 59.07,
    'gyro_y': -27.06,
    'gyro_z': -32.24,
    'heading': 49.64
  },
  {
    'time': 27275,
    'acc_x': 0.28,
    'acc_y': -0.57,
    'acc_z': -0.92,
    'gyro_x': 19.53,
    'gyro_y': -4.17,
    'gyro_z': -21.51,
    'heading': 47.6
  },
  {
    'time': 27311,
    'acc_x': 0.28,
    'acc_y': -0.57,
    'acc_z': -0.71,
    'gyro_x': 29.02,
    'gyro_y': -2.27,
    'gyro_z': -33.36,
    'heading': 45.78
  },
  {
    'time': 27345,
    'acc_x': 0.29,
    'acc_y': -0.42,
    'acc_z': -0.71,
    'gyro_x': 31.11,
    'gyro_y': -27.28,
    'gyro_z': -27.17,
    'heading': 43.52
  },
  {
    'time': 27380,
    'acc_x': 0.2,
    'acc_y': -0.58,
    'acc_z': -0.79,
    'gyro_x': 29.08,
    'gyro_y': -14.4,
    'gyro_z': -13.45,
    'heading': 44.19
  },
  {
    'time': 27415,
    'acc_x': 0.21,
    'acc_y': -0.55,
    'acc_z': -0.67,
    'gyro_x': 43.34,
    'gyro_y': -24.79,
    'gyro_z': -27.6,
    'heading': 42.88
  },
  {
    'time': 27450,
    'acc_x': 0.16,
    'acc_y': -0.69,
    'acc_z': -1.03,
    'gyro_x': 43.88,
    'gyro_y': -49.27,
    'gyro_z': -22.76,
    'heading': 41.79
  },
  {
    'time': 27485,
    'acc_x': 0.2,
    'acc_y': -0.54,
    'acc_z': -0.81,
    'gyro_x': 18.73,
    'gyro_y': -14.42,
    'gyro_z': -37.42,
    'heading': 41.3
  },
  {
    'time': 27520,
    'acc_x': 0.19,
    'acc_y': -0.49,
    'acc_z': -0.78,
    'gyro_x': 4.34,
    'gyro_y': -10.79,
    'gyro_z': -23.14,
    'heading': 39.52
  },
  {
    'time': 27555,
    'acc_x': 0.18,
    'acc_y': -0.53,
    'acc_z': -0.92,
    'gyro_x': -15.73,
    'gyro_y': -7.71,
    'gyro_z': -18.27,
    'heading': 38.47
  },
  {
    'time': 27590,
    'acc_x': 0.22,
    'acc_y': -0.52,
    'acc_z': -0.92,
    'gyro_x': -16.43,
    'gyro_y': 11.47,
    'gyro_z': -24.93,
    'heading': 36.85
  },
  {
    'time': 27625,
    'acc_x': 0.26,
    'acc_y': -0.45,
    'acc_z': -0.74,
    'gyro_x': 2,
    'gyro_y': 4.95,
    'gyro_z': -24.61,
    'heading': 35.77
  },
  {
    'time': 27660,
    'acc_x': 0.32,
    'acc_y': -0.47,
    'acc_z': -0.8,
    'gyro_x': 10.8,
    'gyro_y': -5.56,
    'gyro_z': -6.63,
    'heading': 34.23
  },
  {
    'time': 27695,
    'acc_x': 0.29,
    'acc_y': -0.59,
    'acc_z': -0.79,
    'gyro_x': 18.76,
    'gyro_y': -10.08,
    'gyro_z': 1.95,
    'heading': 32.97
  },
  {
    'time': 27730,
    'acc_x': 0.28,
    'acc_y': -0.62,
    'acc_z': -0.75,
    'gyro_x': 10.85,
    'gyro_y': -0.04,
    'gyro_z': -14.44,
    'heading': 31.55
  },
  {
    'time': 27765,
    'acc_x': 0.26,
    'acc_y': -0.66,
    'acc_z': -0.71,
    'gyro_x': 30.38,
    'gyro_y': -19.91,
    'gyro_z': -7.58,
    'heading': 29.39
  },
  {
    'time': 27800,
    'acc_x': 0.26,
    'acc_y': -0.71,
    'acc_z': -0.77,
    'gyro_x': 15.56,
    'gyro_y': -19.34,
    'gyro_z': -22.34,
    'heading': 30.35
  },
  {
    'time': 27835,
    'acc_x': 0.3,
    'acc_y': -0.6,
    'acc_z': -0.7,
    'gyro_x': 17.04,
    'gyro_y': -16.21,
    'gyro_z': -24.27,
    'heading': 27.54
  },
  {
    'time': 27870,
    'acc_x': 0.37,
    'acc_y': -0.48,
    'acc_z': -0.63,
    'gyro_x': -9.43,
    'gyro_y': -1.49,
    'gyro_z': -18.88,
    'heading': 27.43
  },
  {
    'time': 27904,
    'acc_x': 0.3,
    'acc_y': -0.58,
    'acc_z': -0.71,
    'gyro_x': -8.49,
    'gyro_y': -12.62,
    'gyro_z': -8.76,
    'heading': 29.21
  },
  {
    'time': 27940,
    'acc_x': 0.32,
    'acc_y': -0.67,
    'acc_z': -0.73,
    'gyro_x': 6.03,
    'gyro_y': -24.01,
    'gyro_z': -14.13,
    'heading': 27.7
  },
  {
    'time': 27975,
    'acc_x': 0.32,
    'acc_y': -0.49,
    'acc_z': -0.82,
    'gyro_x': -24.07,
    'gyro_y': -16.24,
    'gyro_z': -36.95,
    'heading': 22.87
  },
  {
    'time': 28010,
    'acc_x': 0.33,
    'acc_y': -0.68,
    'acc_z': -0.72,
    'gyro_x': 17.12,
    'gyro_y': -10.59,
    'gyro_z': -0.77,
    'heading': 28.97
  },
  {
    'time': 28044,
    'acc_x': 0.37,
    'acc_y': -0.33,
    'acc_z': -1.01,
    'gyro_x': -29.05,
    'gyro_y': -17.79,
    'gyro_z': -37.79,
    'heading': 20.67
  },
  {
    'time': 28079,
    'acc_x': 0.37,
    'acc_y': -0.51,
    'acc_z': -0.73,
    'gyro_x': 19.99,
    'gyro_y': -2.75,
    'gyro_z': -6.24,
    'heading': 17.1
  },
  {
    'time': 28114,
    'acc_x': 0.38,
    'acc_y': -0.49,
    'acc_z': -0.72,
    'gyro_x': 3.93,
    'gyro_y': -5.15,
    'gyro_z': 4.74,
    'heading': 8.21
  },
  {
    'time': 28149,
    'acc_x': 0.36,
    'acc_y': -0.58,
    'acc_z': -0.75,
    'gyro_x': -5.2,
    'gyro_y': -8,
    'gyro_z': 1.62,
    'heading': 358.71
  },
  {
    'time': 28184,
    'acc_x': 0.39,
    'acc_y': -0.5,
    'acc_z': -0.79,
    'gyro_x': -2.94,
    'gyro_y': -3.67,
    'gyro_z': 3.13,
    'heading': 358.13
  },
  {
    'time': 28219,
    'acc_x': 0.36,
    'acc_y': -0.54,
    'acc_z': -0.8,
    'gyro_x': -6,
    'gyro_y': 1.54,
    'gyro_z': 15.65,
    'heading': 355.01
  },
  {
    'time': 28254,
    'acc_x': 0.32,
    'acc_y': -0.59,
    'acc_z': -0.79,
    'gyro_x': 0.39,
    'gyro_y': 1.31,
    'gyro_z': 18.85,
    'heading': 358.39
  },
  {
    'time': 28289,
    'acc_x': 0.3,
    'acc_y': -0.58,
    'acc_z': -0.87,
    'gyro_x': -1.78,
    'gyro_y': -0.79,
    'gyro_z': 11.37,
    'heading': 355.82
  },
  {
    'time': 28325,
    'acc_x': 0.31,
    'acc_y': -0.54,
    'acc_z': -0.78,
    'gyro_x': -11.56,
    'gyro_y': 7.26,
    'gyro_z': 14.15,
    'heading': 7.34
  },
  {
    'time': 28359,
    'acc_x': 0.25,
    'acc_y': -0.61,
    'acc_z': -0.8,
    'gyro_x': 3.33,
    'gyro_y': 3.67,
    'gyro_z': 22.32,
    'heading': 9.32
  },
  {
    'time': 28394,
    'acc_x': 0.21,
    'acc_y': -0.73,
    'acc_z': -0.87,
    'gyro_x': 9.05,
    'gyro_y': -7.71,
    'gyro_z': 14.4,
    'heading': 15.15
  },
  {
    'time': 28429,
    'acc_x': 0.25,
    'acc_y': -0.66,
    'acc_z': -0.82,
    'gyro_x': 14.56,
    'gyro_y': 4.4,
    'gyro_z': 0.63,
    'heading': 17.16
  },
  {
    'time': 28464,
    'acc_x': 0.3,
    'acc_y': -0.6,
    'acc_z': -0.75,
    'gyro_x': 28.93,
    'gyro_y': -1.35,
    'gyro_z': 2.58,
    'heading': 17.51
  },
  {
    'time': 28499,
    'acc_x': 0.29,
    'acc_y': -0.65,
    'acc_z': -0.72,
    'gyro_x': 7.02,
    'gyro_y': 13.14,
    'gyro_z': 13.16,
    'heading': 18.97
  },
  {
    'time': 28534,
    'acc_x': 0.27,
    'acc_y': -0.67,
    'acc_z': -0.76,
    'gyro_x': -58.02,
    'gyro_y': 33.22,
    'gyro_z': 21.85,
    'heading': 21.86
  },
  {
    'time': 28569,
    'acc_x': 0.29,
    'acc_y': -0.9,
    'acc_z': -0.67,
    'gyro_x': -83.04,
    'gyro_y': 57.03,
    'gyro_z': 14.65,
    'heading': 24.5
  },
  {
    'time': 28604,
    'acc_x': 0.3,
    'acc_y': -0.53,
    'acc_z': -0.87,
    'gyro_x': -212.98,
    'gyro_y': 156.02,
    'gyro_z': 7.6,
    'heading': 26.17
  },
  {
    'time': 28639,
    'acc_x': 0.24,
    'acc_y': -0.63,
    'acc_z': -0.74,
    'gyro_x': -159.67,
    'gyro_y': 115.02,
    'gyro_z': 6.6,
    'heading': 26.43
  },
  {
    'time': 28673,
    'acc_x': 0.42,
    'acc_y': -0.46,
    'acc_z': -0.94,
    'gyro_x': 64,
    'gyro_y': -56.3,
    'gyro_z': -56.56,
    'heading': 26
  },
  {
    'time': 28709,
    'acc_x': 0.79,
    'acc_y': 0.33,
    'acc_z': -0.23,
    'gyro_x': 81.31,
    'gyro_y': -37.74,
    'gyro_z': -19.98,
    'heading': 24.9
  },
  {
    'time': 28744,
    'acc_x': 0.32,
    'acc_y': -0.34,
    'acc_z': -1.47,
    'gyro_x': -206.31,
    'gyro_y': 48.06,
    'gyro_z': 117.25,
    'heading': 24.5
  },
  {
    'time': 28778,
    'acc_x': 0.18,
    'acc_y': -0.9,
    'acc_z': -1.26,
    'gyro_x': 68.75,
    'gyro_y': -122.95,
    'gyro_z': -34.57,
    'heading': 27.36
  },
  {
    'time': 28814,
    'acc_x': 0.63,
    'acc_y': -0.18,
    'acc_z': -0.51,
    'gyro_x': 89.72,
    'gyro_y': -89.95,
    'gyro_z': -87.03,
    'heading': 29.05
  },
  {
    'time': 28849,
    'acc_x': 0.54,
    'acc_y': 0.04,
    'acc_z': -1.18,
    'gyro_x': -73.56,
    'gyro_y': -0.21,
    'gyro_z': 75.24,
    'heading': 26.44
  },
  {
    'time': 28883,
    'acc_x': -0.03,
    'acc_y': -0.95,
    'acc_z': -1.53,
    'gyro_x': 34.51,
    'gyro_y': -58.86,
    'gyro_z': 11.72,
    'heading': 27.61
  },
  {
    'time': 28918,
    'acc_x': 0.39,
    'acc_y': -0.63,
    'acc_z': -0.38,
    'gyro_x': 125.57,
    'gyro_y': -69.98,
    'gyro_z': -67.05,
    'heading': 25
  },
  {
    'time': 28954,
    'acc_x': 0.52,
    'acc_y': 0.04,
    'acc_z': -1.37,
    'gyro_x': -137.63,
    'gyro_y': 54.4,
    'gyro_z': 51.72,
    'heading': 27.87
  },
  {
    'time': 28988,
    'acc_x': -0.11,
    'acc_y': -1.28,
    'acc_z': -0.81,
    'gyro_x': 101.11,
    'gyro_y': -84.73,
    'gyro_z': 12.18,
    'heading': 28.72
  },
  {
    'time': 29023,
    'acc_x': 0.36,
    'acc_y': -0.54,
    'acc_z': -0.74,
    'gyro_x': 55.32,
    'gyro_y': -36.4,
    'gyro_z': -74.44,
    'heading': 26.32
  },
  {
    'time': 29058,
    'acc_x': 0.54,
    'acc_y': -0.03,
    'acc_z': -1.28,
    'gyro_x': -110.73,
    'gyro_y': 33.29,
    'gyro_z': 38.37,
    'heading': 30.16
  },
  {
    'time': 29094,
    'acc_x': -0.19,
    'acc_y': -1.11,
    'acc_z': -0.33,
    'gyro_x': 5.17,
    'gyro_y': 48.08,
    'gyro_z': 36.08,
    'heading': 27.71
  },
  {
    'time': 29128,
    'acc_x': 0.24,
    'acc_y': -0.62,
    'acc_z': -0.47,
    'gyro_x': 90.07,
    'gyro_y': -47.14,
    'gyro_z': -73.54,
    'heading': 28.01
  },
  {
    'time': 29163,
    'acc_x': 0.73,
    'acc_y': 0.46,
    'acc_z': -1.27,
    'gyro_x': -153.72,
    'gyro_y': 19.04,
    'gyro_z': 53.96,
    'heading': 28.09
  },
  {
    'time': 29198,
    'acc_x': -0.45,
    'acc_y': -1.33,
    'acc_z': -0.33,
    'gyro_x': 8.49,
    'gyro_y': 75.97,
    'gyro_z': 91.38,
    'heading': 26.19
  },
  {
    'time': 29234,
    'acc_x': 0.14,
    'acc_y': -0.76,
    'acc_z': -0.98,
    'gyro_x': 65.72,
    'gyro_y': -49.27,
    'gyro_z': -77.47,
    'heading': 25.81
  },
  {
    'time': 29268,
    'acc_x': 0.93,
    'acc_y': 0.85,
    'acc_z': -0.77,
    'gyro_x': -168.17,
    'gyro_y': 27.46,
    'gyro_z': -7.76,
    'heading': 26.57
  },
  {
    'time': 29303,
    'acc_x': -0.18,
    'acc_y': -0.89,
    'acc_z': -0.83,
    'gyro_x': -41.82,
    'gyro_y': 113.6,
    'gyro_z': 129.62,
    'heading': 23.77
  },
  {
    'time': 29338,
    'acc_x': 0.21,
    'acc_y': -0.66,
    'acc_z': -1.04,
    'gyro_x': 99.1,
    'gyro_y': -65.82,
    'gyro_z': -68.77,
    'heading': 26.19
  },
  {
    'time': 29373,
    'acc_x': 0.93,
    'acc_y': 0.67,
    'acc_z': -0.6,
    'gyro_x': -59.15,
    'gyro_y': -14.44,
    'gyro_z': -75.43,
    'heading': 22.16
  },
  {
    'time': 29408,
    'acc_x': 0.18,
    'acc_y': -0.31,
    'acc_z': -0.93,
    'gyro_x': -26.57,
    'gyro_y': 77.33,
    'gyro_z': 90.73,
    'heading': 25.81
  },
  {
    'time': 29443,
    'acc_x': 0.16,
    'acc_y': -0.71,
    'acc_z': -1.21,
    'gyro_x': 85.47,
    'gyro_y': -121.89,
    'gyro_z': -61.24,
    'heading': 20.69
  },
  {
    'time': 29478,
    'acc_x': 0.73,
    'acc_y': 0.33,
    'acc_z': -0.67,
    'gyro_x': -23.11,
    'gyro_y': -57.27,
    'gyro_z': -64.27,
    'heading': 25.44
  },
  {
    'time': 29513,
    'acc_x': 0.26,
    'acc_y': -0.25,
    'acc_z': -1.54,
    'gyro_x': -87.06,
    'gyro_y': 76.98,
    'gyro_z': 106.74,
    'heading': 22.89
  },
  {
    'time': 29548,
    'acc_x': -0.12,
    'acc_y': -1.08,
    'acc_z': -0.9,
    'gyro_x': 67.96,
    'gyro_y': -52.6,
    'gyro_z': -25.24,
    'heading': 21.06
  },
  {
    'time': 29583,
    'acc_x': 0.44,
    'acc_y': -0.27,
    'acc_z': -0.73,
    'gyro_x': 7.24,
    'gyro_y': -35.85,
    'gyro_z': -66.63,
    'heading': 25
  },
  {
    'time': 29617,
    'acc_x': 0.6,
    'acc_y': 0.14,
    'acc_z': -1.24,
    'gyro_x': -58.73,
    'gyro_y': 39.95,
    'gyro_z': 64.74,
    'heading': 25
  },
  {
    'time': 29652,
    'acc_x': -0.28,
    'acc_y': -1.29,
    'acc_z': -0.48,
    'gyro_x': 50.98,
    'gyro_y': 9.8,
    'gyro_z': 40.16,
    'heading': 21.38
  },
  {
    'time': 29688,
    'acc_x': 0.3,
    'acc_y': -0.5,
    'acc_z': -0.48,
    'gyro_x': 27.15,
    'gyro_y': -42.7,
    'gyro_z': -69.97,
    'heading': 24.95
  },
  {
    'time': 29723,
    'acc_x': 0.66,
    'acc_y': 0.41,
    'acc_z': -1.37,
    'gyro_x': -119.28,
    'gyro_y': 20.69,
    'gyro_z': 49.64,
    'heading': 23.96
  },
  {
    'time': 29757,
    'acc_x': -0.33,
    'acc_y': -1.15,
    'acc_z': -0.53,
    'gyro_x': 41.35,
    'gyro_y': 56.46,
    'gyro_z': 85.85,
    'heading': 23.6
  },
  {
    'time': 29792,
    'acc_x': 0.19,
    'acc_y': -0.52,
    'acc_z': -0.92,
    'gyro_x': 65.61,
    'gyro_y': -60.07,
    'gyro_z': -75.98,
    'heading': 25.5
  },
  {
    'time': 29828,
    'acc_x': 0.87,
    'acc_y': 0.67,
    'acc_z': -1,
    'gyro_x': -98.44,
    'gyro_y': -4,
    'gyro_z': -3.09,
    'heading': 25.58
  },
  {
    'time': 29863,
    'acc_x': -0.34,
    'acc_y': -0.93,
    'acc_z': -0.71,
    'gyro_x': -12.08,
    'gyro_y': 91.98,
    'gyro_z': 127.54,
    'heading': 23.96
  },
  {
    'time': 29897,
    'acc_x': 0.11,
    'acc_y': -0.7,
    'acc_z': -1.16,
    'gyro_x': 79.4,
    'gyro_y': -81.86,
    'gyro_z': -75.33,
    'heading': 27.36
  },
  {
    'time': 29932,
    'acc_x': 0.79,
    'acc_y': 0.26,
    'acc_z': -0.64,
    'gyro_x': -58.24,
    'gyro_y': -12,
    'gyro_z': -86.81,
    'heading': 26.45
  },
  {
    'time': 29968,
    'acc_x': 0.34,
    'acc_y': -0.12,
    'acc_z': -1.57,
    'gyro_x': -79.47,
    'gyro_y': 79.5,
    'gyro_z': 108.63,
    'heading': 26.57
  },
  {
    'time': 30002,
    'acc_x': -0.26,
    'acc_y': -1.17,
    'acc_z': -0.56,
    'gyro_x': 114.7,
    'gyro_y': -46.89,
    'gyro_z': -2.76,
    'heading': 24.51
  },
  {
    'time': 30037,
    'acc_x': 0.28,
    'acc_y': -0.51,
    'acc_z': -0.69,
    'gyro_x': 40.11,
    'gyro_y': -52.76,
    'gyro_z': -89.79,
    'heading': 24.1
  },
  {
    'time': 30072,
    'acc_x': 0.66,
    'acc_y': 0.46,
    'acc_z': -1.43,
    'gyro_x': -166.2,
    'gyro_y': 41.79,
    'gyro_z': 34.86,
    'heading': 25.85
  },
  {
    'time': 30107,
    'acc_x': -0.22,
    'acc_y': -0.99,
    'acc_z': -0.58,
    'gyro_x': 59.49,
    'gyro_y': 61.52,
    'gyro_z': 77.62,
    'heading': 25.53
  },
  {
    'time': 30142,
    'acc_x': 0.35,
    'acc_y': -0.41,
    'acc_z': -0.86,
    'gyro_x': 62.2,
    'gyro_y': -22.63,
    'gyro_z': -46.58,
    'heading': 23.23
  },
  {
    'time': 30177,
    'acc_x': 0.51,
    'acc_y': 0.12,
    'acc_z': -0.97,
    'gyro_x': -124.28,
    'gyro_y': 32.36,
    'gyro_z': -27.91,
    'heading': 23.82
  },
  {
    'time': 30212,
    'acc_x': 0.17,
    'acc_y': -0.42,
    'acc_z': -0.76,
    'gyro_x': -22.55,
    'gyro_y': 57.52,
    'gyro_z': 21.96,
    'heading': 24.16
  },
  {
    'time': 30247,
    'acc_x': 0.29,
    'acc_y': -0.43,
    'acc_z': -0.84,
    'gyro_x': 87.93,
    'gyro_y': -63.47,
    'gyro_z': -43.4,
    'heading': 22.08
  },
  {
    'time': 30282,
    'acc_x': 0.59,
    'acc_y': 0.12,
    'acc_z': -0.87,
    'gyro_x': 0.1,
    'gyro_y': -22.28,
    'gyro_z': -22.46,
    'heading': 21.02
  },
  {
    'time': 30317,
    'acc_x': 0.15,
    'acc_y': -0.42,
    'acc_z': -0.48,
    'gyro_x': 77.17,
    'gyro_y': 14.12,
    'gyro_z': 38.05,
    'heading': 20.91
  },
  {
    'time': 30352,
    'acc_x': 0.42,
    'acc_y': -0.28,
    'acc_z': -1.14,
    'gyro_x': 24.99,
    'gyro_y': -103.75,
    'gyro_z': -36.18,
    'heading': 22.13
  },
  {
    'time': 30387,
    'acc_x': 0.39,
    'acc_y': -0.08,
    'acc_z': -1.19,
    'gyro_x': -84,
    'gyro_y': -14.36,
    'gyro_z': -7.39,
    'heading': 21.02
  },
  {
    'time': 30421,
    'acc_x': 0.03,
    'acc_y': -0.47,
    'acc_z': -0.49,
    'gyro_x': -47.27,
    'gyro_y': 73.89,
    'gyro_z': 51.63,
    'heading': 19.65
  },
  {
    'time': 30457,
    'acc_x': -0.02,
    'acc_y': -0.52,
    'acc_z': -0.49,
    'gyro_x': -95.16,
    'gyro_y': -13.42,
    'gyro_z': -16.58,
    'heading': 22.38
  },
  {
    'time': 30492,
    'acc_x': 0.4,
    'acc_y': 0.02,
    'acc_z': -1.21,
    'gyro_x': -186.66,
    'gyro_y': -22.98,
    'gyro_z': -25.38,
    'heading': 23.61
  },
  {
    'time': 30527,
    'acc_x': 0.29,
    'acc_y': -0.06,
    'acc_z': -1.26,
    'gyro_x': -103.36,
    'gyro_y': -1.75,
    'gyro_z': 14.38,
    'heading': 20.06
  },
  {
    'time': 30562,
    'acc_x': 0.03,
    'acc_y': -0.46,
    'acc_z': -0.82,
    'gyro_x': 10.52,
    'gyro_y': -82.97,
    'gyro_z': -14.27,
    'heading': 20.65
  },
  {
    'time': 30596,
    'acc_x': 0.34,
    'acc_y': 0.27,
    'acc_z': -0.71,
    'gyro_x': -89.07,
    'gyro_y': -84.63,
    'gyro_z': -76.92,
    'heading': 19.33
  },
  {
    'time': 30632,
    'acc_x': 0.19,
    'acc_y': 0.47,
    'acc_z': -1.65,
    'gyro_x': -97.58,
    'gyro_y': -61.54,
    'gyro_z': 12.52,
    'heading': 18.43
  },
  {
    'time': 30667,
    'acc_x': 0,
    'acc_y': -0.28,
    'acc_z': -0.97,
    'gyro_x': 28.34,
    'gyro_y': -27.68,
    'gyro_z': 15.33,
    'heading': 20.88
  },
  {
    'time': 30702,
    'acc_x': 0.24,
    'acc_y': 0.08,
    'acc_z': -0.9,
    'gyro_x': -14.47,
    'gyro_y': -30.5,
    'gyro_z': -19.32,
    'heading': 19.76
  },
  {
    'time': 30736,
    'acc_x': 0.11,
    'acc_y': 0.23,
    'acc_z': -1.42,
    'gyro_x': -77.59,
    'gyro_y': -1.69,
    'gyro_z': 38.97,
    'heading': 22
  },
  {
    'time': 30771,
    'acc_x': 0.09,
    'acc_y': 0.01,
    'acc_z': -1.11,
    'gyro_x': -18.79,
    'gyro_y': 40.85,
    'gyro_z': 65.79,
    'heading': 22.87
  },
  {
    'time': 30806,
    'acc_x': 0.2,
    'acc_y': 0.06,
    'acc_z': -1.21,
    'gyro_x': -90.21,
    'gyro_y': 69.43,
    'gyro_z': 52.84,
    'heading': 20.96
  },
  {
    'time': 30841,
    'acc_x': 0.16,
    'acc_y': 0.1,
    'acc_z': -0.92,
    'gyro_x': -118.53,
    'gyro_y': 31.56,
    'gyro_z': 40.48,
    'heading': 20.22
  },
  {
    'time': 30877,
    'acc_x': 0.27,
    'acc_y': 0.15,
    'acc_z': -1.14,
    'gyro_x': -143.95,
    'gyro_y': 58.66,
    'gyro_z': 38.84,
    'heading': 16.24
  },
  {
    'time': 30911,
    'acc_x': 0.27,
    'acc_y': 0.31,
    'acc_z': -0.64,
    'gyro_x': -149.29,
    'gyro_y': 105.3,
    'gyro_z': 16.21,
    'heading': 14.74
  },
  {
    'time': 30946,
    'acc_x': 0.31,
    'acc_y': 0.47,
    'acc_z': -0.72,
    'gyro_x': -117.73,
    'gyro_y': 33.73,
    'gyro_z': 21.21,
    'heading': 14.1
  },
  {
    'time': 30981,
    'acc_x': 0.33,
    'acc_y': 0.46,
    'acc_z': -1.07,
    'gyro_x': -88.72,
    'gyro_y': -6.73,
    'gyro_z': 4.15,
    'heading': 13.89
  },
  {
    'time': 31016,
    'acc_x': 0.35,
    'acc_y': 0.44,
    'acc_z': -0.84,
    'gyro_x': 96.47,
    'gyro_y': 11.92,
    'gyro_z': 24.8,
    'heading': 9.03
  },
  {
    'time': 31051,
    'acc_x': 0.36,
    'acc_y': 0.31,
    'acc_z': -0.64,
    'gyro_x': 75.44,
    'gyro_y': -2.27,
    'gyro_z': 4.56,
    'heading': 10.3
  },
  {
    'time': 31086,
    'acc_x': 0.23,
    'acc_y': 0.25,
    'acc_z': -1.33,
    'gyro_x': 114.37,
    'gyro_y': -35.64,
    'gyro_z': -35.1,
    'heading': 10.25
  },
  {
    'time': 31121,
    'acc_x': 0.33,
    'acc_y': 0.2,
    'acc_z': -0.94,
    'gyro_x': 203.15,
    'gyro_y': -34.37,
    'gyro_z': -61.86,
    'heading': 13.08
  },
  {
    'time': 31156,
    'acc_x': 0.36,
    'acc_y': 0.24,
    'acc_z': -0.75,
    'gyro_x': 198.74,
    'gyro_y': -36.48,
    'gyro_z': -69.11,
    'heading': 14.31
  },
  {
    'time': 31191,
    'acc_x': 0.44,
    'acc_y': 0.41,
    'acc_z': -0.8,
    'gyro_x': -7.8,
    'gyro_y': -14.52,
    'gyro_z': -35.77,
    'heading': 14.82
  },
  {
    'time': 31226,
    'acc_x': 0.24,
    'acc_y': 0.17,
    'acc_z': -1.01,
    'gyro_x': -65.56,
    'gyro_y': 29.92,
    'gyro_z': 40.43,
    'heading': 16.73
  },
  {
    'time': 31261,
    'acc_x': 0.12,
    'acc_y': -0.05,
    'acc_z': -1.36,
    'gyro_x': 32.8,
    'gyro_y': 16.66,
    'gyro_z': 7.91,
    'heading': 14.86
  },
  {
    'time': 31296,
    'acc_x': 0.41,
    'acc_y': 0.33,
    'acc_z': -0.23,
    'gyro_x': 82.18,
    'gyro_y': 52.28,
    'gyro_z': -23.12,
    'heading': 16.78
  },
  {
    'time': 31331,
    'acc_x': 0.43,
    'acc_y': 0.42,
    'acc_z': -0.97,
    'gyro_x': -207.79,
    'gyro_y': 48.47,
    'gyro_z': 59.53,
    'heading': 14.82
  },
  {
    'time': 31366,
    'acc_x': -0.19,
    'acc_y': -0.5,
    'acc_z': -2,
    'gyro_x': -2.22,
    'gyro_y': 0.06,
    'gyro_z': 5.66,
    'heading': 16.33
  },
  {
    'time': 31401,
    'acc_x': 0.11,
    'acc_y': 0.05,
    'acc_z': -1.01,
    'gyro_x': 249.02,
    'gyro_y': 25.42,
    'gyro_z': -147.24,
    'heading': 15
  },
  {
    'time': 31436,
    'acc_x': 1.12,
    'acc_y': 0.83,
    'acc_z': 0.97,
    'gyro_x': -4.1,
    'gyro_y': -10.99,
    'gyro_z': -57.05,
    'heading': 14.11
  },
  {
    'time': 31470,
    'acc_x': 0.38,
    'acc_y': 0.79,
    'acc_z': -1.37,
    'gyro_x': -209.85,
    'gyro_y': -26.11,
    'gyro_z': 133.17,
    'heading': 11.31
  },
  {
    'time': 31505,
    'acc_x': -0.19,
    'acc_y': -0.45,
    'acc_z': -2,
    'gyro_x': 45.77,
    'gyro_y': 2.9,
    'gyro_z': 60.85,
    'heading': 11.31
  },
  {
    'time': 31540,
    'acc_x': 0.21,
    'acc_y': -0.01,
    'acc_z': -0.54,
    'gyro_x': 169.84,
    'gyro_y': 32.88,
    'gyro_z': -72.66,
    'heading': 15.38
  },
  {
    'time': 31576,
    'acc_x': 0.7,
    'acc_y': 0.53,
    'acc_z': -0.53,
    'gyro_x': 1.42,
    'gyro_y': -55.57,
    'gyro_z': -40.76,
    'heading': 16.37
  },
  {
    'time': 31611,
    'acc_x': 0.2,
    'acc_y': 0.08,
    'acc_z': -1.53,
    'gyro_x': -35.33,
    'gyro_y': -15.69,
    'gyro_z': 66.24,
    'heading': 12.86
  },
  {
    'time': 31646,
    'acc_x': -0.04,
    'acc_y': -0.31,
    'acc_z': -1.26,
    'gyro_x': 169.73,
    'gyro_y': 18.69,
    'gyro_z': -20.55,
    'heading': 17.72
  },
  {
    'time': 31680,
    'acc_x': 0.59,
    'acc_y': 0.27,
    'acc_z': -0.33,
    'gyro_x': 82.15,
    'gyro_y': -13.84,
    'gyro_z': -68.77,
    'heading': 18.79
  },
  {
    'time': 31715,
    'acc_x': 0.55,
    'acc_y': 0.35,
    'acc_z': -0.72,
    'gyro_x': -2.11,
    'gyro_y': -15.62,
    'gyro_z': 19.6,
    'heading': 18.16
  },
  {
    'time': 31750,
    'acc_x': 0.02,
    'acc_y': -0.34,
    'acc_z': -1.7,
    'gyro_x': 41.75,
    'gyro_y': -9.37,
    'gyro_z': 47.27,
    'heading': 14.97
  },
  {
    'time': 31786,
    'acc_x': 0.26,
    'acc_y': -0.19,
    'acc_z': -0.69,
    'gyro_x': 95.78,
    'gyro_y': -10.08,
    'gyro_z': -26.85,
    'heading': 17.8
  },
  {
    'time': 31820,
    'acc_x': 0.56,
    'acc_y': 0.23,
    'acc_z': -0.85,
    'gyro_x': -2.02,
    'gyro_y': -17.26,
    'gyro_z': -7.29,
    'heading': 17.72
  },
  {
    'time': 31855,
    'acc_x': 0.22,
    'acc_y': -0.16,
    'acc_z': -1.13,
    'gyro_x': -8.57,
    'gyro_y': 4.29,
    'gyro_z': 55.82,
    'heading': 19.12
  },
  {
    'time': 31890,
    'acc_x': 0.17,
    'acc_y': -0.35,
    'acc_z': -0.88,
    'gyro_x': 36.1,
    'gyro_y': 6.85,
    'gyro_z': 11.49,
    'heading': 20.06
  },
  {
    'time': 31925,
    'acc_x': 0.42,
    'acc_y': 0,
    'acc_z': -0.3,
    'gyro_x': -40.76,
    'gyro_y': -26.33,
    'gyro_z': -7.02,
    'heading': 18.6
  },
  {
    'time': 31960,
    'acc_x': 0.26,
    'acc_y': -0.04,
    'acc_z': -1.14,
    'gyro_x': -126.43,
    'gyro_y': -32.72,
    'gyro_z': 32.21,
    'heading': 21.18
  },
  {
    'time': 31995,
    'acc_x': 0,
    'acc_y': -0.26,
    'acc_z': -1.78,
    'gyro_x': -23.67,
    'gyro_y': -9.53,
    'gyro_z': 17.31,
    'heading': 20.22
  },
  {
    'time': 32030,
    'acc_x': 0.08,
    'acc_y': -0.21,
    'acc_z': -1.24,
    'gyro_x': 137.89,
    'gyro_y': 22.11,
    'gyro_z': -72.84,
    'heading': 23.57
  },
  {
    'time': 32065,
    'acc_x': 0.7,
    'acc_y': 0.33,
    'acc_z': -0.27,
    'gyro_x': 49.38,
    'gyro_y': -42.61,
    'gyro_z': -54.36,
    'heading': 21.15
  },
  {
    'time': 32100,
    'acc_x': 0.42,
    'acc_y': 0.18,
    'acc_z': -0.66,
    'gyro_x': -66.36,
    'gyro_y': -55.14,
    'gyro_z': 46.92,
    'heading': 20.21
  },
  {
    'time': 32135,
    'acc_x': 0.08,
    'acc_y': -0.09,
    'acc_z': -1.36,
    'gyro_x': -133.5,
    'gyro_y': -10.25,
    'gyro_z': 90.11,
    'heading': 21.8
  },
  {
    'time': 32170,
    'acc_x': -0.16,
    'acc_y': -0.47,
    'acc_z': -2,
    'gyro_x': 59.34,
    'gyro_y': 14.36,
    'gyro_z': -6.4,
    'heading': 23.07
  },
  {
    'time': 32205,
    'acc_x': 0.25,
    'acc_y': 0.11,
    'acc_z': -0.44,
    'gyro_x': 98.73,
    'gyro_y': 54.93,
    'gyro_z': -66.37,
    'heading': 24.23
  },
  {
    'time': 32239,
    'acc_x': 0.48,
    'acc_y': 0.13,
    'acc_z': -0.68,
    'gyro_x': -15,
    'gyro_y': -26.17,
    'gyro_z': 0.54,
    'heading': 24.02
  },
  {
    'time': 32275,
    'acc_x': 0.36,
    'acc_y': 0.05,
    'acc_z': -0.65,
    'gyro_x': -80.05,
    'gyro_y': 4.13,
    'gyro_z': 45.81,
    'heading': 20.71
  },
  {
    'time': 32310,
    'acc_x': 0.12,
    'acc_y': -0.18,
    'acc_z': -1.34,
    'gyro_x': -103.57,
    'gyro_y': -10.6,
    'gyro_z': 55.48,
    'heading': 21.61
  },
  {
    'time': 32345,
    'acc_x': -0.08,
    'acc_y': -0.35,
    'acc_z': -1.77,
    'gyro_x': 65.09,
    'gyro_y': 4.57,
    'gyro_z': -7.31,
    'heading': 22.68
  },
  {
    'time': 32380,
    'acc_x': 0.21,
    'acc_y': -0.02,
    'acc_z': -0.73,
    'gyro_x': 116.91,
    'gyro_y': 32.14,
    'gyro_z': -69.85,
    'heading': 24.86
  },
  {
    'time': 32414,
    'acc_x': 0.58,
    'acc_y': 0.19,
    'acc_z': -0.57,
    'gyro_x': -11.25,
    'gyro_y': -59.31,
    'gyro_z': -29.34,
    'heading': 24.44
  },
  {
    'time': 32450,
    'acc_x': 0.37,
    'acc_y': 0.16,
    'acc_z': -0.94,
    'gyro_x': -119.65,
    'gyro_y': -9.01,
    'gyro_z': 56.85,
    'heading': 19.5
  },
  {
    'time': 32485,
    'acc_x': -0.28,
    'acc_y': -0.52,
    'acc_z': -2,
    'gyro_x': 32.95,
    'gyro_y': -5.06,
    'gyro_z': 24.66,
    'heading': 21.71
  },
  {
    'time': 32520,
    'acc_x': 0.1,
    'acc_y': -0.19,
    'acc_z': -1.11,
    'gyro_x': 151.49,
    'gyro_y': 21.94,
    'gyro_z': -91.57,
    'heading': 21.9
  },
  {
    'time': 32554,
    'acc_x': 0.79,
    'acc_y': 0.35,
    'acc_z': 0.06,
    'gyro_x': -16.22,
    'gyro_y': -25.61,
    'gyro_z': -55.75,
    'heading': 23.06
  },
  {
    'time': 32589,
    'acc_x': 0.38,
    'acc_y': 0.22,
    'acc_z': -0.96,
    'gyro_x': -165.64,
    'gyro_y': 4.12,
    'gyro_z': 73.73,
    'heading': 18.26
  },
  {
    'time': 32625,
    'acc_x': -0.23,
    'acc_y': -0.54,
    'acc_z': -1.99,
    'gyro_x': 23.73,
    'gyro_y': 4.66,
    'gyro_z': 40.69,
    'heading': 20.34
  },
  {
    'time': 32660,
    'acc_x': 0.19,
    'acc_y': -0.07,
    'acc_z': -0.65,
    'gyro_x': 137.51,
    'gyro_y': 15.92,
    'gyro_z': -86.13,
    'heading': 20.98
  },
  {
    'time': 32694,
    'acc_x': 0.71,
    'acc_y': 0.53,
    'acc_z': -0.4,
    'gyro_x': -112.18,
    'gyro_y': -49.11,
    'gyro_z': 4.2,
    'heading': 22.38
  },
  {
    'time': 32729,
    'acc_x': -0.09,
    'acc_y': -0.25,
    'acc_z': -2,
    'gyro_x': -154.05,
    'gyro_y': 16.76,
    'gyro_z': 99.03,
    'heading': 22.31
  },
  {
    'time': 32764,
    'acc_x': -0.08,
    'acc_y': -0.44,
    'acc_z': -1.33,
    'gyro_x': 136.16,
    'gyro_y': 18.47,
    'gyro_z': -42.19,
    'heading': 22.74
  },
  {
    'time': 32799,
    'acc_x': 0.74,
    'acc_y': 0.64,
    'acc_z': 0.36,
    'gyro_x': 39.32,
    'gyro_y': 22.22,
    'gyro_z': -53.84,
    'heading': 24.36
  },
  {
    'time': 32834,
    'acc_x': 0.21,
    'acc_y': 0.07,
    'acc_z': -1.2,
    'gyro_x': -119.81,
    'gyro_y': -4.2,
    'gyro_z': 93.99,
    'heading': 22.68
  },
  {
    'time': 32869,
    'acc_x': -0.15,
    'acc_y': -0.47,
    'acc_z': -1.85,
    'gyro_x': 15.69,
    'gyro_y': 13.29,
    'gyro_z': 25.03,
    'heading': 25.41
  },
  {
    'time': 32904,
    'acc_x': 0.46,
    'acc_y': 0.2,
    'acc_z': -1.05,
    'gyro_x': 89.31,
    'gyro_y': 28.7,
    'gyro_z': -75.69,
    'heading': 21.89
  },
  {
    'time': 32939,
    'acc_x': 0.66,
    'acc_y': 0.34,
    'acc_z': -0.39,
    'gyro_x': -3.24,
    'gyro_y': -6.84,
    'gyro_z': 50.23,
    'heading': 23
  },
  {
    'time': 32974,
    'acc_x': -0.05,
    'acc_y': -0.46,
    'acc_z': -1.45,
    'gyro_x': -42.39,
    'gyro_y': 1.46,
    'gyro_z': 74.21,
    'heading': 21.85
  },
  {
    'time': 33009,
    'acc_x': 0.07,
    'acc_y': -0.41,
    'acc_z': -1.18,
    'gyro_x': 77.95,
    'gyro_y': -3.82,
    'gyro_z': -39.59,
    'heading': 21.8
  },
  {
    'time': 33044,
    'acc_x': 0.92,
    'acc_y': 0.65,
    'acc_z': -0.21,
    'gyro_x': -10.83,
    'gyro_y': 14.09,
    'gyro_z': 1.45,
    'heading': 20.81
  },
  {
    'time': 33078,
    'acc_x': -0.05,
    'acc_y': -0.34,
    'acc_z': -1.1,
    'gyro_x': -34.02,
    'gyro_y': 34.81,
    'gyro_z': 137.89,
    'heading': 22.04
  },
  {
    'time': 33114,
    'acc_x': -0.08,
    'acc_y': -0.68,
    'acc_z': -1.5,
    'gyro_x': 37.78,
    'gyro_y': -12.59,
    'gyro_z': -15.22,
    'heading': 19.82
  },
  {
    'time': 33149,
    'acc_x': 0.61,
    'acc_y': 0.06,
    'acc_z': -0.69,
    'gyro_x': 9.07,
    'gyro_y': 9.37,
    'gyro_z': -84.96,
    'heading': 20.36
  },
  {
    'time': 33184,
    'acc_x': 0.63,
    'acc_y': 0.4,
    'acc_z': -0.98,
    'gyro_x': -26.46,
    'gyro_y': 18.43,
    'gyro_z': 91.79,
    'heading': 22.99
  },
  {
    'time': 33219,
    'acc_x': -0.19,
    'acc_y': -0.88,
    'acc_z': -1.08,
    'gyro_x': 16.05,
    'gyro_y': 20.69,
    'gyro_z': 72.11,
    'heading': 19.01
  },
  {
    'time': 33253,
    'acc_x': 0.13,
    'acc_y': -0.44,
    'acc_z': -0.91,
    'gyro_x': 35.4,
    'gyro_y': -11.56,
    'gyro_z': -94.43,
    'heading': 17.96
  },
  {
    'time': 33288,
    'acc_x': 1.07,
    'acc_y': 0.86,
    'acc_z': -0.48,
    'gyro_x': -88.56,
    'gyro_y': 11.18,
    'gyro_z': -70.31,
    'heading': 19.53
  },
  {
    'time': 33324,
    'acc_x': 0.33,
    'acc_y': 0.11,
    'acc_z': -1.23,
    'gyro_x': -20.15,
    'gyro_y': 39.24,
    'gyro_z': 132.73,
    'heading': 20.11
  },
  {
    'time': 33359,
    'acc_x': -0.13,
    'acc_y': -0.8,
    'acc_z': -1.22,
    'gyro_x': 37.07,
    'gyro_y': -13.49,
    'gyro_z': 6.02,
    'heading': 18.06
  },
  {
    'time': 33393,
    'acc_x': 0.45,
    'acc_y': -0.24,
    'acc_z': -0.56,
    'gyro_x': -20.56,
    'gyro_y': -4.66,
    'gyro_z': -95.27,
    'heading': 17.8
  },
  {
    'time': 33429,
    'acc_x': 0.87,
    'acc_y': 0.81,
    'acc_z': -0.82,
    'gyro_x': -91.44,
    'gyro_y': 0.9,
    'gyro_z': 30.48,
    'heading': 20.58
  },
  {
    'time': 33464,
    'acc_x': -0.24,
    'acc_y': -0.58,
    'acc_z': -1.22,
    'gyro_x': 63.08,
    'gyro_y': 28.73,
    'gyro_z': 119.41,
    'heading': 21.12
  },
  {
    'time': 33498,
    'acc_x': 0.21,
    'acc_y': -0.38,
    'acc_z': -1.01,
    'gyro_x': 44.89,
    'gyro_y': -18.34,
    'gyro_z': -69.36,
    'heading': 18.38
  },
  {
    'time': 33533,
    'acc_x': 0.9,
    'acc_y': 0.54,
    'acc_z': -0.49,
    'gyro_x': -54.74,
    'gyro_y': -5.68,
    'gyro_z': -80.6,
    'heading': 21.04
  },
  {
    'time': 33568,
    'acc_x': 0.4,
    'acc_y': 0.24,
    'acc_z': -1.13,
    'gyro_x': 10.38,
    'gyro_y': -0.89,
    'gyro_z': 130.15,
    'heading': 24.47
  },
  {
    'time': 33603,
    'acc_x': -0.17,
    'acc_y': -0.96,
    'acc_z': -1.19,
    'gyro_x': 61.15,
    'gyro_y': -18.62,
    'gyro_z': 8.28,
    'heading': 25.1
  },
  {
    'time': 33638,
    'acc_x': 0.26,
    'acc_y': -0.32,
    'acc_z': -0.7,
    'gyro_x': 30.71,
    'gyro_y': -19.44,
    'gyro_z': -96.11,
    'heading': 26.64
  },
  {
    'time': 33673,
    'acc_x': 1.07,
    'acc_y': 0.93,
    'acc_z': -0.75,
    'gyro_x': -66.53,
    'gyro_y': -11.61,
    'gyro_z': 33.22,
    'heading': 28.91
  },
  {
    'time': 33708,
    'acc_x': -0.05,
    'acc_y': -0.4,
    'acc_z': -1.27,
    'gyro_x': 26.18,
    'gyro_y': 43.11,
    'gyro_z': 161.94,
    'heading': 30.32
  },
  {
    'time': 33743,
    'acc_x': 0.02,
    'acc_y': -0.77,
    'acc_z': -1.04,
    'gyro_x': 64.31,
    'gyro_y': -48.79,
    'gyro_z': -20.18,
    'heading': 30.72
  },
  {
    'time': 33778,
    'acc_x': 0.46,
    'acc_y': -0.14,
    'acc_z': -0.64,
    'gyro_x': -26.63,
    'gyro_y': -27.92,
    'gyro_z': -92.02,
    'heading': 33.32
  },
  {
    'time': 33813,
    'acc_x': 0.66,
    'acc_y': 0.45,
    'acc_z': -0.97,
    'gyro_x': -49.53,
    'gyro_y': 3.95,
    'gyro_z': 32.28,
    'heading': 36.19
  },
  {
    'time': 33848,
    'acc_x': 0,
    'acc_y': -0.47,
    'acc_z': -1.01,
    'gyro_x': 29.05,
    'gyro_y': 22.12,
    'gyro_z': 76,
    'heading': 38.17
  },
  {
    'time': 33883,
    'acc_x': 0.22,
    'acc_y': -0.35,
    'acc_z': -0.94,
    'gyro_x': 28.67,
    'gyro_y': -22.66,
    'gyro_z': -24.69,
    'heading': 40.76
  },
  {
    'time': 33918,
    'acc_x': 0.46,
    'acc_y': 0,
    'acc_z': -0.93,
    'gyro_x': -9.72,
    'gyro_y': -23.21,
    'gyro_z': -34.34,
    'heading': 41.77
  },
  {
    'time': 33953,
    'acc_x': 0.34,
    'acc_y': -0.09,
    'acc_z': -1.02,
    'gyro_x': -2.19,
    'gyro_y': -1.21,
    'gyro_z': 17.54,
    'heading': 42.74
  },
  {
    'time': 33988,
    'acc_x': 0.3,
    'acc_y': -0.19,
    'acc_z': -0.89,
    'gyro_x': -2.7,
    'gyro_y': -2.15,
    'gyro_z': 11.89,
    'heading': 43.27
  },
  {
    'time': 34022,
    'acc_x': 0.29,
    'acc_y': -0.14,
    'acc_z': -1.07,
    'gyro_x': -13.44,
    'gyro_y': -11.27,
    'gyro_z': 4.01,
    'heading': 44.75
  },
  {
    'time': 34057,
    'acc_x': 0.33,
    'acc_y': -0.09,
    'acc_z': -1.05,
    'gyro_x': 2.11,
    'gyro_y': 2.13,
    'gyro_z': 9.98,
    'heading': 44.74
  },
  {
    'time': 34092,
    'acc_x': 0.3,
    'acc_y': -0.19,
    'acc_z': -1.03,
    'gyro_x': 17.22,
    'gyro_y': -5.6,
    'gyro_z': 13.73,
    'heading': 45.52
  },
  {
    'time': 34128,
    'acc_x': 0.32,
    'acc_y': -0.16,
    'acc_z': -1.02,
    'gyro_x': 6,
    'gyro_y': -1.69,
    'gyro_z': 5.6,
    'heading': 45.76
  },
  {
    'time': 34163,
    'acc_x': 0.36,
    'acc_y': -0.16,
    'acc_z': -0.98,
    'gyro_x': 4.23,
    'gyro_y': 3.96,
    'gyro_z': 9.36,
    'heading': 46.76
  },
  {
    'time': 34198,
    'acc_x': 0.29,
    'acc_y': -0.19,
    'acc_z': -1.08,
    'gyro_x': 4.05,
    'gyro_y': 1.83,
    'gyro_z': 10.58,
    'heading': 43.67
  },
  {
    'time': 34233,
    'acc_x': 0.34,
    'acc_y': -0.12,
    'acc_z': -1.19,
    'gyro_x': 3.04,
    'gyro_y': 11.54,
    'gyro_z': 12.11,
    'heading': 44.47
  },
  {
    'time': 34267,
    'acc_x': 0.31,
    'acc_y': -0.14,
    'acc_z': -1.34,
    'gyro_x': 42.38,
    'gyro_y': 43.22,
    'gyro_z': 21.12,
    'heading': 43.14
  },
  {
    'time': 34302,
    'acc_x': 0.43,
    'acc_y': 0.06,
    'acc_z': -1.29,
    'gyro_x': 85.32,
    'gyro_y': 89.44,
    'gyro_z': 16.02,
    'heading': 44.45
  },
  {
    'time': 34338,
    'acc_x': 0.32,
    'acc_y': -0.31,
    'acc_z': -0.02,
    'gyro_x': 136.71,
    'gyro_y': 55.47,
    'gyro_z': 42.25,
    'heading': 45
  },
  {
    'time': 34373,
    'acc_x': 0.35,
    'acc_y': -0.27,
    'acc_z': 0.11,
    'gyro_x': -98.33,
    'gyro_y': -42.76,
    'gyro_z': 28.46,
    'heading': 46.84
  },
  {
    'time': 34407,
    'acc_x': 0.15,
    'acc_y': -0.44,
    'acc_z': -1.32,
    'gyro_x': -213.24,
    'gyro_y': 69.2,
    'gyro_z': 54.76,
    'heading': 47.51
  },
  {
    'time': 34442,
    'acc_x': 0.17,
    'acc_y': -0.51,
    'acc_z': -1.16,
    'gyro_x': 9.23,
    'gyro_y': -6.33,
    'gyro_z': -43.82,
    'heading': 43.72
  },
  {
    'time': 34477,
    'acc_x': 0.85,
    'acc_y': 0.33,
    'acc_z': -0.76,
    'gyro_x': 30.46,
    'gyro_y': -28.27,
    'gyro_z': -78.55,
    'heading': 40.62
  },
  {
    'time': 34512,
    'acc_x': 0.49,
    'acc_y': 0.11,
    'acc_z': -0.68,
    'gyro_x': -72.51,
    'gyro_y': 14.1,
    'gyro_z': 79.36,
    'heading': 42.3
  },
  {
    'time': 34547,
    'acc_x': 0.06,
    'acc_y': -0.6,
    'acc_z': -1.26,
    'gyro_x': -23.05,
    'gyro_y': -3.2,
    'gyro_z': 3.46,
    'heading': 44.37
  },
  {
    'time': 34582,
    'acc_x': 0.22,
    'acc_y': -0.37,
    'acc_z': -1.17,
    'gyro_x': 43.38,
    'gyro_y': -54.46,
    'gyro_z': -68.53,
    'heading': 43.95
  },
  {
    'time': 34617,
    'acc_x': 1.05,
    'acc_y': 0.76,
    'acc_z': -0.19,
    'gyro_x': 12.57,
    'gyro_y': -9.82,
    'gyro_z': 5.3,
    'heading': 44.39
  },
  {
    'time': 34652,
    'acc_x': 0.11,
    'acc_y': -0.3,
    'acc_z': -1.33,
    'gyro_x': -37.37,
    'gyro_y': 50.62,
    'gyro_z': 137.03,
    'heading': 44.35
  },
  {
    'time': 34687,
    'acc_x': -0.03,
    'acc_y': -0.69,
    'acc_z': -1.12,
    'gyro_x': 19.06,
    'gyro_y': -22.32,
    'gyro_z': 0.98,
    'heading': 43.17
  },
  {
    'time': 34722,
    'acc_x': 0.21,
    'acc_y': -0.45,
    'acc_z': -0.96,
    'gyro_x': 25.63,
    'gyro_y': -47.52,
    'gyro_z': -87.45,
    'heading': 45
  },
  {
    'time': 34757,
    'acc_x': 0.75,
    'acc_y': 0.35,
    'acc_z': -0.74,
    'gyro_x': -45.71,
    'gyro_y': -18.15,
    'gyro_z': -28.63,
    'heading': 42.99
  },
  {
    'time': 34792,
    'acc_x': 0.31,
    'acc_y': -0.18,
    'acc_z': -1.23,
    'gyro_x': -48.24,
    'gyro_y': 36.83,
    'gyro_z': 75.93,
    'heading': 43.68
  },
  {
    'time': 34827,
    'acc_x': 0.17,
    'acc_y': -0.42,
    'acc_z': -1.06,
    'gyro_x': -0.59,
    'gyro_y': 2.44,
    'gyro_z': 8.02,
    'heading': 43.22
  },
  {
    'time': 34862,
    'acc_x': 0.5,
    'acc_y': 0.02,
    'acc_z': -0.8,
    'gyro_x': -2.98,
    'gyro_y': -20.38,
    'gyro_z': -29.73,
    'heading': 44.42
  },
  {
    'time': 34897,
    'acc_x': 0.42,
    'acc_y': -0.01,
    'acc_z': -0.95,
    'gyro_x': -41.24,
    'gyro_y': -10.52,
    'gyro_z': 47.37,
    'heading': 42.23
  },
  {
    'time': 34932,
    'acc_x': 0.1,
    'acc_y': -0.44,
    'acc_z': -1.25,
    'gyro_x': -29.37,
    'gyro_y': 12.15,
    'gyro_z': -0.34,
    'heading': 44.14
  },
  {
    'time': 34967,
    'acc_x': 0.28,
    'acc_y': -0.31,
    'acc_z': -1.1,
    'gyro_x': 103.16,
    'gyro_y': -65.06,
    'gyro_z': -62.4,
    'heading': 42.23
  },
  {
    'time': 35002,
    'acc_x': 0.85,
    'acc_y': 0.47,
    'acc_z': -0.4,
    'gyro_x': -17.16,
    'gyro_y': -11.48,
    'gyro_z': 56.26,
    'heading': 40.49
  },
  {
    'time': 35037,
    'acc_x': -0.04,
    'acc_y': -0.45,
    'acc_z': -1.48,
    'gyro_x': -83.21,
    'gyro_y': 103.52,
    'gyro_z': 115.08,
    'heading': 41.82
  },
  {
    'time': 35071,
    'acc_x': 0.02,
    'acc_y': -0.64,
    'acc_z': -1.14,
    'gyro_x': 100.89,
    'gyro_y': -78.19,
    'gyro_z': -39.89,
    'heading': 38.12
  },
  {
    'time': 35106,
    'acc_x': 0.71,
    'acc_y': 0.3,
    'acc_z': -0.6,
    'gyro_x': 66.12,
    'gyro_y': -57.1,
    'gyro_z': -98.03,
    'heading': 39.73
  },
  {
    'time': 35142,
    'acc_x': 0.44,
    'acc_y': 0.2,
    'acc_z': -1.28,
    'gyro_x': -93.98,
    'gyro_y': 24.66,
    'gyro_z': 80.47,
    'heading': 40.18
  },
  {
    'time': 35176,
    'acc_x': -0.06,
    'acc_y': -0.67,
    'acc_z': -0.85,
    'gyro_x': -31.05,
    'gyro_y': 85.31,
    'gyro_z': 62.31,
    'heading': 39.78
  },
  {
    'time': 35211,
    'acc_x': 0.19,
    'acc_y': -0.39,
    'acc_z': -1.08,
    'gyro_x': 58.05,
    'gyro_y': -54.17,
    'gyro_z': -55.91,
    'heading': 39.41
  },
  {
    'time': 35246,
    'acc_x': 0.86,
    'acc_y': 0.57,
    'acc_z': -0.31,
    'gyro_x': -9.12,
    'gyro_y': -19.24,
    'gyro_z': -45.23,
    'heading': 39.64
  },
  {
    'time': 35282,
    'acc_x': 0.31,
    'acc_y': -0.13,
    'acc_z': -1.35,
    'gyro_x': -56.92,
    'gyro_y': 41.47,
    'gyro_z': 82.69,
    'heading': 40.47
  },
  {
    'time': 35317,
    'acc_x': 0.07,
    'acc_y': -0.51,
    'acc_z': -0.97,
    'gyro_x': -3.76,
    'gyro_y': 21.39,
    'gyro_z': 8.92,
    'heading': 39.68
  },
  {
    'time': 35352,
    'acc_x': 0.17,
    'acc_y': -0.39,
    'acc_z': -1.05,
    'gyro_x': 59.98,
    'gyro_y': -48.9,
    'gyro_z': -63.02,
    'heading': 40.58
  },
  {
    'time': 35386,
    'acc_x': 0.74,
    'acc_y': 0.38,
    'acc_z': -0.23,
    'gyro_x': 3.87,
    'gyro_y': -8.72,
    'gyro_z': -8.97,
    'heading': 40.4
  },
  {
    'time': 35421,
    'acc_x': 0.18,
    'acc_y': -0.24,
    'acc_z': -1.46,
    'gyro_x': -73.98,
    'gyro_y': 82.09,
    'gyro_z': 89.79,
    'heading': 40.09
  },
  {
    'time': 35456,
    'acc_x': 0.2,
    'acc_y': -0.38,
    'acc_z': -0.96,
    'gyro_x': 2.75,
    'gyro_y': 16.17,
    'gyro_z': 8.02,
    'heading': 36.67
  },
  {
    'time': 35491,
    'acc_x': 0.36,
    'acc_y': -0.12,
    'acc_z': -1.03,
    'gyro_x': 59.83,
    'gyro_y': -38.92,
    'gyro_z': -32.69,
    'heading': 37.61
  },
  {
    'time': 35526,
    'acc_x': 0.55,
    'acc_y': 0.05,
    'acc_z': -0.74,
    'gyro_x': 7.82,
    'gyro_y': -11.79,
    'gyro_z': 57.48,
    'heading': 37.86
  },
  {
    'time': 35561,
    'acc_x': -0.03,
    'acc_y': -0.73,
    'acc_z': -1.15,
    'gyro_x': -38.05,
    'gyro_y': 81.42,
    'gyro_z': 63.83,
    'heading': 38.12
  },
  {
    'time': 35596,
    'acc_x': 0.15,
    'acc_y': -0.48,
    'acc_z': -1.14,
    'gyro_x': 90.34,
    'gyro_y': -113.21,
    'gyro_z': -84.56,
    'heading': 36.35
  },
  {
    'time': 35631,
    'acc_x': 0.6,
    'acc_y': 0.09,
    'acc_z': -1.02,
    'gyro_x': 53.95,
    'gyro_y': -51.35,
    'gyro_z': -119.24,
    'heading': 38.6
  },
  {
    'time': 35666,
    'acc_x': 0.57,
    'acc_y': 0.21,
    'acc_z': -0.97,
    'gyro_x': -57.6,
    'gyro_y': 46.72,
    'gyro_z': 82.31,
    'heading': 38.88
  },
  {
    'time': 35701,
    'acc_x': -0.04,
    'acc_y': -0.76,
    'acc_z': -1.13,
    'gyro_x': -20.53,
    'gyro_y': 95.39,
    'gyro_z': 88.51,
    'heading': 38.26
  },
  {
    'time': 35736,
    'acc_x': 0.17,
    'acc_y': -0.58,
    'acc_z': -1,
    'gyro_x': 142.42,
    'gyro_y': -89.4,
    'gyro_z': -32.79,
    'heading': 38.16
  },
  {
    'time': 35771,
    'acc_x': 0.4,
    'acc_y': -0.15,
    'acc_z': -0.61,
    'gyro_x': 69.6,
    'gyro_y': -50.3,
    'gyro_z': -75.45,
    'heading': 40.12
  },
  {
    'time': 35806,
    'acc_x': 0.36,
    'acc_y': -0.06,
    'acc_z': -0.82,
    'gyro_x': -61.88,
    'gyro_y': 41.04,
    'gyro_z': 9.32,
    'heading': 41.46
  },
  {
    'time': 35841,
    'acc_x': 0.27,
    'acc_y': -0.32,
    'acc_z': -0.88,
    'gyro_x': -39.85,
    'gyro_y': 54.08,
    'gyro_z': 23.75,
    'heading': 40.73
  },
  {
    'time': 35875,
    'acc_x': 0.32,
    'acc_y': -0.34,
    'acc_z': -0.82,
    'gyro_x': -10.7,
    'gyro_y': 11.03,
    'gyro_z': -3.82,
    'heading': 38.84
  },
  {
    'time': 35911,
    'acc_x': 0.44,
    'acc_y': -0.24,
    'acc_z': -0.61,
    'gyro_x': 13.11,
    'gyro_y': -16.17,
    'gyro_z': -9.47,
    'heading': 38.54
  },
  {
    'time': 35945,
    'acc_x': 0.44,
    'acc_y': -0.27,
    'acc_z': -0.85,
    'gyro_x': 17.67,
    'gyro_y': -29.69,
    'gyro_z': -1.58,
    'heading': 38.09
  },
  {
    'time': 35980,
    'acc_x': 0.39,
    'acc_y': -0.26,
    'acc_z': -1.06,
    'gyro_x': 8.16,
    'gyro_y': -27.76,
    'gyro_z': 0,
    'heading': 39.08
  },
  {
    'time': 36015,
    'acc_x': 0.3,
    'acc_y': -0.31,
    'acc_z': -1.2,
    'gyro_x': 6.89,
    'gyro_y': -22.22,
    'gyro_z': -3.47,
    'heading': 39.61
  },
  {
    'time': 36050,
    'acc_x': 0.2,
    'acc_y': -0.36,
    'acc_z': -1.12,
    'gyro_x': 37.63,
    'gyro_y': -4.95,
    'gyro_z': -25.35,
    'heading': 39.49
  },
  {
    'time': 36086,
    'acc_x': 0.41,
    'acc_y': -0.16,
    'acc_z': -0.54,
    'gyro_x': 1.06,
    'gyro_y': 0.59,
    'gyro_z': -39.15,
    'heading': 41.62
  },
  {
    'time': 36121,
    'acc_x': 0.44,
    'acc_y': -0.04,
    'acc_z': -0.94,
    'gyro_x': -102.37,
    'gyro_y': 34.69,
    'gyro_z': 21.11,
    'heading': 40.96
  },
  {
    'time': 36155,
    'acc_x': 0.19,
    'acc_y': -0.48,
    'acc_z': -1.02,
    'gyro_x': -38.89,
    'gyro_y': 17.89,
    'gyro_z': 13.38,
    'heading': 39.95
  },
  {
    'time': 36190,
    'acc_x': 0.31,
    'acc_y': -0.32,
    'acc_z': -1.01,
    'gyro_x': 76.62,
    'gyro_y': -75.4,
    'gyro_z': -57.48,
    'heading': 38.57
  },
  {
    'time': 36226,
    'acc_x': 0.72,
    'acc_y': 0.3,
    'acc_z': -0.59,
    'gyro_x': -15.87,
    'gyro_y': -30.31,
    'gyro_z': -20.16,
    'heading': 38.52
  },
  {
    'time': 36260,
    'acc_x': 0.26,
    'acc_y': -0.25,
    'acc_z': -1.48,
    'gyro_x': -159.37,
    'gyro_y': 83.53,
    'gyro_z': 76.98,
    'heading': 39.62
  },
  {
    'time': 36295,
    'acc_x': 0.01,
    'acc_y': -0.61,
    'acc_z': -0.98,
    'gyro_x': 55.21,
    'gyro_y': -31.44,
    'gyro_z': -18.69,
    'heading': 37.97
  },
  {
    'time': 36331,
    'acc_x': 0.38,
    'acc_y': -0.24,
    'acc_z': -0.79,
    'gyro_x': 101.92,
    'gyro_y': -58.47,
    'gyro_z': -83.61,
    'heading': 38.05
  },
  {
    'time': 36365,
    'acc_x': 0.61,
    'acc_y': 0.32,
    'acc_z': -0.73,
    'gyro_x': -53.15,
    'gyro_y': -4.37,
    'gyro_z': 4.1,
    'heading': 38.77
  },
  {
    'time': 36400,
    'acc_x': -0.08,
    'acc_y': -0.68,
    'acc_z': -1.43,
    'gyro_x': -63.55,
    'gyro_y': 4.08,
    'gyro_z': 2.02,
    'heading': 40.68
  },
  {
    'time': 36435,
    'acc_x': 0.12,
    'acc_y': -0.35,
    'acc_z': -1.07,
    'gyro_x': 148.72,
    'gyro_y': -111.73,
    'gyro_z': -130.44,
    'heading': 38.28
  },
  {
    'time': 36470,
    'acc_x': 0.9,
    'acc_y': 0.8,
    'acc_z': -0.17,
    'gyro_x': 103.91,
    'gyro_y': -14.79,
    'gyro_z': -87.7,
    'heading': 41.73
  },
  {
    'time': 36505,
    'acc_x': 0.31,
    'acc_y': -0.18,
    'acc_z': -1.34,
    'gyro_x': -140.62,
    'gyro_y': 91.14,
    'gyro_z': 102.73,
    'heading': 40.54
  },
  {
    'time': 36540,
    'acc_x': -0.02,
    'acc_y': -0.61,
    'acc_z': -0.84,
    'gyro_x': -49.48,
    'gyro_y': -7.94,
    'gyro_z': -13.94,
    'heading': 41.7
  },
  {
    'time': 36575,
    'acc_x': 0.21,
    'acc_y': -0.32,
    'acc_z': -1.08,
    'gyro_x': 75.03,
    'gyro_y': -68.38,
    'gyro_z': -90.03,
    'heading': 39.61
  },
  {
    'time': 36609,
    'acc_x': 0.77,
    'acc_y': 0.58,
    'acc_z': -0.34,
    'gyro_x': -54.03,
    'gyro_y': -18.08,
    'gyro_z': -18.34,
    'heading': 41.35
  },
  {
    'time': 36645,
    'acc_x': 0.18,
    'acc_y': -0.08,
    'acc_z': -1.58,
    'gyro_x': -178.7,
    'gyro_y': 125.02,
    'gyro_z': 133.44,
    'heading': 41.57
  },
  {
    'time': 36680,
    'acc_x': 0.19,
    'acc_y': -0.24,
    'acc_z': -1.22,
    'gyro_x': -86.5,
    'gyro_y': 87.56,
    'gyro_z': 53.24,
    'heading': 38.76
  },
  {
    'time': 36714,
    'acc_x': 0.23,
    'acc_y': -0.24,
    'acc_z': -1.03,
    'gyro_x': 48.32,
    'gyro_y': -11.33,
    'gyro_z': -11.73,
    'heading': 39.81
  },
  {
    'time': 36750,
    'acc_x': 0.46,
    'acc_y': -0.04,
    'acc_z': -0.28,
    'gyro_x': 42.82,
    'gyro_y': -25.69,
    'gyro_z': -42.93,
    'heading': 36.56
  },
  {
    'time': 36785,
    'acc_x': 0.5,
    'acc_y': 0.17,
    'acc_z': -0.79,
    'gyro_x': -137.63,
    'gyro_y': 9.31,
    'gyro_z': 5.34,
    'heading': 35.05
  },
  {
    'time': 36820,
    'acc_x': 0.3,
    'acc_y': -0.04,
    'acc_z': -1.29,
    'gyro_x': -72.47,
    'gyro_y': 47.42,
    'gyro_z': 33.64,
    'heading': 34.82
  },
  {
    'time': 36854,
    'acc_x': 0.26,
    'acc_y': -0.17,
    'acc_z': -1.23,
    'gyro_x': 113.18,
    'gyro_y': -57.78,
    'gyro_z': -19.39,
    'heading': 33.76
  },
  {
    'time': 36890,
    'acc_x': 0.51,
    'acc_y': 0.05,
    'acc_z': -0.92,
    'gyro_x': 170.76,
    'gyro_y': -42.8,
    'gyro_z': -36.66,
    'heading': 34.07
  },
  {
    'time': 36925,
    'acc_x': 0.51,
    'acc_y': 0.16,
    'acc_z': -0.87,
    'gyro_x': 56.85,
    'gyro_y': -19.85,
    'gyro_z': 6.85,
    'heading': 37.53
  },
  {
    'time': 36959,
    'acc_x': 0.28,
    'acc_y': -0.16,
    'acc_z': -1.02,
    'gyro_x': -31.6,
    'gyro_y': 34.2,
    'gyro_z': 40.82,
    'heading': 37.43
  },
  {
    'time': 36994,
    'acc_x': 0.29,
    'acc_y': -0.2,
    'acc_z': -1.07,
    'gyro_x': -16.53,
    'gyro_y': 18.33,
    'gyro_z': 17.52,
    'heading': 40.14
  },
  {
    'time': 37030,
    'acc_x': 0.35,
    'acc_y': -0.16,
    'acc_z': -0.87,
    'gyro_x': 11.62,
    'gyro_y': 2.51,
    'gyro_z': 6.92,
    'heading': 38.76
  },
  {
    'time': 37065,
    'acc_x': 0.37,
    'acc_y': -0.16,
    'acc_z': -0.79,
    'gyro_x': 7.47,
    'gyro_y': 6.05,
    'gyro_z': 11.92,
    'heading': 39.64
  },
  {
    'time': 37099,
    'acc_x': 0.34,
    'acc_y': -0.24,
    'acc_z': -0.83,
    'gyro_x': -0.17,
    'gyro_y': -3.73,
    'gyro_z': 6.25,
    'heading': 38.26
  },
  {
    'time': 37134,
    'acc_x': 0.29,
    'acc_y': -0.24,
    'acc_z': -1.08,
    'gyro_x': 20.33,
    'gyro_y': -30.02,
    'gyro_z': -10.1,
    'heading': 39.3
  },
  {
    'time': 37169,
    'acc_x': 0.31,
    'acc_y': -0.15,
    'acc_z': -1.2,
    'gyro_x': 40.73,
    'gyro_y': -26.41,
    'gyro_z': -30.92,
    'heading': 37.61
  },
  {
    'time': 37204,
    'acc_x': 0.64,
    'acc_y': 0.35,
    'acc_z': -0.4,
    'gyro_x': -4.06,
    'gyro_y': 8.39,
    'gyro_z': 8.79,
    'heading': 38.53
  },
  {
    'time': 37239,
    'acc_x': -0.07,
    'acc_y': -0.55,
    'acc_z': -1.3,
    'gyro_x': -50.51,
    'gyro_y': -4.5,
    'gyro_z': 55.66,
    'heading': 39.7
  },
  {
    'time': 37274,
    'acc_x': -0.01,
    'acc_y': -0.38,
    'acc_z': -1.19,
    'gyro_x': 70.34,
    'gyro_y': -99.9,
    'gyro_z': -91.98,
    'heading': 39.3
  },
  {
    'time': 37309,
    'acc_x': 0.75,
    'acc_y': 0.56,
    'acc_z': -0.2,
    'gyro_x': 143.63,
    'gyro_y': -93.96,
    'gyro_z': -106.9,
    'heading': 37.51
  },
  {
    'time': 37344,
    'acc_x': 0.25,
    'acc_y': -0.01,
    'acc_z': -1.83,
    'gyro_x': -250.14,
    'gyro_y': 88.73,
    'gyro_z': 182.07,
    'heading': 40.08
  },
  {
    'time': 37379,
    'acc_x': -0.27,
    'acc_y': -1.22,
    'acc_z': -0.89,
    'gyro_x': -110.41,
    'gyro_y': 77.82,
    'gyro_z': 75.02,
    'heading': 37.44
  },
  {
    'time': 37414,
    'acc_x': 0.11,
    'acc_y': -0.47,
    'acc_z': -1.06,
    'gyro_x': 108.13,
    'gyro_y': -108.67,
    'gyro_z': -100.03,
    'heading': 34.18
  },
  {
    'time': 37449,
    'acc_x': 1.04,
    'acc_y': 1.21,
    'acc_z': -0.55,
    'gyro_x': -61.37,
    'gyro_y': -39.15,
    'gyro_z': -44.79,
    'heading': 34.74
  },
  {
    'time': 37484,
    'acc_x': 0.19,
    'acc_y': 0.1,
    'acc_z': -1.88,
    'gyro_x': -210.54,
    'gyro_y': 151.5,
    'gyro_z': 136.98,
    'heading': 35.8
  },
  {
    'time': 37519,
    'acc_x': 0.07,
    'acc_y': -0.35,
    'acc_z': -1.31,
    'gyro_x': 33.53,
    'gyro_y': -25.6,
    'gyro_z': -1.14,
    'heading': 31.23
  },
  {
    'time': 37554,
    'acc_x': 0.33,
    'acc_y': -0.03,
    'acc_z': -0.62,
    'gyro_x': 104.64,
    'gyro_y': -37.76,
    'gyro_z': -81.76,
    'heading': 31.8
  },
  {
    'time': 37589,
    'acc_x': 0.47,
    'acc_y': 0.48,
    'acc_z': -1.47,
    'gyro_x': -178.76,
    'gyro_y': 70.04,
    'gyro_z': 53.97,
    'heading': 32.42
  },
  {
    'time': 37623,
    'acc_x': 0.04,
    'acc_y': -0.43,
    'acc_z': -0.87,
    'gyro_x': -28.37,
    'gyro_y': 49.77,
    'gyro_z': 21,
    'heading': 33.52
  },
  {
    'time': 37659,
    'acc_x': 0.22,
    'acc_y': -0.3,
    'acc_z': -0.93,
    'gyro_x': 210.16,
    'gyro_y': -147.98,
    'gyro_z': -99.73,
    'heading': 28.88
  },
  {
    'time': 37694,
    'acc_x': 1.05,
    'acc_y': 1.17,
    'acc_z': 0.46,
    'gyro_x': 98.82,
    'gyro_y': -78.86,
    'gyro_z': -68.02,
    'heading': 33.22
  },
  {
    'time': 37728,
    'acc_x': -0.03,
    'acc_y': -0.04,
    'acc_z': -2,
    'gyro_x': -247.42,
    'gyro_y': 139.15,
    'gyro_z': 178.06,
    'heading': 36.75
  },
  {
    'time': 37764,
    'acc_x': -0.01,
    'acc_y': -0.4,
    'acc_z': -1.51,
    'gyro_x': 76.04,
    'gyro_y': -61.47,
    'gyro_z': -9,
    'heading': 32.88
  },
  {
    'time': 37798,
    'acc_x': 0.19,
    'acc_y': -0.16,
    'acc_z': -0.7,
    'gyro_x': 203.59,
    'gyro_y': -114.16,
    'gyro_z': -91.34,
    'heading': 31.2
  },
  {
    'time': 37834,
    'acc_x': 0.54,
    'acc_y': 0.48,
    'acc_z': -1.09,
    'gyro_x': -99.31,
    'gyro_y': -32.47,
    'gyro_z': 39.82,
    'heading': 35.49
  },
  {
    'time': 37868,
    'acc_x': -0.27,
    'acc_y': -0.56,
    'acc_z': -0.9,
    'gyro_x': -145.83,
    'gyro_y': 129.94,
    'gyro_z': 77.11,
    'heading': 35.46
  },
  {
    'time': 37903,
    'acc_x': 0.05,
    'acc_y': -0.31,
    'acc_z': -0.97,
    'gyro_x': 74.96,
    'gyro_y': -72.54,
    'gyro_z': -71.76,
    'heading': 32.66
  },
  {
    'time': 37939,
    'acc_x': 0.44,
    'acc_y': 0.25,
    'acc_z': -0.67,
    'gyro_x': 13.03,
    'gyro_y': -84.89,
    'gyro_z': -95.55,
    'heading': 31.58
  },
  {
    'time': 37973,
    'acc_x': 0.35,
    'acc_y': 0.23,
    'acc_z': -1.09,
    'gyro_x': 22.37,
    'gyro_y': -56.29,
    'gyro_z': -11.12,
    'heading': 31.48
  },
  {
    'time': 38008,
    'acc_x': -0.04,
    'acc_y': -0.22,
    'acc_z': -1,
    'gyro_x': 71.88,
    'gyro_y': -139.81,
    'gyro_z': 8.79,
    'heading': 29.38
  },
  {
    'time': 38043,
    'acc_x': 0.16,
    'acc_y': -0.04,
    'acc_z': -1.27,
    'gyro_x': 47.65,
    'gyro_y': -126.42,
    'gyro_z': 8.93,
    'heading': 31.22
  },
  {
    'time': 38078,
    'acc_x': -0.02,
    'acc_y': -0.18,
    'acc_z': -1.05,
    'gyro_x': 196.08,
    'gyro_y': -117.36,
    'gyro_z': 72.43,
    'heading': 27.58
  },
  {
    'time': 38113,
    'acc_x': -0.44,
    'acc_y': -0.63,
    'acc_z': -1.09,
    'gyro_x': 53.06,
    'gyro_y': -55.42,
    'gyro_z': -23.34,
    'heading': 29.41
  },
  {
    'time': 38148,
    'acc_x': 0.07,
    'acc_y': -0.04,
    'acc_z': -1.26,
    'gyro_x': -57.53,
    'gyro_y': 51.44,
    'gyro_z': 7.11,
    'heading': 27.83
  },
  {
    'time': 38183,
    'acc_x': 0.16,
    'acc_y': 0.07,
    'acc_z': -1.23,
    'gyro_x': 30.26,
    'gyro_y': 31.49,
    'gyro_z': 27.55,
    'heading': 25.43
  },
  {
    'time': 38218,
    'acc_x': 0.17,
    'acc_y': -0.24,
    'acc_z': -0.98,
    'gyro_x': 5.51,
    'gyro_y': 35.03,
    'gyro_z': 70.38,
    'heading': 22.05
  },
  {
    'time': 38253,
    'acc_x': -0.02,
    'acc_y': -0.46,
    'acc_z': -1,
    'gyro_x': -42.46,
    'gyro_y': 107.15,
    'gyro_z': 47.85,
    'heading': 21.66
  },
  {
    'time': 38288,
    'acc_x': 0.15,
    'acc_y': -0.37,
    'acc_z': -1.17,
    'gyro_x': -83.05,
    'gyro_y': 55.36,
    'gyro_z': 26.17,
    'heading': 20.01
  },
  {
    'time': 38323,
    'acc_x': -0.01,
    'acc_y': -0.6,
    'acc_z': -1.37,
    'gyro_x': -58.91,
    'gyro_y': 150.57,
    'gyro_z': 24.42,
    'heading': 21.01
  },
  {
    'time': 38357,
    'acc_x': 0.22,
    'acc_y': -0.07,
    'acc_z': -1.39,
    'gyro_x': -142.55,
    'gyro_y': 61.35,
    'gyro_z': 18.71,
    'heading': 16.86
  },
  {
    'time': 38393,
    'acc_x': 0.37,
    'acc_y': 0.07,
    'acc_z': -0.8,
    'gyro_x': -63.21,
    'gyro_y': 206,
    'gyro_z': 65.27,
    'heading': 16.57
  },
  {
    'time': 38428,
    'acc_x': 0.67,
    'acc_y': 0.03,
    'acc_z': -0.47,
    'gyro_x': -59.67,
    'gyro_y': 186.21,
    'gyro_z': 67.3,
    'heading': 13.46
  },
  {
    'time': 38462,
    'acc_x': 0.51,
    'acc_y': 0.09,
    'acc_z': -0.75,
    'gyro_x': 24.69,
    'gyro_y': 0.76,
    'gyro_z': 29.72,
    'heading': 13.07
  },
  {
    'time': 38498,
    'acc_x': 0.43,
    'acc_y': 0.04,
    'acc_z': -0.67,
    'gyro_x': -28.11,
    'gyro_y': -25.82,
    'gyro_z': 16.2,
    'heading': 9.81
  },
  {
    'time': 38533,
    'acc_x': 0.47,
    'acc_y': 0.05,
    'acc_z': -1.19,
    'gyro_x': -12.2,
    'gyro_y': -72.52,
    'gyro_z': -21.56,
    'heading': 8.6
  },
  {
    'time': 38568,
    'acc_x': 0.39,
    'acc_y': 0.14,
    'acc_z': -0.69,
    'gyro_x': 12.19,
    'gyro_y': -24.92,
    'gyro_z': 1.43,
    'heading': 6.84
  },
  {
    'time': 38603,
    'acc_x': 0.35,
    'acc_y': 0.04,
    'acc_z': -1.23,
    'gyro_x': 0.18,
    'gyro_y': -110.31,
    'gyro_z': 20.98,
    'heading': 7.38
  },
  {
    'time': 38638,
    'acc_x': 0.14,
    'acc_y': -0.14,
    'acc_z': -1.41,
    'gyro_x': 47.3,
    'gyro_y': -172.85,
    'gyro_z': 67.23,
    'heading': 7.49
  },
  {
    'time': 38672,
    'acc_x': 0.19,
    'acc_y': 0.58,
    'acc_z': -1.42,
    'gyro_x': -1.44,
    'gyro_y': -64.27,
    'gyro_z': 51.66,
    'heading': 3.8
  },
  {
    'time': 38707,
    'acc_x': -0.1,
    'acc_y': -0.67,
    'acc_z': 0.59,
    'gyro_x': -250.14,
    'gyro_y': 55.11,
    'gyro_z': 56.58,
    'heading': 5.37
  },
  {
    'time': 38742,
    'acc_x': -0.08,
    'acc_y': 0.82,
    'acc_z': -2,
    'gyro_x': -12.26,
    'gyro_y': -224.15,
    'gyro_z': 18.91,
    'heading': 357.74
  },
  {
    'time': 38777,
    'acc_x': 0.21,
    'acc_y': 0.54,
    'acc_z': 0.2,
    'gyro_x': 70.38,
    'gyro_y': 179.41,
    'gyro_z': 49.89,
    'heading': 354.16
  },
  {
    'time': 38813,
    'acc_x': 0.03,
    'acc_y': 0.08,
    'acc_z': -1.16,
    'gyro_x': 160.85,
    'gyro_y': -191.16,
    'gyro_z': 112.63,
    'heading': 353.08
  },
  {
    'time': 38847,
    'acc_x': 0.02,
    'acc_y': -0.07,
    'acc_z': -1.29,
    'gyro_x': 68.77,
    'gyro_y': -103.12,
    'gyro_z': 75.8,
    'heading': 355.07
  },
  {
    'time': 38882,
    'acc_x': 0.01,
    'acc_y': 0.07,
    'acc_z': -1.06,
    'gyro_x': 86.05,
    'gyro_y': -31.5,
    'gyro_z': 27.28,
    'heading': 356.72
  },
  {
    'time': 38917,
    'acc_x': -0.09,
    'acc_y': 0.21,
    'acc_z': -0.92,
    'gyro_x': 74.91,
    'gyro_y': -35.86,
    'gyro_z': 53.73,
    'heading': 357.51
  },
  {
    'time': 38952,
    'acc_x': -0.05,
    'acc_y': -0.27,
    'acc_z': -1.14,
    'gyro_x': 23.22,
    'gyro_y': -20.03,
    'gyro_z': 22.5,
    'heading': 357.02
  },
  {
    'time': 38987,
    'acc_x': -0.04,
    'acc_y': 0.01,
    'acc_z': -1.07,
    'gyro_x': 4.13,
    'gyro_y': -6.21,
    'gyro_z': 5.74,
    'heading': 357.79
  },
  {
    'time': 39022,
    'acc_x': -0.07,
    'acc_y': -0.04,
    'acc_z': -1.12,
    'gyro_x': -28.99,
    'gyro_y': 11.82,
    'gyro_z': 29.13,
    'heading': 356.71
  },
  {
    'time': 39057,
    'acc_x': -0.04,
    'acc_y': -0.08,
    'acc_z': -0.84,
    'gyro_x': -38.08,
    'gyro_y': 20.58,
    'gyro_z': 14.49,
    'heading': 357.49
  },
  {
    'time': 39092,
    'acc_x': -0.02,
    'acc_y': -0.06,
    'acc_z': -1.08,
    'gyro_x': -30.37,
    'gyro_y': 6.95,
    'gyro_z': 23.7,
    'heading': 357.94
  },
  {
    'time': 39127,
    'acc_x': -0.03,
    'acc_y': 0.04,
    'acc_z': -0.94,
    'gyro_x': -30.21,
    'gyro_y': 9.88,
    'gyro_z': 20.18,
    'heading': 357.67
  },
  {
    'time': 39162,
    'acc_x': -0.04,
    'acc_y': -0.15,
    'acc_z': -1,
    'gyro_x': -11.21,
    'gyro_y': 1.93,
    'gyro_z': 17.82,
    'heading': 357.82
  },
  {
    'time': 39197,
    'acc_x': -0.03,
    'acc_y': -0.01,
    'acc_z': -1.04,
    'gyro_x': -8.84,
    'gyro_y': 5.63,
    'gyro_z': -2.82,
    'heading': 356.34
  },
  {
    'time': 39232,
    'acc_x': -0.03,
    'acc_y': 0.04,
    'acc_z': -1.04,
    'gyro_x': 5.94,
    'gyro_y': -1.14,
    'gyro_z': -2.77,
    'heading': 356.22
  },
  {
    'time': 39267,
    'acc_x': -0.07,
    'acc_y': -0.06,
    'acc_z': -1.03,
    'gyro_x': 1.34,
    'gyro_y': -0.37,
    'gyro_z': 10.52,
    'heading': 355.78
  },
  {
    'time': 39302,
    'acc_x': -0.05,
    'acc_y': -0.03,
    'acc_z': -1.03,
    'gyro_x': 3.15,
    'gyro_y': 0.68,
    'gyro_z': 7.21,
    'heading': 356.81
  },
  {
    'time': 39337,
    'acc_x': -0.03,
    'acc_y': 0.02,
    'acc_z': -0.97,
    'gyro_x': 5.08,
    'gyro_y': -3.1,
    'gyro_z': -2.92,
    'heading': 357
  },
  {
    'time': 39372,
    'acc_x': -0.03,
    'acc_y': 0.02,
    'acc_z': -1.06,
    'gyro_x': -2.24,
    'gyro_y': -0.59,
    'gyro_z': -0.34,
    'heading': 355.84
  },
  {
    'time': 39407,
    'acc_x': -0.02,
    'acc_y': 0.08,
    'acc_z': -1.03,
    'gyro_x': 0.22,
    'gyro_y': 4.07,
    'gyro_z': -9.24,
    'heading': 356.23
  },
  {
    'time': 39442,
    'acc_x': -0.01,
    'acc_y': 0.01,
    'acc_z': -1,
    'gyro_x': 17.29,
    'gyro_y': -2.36,
    'gyro_z': 0.74,
    'heading': 356.14
  },
  {
    'time': 39477,
    'acc_x': -0.13,
    'acc_y': -0.75,
    'acc_z': -2,
    'gyro_x': 76.82,
    'gyro_y': -112.6,
    'gyro_z': -70.91,
    'heading': 356.79
  },
  {
    'time': 39512,
    'acc_x': -0.46,
    'acc_y': -1.54,
    'acc_z': 2,
    'gyro_x': -93.13,
    'gyro_y': 213.02,
    'gyro_z': 146.61,
    'heading': 356.22
  },
  {
    'time': 39546,
    'acc_x': -0.12,
    'acc_y': -0.15,
    'acc_z': -0.89,
    'gyro_x': 5.16,
    'gyro_y': 3.45,
    'gyro_z': 19.19,
    'heading': 356.27
  },
  {
    'time': 39581,
    'acc_x': -0.11,
    'acc_y': 0.01,
    'acc_z': -1.04,
    'gyro_x': -2.73,
    'gyro_y': 4.26,
    'gyro_z': -2.57,
    'heading': 355.56
  },
  {
    'time': 39616,
    'acc_x': -0.09,
    'acc_y': -0.04,
    'acc_z': -1.07,
    'gyro_x': -11.93,
    'gyro_y': 4.64,
    'gyro_z': 6.73,
    'heading': 356.79
  },
  {
    'time': 39651,
    'acc_x': -0.1,
    'acc_y': 0,
    'acc_z': -1.03,
    'gyro_x': -15.18,
    'gyro_y': 13.05,
    'gyro_z': 3.05,
    'heading': 356.05
  },
  {
    'time': 39686,
    'acc_x': -0.12,
    'acc_y': -0.08,
    'acc_z': -1.08,
    'gyro_x': 6.74,
    'gyro_y': 2.6,
    'gyro_z': 10.01,
    'heading': 355.6
  },
  {
    'time': 39721,
    'acc_x': -0.12,
    'acc_y': -0.21,
    'acc_z': -1.14,
    'gyro_x': -5.16,
    'gyro_y': 13.2,
    'gyro_z': 8.05,
    'heading': 355.41
  },
  {
    'time': 39756,
    'acc_x': -0.08,
    'acc_y': 0.06,
    'acc_z': -1.01,
    'gyro_x': -18.5,
    'gyro_y': 15.92,
    'gyro_z': -9.8,
    'heading': 356.36
  },
  {
    'time': 39792,
    'acc_x': -0.08,
    'acc_y': -0.04,
    'acc_z': -1.03,
    'gyro_x': -6.38,
    'gyro_y': 15.99,
    'gyro_z': 3.56,
    'heading': 357.6
  },
  {
    'time': 39827,
    'acc_x': -0.07,
    'acc_y': 0,
    'acc_z': -1.1,
    'gyro_x': -16.78,
    'gyro_y': 24.41,
    'gyro_z': -17.64,
    'heading': 356.81
  },
  {
    'time': 39861,
    'acc_x': -0.03,
    'acc_y': 0.17,
    'acc_z': -1.07,
    'gyro_x': -10.65,
    'gyro_y': 14.48,
    'gyro_z': -3,
    'heading': 357.54
  },
  {
    'time': 39896,
    'acc_x': -0.04,
    'acc_y': -0.06,
    'acc_z': -0.98,
    'gyro_x': 8.68,
    'gyro_y': 3.15,
    'gyro_z': 7.69,
    'heading': 356.31
  },
  {
    'time': 39931,
    'acc_x': -0.03,
    'acc_y': -0.05,
    'acc_z': -1.03,
    'gyro_x': 12.01,
    'gyro_y': 11.01,
    'gyro_z': -16.19,
    'heading': 356.53
  },
  {
    'time': 39966,
    'acc_x': -0.03,
    'acc_y': 0.1,
    'acc_z': -1.09,
    'gyro_x': 8.28,
    'gyro_y': 11.28,
    'gyro_z': -5.96,
    'heading': 357.06
  },
  {
    'time': 40001,
    'acc_x': -0.02,
    'acc_y': -0.1,
    'acc_z': -1.05,
    'gyro_x': 8.63,
    'gyro_y': -2.18,
    'gyro_z': -2.02,
    'heading': 356.98
  },
  {
    'time': 40036,
    'acc_x': 0,
    'acc_y': 0.14,
    'acc_z': -1.09,
    'gyro_x': 5.83,
    'gyro_y': 6.79,
    'gyro_z': -16.46,
    'heading': 357.72
  },
  {
    'time': 40071,
    'acc_x': 0.01,
    'acc_y': 0.05,
    'acc_z': -0.86,
    'gyro_x': -12.28,
    'gyro_y': 17.92,
    'gyro_z': 7.65,
    'heading': 357.68
  },
  {
    'time': 40106,
    'acc_x': -0.01,
    'acc_y': -0.12,
    'acc_z': -1.07,
    'gyro_x': -5.76,
    'gyro_y': 14.72,
    'gyro_z': -2.69,
    'heading': 357.8
  },
  {
    'time': 40141,
    'acc_x': 0.04,
    'acc_y': 0.05,
    'acc_z': -0.94,
    'gyro_x': 2.99,
    'gyro_y': 24.12,
    'gyro_z': -4.65,
    'heading': 358.48
  },
  {
    'time': 40176,
    'acc_x': 0.02,
    'acc_y': 0.05,
    'acc_z': -0.99,
    'gyro_x': -1,
    'gyro_y': 7.75,
    'gyro_z': -6.53,
    'heading': 358.11
  },
  {
    'time': 40211,
    'acc_x': -0.03,
    'acc_y': -0.06,
    'acc_z': -2,
    'gyro_x': 138.6,
    'gyro_y': 250.13,
    'gyro_z': -13.01,
    'heading': 359.23
  },
  {
    'time': 40246,
    'acc_x': -0.25,
    'acc_y': -0.43,
    'acc_z': 0.52,
    'gyro_x': -74.35,
    'gyro_y': 250.12,
    'gyro_z': 68.87,
    'heading': 358.61
  },
  {
    'time': 40280,
    'acc_x': -0.04,
    'acc_y': -0.16,
    'acc_z': -0.88,
    'gyro_x': -23.14,
    'gyro_y': 16.89,
    'gyro_z': 18.08,
    'heading': 359.23
  },
  {
    'time': 40316,
    'acc_x': -0.02,
    'acc_y': -0.04,
    'acc_z': -1.14,
    'gyro_x': -18.31,
    'gyro_y': 11.75,
    'gyro_z': 1.24,
    'heading': 357.48
  },
  {
    'time': 40350,
    'acc_x': 0.03,
    'acc_y': -0.03,
    'acc_z': -1.04,
    'gyro_x': 1.97,
    'gyro_y': 2.85,
    'gyro_z': 4.47,
    'heading': 358.43
  },
  {
    'time': 40385,
    'acc_x': 0,
    'acc_y': -0.07,
    'acc_z': -1.04,
    'gyro_x': 6.21,
    'gyro_y': 5.88,
    'gyro_z': -0.87,
    'heading': 357.48
  },
  {
    'time': 40420,
    'acc_x': 0.03,
    'acc_y': -0.1,
    'acc_z': -0.99,
    'gyro_x': 9.94,
    'gyro_y': -2.08,
    'gyro_z': 10.67,
    'heading': 357.18
  },
  {
    'time': 40455,
    'acc_x': 0.01,
    'acc_y': -0.01,
    'acc_z': -1.07,
    'gyro_x': 3.09,
    'gyro_y': 3.66,
    'gyro_z': 2.56,
    'heading': 358.43
  },
  {
    'time': 40490,
    'acc_x': 0.01,
    'acc_y': 0.01,
    'acc_z': -0.96,
    'gyro_x': 2.03,
    'gyro_y': 7.7,
    'gyro_z': -0.47,
    'heading': 356.34
  },
  {
    'time': 40525,
    'acc_x': 0.04,
    'acc_y': 0.06,
    'acc_z': -1,
    'gyro_x': 1.55,
    'gyro_y': 0.7,
    'gyro_z': 7.6,
    'heading': 358.77
  },
  {
    'time': 40560,
    'acc_x': 0.01,
    'acc_y': -0.17,
    'acc_z': -1.03,
    'gyro_x': -0.82,
    'gyro_y': -2.55,
    'gyro_z': 13.4,
    'heading': 359.51
  },
  {
    'time': 40595,
    'acc_x': 0.03,
    'acc_y': 0.13,
    'acc_z': -1.06,
    'gyro_x': 0.29,
    'gyro_y': -0.85,
    'gyro_z': -5.88,
    'heading': 358.46
  },
  {
    'time': 40630,
    'acc_x': 0.03,
    'acc_y': 0.01,
    'acc_z': -1,
    'gyro_x': -4.42,
    'gyro_y': 1.85,
    'gyro_z': 10.66,
    'heading': 358.43
  },
  {
    'time': 40665,
    'acc_x': 0.02,
    'acc_y': -0.09,
    'acc_z': -1.03,
    'gyro_x': 7.15,
    'gyro_y': -2.53,
    'gyro_z': -1.66,
    'heading': 358.61
  },
  {
    'time': 40700,
    'acc_x': 0.01,
    'acc_y': -0.02,
    'acc_z': -1.07,
    'gyro_x': 0.84,
    'gyro_y': 0.54,
    'gyro_z': 12.7,
    'heading': 358.6
  },
  {
    'time': 40735,
    'acc_x': 0.01,
    'acc_y': -0.11,
    'acc_z': -0.96,
    'gyro_x': -0.53,
    'gyro_y': 2.17,
    'gyro_z': 10.11,
    'heading': 357.83
  },
  {
    'time': 40770,
    'acc_x': 0.04,
    'acc_y': 0.05,
    'acc_z': -0.98,
    'gyro_x': 10.76,
    'gyro_y': -2.31,
    'gyro_z': -3.5,
    'heading': 359.53
  },
  {
    'time': 40805,
    'acc_x': 0.04,
    'acc_y': 0.05,
    'acc_z': -1.03,
    'gyro_x': -3.05,
    'gyro_y': 1.82,
    'gyro_z': 2.56,
    'heading': 358.15
  },
  {
    'time': 40840,
    'acc_x': 0.02,
    'acc_y': -0.07,
    'acc_z': -1.03,
    'gyro_x': -2.5,
    'gyro_y': 1.15,
    'gyro_z': -6.52,
    'heading': 358.75
  },
  {
    'time': 40875,
    'acc_x': 0.05,
    'acc_y': 0.09,
    'acc_z': -1.01,
    'gyro_x': 3.53,
    'gyro_y': 5.34,
    'gyro_z': -7.89,
    'heading': 358.56
  },
  {
    'time': 40910,
    'acc_x': 0.05,
    'acc_y': -0.02,
    'acc_z': -0.99,
    'gyro_x': -1.76,
    'gyro_y': 5.8,
    'gyro_z': 2.15,
    'heading': 357.77
  },
  {
    'time': 40945,
    'acc_x': 0.05,
    'acc_y': 0.02,
    'acc_z': -1.02,
    'gyro_x': 5.14,
    'gyro_y': -4.09,
    'gyro_z': 4.05,
    'heading': 359.21
  },
  {
    'time': 40980,
    'acc_x': 0.01,
    'acc_y': -0.87,
    'acc_z': -2,
    'gyro_x': 87.75,
    'gyro_y': 250.13,
    'gyro_z': 24.43,
    'heading': 358.75
  },
  {
    'time': 41015,
    'acc_x': -0.16,
    'acc_y': -0.46,
    'acc_z': 1.7,
    'gyro_x': -52.02,
    'gyro_y': 177.92,
    'gyro_z': 36.76,
    'heading': 359.4
  },
  {
    'time': 41050,
    'acc_x': 0.01,
    'acc_y': 0.05,
    'acc_z': -1.22,
    'gyro_x': -7.69,
    'gyro_y': -4.72,
    'gyro_z': -2.89,
    'heading': 358.76
  },
  {
    'time': 41085,
    'acc_x': 0.04,
    'acc_y': 0.03,
    'acc_z': -0.96,
    'gyro_x': -6.51,
    'gyro_y': 9.11,
    'gyro_z': 0.43,
    'heading': 359.23
  },
  {
    'time': 41119,
    'acc_x': 0.02,
    'acc_y': -0.06,
    'acc_z': -1.04,
    'gyro_x': -3.48,
    'gyro_y': 3.18,
    'gyro_z': 5.66,
    'heading': 358.9
  },
  {
    'time': 41154,
    'acc_x': 0.01,
    'acc_y': -0.09,
    'acc_z': -0.99,
    'gyro_x': -1.27,
    'gyro_y': 9.6,
    'gyro_z': -0.7,
    'heading': 357.98
  },
  {
    'time': 41189,
    'acc_x': 0.03,
    'acc_y': -0.01,
    'acc_z': -1.02,
    'gyro_x': -0.11,
    'gyro_y': -0.81,
    'gyro_z': 0.34,
    'heading': 357.79
  },
  {
    'time': 41224,
    'acc_x': 0.02,
    'acc_y': -0.06,
    'acc_z': -1.03,
    'gyro_x': -0.65,
    'gyro_y': -0.27,
    'gyro_z': 4.42,
    'heading': 0.15
  },
  {
    'time': 41259,
    'acc_x': 0.03,
    'acc_y': 0,
    'acc_z': -1.02,
    'gyro_x': -5.39,
    'gyro_y': 3.86,
    'gyro_z': -9.05,
    'heading': 0.16
  },
  {
    'time': 41294,
    'acc_x': 0.04,
    'acc_y': 0.04,
    'acc_z': -0.96,
    'gyro_x': -0.5,
    'gyro_y': 3.02,
    'gyro_z': 8.69,
    'heading': 359.23
  },
  {
    'time': 41329,
    'acc_x': 0.03,
    'acc_y': -0.15,
    'acc_z': -1.05,
    'gyro_x': 3.47,
    'gyro_y': -2.66,
    'gyro_z': 6.5,
    'heading': 358.94
  },
  {
    'time': 41364,
    'acc_x': 0.05,
    'acc_y': 0.03,
    'acc_z': -1.02,
    'gyro_x': 1.11,
    'gyro_y': 2.24,
    'gyro_z': -3.89,
    'heading': 358.92
  },
  {
    'time': 41399,
    'acc_x': 0.05,
    'acc_y': -0.02,
    'acc_z': -0.98,
    'gyro_x': 1.8,
    'gyro_y': 0.25,
    'gyro_z': 14.64,
    'heading': 359.37
  },
  {
    'time': 41434,
    'acc_x': 0.03,
    'acc_y': -0.13,
    'acc_z': -1.06,
    'gyro_x': 2.69,
    'gyro_y': -1.08,
    'gyro_z': 4.44,
    'heading': 359.2
  },
  {
    'time': 41469,
    'acc_x': 0.05,
    'acc_y': 0.08,
    'acc_z': -1.01,
    'gyro_x': -2.71,
    'gyro_y': 2.73,
    'gyro_z': -2.08,
    'heading': 357.98
  },
  {
    'time': 41504,
    'acc_x': 0.03,
    'acc_y': -0.12,
    'acc_z': -0.98,
    'gyro_x': 0.5,
    'gyro_y': 0.3,
    'gyro_z': 6.72,
    'heading': 358.14
  },
  {
    'time': 41539,
    'acc_x': 0.03,
    'acc_y': -0.01,
    'acc_z': -1.04,
    'gyro_x': 3.64,
    'gyro_y': 1.19,
    'gyro_z': -6.21,
    'heading': 358.14
  },
  {
    'time': 41574,
    'acc_x': 0.06,
    'acc_y': -0.03,
    'acc_z': -0.99,
    'gyro_x': 1.51,
    'gyro_y': 2.97,
    'gyro_z': 3.93,
    'heading': 359.54
  },
  {
    'time': 41609,
    'acc_x': 0.03,
    'acc_y': -0.06,
    'acc_z': -1.08,
    'gyro_x': -1.58,
    'gyro_y': -0.08,
    'gyro_z': -0.92,
    'heading': 359.68
  },
  {
    'time': 41644,
    'acc_x': 0.05,
    'acc_y': 0.06,
    'acc_z': -1.08,
    'gyro_x': 3.58,
    'gyro_y': 0.17,
    'gyro_z': -6.76,
    'heading': 359.53
  },
  {
    'time': 41679,
    'acc_x': 0.06,
    'acc_y': -0.03,
    'acc_z': -0.93,
    'gyro_x': -1.43,
    'gyro_y': 4.89,
    'gyro_z': -1.81,
    'heading': 0.15
  },
  {
    'time': 41714,
    'acc_x': -0.05,
    'acc_y': -0.98,
    'acc_z': -2,
    'gyro_x': 61.56,
    'gyro_y': 250.13,
    'gyro_z': -13.93,
    'heading': 359.38
  },
  {
    'time': 41749,
    'acc_x': -0.28,
    'acc_y': -0.39,
    'acc_z': 1.19,
    'gyro_x': -54.53,
    'gyro_y': 250.12,
    'gyro_z': 72.72,
    'heading': 358.53
  },
  {
    'time': 41784,
    'acc_x': -0.03,
    'acc_y': -0.12,
    'acc_z': -0.87,
    'gyro_x': -3.13,
    'gyro_y': 11.11,
    'gyro_z': 4.56,
    'heading': 0.95
  },
  {
    'time': 41819,
    'acc_x': 0.03,
    'acc_y': 0.03,
    'acc_z': -1.05,
    'gyro_x': -5.37,
    'gyro_y': 3.53,
    'gyro_z': -0.37,
    'heading': 358.77
  },
  {
    'time': 41854,
    'acc_x': 0.02,
    'acc_y': -0.06,
    'acc_z': -1.03,
    'gyro_x': -3.87,
    'gyro_y': 5.78,
    'gyro_z': 6.76,
    'heading': 358.61
  },
  {
    'time': 41889,
    'acc_x': 0.01,
    'acc_y': -0.08,
    'acc_z': -0.99,
    'gyro_x': 1.58,
    'gyro_y': 6.05,
    'gyro_z': 0.85,
    'heading': 358.91
  },
  {
    'time': 41924,
    'acc_x': 0.03,
    'acc_y': 0.01,
    'acc_z': -0.99,
    'gyro_x': 2.89,
    'gyro_y': 3.69,
    'gyro_z': 0.52,
    'heading': 359.68
  },
  {
    'time': 41959,
    'acc_x': 0.04,
    'acc_y': -0.06,
    'acc_z': -0.96,
    'gyro_x': 0.34,
    'gyro_y': 2.21,
    'gyro_z': 6.71,
    'heading': 0
  },
  {
    'time': 41994,
    'acc_x': 0.01,
    'acc_y': -0.04,
    'acc_z': -1.04,
    'gyro_x': 0.08,
    'gyro_y': 0.15,
    'gyro_z': 0.44,
    'heading': 358.9
  },
  {
    'time': 42029,
    'acc_x': 0.04,
    'acc_y': 0.01,
    'acc_z': -1.02,
    'gyro_x': -0.08,
    'gyro_y': 4.82,
    'gyro_z': 3.99,
    'heading': 0.31
  },
  {
    'time': 42063,
    'acc_x': 0.05,
    'acc_y': -0.07,
    'acc_z': -1.01,
    'gyro_x': -0.14,
    'gyro_y': -1.58,
    'gyro_z': 2.24,
    'heading': 358.9
  },
  {
    'time': 42098,
    'acc_x': 0.03,
    'acc_y': -0.08,
    'acc_z': -1.03,
    'gyro_x': -1.39,
    'gyro_y': -2.31,
    'gyro_z': -1.96,
    'heading': 358.92
  },
  {
    'time': 42133,
    'acc_x': 0.04,
    'acc_y': -0.04,
    'acc_z': -1.05,
    'gyro_x': -1.82,
    'gyro_y': 4.12,
    'gyro_z': 5.73,
    'heading': 359.68
  },
  {
    'time': 42168,
    'acc_x': 0.03,
    'acc_y': -0.07,
    'acc_z': -1.02,
    'gyro_x': 4.31,
    'gyro_y': -0.26,
    'gyro_z': 1.65,
    'heading': 358.43
  },
  {
    'time': 42204,
    'acc_x': 0.04,
    'acc_y': -0.01,
    'acc_z': -1.03,
    'gyro_x': 0.33,
    'gyro_y': -1.82,
    'gyro_z': -1.27,
    'heading': 0.31
  },
  {
    'time': 42239,
    'acc_x': 0.05,
    'acc_y': -0.01,
    'acc_z': -1.02,
    'gyro_x': -1.89,
    'gyro_y': -0.77,
    'gyro_z': 2.48,
    'heading': 0.3
  },
  {
    'time': 42274,
    'acc_x': 0.03,
    'acc_y': -0.08,
    'acc_z': -1.05,
    'gyro_x': -4.53,
    'gyro_y': 2.37,
    'gyro_z': 1.11,
    'heading': 359.37
  },
  {
    'time': 42308,
    'acc_x': 0.05,
    'acc_y': 0.04,
    'acc_z': -1.04,
    'gyro_x': 4.06,
    'gyro_y': 0.09,
    'gyro_z': -1.01,
    'heading': 0.93
  },
  {
    'time': 42343,
    'acc_x': 0.04,
    'acc_y': -0.04,
    'acc_z': -1,
    'gyro_x': -0.84,
    'gyro_y': 3.6,
    'gyro_z': 1.3,
    'heading': 359.69
  },
  {
    'time': 42378,
    'acc_x': 0.05,
    'acc_y': -0.06,
    'acc_z': -0.99,
    'gyro_x': 0.89,
    'gyro_y': 1.09,
    'gyro_z': -2.95,
    'heading': 359.55
  },
  {
    'time': 42413,
    'acc_x': 0.06,
    'acc_y': -0.02,
    'acc_z': -0.98,
    'gyro_x': 2.8,
    'gyro_y': -0.53,
    'gyro_z': -2.2,
    'heading': 0
  },
  {
    'time': 42448,
    'acc_x': -0.12,
    'acc_y': -0.38,
    'acc_z': -2,
    'gyro_x': 21.44,
    'gyro_y': -50.31,
    'gyro_z': -31.85,
    'heading': 0
  },
  {
    'time': 42483,
    'acc_x': -0.23,
    'acc_y': -1.01,
    'acc_z': 0.4,
    'gyro_x': -45.02,
    'gyro_y': 178.85,
    'gyro_z': 67.85,
    'heading': 1.01
  },
  {
    'time': 42519,
    'acc_x': 0.01,
    'acc_y': 0.01,
    'acc_z': -1.04,
    'gyro_x': -4.63,
    'gyro_y': 15.11,
    'gyro_z': -5.78,
    'heading': 0.46
  },
  {
    'time': 42553,
    'acc_x': 0.03,
    'acc_y': 0.08,
    'acc_z': -0.95,
    'gyro_x': 1.27,
    'gyro_y': 14.81,
    'gyro_z': 2.99,
    'heading': 0
  },
  {
    'time': 42588,
    'acc_x': 0.05,
    'acc_y': -0.08,
    'acc_z': -0.95,
    'gyro_x': 4.99,
    'gyro_y': 3.92,
    'gyro_z': 4.9,
    'heading': 358.74
  },
  {
    'time': 42623,
    'acc_x': 0.04,
    'acc_y': -0.03,
    'acc_z': -0.96,
    'gyro_x': -0.84,
    'gyro_y': 3.73,
    'gyro_z': 1.45,
    'heading': 359.38
  },
  {
    'time': 42658,
    'acc_x': 0.06,
    'acc_y': -0.01,
    'acc_z': -1.02,
    'gyro_x': -7.39,
    'gyro_y': -2.18,
    'gyro_z': 2.38,
    'heading': 359.69
  },
  {
    'time': 42693,
    'acc_x': 0.02,
    'acc_y': -0.08,
    'acc_z': -1.12,
    'gyro_x': -6.16,
    'gyro_y': -2.21,
    'gyro_z': 2.47,
    'heading': 358.89
  },
  {
    'time': 42728,
    'acc_x': 0.05,
    'acc_y': 0.03,
    'acc_z': -1.06,
    'gyro_x': -4.32,
    'gyro_y': 1.84,
    'gyro_z': -5.38,
    'heading': 357.99
  },
  {
    'time': 42763,
    'acc_x': 0.03,
    'acc_y': 0.03,
    'acc_z': -0.98,
    'gyro_x': -3.27,
    'gyro_y': 5.7,
    'gyro_z': 2.51,
    'heading': 358.72
  },
  {
    'time': 42798,
    'acc_x': 0.04,
    'acc_y': -0.06,
    'acc_z': -1.02,
    'gyro_x': 1.69,
    'gyro_y': -1.21,
    'gyro_z': 4.28,
    'heading': 358.59
  },
  {
    'time': 42833,
    'acc_x': 0.05,
    'acc_y': 0.01,
    'acc_z': -1.05,
    'gyro_x': 2.39,
    'gyro_y': -1.95,
    'gyro_z': -1.13,
    'heading': 357.98
  },
  {
    'time': 42868,
    'acc_x': 0.05,
    'acc_y': -0.02,
    'acc_z': -1.01,
    'gyro_x': -1.1,
    'gyro_y': -2.32,
    'gyro_z': 5.41,
    'heading': 359.38
  },
  {
    'time': 42903,
    'acc_x': 0.02,
    'acc_y': -0.13,
    'acc_z': -1.07,
    'gyro_x': -0.23,
    'gyro_y': -4.45,
    'gyro_z': 3.01,
    'heading': 0.16
  },
  {
    'time': 42938,
    'acc_x': 0.06,
    'acc_y': 0.02,
    'acc_z': -1.07,
    'gyro_x': -1.17,
    'gyro_y': -0.85,
    'gyro_z': -2.27,
    'heading': 357.8
  },
  {
    'time': 42973,
    'acc_x': 0.06,
    'acc_y': 0.03,
    'acc_z': -0.99,
    'gyro_x': 0.31,
    'gyro_y': 0.15,
    'gyro_z': 1.92,
    'heading': 0.16
  },
  {
    'time': 43008,
    'acc_x': 0.05,
    'acc_y': -0.03,
    'acc_z': -1.03,
    'gyro_x': 0.26,
    'gyro_y': -0.72,
    'gyro_z': 1.68,
    'heading': 359.21
  },
  {
    'time': 43043,
    'acc_x': 0.04,
    'acc_y': -0.02,
    'acc_z': -1.04,
    'gyro_x': -0.77,
    'gyro_y': 0.36,
    'gyro_z': -2.18,
    'heading': 358.74
  },
  {
    'time': 43078,
    'acc_x': 0.04,
    'acc_y': -0.08,
    'acc_z': -1.02,
    'gyro_x': 0.24,
    'gyro_y': 2.98,
    'gyro_z': 3.45,
    'heading': 0.3
  },
  {
    'time': 43112,
    'acc_x': 0.05,
    'acc_y': -0.08,
    'acc_z': -1.05,
    'gyro_x': 3.7,
    'gyro_y': 3.79,
    'gyro_z': 0.66,
    'heading': 0
  },
  {
    'time': 43148,
    'acc_x': 0.91,
    'acc_y': 1.99,
    'acc_z': -2,
    'gyro_x': 12.42,
    'gyro_y': 250.13,
    'gyro_z': -9.12,
    'heading': 359.38
  },
  {
    'time': 43182,
    'acc_x': -0.08,
    'acc_y': 0.86,
    'acc_z': -0.41,
    'gyro_x': -18.71,
    'gyro_y': 215.11,
    'gyro_z': -57.55,
    'heading': 0.32
  },
  {
    'time': 43217,
    'acc_x': -0.08,
    'acc_y': -0.08,
    'acc_z': -1.58,
    'gyro_x': -16.82,
    'gyro_y': 71.15,
    'gyro_z': 70.56,
    'heading': 358.67
  },
  {
    'time': 43252,
    'acc_x': 0.05,
    'acc_y': 0.21,
    'acc_z': -1.25,
    'gyro_x': -5.13,
    'gyro_y': 2.95,
    'gyro_z': -3.29,
    'heading': 0.46
  },
  {
    'time': 43287,
    'acc_x': 0.08,
    'acc_y': 0.02,
    'acc_z': -0.95,
    'gyro_x': 4.92,
    'gyro_y': 9.57,
    'gyro_z': 10.57,
    'heading': 359.69
  },
  {
    'time': 43322,
    'acc_x': 0.05,
    'acc_y': -0.08,
    'acc_z': -0.97,
    'gyro_x': -1.19,
    'gyro_y': 2.18,
    'gyro_z': 2.66,
    'heading': 358.9
  },
  {
    'time': 43357,
    'acc_x': 0.02,
    'acc_y': -0.04,
    'acc_z': -1.09,
    'gyro_x': -4.78,
    'gyro_y': 3.76,
    'gyro_z': -5.12,
    'heading': 0
  },
  {
    'time': 43392,
    'acc_x': 0.03,
    'acc_y': -0.01,
    'acc_z': -1.03,
    'gyro_x': -1.37,
    'gyro_y': 7.41,
    'gyro_z': 1.66,
    'heading': 359.23
  },
  {
    'time': 43427,
    'acc_x': 0.02,
    'acc_y': -0.07,
    'acc_z': -1.01,
    'gyro_x': 0.51,
    'gyro_y': 1.63,
    'gyro_z': 0.36,
    'heading': 359.69
  },
  {
    'time': 43462,
    'acc_x': 0.03,
    'acc_y': -0.05,
    'acc_z': -1.01,
    'gyro_x': -1.32,
    'gyro_y': 2.61,
    'gyro_z': -2.39,
    'heading': 1.22
  },
  {
    'time': 43497,
    'acc_x': 0.06,
    'acc_y': -0.03,
    'acc_z': -0.96,
    'gyro_x': 2.92,
    'gyro_y': -1.5,
    'gyro_z': 2.78,
    'heading': 0.95
  },
  {
    'time': 43533,
    'acc_x': 0.04,
    'acc_y': -0.04,
    'acc_z': -1.06,
    'gyro_x': -2.69,
    'gyro_y': -4.08,
    'gyro_z': 0.29,
    'heading': 359.22
  },
  {
    'time': 43567,
    'acc_x': 0.05,
    'acc_y': 0,
    'acc_z': -1.05,
    'gyro_x': -0.51,
    'gyro_y': -0.47,
    'gyro_z': -0.39,
    'heading': 359.69
  },
  {
    'time': 43602,
    'acc_x': 0.07,
    'acc_y': -0.05,
    'acc_z': -1.04,
    'gyro_x': -2.15,
    'gyro_y': 0.44,
    'gyro_z': 6.72,
    'heading': 0
  },
  {
    'time': 43637,
    'acc_x': 0.04,
    'acc_y': -0.09,
    'acc_z': -1.03,
    'gyro_x': -0.31,
    'gyro_y': -0.87,
    'gyro_z': 0.98,
    'heading': 359.38
  },
  {
    'time': 43672,
    'acc_x': 0.04,
    'acc_y': -0.02,
    'acc_z': -0.99,
    'gyro_x': 0.7,
    'gyro_y': 0,
    'gyro_z': -0.25,
    'heading': 358.61
  },
  {
    'time': 43707,
    'acc_x': 0.02,
    'acc_y': -0.04,
    'acc_z': -1.06,
    'gyro_x': 0.03,
    'gyro_y': -0.69,
    'gyro_z': 2.57,
    'heading': 359.69
  },
  {
    'time': 43742,
    'acc_x': 0.04,
    'acc_y': -0.04,
    'acc_z': -1.05,
    'gyro_x': 1.02,
    'gyro_y': 0.62,
    'gyro_z': -3.74,
    'heading': 0.31
  },
  {
    'time': 43777,
    'acc_x': 0.05,
    'acc_y': -0.02,
    'acc_z': -1.01,
    'gyro_x': 0.45,
    'gyro_y': 1.28,
    'gyro_z': 1.3,
    'heading': 358.77
  },
  {
    'time': 43812,
    'acc_x': 0.04,
    'acc_y': -0.09,
    'acc_z': -1.05,
    'gyro_x': 1.29,
    'gyro_y': -0.15,
    'gyro_z': -2.6,
    'heading': 0.48
  },
  {
    'time': 43847,
    'acc_x': 0.06,
    'acc_y': 0.03,
    'acc_z': -1,
    'gyro_x': 5.42,
    'gyro_y': -0.39,
    'gyro_z': -4.66,
    'heading': 358.43
  },
  {
    'time': 43882,
    'acc_x': 0,
    'acc_y': 0.56,
    'acc_z': -2,
    'gyro_x': 66.56,
    'gyro_y': 250.13,
    'gyro_z': -93.54,
    'heading': 0.31
  },
  {
    'time': 43917,
    'acc_x': -0.11,
    'acc_y': 0.79,
    'acc_z': -0.41,
    'gyro_x': -39.99,
    'gyro_y': 250.12,
    'gyro_z': -20,
    'heading': 359.38
  },
  {
    'time': 43952,
    'acc_x': -0.26,
    'acc_y': -0.62,
    'acc_z': -0.19,
    'gyro_x': -19.92,
    'gyro_y': 169.5,
    'gyro_z': 25.1,
    'heading': 0.58
  },
  {
    'time': 43986,
    'acc_x': -0.02,
    'acc_y': -0.05,
    'acc_z': -1.03,
    'gyro_x': 4.76,
    'gyro_y': 19.31,
    'gyro_z': 6.42,
    'heading': 359.7
  },
  {
    'time': 44021,
    'acc_x': 0.03,
    'acc_y': 0.03,
    'acc_z': -0.96,
    'gyro_x': 3.66,
    'gyro_y': 14.64,
    'gyro_z': 5.43,
    'heading': 359.38
  },
  {
    'time': 44056,
    'acc_x': 0.04,
    'acc_y': -0.06,
    'acc_z': -0.93,
    'gyro_x': 2.42,
    'gyro_y': 6.08,
    'gyro_z': 3.12,
    'heading': 1.36
  },
  {
    'time': 44091,
    'acc_x': 0.07,
    'acc_y': -0.06,
    'acc_z': -0.89,
    'gyro_x': -4.66,
    'gyro_y': -0.71,
    'gyro_z': 4.17,
    'heading': 0.46
  },
  {
    'time': 44126,
    'acc_x': 0.05,
    'acc_y': -0.07,
    'acc_z': -1.09,
    'gyro_x': -4.27,
    'gyro_y': -7.67,
    'gyro_z': 9.11,
    'heading': 0.15
  },
  {
    'time': 44161,
    'acc_x': 0.01,
    'acc_y': -0.05,
    'acc_z': -1.14,
    'gyro_x': -3.84,
    'gyro_y': 0.38,
    'gyro_z': 1.89,
    'heading': 0.3
  },
  {
    'time': 44196,
    'acc_x': 0,
    'acc_y': 0.03,
    'acc_z': -1.08,
    'gyro_x': 2.05,
    'gyro_y': 2.84,
    'gyro_z': 0.63,
    'heading': 359.69
  },
  {
    'time': 44231,
    'acc_x': -0.02,
    'acc_y': -0.03,
    'acc_z': -1.04,
    'gyro_x': 5.62,
    'gyro_y': 3.93,
    'gyro_z': 3.47,
    'heading': 359.39
  },
  {
    'time': 44266,
    'acc_x': 0.05,
    'acc_y': -0.06,
    'acc_z': -0.89,
    'gyro_x': 2.79,
    'gyro_y': 5.44,
    'gyro_z': -1.49,
    'heading': 359.54
  },
  {
    'time': 44301,
    'acc_x': 0.08,
    'acc_y': -0.01,
    'acc_z': -0.93,
    'gyro_x': -3.32,
    'gyro_y': -5.11,
    'gyro_z': 1.8,
    'heading': 358.94
  },
  {
    'time': 44336,
    'acc_x': 0.02,
    'acc_y': -0.06,
    'acc_z': -1.1,
    'gyro_x': -5.85,
    'gyro_y': -7.5,
    'gyro_z': 3.67,
    'heading': 0.91
  },
  {
    'time': 44371,
    'acc_x': 0,
    'acc_y': -0.02,
    'acc_z': -1.12,
    'gyro_x': -4.4,
    'gyro_y': 1.39,
    'gyro_z': -0.18,
    'heading': 0.16
  },
  {
    'time': 44406,
    'acc_x': 0.01,
    'acc_y': -0.09,
    'acc_z': -1.05,
    'gyro_x': 5.04,
    'gyro_y': 4.49,
    'gyro_z': 1.15,
    'heading': 358.76
  },
  {
    'time': 44441,
    'acc_x': 0.03,
    'acc_y': -0.08,
    'acc_z': -1,
    'gyro_x': 3.56,
    'gyro_y': 4.45,
    'gyro_z': -4.32,
    'heading': 359.69
  },
  {
    'time': 44476,
    'acc_x': 0.04,
    'acc_y': -0.01,
    'acc_z': -1.02,
    'gyro_x': 3.98,
    'gyro_y': 0.02,
    'gyro_z': -6.66,
    'heading': 0.15
  },
  {
    'time': 44511,
    'acc_x': 0.04,
    'acc_y': 0,
    'acc_z': -1.02,
    'gyro_x': 0.56,
    'gyro_y': 0.53,
    'gyro_z': -2.71,
    'heading': 359.23
  },
  {
    'time': 44546,
    'acc_x': -0.31,
    'acc_y': -0.83,
    'acc_z': -2,
    'gyro_x': 208.62,
    'gyro_y': 250.13,
    'gyro_z': -119.8,
    'heading': 358.15
  },
  {
    'time': 44581,
    'acc_x': -0.16,
    'acc_y': 0.52,
    'acc_z': 0.01,
    'gyro_x': -33.53,
    'gyro_y': 238.87,
    'gyro_z': 61.78,
    'heading': 358.8
  },
  {
    'time': 44616,
    'acc_x': -0.22,
    'acc_y': -0.9,
    'acc_z': -1.04,
    'gyro_x': 3.03,
    'gyro_y': 101.6,
    'gyro_z': -12.2,
    'heading': 358.97
  },
  {
    'time': 44651,
    'acc_x': 0,
    'acc_y': -0.14,
    'acc_z': -1.09,
    'gyro_x': 0.6,
    'gyro_y': 7.99,
    'gyro_z': 2.02,
    'heading': 357.57
  },
  {
    'time': 44686,
    'acc_x': 0.05,
    'acc_y': 0.01,
    'acc_z': -0.93,
    'gyro_x': -1.08,
    'gyro_y': 6.5,
    'gyro_z': -0.11,
    'heading': 359.69
  },
  {
    'time': 44721,
    'acc_x': 0.01,
    'acc_y': -0.03,
    'acc_z': -1.07,
    'gyro_x': 1.21,
    'gyro_y': 1.85,
    'gyro_z': 0.91,
    'heading': 0
  },
  {
    'time': 44756,
    'acc_x': 0.02,
    'acc_y': -0.04,
    'acc_z': -1.06,
    'gyro_x': -0.56,
    'gyro_y': 2.24,
    'gyro_z': 1.6,
    'heading': 358.77
  },
  {
    'time': 44791,
    'acc_x': 0.02,
    'acc_y': -0.04,
    'acc_z': -1.03,
    'gyro_x': 0.34,
    'gyro_y': 0.11,
    'gyro_z': 0.81,
    'heading': 0.62
  },
  {
    'time': 44826,
    'acc_x': 0,
    'acc_y': -0.04,
    'acc_z': -1,
    'gyro_x': -2.98,
    'gyro_y': 2.44,
    'gyro_z': -0.83,
    'heading': 0.16
  },
  {
    'time': 44860,
    'acc_x': 0.04,
    'acc_y': -0.04,
    'acc_z': -1,
    'gyro_x': -3.4,
    'gyro_y': 1.47,
    'gyro_z': 0.04,
    'heading': 0.15
  },
  {
    'time': 44895,
    'acc_x': 0.03,
    'acc_y': -0.07,
    'acc_z': -1.01,
    'gyro_x': -0.91,
    'gyro_y': -2.49,
    'gyro_z': 2.22,
    'heading': 0.46
  },
  {
    'time': 44930,
    'acc_x': 0.04,
    'acc_y': -0.08,
    'acc_z': -1.03,
    'gyro_x': 0.26,
    'gyro_y': -1.76,
    'gyro_z': 1.41,
    'heading': 358.78
  },
  {
    'time': 44965,
    'acc_x': 0.03,
    'acc_y': -0.01,
    'acc_z': -1.05,
    'gyro_x': -2.66,
    'gyro_y': -1.7,
    'gyro_z': 1.34,
    'heading': 359.54
  },
  {
    'time': 45000,
    'acc_x': 0.03,
    'acc_y': -0.05,
    'acc_z': -1.05,
    'gyro_x': 0.18,
    'gyro_y': -1.1,
    'gyro_z': 1.36,
    'heading': 358.45
  },
  {
    'time': 45035,
    'acc_x': 0.02,
    'acc_y': -0.06,
    'acc_z': -1.01,
    'gyro_x': 0.4,
    'gyro_y': 1.61,
    'gyro_z': -1.42,
    'heading': 358.61
  },
  {
    'time': 45070,
    'acc_x': 0.02,
    'acc_y': -0.02,
    'acc_z': -1,
    'gyro_x': 1.4,
    'gyro_y': -2.35,
    'gyro_z': -2.92,
    'heading': 358.46
  },
  {
    'time': 45105,
    'acc_x': 0.02,
    'acc_y': -0.07,
    'acc_z': -1.04,
    'gyro_x': -1.87,
    'gyro_y': -2.13,
    'gyro_z': -0.31,
    'heading': 358.91
  },
  {
    'time': 45140,
    'acc_x': 0.02,
    'acc_y': -0.03,
    'acc_z': -1.04,
    'gyro_x': -2.76,
    'gyro_y': 1.91,
    'gyro_z': -2.73,
    'heading': 359.38
  },
  {
    'time': 45175,
    'acc_x': 0.03,
    'acc_y': -0.06,
    'acc_z': -1.05,
    'gyro_x': -0.45,
    'gyro_y': 1.84,
    'gyro_z': -0.66,
    'heading': 359.24
  },
  {
    'time': 45210,
    'acc_x': 0.02,
    'acc_y': -0.05,
    'acc_z': -1,
    'gyro_x': -0.19,
    'gyro_y': 3.89,
    'gyro_z': -0.95,
    'heading': 359.38
  },
  {
    'time': 45245,
    'acc_x': 0.05,
    'acc_y': -0.02,
    'acc_z': -1,
    'gyro_x': 7.18,
    'gyro_y': -3.38,
    'gyro_z': 6.72,
    'heading': 358.77
  },
  {
    'time': 45280,
    'acc_x': -0.22,
    'acc_y': -0.53,
    'acc_z': -2,
    'gyro_x': 35.53,
    'gyro_y': -73.57,
    'gyro_z': -88.22,
    'heading': 358.61
  },
  {
    'time': 45315,
    'acc_x': -0.15,
    'acc_y': -0.21,
    'acc_z': -1.22,
    'gyro_x': -35.48,
    'gyro_y': 77.71,
    'gyro_z': 116.58,
    'heading': 0.28
  },
  {
    'time': 45350,
    'acc_x': 0.01,
    'acc_y': 0.62,
    'acc_z': -0.26,
    'gyro_x': -12.5,
    'gyro_y': 66.66,
    'gyro_z': -38.66,
    'heading': 358.96
  },
  {
    'time': 45385,
    'acc_x': 0.03,
    'acc_y': -0.03,
    'acc_z': -0.96,
    'gyro_x': -1.71,
    'gyro_y': 13.53,
    'gyro_z': 0.71,
    'heading': 358.18
  },
  {
    'time': 45420,
    'acc_x': 0.02,
    'acc_y': -0.08,
    'acc_z': -0.97,
    'gyro_x': 2.44,
    'gyro_y': 1.61,
    'gyro_z': 6.83,
    'heading': 358.19
  },
  {
    'time': 45455,
    'acc_x': -0.01,
    'acc_y': -0.04,
    'acc_z': -1.01,
    'gyro_x': -3.08,
    'gyro_y': 2.4,
    'gyro_z': -1.11,
    'heading': 359.38
  },
  {
    'time': 45490,
    'acc_x': 0.02,
    'acc_y': -0.02,
    'acc_z': -0.97,
    'gyro_x': -2.3,
    'gyro_y': 3.47,
    'gyro_z': 2.66,
    'heading': 0.6
  },
  {
    'time': 45525,
    'acc_x': 0.02,
    'acc_y': -0.01,
    'acc_z': -1.04,
    'gyro_x': 0.44,
    'gyro_y': 2.76,
    'gyro_z': 1.85,
    'heading': 358.6
  },
  {
    'time': 45560,
    'acc_x': -0.02,
    'acc_y': -0.05,
    'acc_z': -1.03,
    'gyro_x': 0.68,
    'gyro_y': 2.94,
    'gyro_z': 1.21,
    'heading': 358.46
  },
  {
    'time': 45595,
    'acc_x': 0.01,
    'acc_y': -0.04,
    'acc_z': -0.99,
    'gyro_x': 1.02,
    'gyro_y': 0.22,
    'gyro_z': 1.68,
    'heading': 358.61
  },
  {
    'time': 45630,
    'acc_x': 0.01,
    'acc_y': -0.06,
    'acc_z': -1.03,
    'gyro_x': -5.32,
    'gyro_y': 1.54,
    'gyro_z': -1.89,
    'heading': 359.39
  },
  {
    'time': 45665,
    'acc_x': 0.02,
    'acc_y': -0.02,
    'acc_z': -1.01,
    'gyro_x': -2.17,
    'gyro_y': 1.32,
    'gyro_z': 0.68,
    'heading': 359.54
  },
  {
    'time': 45700,
    'acc_x': 0.02,
    'acc_y': -0.06,
    'acc_z': -1,
    'gyro_x': -1.5,
    'gyro_y': 1.34,
    'gyro_z': -0.91,
    'heading': 358.63
  },
  {
    'time': 45735,
    'acc_x': 0.02,
    'acc_y': -0.02,
    'acc_z': -1.05,
    'gyro_x': -1.68,
    'gyro_y': -0.48,
    'gyro_z': -2.04,
    'heading': 359.23
  },
  {
    'time': 45770,
    'acc_x': 0.02,
    'acc_y': -0.04,
    'acc_z': -1.03,
    'gyro_x': -1.4,
    'gyro_y': 1.35,
    'gyro_z': -2.73,
    'heading': 357.99
  },
  {
    'time': 45804,
    'acc_x': 0.01,
    'acc_y': -0.02,
    'acc_z': -1.07,
    'gyro_x': 1.7,
    'gyro_y': -0.71,
    'gyro_z': -1.56,
    'heading': 359.55
  },
  {
    'time': 45839,
    'acc_x': 0,
    'acc_y': -0.04,
    'acc_z': -1.05,
    'gyro_x': 4.03,
    'gyro_y': -0.21,
    'gyro_z': 1.56,
    'heading': 359.24
  },
  {
    'time': 45874,
    'acc_x': 0.01,
    'acc_y': -0.02,
    'acc_z': -1.01,
    'gyro_x': 1.3,
    'gyro_y': 2.22,
    'gyro_z': -1.6,
    'heading': 359.54
  },
  {
    'time': 45909,
    'acc_x': 0.02,
    'acc_y': -0.02,
    'acc_z': -0.98,
    'gyro_x': 2.2,
    'gyro_y': 1.08,
    'gyro_z': -2.37,
    'heading': 0.31
  },
  {
    'time': 45944,
    'acc_x': 0.04,
    'acc_y': -0.04,
    'acc_z': -0.99,
    'gyro_x': -0.72,
    'gyro_y': -0.53,
    'gyro_z': 2.31,
    'heading': 357.99
  },
  {
    'time': 45979,
    'acc_x': 0.04,
    'acc_y': -0.06,
    'acc_z': -1.04,
    'gyro_x': -2.34,
    'gyro_y': 0.3,
    'gyro_z': -0.44,
    'heading': 359.4
  },
  {
    'time': 46014,
    'acc_x': 0.03,
    'acc_y': -0.01,
    'acc_z': -1.08,
    'gyro_x': 0.88,
    'gyro_y': 2.3,
    'gyro_z': 0.95,
    'heading': 359.69
  },
  {
    'time': 46049,
    'acc_x': 0.05,
    'acc_y': -0.03,
    'acc_z': -1.02,
    'gyro_x': 4.8,
    'gyro_y': 2.14,
    'gyro_z': 2.51,
    'heading': 358.93
  },
  {
    'time': 46084,
    'acc_x': -1.04,
    'acc_y': -1.29,
    'acc_z': -2,
    'gyro_x': 209.24,
    'gyro_y': 250.13,
    'gyro_z': -152.93,
    'heading': 0.46
  },
  {
    'time': 46119,
    'acc_x': -0.2,
    'acc_y': 0.82,
    'acc_z': -0.44,
    'gyro_x': -59.18,
    'gyro_y': 250.12,
    'gyro_z': 47.45,
    'heading': 359.4
  },
  {
    'time': 46154,
    'acc_x': 0.01,
    'acc_y': 0.55,
    'acc_z': -1.29,
    'gyro_x': 5.92,
    'gyro_y': -21.47,
    'gyro_z': -52.99,
    'heading': 1.17
  },
  {
    'time': 46189,
    'acc_x': 0.01,
    'acc_y': -0.06,
    'acc_z': -1.18,
    'gyro_x': -0.53,
    'gyro_y': 2.74,
    'gyro_z': 1.77,
    'heading': 0
  },
  {
    'time': 46224,
    'acc_x': 0.04,
    'acc_y': -0.06,
    'acc_z': -0.95,
    'gyro_x': -4.74,
    'gyro_y': 7.89,
    'gyro_z': 2.84,
    'heading': 359.4
  },
  {
    'time': 46259,
    'acc_x': 0,
    'acc_y': -0.03,
    'acc_z': -1.03,
    'gyro_x': -1.87,
    'gyro_y': 0.86,
    'gyro_z': -1.06,
    'heading': 0.46
  },
  {
    'time': 46294,
    'acc_x': 0.01,
    'acc_y': -0.03,
    'acc_z': -1.05,
    'gyro_x': -1.44,
    'gyro_y': 4.02,
    'gyro_z': -0.71,
    'heading': 0
  },
  {
    'time': 46329,
    'acc_x': 0.01,
    'acc_y': -0.06,
    'acc_z': -0.97,
    'gyro_x': -1.91,
    'gyro_y': 4.47,
    'gyro_z': 0.74,
    'heading': 358.59
  },
  {
    'time': 46364,
    'acc_x': 0,
    'acc_y': -0.1,
    'acc_z': -0.99,
    'gyro_x': -4.39,
    'gyro_y': 3.13,
    'gyro_z': 2.1,
    'heading': 359.24
  },
  {
    'time': 46399,
    'acc_x': 0.01,
    'acc_y': -0.08,
    'acc_z': -1,
    'gyro_x': -5.99,
    'gyro_y': 2.75,
    'gyro_z': -2.53,
    'heading': 359.38
  },
  {
    'time': 46434,
    'acc_x': 0.03,
    'acc_y': -0.03,
    'acc_z': -1.01,
    'gyro_x': -8.81,
    'gyro_y': 1.85,
    'gyro_z': -6.55,
    'heading': 358.47
  },
  {
    'time': 46469,
    'acc_x': 0.04,
    'acc_y': -0.03,
    'acc_z': -0.98,
    'gyro_x': -10.5,
    'gyro_y': 3.16,
    'gyro_z': -5.08,
    'heading': 358.95
  },
  {
    'time': 46504,
    'acc_x': 0.03,
    'acc_y': 0.06,
    'acc_z': -1.08,
    'gyro_x': -4.46,
    'gyro_y': 3.2,
    'gyro_z': -1.98,
    'heading': 359.22
  },
  {
    'time': 46539,
    'acc_x': 0.01,
    'acc_y': 0.06,
    'acc_z': -1.04,
    'gyro_x': 1.43,
    'gyro_y': 2.21,
    'gyro_z': 2.89,
    'heading': 359.23
  },
  {
    'time': 46574,
    'acc_x': -0.01,
    'acc_y': -0.02,
    'acc_z': -1.05,
    'gyro_x': 5.44,
    'gyro_y': 2.4,
    'gyro_z': 8.02,
    'heading': 359.69
  },
  {
    'time': 46609,
    'acc_x': 0.01,
    'acc_y': -0.01,
    'acc_z': -1.02,
    'gyro_x': 3.92,
    'gyro_y': 4.4,
    'gyro_z': 2.07,
    'heading': 358.43
  },
  {
    'time': 46644,
    'acc_x': 0.05,
    'acc_y': -0.04,
    'acc_z': -0.91,
    'gyro_x': 1.65,
    'gyro_y': 2.77,
    'gyro_z': 3.19,
    'heading': 359.38
  },
  {
    'time': 46679,
    'acc_x': 0.06,
    'acc_y': -0.09,
    'acc_z': -0.96,
    'gyro_x': 0.53,
    'gyro_y': -4.28,
    'gyro_z': 4.47,
    'heading': 359.69
  },
  {
    'time': 46714,
    'acc_x': 0.05,
    'acc_y': -0.04,
    'acc_z': -1.04,
    'gyro_x': -2.91,
    'gyro_y': -4.92,
    'gyro_z': -0.3,
    'heading': 359.54
  },
  {
    'time': 46749,
    'acc_x': 0.01,
    'acc_y': -0.01,
    'acc_z': -1.12,
    'gyro_x': -0.66,
    'gyro_y': -2.1,
    'gyro_z': 1.56,
    'heading': 357.04
  },
  {
    'time': 46784,
    'acc_x': 0.01,
    'acc_y': -0.03,
    'acc_z': -1.07,
    'gyro_x': 2.47,
    'gyro_y': 3.39,
    'gyro_z': 3.37,
    'heading': 358.91
  },
  {
    'time': 46819,
    'acc_x': 0.04,
    'acc_y': 0.01,
    'acc_z': -1.01,
    'gyro_x': 8.59,
    'gyro_y': 4.79,
    'gyro_z': -1.3,
    'heading': 359.22
  },
  {
    'time': 46854,
    'acc_x': 0.02,
    'acc_y': -0.06,
    'acc_z': -0.99,
    'gyro_x': 5.15,
    'gyro_y': 2.31,
    'gyro_z': 0.74,
    'heading': 358.92
  },
  {
    'time': 46889,
    'acc_x': 0.04,
    'acc_y': 0,
    'acc_z': -1.01,
    'gyro_x': 1.68,
    'gyro_y': 1.11,
    'gyro_z': 1.02,
    'heading': 359.38
  },
  {
    'time': 46923,
    'acc_x': 0.02,
    'acc_y': 0,
    'acc_z': -1.06,
    'gyro_x': 2.02,
    'gyro_y': 1.79,
    'gyro_z': 7.38,
    'heading': 359.69
  },
  {
    'time': 46958,
    'acc_x': 0.02,
    'acc_y': -0.03,
    'acc_z': -1.06,
    'gyro_x': 6.05,
    'gyro_y': 2.65,
    'gyro_z': 10.31,
    'heading': 0.61
  },
  {
    'time': 46993,
    'acc_x': 0.03,
    'acc_y': -0.04,
    'acc_z': -1.04,
    'gyro_x': 10.31,
    'gyro_y': 4.6,
    'gyro_z': 7.27,
    'heading': 359.23
  },
  {
    'time': 47028,
    'acc_x': 0.03,
    'acc_y': -0.05,
    'acc_z': -1.03,
    'gyro_x': 10.25,
    'gyro_y': 5.72,
    'gyro_z': 6.47,
    'heading': 0.31
  },
  {
    'time': 47063,
    'acc_x': 0.03,
    'acc_y': -0.08,
    'acc_z': -1.03,
    'gyro_x': 10.56,
    'gyro_y': 5.4,
    'gyro_z': 3.93,
    'heading': 0.93
  },
  {
    'time': 47098,
    'acc_x': 0.04,
    'acc_y': -0.07,
    'acc_z': -1.03,
    'gyro_x': 11.35,
    'gyro_y': 6.07,
    'gyro_z': 5.42,
    'heading': 1.25
  },
  {
    'time': 47133,
    'acc_x': 0.05,
    'acc_y': -0.08,
    'acc_z': -0.99,
    'gyro_x': 11.63,
    'gyro_y': 5.89,
    'gyro_z': 7.15,
    'heading': 1.73
  },
  {
    'time': 47168,
    'acc_x': 0.04,
    'acc_y': -0.05,
    'acc_z': -1.01,
    'gyro_x': 7.9,
    'gyro_y': 6.57,
    'gyro_z': 7.88,
    'heading': 1.41
  },
  {
    'time': 47203,
    'acc_x': 0.07,
    'acc_y': -0.1,
    'acc_z': -0.96,
    'gyro_x': 5.95,
    'gyro_y': 9.76,
    'gyro_z': 2.37,
    'heading': 2.12
  },
  {
    'time': 47238,
    'acc_x': 0.09,
    'acc_y': -0.07,
    'acc_z': -0.98,
    'gyro_x': 5.58,
    'gyro_y': 5.07,
    'gyro_z': 3.63,
    'heading': 0.31
  },
  {
    'time': 47273,
    'acc_x': 0.15,
    'acc_y': -0.1,
    'acc_z': -0.98,
    'gyro_x': -2.09,
    'gyro_y': 6.02,
    'gyro_z': 6.14,
    'heading': 2.84
  },
  {
    'time': 47308,
    'acc_x': 0.08,
    'acc_y': -0.15,
    'acc_z': -1.08,
    'gyro_x': -7.18,
    'gyro_y': 8.68,
    'gyro_z': -2.45,
    'heading': 3.14
  },
  {
    'time': 47343,
    'acc_x': 0.1,
    'acc_y': -0.1,
    'acc_z': -1.01,
    'gyro_x': -7.26,
    'gyro_y': 15.05,
    'gyro_z': -13.68,
    'heading': 1.71
  },
  {
    'time': 47378,
    'acc_x': 0.06,
    'acc_y': -0.28,
    'acc_z': -1.15,
    'gyro_x': -7.99,
    'gyro_y': 15.05,
    'gyro_z': -14.63,
    'heading': 2.19
  },
  {
    'time': 47413,
    'acc_x': 0.13,
    'acc_y': 0.04,
    'acc_z': -0.98,
    'gyro_x': -4.37,
    'gyro_y': 33.62,
    'gyro_z': -43.38,
    'heading': 2.82
  },
  {
    'time': 47448,
    'acc_x': 0.13,
    'acc_y': -0.13,
    'acc_z': -1.07,
    'gyro_x': 4.5,
    'gyro_y': 22.93,
    'gyro_z': -37.23,
    'heading': 4.03
  },
  {
    'time': 47483,
    'acc_x': 0.07,
    'acc_y': -0.19,
    'acc_z': -1.09,
    'gyro_x': -10.18,
    'gyro_y': 37.87,
    'gyro_z': -74.39,
    'heading': 2.86
  },
  {
    'time': 47518,
    'acc_x': 0.2,
    'acc_y': 0.08,
    'acc_z': -0.8,
    'gyro_x': -1.75,
    'gyro_y': 40.18,
    'gyro_z': -40.92,
    'heading': 3.58
  },
  {
    'time': 47553,
    'acc_x': 0.16,
    'acc_y': -0.14,
    'acc_z': -1.04,
    'gyro_x': -2.97,
    'gyro_y': 19.94,
    'gyro_z': -34.4,
    'heading': 5.22
  },
  {
    'time': 47588,
    'acc_x': 0.15,
    'acc_y': -0.01,
    'acc_z': -0.94,
    'gyro_x': -2.56,
    'gyro_y': 25.63,
    'gyro_z': -50.9,
    'heading': 5.91
  },
  {
    'time': 47622,
    'acc_x': 0.23,
    'acc_y': -0.05,
    'acc_z': -0.97,
    'gyro_x': -7.07,
    'gyro_y': 11.63,
    'gyro_z': -29.34,
    'heading': 4.55
  },
  {
    'time': 47657,
    'acc_x': 0.3,
    'acc_y': -0.09,
    'acc_z': -0.96,
    'gyro_x': 7.76,
    'gyro_y': -6.8,
    'gyro_z': -27.66,
    'heading': 5.02
  },
  {
    'time': 47692,
    'acc_x': 0.24,
    'acc_y': -0.05,
    'acc_z': -0.97,
    'gyro_x': -6.02,
    'gyro_y': 3.18,
    'gyro_z': -45.6,
    'heading': 7
  },
  {
    'time': 47727,
    'acc_x': 0.27,
    'acc_y': 0.16,
    'acc_z': -0.86,
    'gyro_x': -3.34,
    'gyro_y': -13.46,
    'gyro_z': -22.44,
    'heading': 6.98
  },
  {
    'time': 47762,
    'acc_x': 0.25,
    'acc_y': -0.05,
    'acc_z': -0.95,
    'gyro_x': -4.57,
    'gyro_y': -16.63,
    'gyro_z': -11.43,
    'heading': 5.18
  },
  {
    'time': 47797,
    'acc_x': 0.27,
    'acc_y': 0.07,
    'acc_z': -0.87,
    'gyro_x': -18.28,
    'gyro_y': -12.77,
    'gyro_z': -19.29,
    'heading': 6.98
  },
  {
    'time': 47832,
    'acc_x': 0.28,
    'acc_y': 0.19,
    'acc_z': -0.82,
    'gyro_x': -7,
    'gyro_y': -17.37,
    'gyro_z': -4.63,
    'heading': 6.69
  },
  {
    'time': 47867,
    'acc_x': 0.23,
    'acc_y': 0.14,
    'acc_z': -0.97,
    'gyro_x': 11.91,
    'gyro_y': -30.43,
    'gyro_z': 21.84,
    'heading': 6.19
  },
  {
    'time': 47902,
    'acc_x': 0.14,
    'acc_y': -0.39,
    'acc_z': -1.15,
    'gyro_x': -30.42,
    'gyro_y': -12.21,
    'gyro_z': 11.18,
    'heading': 6.74
  },
  {
    'time': 47937,
    'acc_x': 0.15,
    'acc_y': -0.04,
    'acc_z': -1.04,
    'gyro_x': -6.21,
    'gyro_y': 9.97,
    'gyro_z': -35.53,
    'heading': 5.61
  },
  {
    'time': 47972,
    'acc_x': 0.2,
    'acc_y': 0.23,
    'acc_z': -0.92,
    'gyro_x': 5.15,
    'gyro_y': 8.3,
    'gyro_z': -6.73,
    'heading': 4.26
  },
  {
    'time': 48007,
    'acc_x': 0.26,
    'acc_y': -0.22,
    'acc_z': -1.01,
    'gyro_x': -1.69,
    'gyro_y': 2.66,
    'gyro_z': 16.27,
    'heading': 5.91
  },
  {
    'time': 48042,
    'acc_x': 0.33,
    'acc_y': 0.13,
    'acc_z': -0.73,
    'gyro_x': -13.35,
    'gyro_y': 0.85,
    'gyro_z': 0.98,
    'heading': 4.41
  },
  {
    'time': 48077,
    'acc_x': 0.21,
    'acc_y': 0.1,
    'acc_z': -1.12,
    'gyro_x': -17.6,
    'gyro_y': -38.45,
    'gyro_z': 37.38,
    'heading': 2.87
  },
  {
    'time': 48112,
    'acc_x': 0.12,
    'acc_y': 0.27,
    'acc_z': -1.21,
    'gyro_x': 0.34,
    'gyro_y': -54,
    'gyro_z': 37.22,
    'heading': 2.39
  },
  {
    'time': 48147,
    'acc_x': 0.14,
    'acc_y': -0.85,
    'acc_z': -1.65,
    'gyro_x': -9.44,
    'gyro_y': -46.68,
    'gyro_z': 62.1,
    'heading': 1.98
  },
  {
    'time': 48182,
    'acc_x': 0.06,
    'acc_y': -0.03,
    'acc_z': -0.91,
    'gyro_x': -4.75,
    'gyro_y': 1.12,
    'gyro_z': -6.45,
    'heading': 1.44
  },
  {
    'time': 48217,
    'acc_x': 0.12,
    'acc_y': 0,
    'acc_z': -0.97,
    'gyro_x': -4.51,
    'gyro_y': 0.3,
    'gyro_z': 4.45,
    'heading': 2.45
  },
  {
    'time': 48252,
    'acc_x': 0.08,
    'acc_y': 0.19,
    'acc_z': -0.84,
    'gyro_x': -27.48,
    'gyro_y': -13.67,
    'gyro_z': -0.2,
    'heading': 0.49
  },
  {
    'time': 48287,
    'acc_x': 0.01,
    'acc_y': 0.19,
    'acc_z': -0.79,
    'gyro_x': -1.23,
    'gyro_y': 51.05,
    'gyro_z': 28.79,
    'heading': 1.46
  },
  {
    'time': 48322,
    'acc_x': 0.14,
    'acc_y': -0.04,
    'acc_z': -0.98,
    'gyro_x': 4.5,
    'gyro_y': 0.88,
    'gyro_z': 28.9,
    'heading': 1.4
  },
  {
    'time': 48357,
    'acc_x': 0.15,
    'acc_y': 0.03,
    'acc_z': -0.85,
    'gyro_x': -12.38,
    'gyro_y': 1.31,
    'gyro_z': 19.37,
    'heading': 359.68
  },
  {
    'time': 48392,
    'acc_x': 0.19,
    'acc_y': -0.04,
    'acc_z': -1.09,
    'gyro_x': -33.55,
    'gyro_y': 23.09,
    'gyro_z': -11.26,
    'heading': 0
  },
  {
    'time': 48426,
    'acc_x': 0.26,
    'acc_y': 0.19,
    'acc_z': -1.04,
    'gyro_x': -44.32,
    'gyro_y': 29.38,
    'gyro_z': -12.37,
    'heading': 0
  },
  {
    'time': 48462,
    'acc_x': 0.17,
    'acc_y': 0.01,
    'acc_z': -0.88,
    'gyro_x': -33.38,
    'gyro_y': 55.61,
    'gyro_z': 28.68,
    'heading': 358.86
  },
  {
    'time': 48496,
    'acc_x': 0.21,
    'acc_y': 0.49,
    'acc_z': -0.89,
    'gyro_x': 21.95,
    'gyro_y': 15.55,
    'gyro_z': 23.25,
    'heading': 358.69
  },
  {
    'time': 48531,
    'acc_x': 0.23,
    'acc_y': -0.04,
    'acc_z': -1.14,
    'gyro_x': 50.55,
    'gyro_y': 15.27,
    'gyro_z': 23.76,
    'heading': 357.41
  },
  {
    'time': 48567,
    'acc_x': 0.13,
    'acc_y': -0.09,
    'acc_z': -0.83,
    'gyro_x': -12.87,
    'gyro_y': 15.35,
    'gyro_z': 29.15,
    'heading': 358.49
  },
  {
    'time': 48602,
    'acc_x': 0.21,
    'acc_y': 0.07,
    'acc_z': -1.11,
    'gyro_x': -26.47,
    'gyro_y': 4.47,
    'gyro_z': 25.03,
    'heading': 0.34
  },
  {
    'time': 48637,
    'acc_x': 0.28,
    'acc_y': -0.05,
    'acc_z': -0.74,
    'gyro_x': -53.3,
    'gyro_y': 22.97,
    'gyro_z': 31.08,
    'heading': 0
  },
  {
    'time': 48671,
    'acc_x': 0.28,
    'acc_y': 0.09,
    'acc_z': -1.05,
    'gyro_x': -1.45,
    'gyro_y': 11.03,
    'gyro_z': -6.34,
    'heading': 359.16
  },
  {
    'time': 48706,
    'acc_x': 0.22,
    'acc_y': -0.02,
    'acc_z': -0.84,
    'gyro_x': 21.69,
    'gyro_y': 13.97,
    'gyro_z': 3.5,
    'heading': 356.48
  },
  {
    'time': 48742,
    'acc_x': 0.22,
    'acc_y': 0.05,
    'acc_z': -1,
    'gyro_x': 14.63,
    'gyro_y': -11.4,
    'gyro_z': 15.92,
    'heading': 357.23
  },
  {
    'time': 48776,
    'acc_x': 0.28,
    'acc_y': 0.05,
    'acc_z': -1.03,
    'gyro_x': 37.97,
    'gyro_y': 7.04,
    'gyro_z': 35.64,
    'heading': 357.76
  },
  {
    'time': 48811,
    'acc_x': 0.33,
    'acc_y': 0.28,
    'acc_z': -0.75,
    'gyro_x': 86.87,
    'gyro_y': -5,
    'gyro_z': -16.89,
    'heading': 359.13
  },
  {
    'time': 48846,
    'acc_x': 0.49,
    'acc_y': 0.2,
    'acc_z': -1.01,
    'gyro_x': -82.19,
    'gyro_y': -9.21,
    'gyro_z': 25.44,
    'heading': 358.27
  },
  {
    'time': 48881,
    'acc_x': 0.14,
    'acc_y': 0.15,
    'acc_z': -1.27,
    'gyro_x': -47.19,
    'gyro_y': -7.4,
    'gyro_z': 60.32,
    'heading': 359.12
  },
  {
    'time': 48916,
    'acc_x': 0.2,
    'acc_y': -0.07,
    'acc_z': -1.05,
    'gyro_x': -6.02,
    'gyro_y': -28.98,
    'gyro_z': 49.89,
    'heading': 357.84
  },
  {
    'time': 48951,
    'acc_x': 0.23,
    'acc_y': 0.12,
    'acc_z': -1.02,
    'gyro_x': 17.33,
    'gyro_y': -36.71,
    'gyro_z': 22.44,
    'heading': 356.76
  },
  {
    'time': 48986,
    'acc_x': 0.17,
    'acc_y': 0.09,
    'acc_z': -1.19,
    'gyro_x': 40.9,
    'gyro_y': -32.74,
    'gyro_z': 36.65,
    'heading': 355.67
  },
  {
    'time': 49021,
    'acc_x': 0.13,
    'acc_y': -0.12,
    'acc_z': -1.12,
    'gyro_x': -22.27,
    'gyro_y': -32.32,
    'gyro_z': 25.73,
    'heading': 357.7
  },
  {
    'time': 49056,
    'acc_x': 0.11,
    'acc_y': 0.16,
    'acc_z': -1.22,
    'gyro_x': -52.08,
    'gyro_y': -22.76,
    'gyro_z': 18.67,
    'heading': 356.71
  },
  {
    'time': 49091,
    'acc_x': 0.1,
    'acc_y': 0.09,
    'acc_z': -1.08,
    'gyro_x': 78.24,
    'gyro_y': -26.34,
    'gyro_z': -1.74,
    'heading': 357.83
  },
  {
    'time': 49126,
    'acc_x': 0.16,
    'acc_y': 0.02,
    'acc_z': -1.07,
    'gyro_x': 21.15,
    'gyro_y': -23.2,
    'gyro_z': 3.83,
    'heading': 355.72
  },
  {
    'time': 49161,
    'acc_x': 0.07,
    'acc_y': -0.04,
    'acc_z': -1.03,
    'gyro_x': 10.25,
    'gyro_y': -24.99,
    'gyro_z': 12.09,
    'heading': 356.16
  },
  {
    'time': 49195,
    'acc_x': 0.03,
    'acc_y': -0.13,
    'acc_z': -1.02,
    'gyro_x': -30.08,
    'gyro_y': -3.44,
    'gyro_z': 21.19,
    'heading': 356.86
  },
  {
    'time': 49230,
    'acc_x': 0.17,
    'acc_y': -0.02,
    'acc_z': -0.87,
    'gyro_x': -6.25,
    'gyro_y': -10.15,
    'gyro_z': 3.25,
    'heading': 357.67
  },
  {
    'time': 49265,
    'acc_x': 0.07,
    'acc_y': 0,
    'acc_z': -0.97,
    'gyro_x': -57.64,
    'gyro_y': -27.85,
    'gyro_z': -1.79,
    'heading': 355.22
  },
  {
    'time': 49301,
    'acc_x': -0.03,
    'acc_y': 0.09,
    'acc_z': -1.17,
    'gyro_x': -13.41,
    'gyro_y': -36.21,
    'gyro_z': -5.85,
    'heading': 354.54
  },
  {
    'time': 49336,
    'acc_x': 0.07,
    'acc_y': 0.12,
    'acc_z': -1.02,
    'gyro_x': -2.92,
    'gyro_y': -21.56,
    'gyro_z': -3.41,
    'heading': 354.93
  },
  {
    'time': 49371,
    'acc_x': 0.08,
    'acc_y': 0.04,
    'acc_z': -0.88,
    'gyro_x': -37.34,
    'gyro_y': -41.66,
    'gyro_z': -0.56,
    'heading': 355.18
  },
  {
    'time': 49406,
    'acc_x': 0.01,
    'acc_y': 0.02,
    'acc_z': -1.1,
    'gyro_x': -7.63,
    'gyro_y': -17.98,
    'gyro_z': 9.88,
    'heading': 354.2
  },
  {
    'time': 49440,
    'acc_x': 0.08,
    'acc_y': 0.05,
    'acc_z': -1,
    'gyro_x': 26.93,
    'gyro_y': -14.89,
    'gyro_z': -1.75,
    'heading': 353.71
  },
  {
    'time': 49475,
    'acc_x': 0.12,
    'acc_y': 0.08,
    'acc_z': -0.91,
    'gyro_x': -11.79,
    'gyro_y': -43.63,
    'gyro_z': -8.16,
    'heading': 354.91
  },
  {
    'time': 49510,
    'acc_x': 0.04,
    'acc_y': 0.02,
    'acc_z': -1.15,
    'gyro_x': -11.82,
    'gyro_y': -36.73,
    'gyro_z': 3.34,
    'heading': 355.64
  },
  {
    'time': 49545,
    'acc_x': -0.02,
    'acc_y': 0.09,
    'acc_z': -1.1,
    'gyro_x': 39.5,
    'gyro_y': -22.48,
    'gyro_z': 2.89,
    'heading': 355.4
  },
  {
    'time': 49581,
    'acc_x': -0.04,
    'acc_y': -0.02,
    'acc_z': -0.99,
    'gyro_x': 22.98,
    'gyro_y': -4.59,
    'gyro_z': 13.34,
    'heading': 354.82
  },
  {
    'time': 49615,
    'acc_x': -0.15,
    'acc_y': -0.12,
    'acc_z': -1.04,
    'gyro_x': -15.24,
    'gyro_y': -6.61,
    'gyro_z': 10.91,
    'heading': 355.46
  },
  {
    'time': 49650,
    'acc_x': -0.05,
    'acc_y': -0.05,
    'acc_z': -1.33,
    'gyro_x': 28.02,
    'gyro_y': -17,
    'gyro_z': -26.41,
    'heading': 354.66
  },
  {
    'time': 49685,
    'acc_x': 0,
    'acc_y': -0.16,
    'acc_z': -1.4,
    'gyro_x': 17.92,
    'gyro_y': -10.47,
    'gyro_z': -5.43,
    'heading': 355.42
  },
  {
    'time': 49720,
    'acc_x': -0.04,
    'acc_y': -0.24,
    'acc_z': -1.34,
    'gyro_x': 87.75,
    'gyro_y': 29.84,
    'gyro_z': 5.21,
    'heading': 354.69
  },
  {
    'time': 49755,
    'acc_x': 0.13,
    'acc_y': -0.13,
    'acc_z': -0.98,
    'gyro_x': 149.31,
    'gyro_y': 11.33,
    'gyro_z': -14.47,
    'heading': 356.19
  },
  {
    'time': 49790,
    'acc_x': 0.08,
    'acc_y': -0.12,
    'acc_z': -1.09,
    'gyro_x': 71.26,
    'gyro_y': 2.77,
    'gyro_z': 4.18,
    'heading': 0.45
  },
  {
    'time': 49825,
    'acc_x': -0.05,
    'acc_y': -0.12,
    'acc_z': -1.03,
    'gyro_x': 83.7,
    'gyro_y': 13.96,
    'gyro_z': 24.95,
    'heading': 3
  },
  {
    'time': 49860,
    'acc_x': -0.05,
    'acc_y': -0.11,
    'acc_z': -0.77,
    'gyro_x': 123.5,
    'gyro_y': -19.81,
    'gyro_z': 12.27,
    'heading': 3.83
  },
  {
    'time': 49895,
    'acc_x': -0.04,
    'acc_y': -0.06,
    'acc_z': -0.66,
    'gyro_x': 90,
    'gyro_y': -41.33,
    'gyro_z': 27.27,
    'heading': 6.81
  },
  {
    'time': 49930,
    'acc_x': -0.1,
    'acc_y': 0.01,
    'acc_z': -0.74,
    'gyro_x': 95.34,
    'gyro_y': -58.1,
    'gyro_z': 35.23,
    'heading': 8.66
  },
  {
    'time': 49965,
    'acc_x': -0.23,
    'acc_y': -0.13,
    'acc_z': -0.72,
    'gyro_x': 26.91,
    'gyro_y': -44.93,
    'gyro_z': 38.07,
    'heading': 9.65
  },
  {
    'time': 49999,
    'acc_x': -0.04,
    'acc_y': -0.12,
    'acc_z': -0.54,
    'gyro_x': -7.75,
    'gyro_y': -19.76,
    'gyro_z': 35.57,
    'heading': 9.81
  },
  {
    'time': 50034,
    'acc_x': -0.21,
    'acc_y': -0.45,
    'acc_z': -0.74,
    'gyro_x': -57.73,
    'gyro_y': -8.54,
    'gyro_z': 30.04,
    'heading': 10.23
  },
  {
    'time': 50070,
    'acc_x': -0.23,
    'acc_y': -0.56,
    'acc_z': -1.08,
    'gyro_x': -39.5,
    'gyro_y': -24.56,
    'gyro_z': -6.25,
    'heading': 7.33
  },
  {
    'time': 50105,
    'acc_x': -0.11,
    'acc_y': -0.35,
    'acc_z': -1.14,
    'gyro_x': -78.21,
    'gyro_y': -2.61,
    'gyro_z': -25.11,
    'heading': 7.37
  },
  {
    'time': 50140,
    'acc_x': 0.01,
    'acc_y': -0.17,
    'acc_z': -1.05,
    'gyro_x': -88.87,
    'gyro_y': -10.52,
    'gyro_z': -25.02,
    'heading': 5.71
  },
  {
    'time': 50175,
    'acc_x': -0.19,
    'acc_y': -0.02,
    'acc_z': -1.36,
    'gyro_x': -16.02,
    'gyro_y': -14.21,
    'gyro_z': -25.38,
    'heading': 5.5
  },
  {
    'time': 50210,
    'acc_x': -0.2,
    'acc_y': -0.1,
    'acc_z': -1.04,
    'gyro_x': -29.15,
    'gyro_y': 33.76,
    'gyro_z': -9.4,
    'heading': 5.13
  },
  {
    'time': 50245,
    'acc_x': -0.19,
    'acc_y': -0.28,
    'acc_z': -0.83,
    'gyro_x': -19.56,
    'gyro_y': 50.15,
    'gyro_z': -11.07,
    'heading': 6.16
  },
  {
    'time': 50279,
    'acc_x': -0.08,
    'acc_y': -0.27,
    'acc_z': -0.72,
    'gyro_x': -9.47,
    'gyro_y': 18.76,
    'gyro_z': -39.7,
    'heading': 5.04
  },
  {
    'time': 50314,
    'acc_x': 0.05,
    'acc_y': -0.14,
    'acc_z': -0.79,
    'gyro_x': 49.66,
    'gyro_y': -15.98,
    'gyro_z': -20.02,
    'heading': 5.1
  },
  {
    'time': 50349,
    'acc_x': -0.14,
    'acc_y': -0.22,
    'acc_z': -1.07,
    'gyro_x': 6.82,
    'gyro_y': -30.63,
    'gyro_z': -16.5,
    'heading': 5.17
  },
  {
    'time': 50384,
    'acc_x': -0.21,
    'acc_y': -0.25,
    'acc_z': -0.98,
    'gyro_x': -19.11,
    'gyro_y': -25.66,
    'gyro_z': -16.31,
    'heading': 5.68
  },
  {
    'time': 50420,
    'acc_x': -0.16,
    'acc_y': -0.27,
    'acc_z': -0.99,
    'gyro_x': 21.65,
    'gyro_y': -23.89,
    'gyro_z': -19.11,
    'heading': 5.13
  },
  {
    'time': 50455,
    'acc_x': -0.1,
    'acc_y': -0.44,
    'acc_z': -0.94,
    'gyro_x': 21.83,
    'gyro_y': -35.15,
    'gyro_z': -25.6,
    'heading': 6.1
  },
  {
    'time': 50490,
    'acc_x': -0.06,
    'acc_y': -0.14,
    'acc_z': -0.98,
    'gyro_x': 42.07,
    'gyro_y': -63.89,
    'gyro_z': -53.93,
    'heading': 7.19
  },
  {
    'time': 50525,
    'acc_x': -0.19,
    'acc_y': -0.45,
    'acc_z': -1.07,
    'gyro_x': -4.89,
    'gyro_y': -47.94,
    'gyro_z': -29.2,
    'heading': 7.37
  },
  {
    'time': 50559,
    'acc_x': -0.2,
    'acc_y': -0.37,
    'acc_z': -0.15,
    'gyro_x': -42.66,
    'gyro_y': -77.23,
    'gyro_z': -123.27,
    'heading': 5.72
  },
  {
    'time': 50594,
    'acc_x': -0.22,
    'acc_y': -0.22,
    'acc_z': -1.36,
    'gyro_x': -69.12,
    'gyro_y': -38.21,
    'gyro_z': -5.24,
    'heading': 9.03
  },
  {
    'time': 50629,
    'acc_x': -0.27,
    'acc_y': -0.12,
    'acc_z': -1.17,
    'gyro_x': -4.47,
    'gyro_y': -13.63,
    'gyro_z': 0.6,
    'heading': 7.8
  },
  {
    'time': 50664,
    'acc_x': -0.27,
    'acc_y': -0.19,
    'acc_z': -0.95,
    'gyro_x': -3.81,
    'gyro_y': -6.11,
    'gyro_z': -5.8,
    'heading': 7.03
  },
  {
    'time': 50699,
    'acc_x': -0.32,
    'acc_y': -0.24,
    'acc_z': -0.92,
    'gyro_x': -29.12,
    'gyro_y': -14.02,
    'gyro_z': -8.24,
    'heading': 7.36
  },
  {
    'time': 50734,
    'acc_x': -0.31,
    'acc_y': -0.17,
    'acc_z': -0.96,
    'gyro_x': -112.42,
    'gyro_y': -0.39,
    'gyro_z': -1.13,
    'heading': 6.62
  },
  {
    'time': 50769,
    'acc_x': -0.29,
    'acc_y': -0.11,
    'acc_z': -1.01,
    'gyro_x': -181.67,
    'gyro_y': 22.69,
    'gyro_z': 14.07,
    'heading': 6.33
  },
  {
    'time': 50804,
    'acc_x': -0.29,
    'acc_y': -0.1,
    'acc_z': -1.02,
    'gyro_x': -71,
    'gyro_y': -5.73,
    'gyro_z': -35.23,
    'heading': 4.33
  },
  {
    'time': 50839,
    'acc_x': -0.23,
    'acc_y': 0.13,
    'acc_z': -1.04,
    'gyro_x': -20.46,
    'gyro_y': -0.33,
    'gyro_z': -20.93,
    'heading': 1.92
  },
  {
    'time': 50874,
    'acc_x': -0.29,
    'acc_y': -0.08,
    'acc_z': -1.02,
    'gyro_x': 1.27,
    'gyro_y': 10.63,
    'gyro_z': 6.34,
    'heading': 2.51
  },
  {
    'time': 50909,
    'acc_x': -0.26,
    'acc_y': -0.1,
    'acc_z': -0.97,
    'gyro_x': 56.98,
    'gyro_y': -0.11,
    'gyro_z': -23.02,
    'heading': 2.31
  },
  {
    'time': 50944,
    'acc_x': -0.21,
    'acc_y': -0.06,
    'acc_z': -0.98,
    'gyro_x': 31.98,
    'gyro_y': -1.62,
    'gyro_z': -5.78,
    'heading': 2.15
  },
  {
    'time': 50979,
    'acc_x': -0.26,
    'acc_y': -0.12,
    'acc_z': -1,
    'gyro_x': 46.73,
    'gyro_y': -3.12,
    'gyro_z': -11.85,
    'heading': 4.44
  },
  {
    'time': 51014,
    'acc_x': -0.25,
    'acc_y': -0.16,
    'acc_z': -0.96,
    'gyro_x': 19.58,
    'gyro_y': -4.13,
    'gyro_z': -11.02,
    'heading': 3.77
  },
  {
    'time': 51049,
    'acc_x': -0.24,
    'acc_y': -0.09,
    'acc_z': -0.96,
    'gyro_x': 42.53,
    'gyro_y': -7.51,
    'gyro_z': -14.77,
    'heading': 7.33
  },
  {
    'time': 51084,
    'acc_x': -0.28,
    'acc_y': -0.16,
    'acc_z': -0.99,
    'gyro_x': 40.92,
    'gyro_y': -3.27,
    'gyro_z': -8.93,
    'heading': 5.76
  },
  {
    'time': 51118,
    'acc_x': -0.3,
    'acc_y': -0.2,
    'acc_z': -0.99,
    'gyro_x': 75.68,
    'gyro_y': -6.99,
    'gyro_z': -19.89,
    'heading': 6.84
  },
  {
    'time': 51153,
    'acc_x': -0.29,
    'acc_y': -0.23,
    'acc_z': -0.94,
    'gyro_x': 73.99,
    'gyro_y': -1.18,
    'gyro_z': -26.12,
    'heading': 9.03
  },
  {
    'time': 51188,
    'acc_x': -0.26,
    'acc_y': -0.27,
    'acc_z': -0.93,
    'gyro_x': 86.87,
    'gyro_y': 1.51,
    'gyro_z': -12.07,
    'heading': 8.51
  },
  {
    'time': 51223,
    'acc_x': -0.28,
    'acc_y': -0.34,
    'acc_z': -0.96,
    'gyro_x': 103.36,
    'gyro_y': -7.83,
    'gyro_z': -15.83,
    'heading': 10.15
  },
  {
    'time': 51259,
    'acc_x': -0.22,
    'acc_y': -0.41,
    'acc_z': -0.8,
    'gyro_x': 47.94,
    'gyro_y': 9.18,
    'gyro_z': -12.63,
    'heading': 10.68
  },
  {
    'time': 51294,
    'acc_x': -0.21,
    'acc_y': -0.39,
    'acc_z': -0.86,
    'gyro_x': 25.01,
    'gyro_y': -4.69,
    'gyro_z': -13.47,
    'heading': 12.84
  },
  {
    'time': 51328,
    'acc_x': -0.26,
    'acc_y': -0.37,
    'acc_z': -0.99,
    'gyro_x': -30.68,
    'gyro_y': 5.95,
    'gyro_z': -9.47,
    'heading': 13.03
  },
  {
    'time': 51363,
    'acc_x': -0.24,
    'acc_y': -0.23,
    'acc_z': -1.04,
    'gyro_x': -163.79,
    'gyro_y': 45.42,
    'gyro_z': -5.56,
    'heading': 14.28
  },
  {
    'time': 51398,
    'acc_x': -0.18,
    'acc_y': 0.05,
    'acc_z': -1.09,
    'gyro_x': -250.14,
    'gyro_y': 118.31,
    'gyro_z': 26.66,
    'heading': 13.66
  },
  {
    'time': 51433,
    'acc_x': -0.08,
    'acc_y': 0.06,
    'acc_z': -0.81,
    'gyro_x': -250.14,
    'gyro_y': 108.44,
    'gyro_z': 49.05,
    'heading': 9.75
  },
  {
    'time': 51469,
    'acc_x': -0.05,
    'acc_y': -0.19,
    'acc_z': -0.73,
    'gyro_x': -250.14,
    'gyro_y': 64.57,
    'gyro_z': 29.8,
    'heading': 359.3
  },
  {
    'time': 51503,
    'acc_x': -0.05,
    'acc_y': 0.71,
    'acc_z': -0.98,
    'gyro_x': 250.12,
    'gyro_y': -11.4,
    'gyro_z': -144.7,
    'heading': 349.28
  },
  {
    'time': 51538,
    'acc_x': -0.04,
    'acc_y': 0.09,
    'acc_z': -0.92,
    'gyro_x': 250.12,
    'gyro_y': -7.11,
    'gyro_z': -38.66,
    'heading': 349.2
  },
  {
    'time': 51573,
    'acc_x': 0.01,
    'acc_y': 0,
    'acc_z': -0.83,
    'gyro_x': 250.12,
    'gyro_y': -30.05,
    'gyro_z': -21.67,
    'heading': 356.56
  },
  {
    'time': 51608,
    'acc_x': -0.15,
    'acc_y': -0.04,
    'acc_z': -1.02,
    'gyro_x': 208.88,
    'gyro_y': -52.1,
    'gyro_z': -8.71,
    'heading': 5.17
  },
  {
    'time': 51643,
    'acc_x': -0.13,
    'acc_y': -0.04,
    'acc_z': -1.08,
    'gyro_x': 121.08,
    'gyro_y': -52.37,
    'gyro_z': 18.66,
    'heading': 7.84
  },
  {
    'time': 51678,
    'acc_x': -0.2,
    'acc_y': -0.2,
    'acc_z': -1.02,
    'gyro_x': 166.31,
    'gyro_y': -38.6,
    'gyro_z': 33.55,
    'heading': 9.04
  },
  {
    'time': 51713,
    'acc_x': -0.19,
    'acc_y': -0.19,
    'acc_z': -0.95,
    'gyro_x': 117.44,
    'gyro_y': -21.75,
    'gyro_z': 27.07,
    'heading': 11.83
  },
  {
    'time': 51748,
    'acc_x': -0.21,
    'acc_y': -0.34,
    'acc_z': -0.93,
    'gyro_x': 31.08,
    'gyro_y': -34.64,
    'gyro_z': 41.44,
    'heading': 12.74
  },
  {
    'time': 51783,
    'acc_x': -0.24,
    'acc_y': -0.39,
    'acc_z': -0.85,
    'gyro_x': 117.08,
    'gyro_y': -32.11,
    'gyro_z': 9.18,
    'heading': 10.78
  },
  {
    'time': 51818,
    'acc_x': -0.28,
    'acc_y': -0.48,
    'acc_z': -0.77,
    'gyro_x': 36.98,
    'gyro_y': -17.84,
    'gyro_z': -6.64,
    'heading': 9.83
  },
  {
    'time': 51852,
    'acc_x': -0.18,
    'acc_y': -0.37,
    'acc_z': -0.97,
    'gyro_x': -28.68,
    'gyro_y': -16.49,
    'gyro_z': 6.77,
    'heading': 11.97
  },
  {
    'time': 51888,
    'acc_x': -0.41,
    'acc_y': -0.53,
    'acc_z': -0.87,
    'gyro_x': 61.45,
    'gyro_y': -5.85,
    'gyro_z': 10.75,
    'heading': 10.49
  },
  {
    'time': 51923,
    'acc_x': -0.31,
    'acc_y': -0.48,
    'acc_z': -0.76,
    'gyro_x': 26.2,
    'gyro_y': 0.52,
    'gyro_z': -8.44,
    'heading': 8.32
  },
  {
    'time': 51958,
    'acc_x': -0.12,
    'acc_y': -0.29,
    'acc_z': -1.18,
    'gyro_x': -27.66,
    'gyro_y': -14.85,
    'gyro_z': -16.49,
    'heading': 8.04
  },
  {
    'time': 51993,
    'acc_x': -0.36,
    'acc_y': -0.52,
    'acc_z': -0.97,
    'gyro_x': 24.25,
    'gyro_y': 19.63,
    'gyro_z': -14.7,
    'heading': 8.31
  },
  {
    'time': 52028,
    'acc_x': -0.31,
    'acc_y': -0.46,
    'acc_z': -0.7,
    'gyro_x': -29.15,
    'gyro_y': 43.93,
    'gyro_z': -22.43,
    'heading': 8.32
  },
  {
    'time': 52062,
    'acc_x': -0.19,
    'acc_y': -0.4,
    'acc_z': -0.83,
    'gyro_x': -70.05,
    'gyro_y': 17.25,
    'gyro_z': -17.96,
    'heading': 9.93
  },
  {
    'time': 52097,
    'acc_x': -0.13,
    'acc_y': -0.38,
    'acc_z': -1.07,
    'gyro_x': -29.48,
    'gyro_y': -3.5,
    'gyro_z': -8.36,
    'heading': 9.68
  },
  {
    'time': 52132,
    'acc_x': -0.27,
    'acc_y': -0.39,
    'acc_z': -0.91,
    'gyro_x': -11.1,
    'gyro_y': 30.17,
    'gyro_z': -13.39,
    'heading': 8.17
  },
  {
    'time': 52167,
    'acc_x': -0.21,
    'acc_y': -0.37,
    'acc_z': -0.98,
    'gyro_x': 60.03,
    'gyro_y': 87.82,
    'gyro_z': -14.28,
    'heading': 8.4
  },
  {
    'time': 52203,
    'acc_x': -0.32,
    'acc_y': -0.53,
    'acc_z': -0.55,
    'gyro_x': 27.41,
    'gyro_y': 45.24,
    'gyro_z': 4.68,
    'heading': 9.23
  },
  {
    'time': 52238,
    'acc_x': -0.29,
    'acc_y': -0.47,
    'acc_z': -0.74,
    'gyro_x': 57.58,
    'gyro_y': -25.79,
    'gyro_z': -9.12,
    'heading': 9.94
  },
  {
    'time': 52272,
    'acc_x': -0.22,
    'acc_y': -0.46,
    'acc_z': -0.93,
    'gyro_x': -10.31,
    'gyro_y': -48.99,
    'gyro_z': -3.4,
    'heading': 9.76
  },
  {
    'time': 52307,
    'acc_x': -0.08,
    'acc_y': -0.33,
    'acc_z': -0.91,
    'gyro_x': 10.08,
    'gyro_y': -27.31,
    'gyro_z': -5.78,
    'heading': 11.06
  },
  {
    'time': 52342,
    'acc_x': 0.03,
    'acc_y': -0.41,
    'acc_z': -0.83,
    'gyro_x': -9.09,
    'gyro_y': -10.15,
    'gyro_z': -10.06,
    'heading': 10.78
  },
  {
    'time': 52377,
    'acc_x': -0.13,
    'acc_y': -0.42,
    'acc_z': -0.63,
    'gyro_x': -28.31,
    'gyro_y': -11.49,
    'gyro_z': -2.91,
    'heading': 11.9
  },
  {
    'time': 52412,
    'acc_x': -0.2,
    'acc_y': -0.45,
    'acc_z': -0.99,
    'gyro_x': -16.39,
    'gyro_y': -16.45,
    'gyro_z': 26.23,
    'heading': 10.49
  },
  {
    'time': 52447,
    'acc_x': -0.17,
    'acc_y': -0.48,
    'acc_z': -1.1,
    'gyro_x': -31.45,
    'gyro_y': 16.26,
    'gyro_z': 7.24,
    'heading': 8.52
  },
  {
    'time': 52482,
    'acc_x': -0.25,
    'acc_y': -0.5,
    'acc_z': -1.15,
    'gyro_x': -32.76,
    'gyro_y': 28.23,
    'gyro_z': -0.39,
    'heading': 8.51
  },
  {
    'time': 52517,
    'acc_x': -0.17,
    'acc_y': -0.39,
    'acc_z': -1.12,
    'gyro_x': -21.79,
    'gyro_y': 33.72,
    'gyro_z': -17.21,
    'heading': 7.86
  },
  {
    'time': 52552,
    'acc_x': -0.2,
    'acc_y': -0.41,
    'acc_z': -1.12,
    'gyro_x': -29.15,
    'gyro_y': 52.51,
    'gyro_z': -2.68,
    'heading': 8.06
  },
  {
    'time': 52587,
    'acc_x': -0.22,
    'acc_y': -0.44,
    'acc_z': -0.75,
    'gyro_x': 16.67,
    'gyro_y': 60.76,
    'gyro_z': -7.85,
    'heading': 8.85
  },
  {
    'time': 52622,
    'acc_x': -0.17,
    'acc_y': -0.32,
    'acc_z': -0.74,
    'gyro_x': 11.84,
    'gyro_y': -9.59,
    'gyro_z': -10.5,
    'heading': 8.79
  },
  {
    'time': 52657,
    'acc_x': -0.06,
    'acc_y': -0.37,
    'acc_z': -0.85,
    'gyro_x': -23.42,
    'gyro_y': -71.32,
    'gyro_z': -1.27,
    'heading': 10.13
  },
  {
    'time': 52692,
    'acc_x': -0.15,
    'acc_y': -0.49,
    'acc_z': -0.78,
    'gyro_x': -23.62,
    'gyro_y': -129.56,
    'gyro_z': -5.38,
    'heading': 9.53
  },
  {
    'time': 52727,
    'acc_x': -0.32,
    'acc_y': -0.26,
    'acc_z': -0.63,
    'gyro_x': 47.88,
    'gyro_y': -239.43,
    'gyro_z': -34.3,
    'heading': 9.59
  },
  {
    'time': 52762,
    'acc_x': -0.47,
    'acc_y': -0.3,
    'acc_z': -1.23,
    'gyro_x': 52.94,
    'gyro_y': -128.73,
    'gyro_z': -22.34,
    'heading': 10.8
  },
  {
    'time': 52796,
    'acc_x': -0.58,
    'acc_y': -0.46,
    'acc_z': -1.4,
    'gyro_x': 20.66,
    'gyro_y': 14.56,
    'gyro_z': 2.05,
    'heading': 11.39
  },
  {
    'time': 52832,
    'acc_x': -0.4,
    'acc_y': -0.57,
    'acc_z': -1.09,
    'gyro_x': 33.95,
    'gyro_y': 127.04,
    'gyro_z': -11.49,
    'heading': 10.49
  },
  {
    'time': 52867,
    'acc_x': 0.18,
    'acc_y': -0.01,
    'acc_z': -0.12,
    'gyro_x': -6.01,
    'gyro_y': 11.73,
    'gyro_z': 16.27,
    'heading': 11.18
  },
  {
    'time': 52902,
    'acc_x': -0.16,
    'acc_y': -0.37,
    'acc_z': -0.66,
    'gyro_x': -90.66,
    'gyro_y': 10.82,
    'gyro_z': 48.99,
    'heading': 13.72
  },
  {
    'time': 52937,
    'acc_x': -0.53,
    'acc_y': -0.71,
    'acc_z': -1.43,
    'gyro_x': -46.09,
    'gyro_y': 13.77,
    'gyro_z': 1.16,
    'heading': 10.88
  },
  {
    'time': 52972,
    'acc_x': -0.02,
    'acc_y': 0.31,
    'acc_z': -0.41,
    'gyro_x': -100.53,
    'gyro_y': 46.98,
    'gyro_z': -4.91,
    'heading': 9.59
  },
  {
    'time': 53006,
    'acc_x': -0.41,
    'acc_y': -0.3,
    'acc_z': -1.77,
    'gyro_x': -145.56,
    'gyro_y': 192.88,
    'gyro_z': 144.14,
    'heading': 10.32
  },
  {
    'time': 53041,
    'acc_x': -0.54,
    'acc_y': -0.77,
    'acc_z': -0.53,
    'gyro_x': 162.39,
    'gyro_y': 138.64,
    'gyro_z': -58.94,
    'heading': 9.38
  },
  {
    'time': 53077,
    'acc_x': 0.26,
    'acc_y': 0.34,
    'acc_z': -0.55,
    'gyro_x': -56.25,
    'gyro_y': -46.45,
    'gyro_z': -105.31,
    'heading': 8.47
  },
  {
    'time': 53112,
    'acc_x': 0.08,
    'acc_y': -0.18,
    'acc_z': -1.24,
    'gyro_x': -102.89,
    'gyro_y': -3.31,
    'gyro_z': 36.91,
    'heading': 10.84
  },
  {
    'time': 53146,
    'acc_x': -0.37,
    'acc_y': -0.51,
    'acc_z': -0.83,
    'gyro_x': 42.69,
    'gyro_y': -100.02,
    'gyro_z': -59.27,
    'heading': 8.39
  },
  {
    'time': 53181,
    'acc_x': 0.49,
    'acc_y': 0.8,
    'acc_z': -0.58,
    'gyro_x': -87.92,
    'gyro_y': -36.7,
    'gyro_z': 46.37,
    'heading': 8.3
  },
  {
    'time': 53216,
    'acc_x': -0.65,
    'acc_y': -0.6,
    'acc_z': -1.58,
    'gyro_x': -123.89,
    'gyro_y': 44.28,
    'gyro_z': 209.71,
    'heading': 9.9
  },
  {
    'time': 53251,
    'acc_x': -0.82,
    'acc_y': -0.7,
    'acc_z': -1.18,
    'gyro_x': 114.71,
    'gyro_y': -34.11,
    'gyro_z': -105.89,
    'heading': 4.08
  },
  {
    'time': 53287,
    'acc_x': 0.51,
    'acc_y': 1.13,
    'acc_z': -0.69,
    'gyro_x': -14.15,
    'gyro_y': -11.06,
    'gyro_z': -106.55,
    'heading': 5.51
  },
  {
    'time': 53321,
    'acc_x': 0.07,
    'acc_y': 0.03,
    'acc_z': -1.35,
    'gyro_x': -105.27,
    'gyro_y': 65.43,
    'gyro_z': 181.25,
    'heading': 8.42
  },
  {
    'time': 53356,
    'acc_x': -0.69,
    'acc_y': -0.9,
    'acc_z': -0.73,
    'gyro_x': 161.47,
    'gyro_y': -39.95,
    'gyro_z': -43.71,
    'heading': 6.05
  },
  {
    'time': 53391,
    'acc_x': -0.21,
    'acc_y': 0.28,
    'acc_z': -1.27,
    'gyro_x': 104.37,
    'gyro_y': -156.78,
    'gyro_z': -190.26,
    'heading': 3.36
  },
  {
    'time': 53426,
    'acc_x': 0.28,
    'acc_y': 0.32,
    'acc_z': -1.12,
    'gyro_x': -121.44,
    'gyro_y': 40.98,
    'gyro_z': 108.73,
    'heading': 8.26
  },
  {
    'time': 53461,
    'acc_x': -0.75,
    'acc_y': -0.95,
    'acc_z': -1.29,
    'gyro_x': 18.46,
    'gyro_y': 73.7,
    'gyro_z': 60.69,
    'heading': 7.77
  },
  {
    'time': 53496,
    'acc_x': -0.57,
    'acc_y': -0.51,
    'acc_z': -0.79,
    'gyro_x': 33.51,
    'gyro_y': -20.5,
    'gyro_z': -152.67,
    'heading': 5.06
  },
  {
    'time': 53531,
    'acc_x': 0.45,
    'acc_y': 0.48,
    'acc_z': -0.46,
    'gyro_x': -156.07,
    'gyro_y': 37.28,
    'gyro_z': 2.13,
    'heading': 6.91
  },
  {
    'time': 53566,
    'acc_x': -0.31,
    'acc_y': -0.43,
    'acc_z': -1.02,
    'gyro_x': -73.48,
    'gyro_y': 46.52,
    'gyro_z': 74.14,
    'heading': 9.86
  },
  {
    'time': 53601,
    'acc_x': -0.3,
    'acc_y': -0.18,
    'acc_z': -0.95,
    'gyro_x': 3.06,
    'gyro_y': -35.72,
    'gyro_z': -86.8,
    'heading': 7.19
  },
  {
    'time': 53636,
    'acc_x': 0.24,
    'acc_y': 0.4,
    'acc_z': -0.68,
    'gyro_x': -71,
    'gyro_y': -16.72,
    'gyro_z': -22.89,
    'heading': 7.69
  },
  {
    'time': 53671,
    'acc_x': -0.26,
    'acc_y': -0.21,
    'acc_z': -1.14,
    'gyro_x': -44.75,
    'gyro_y': 10.34,
    'gyro_z': 59.39,
    'heading': 7.71
  },
  {
    'time': 53706,
    'acc_x': -0.41,
    'acc_y': -0.28,
    'acc_z': -0.98,
    'gyro_x': 15.44,
    'gyro_y': -39.64,
    'gyro_z': -89.11,
    'heading': 6.1
  },
  {
    'time': 53741,
    'acc_x': 0.14,
    'acc_y': 0.54,
    'acc_z': -0.9,
    'gyro_x': 10.07,
    'gyro_y': -58.52,
    'gyro_z': -62.02,
    'heading': 6.05
  },
  {
    'time': 53776,
    'acc_x': -0.19,
    'acc_y': 0.02,
    'acc_z': -1.23,
    'gyro_x': 7.04,
    'gyro_y': 8.29,
    'gyro_z': 79.17,
    'heading': 8.21
  },
  {
    'time': 53810,
    'acc_x': -0.4,
    'acc_y': -0.3,
    'acc_z': -0.82,
    'gyro_x': 55.11,
    'gyro_y': 23.27,
    'gyro_z': 44.29,
    'heading': 7.8
  },
  {
    'time': 53845,
    'acc_x': -0.32,
    'acc_y': -0.2,
    'acc_z': -1.02,
    'gyro_x': 115.98,
    'gyro_y': -59.22,
    'gyro_z': -61.08,
    'heading': 6.65
  },
  {
    'time': 53881,
    'acc_x': -0.04,
    'acc_y': 0.08,
    'acc_z': -0.95,
    'gyro_x': 44.23,
    'gyro_y': -29.96,
    'gyro_z': 7.02,
    'heading': 7.74
  },
  {
    'time': 53916,
    'acc_x': -0.39,
    'acc_y': -0.33,
    'acc_z': -1.12,
    'gyro_x': 7.89,
    'gyro_y': 28.3,
    'gyro_z': 42.45,
    'heading': 8.83
  },
  {
    'time': 53951,
    'acc_x': -0.31,
    'acc_y': -0.28,
    'acc_z': -0.88,
    'gyro_x': 49.66,
    'gyro_y': -17.54,
    'gyro_z': -36.15,
    'heading': 7.96
  },
  {
    'time': 53986,
    'acc_x': 0.01,
    'acc_y': 0.06,
    'acc_z': -0.73,
    'gyro_x': 12.26,
    'gyro_y': -26.35,
    'gyro_z': -17.52,
    'heading': 7.54
  },
  {
    'time': 54020,
    'acc_x': -0.31,
    'acc_y': -0.24,
    'acc_z': -1.02,
    'gyro_x': -9.16,
    'gyro_y': -19.5,
    'gyro_z': 22.12,
    'heading': 10.49
  },
  {
    'time': 54055,
    'acc_x': -0.36,
    'acc_y': -0.28,
    'acc_z': -1.02,
    'gyro_x': -12.73,
    'gyro_y': -13.7,
    'gyro_z': 2.48,
    'heading': 8.13
  },
  {
    'time': 54090,
    'acc_x': -0.29,
    'acc_y': -0.15,
    'acc_z': -1.1,
    'gyro_x': -11.18,
    'gyro_y': -7.63,
    'gyro_z': -16.31,
    'heading': 8.58
  },
  {
    'time': 54125,
    'acc_x': -0.27,
    'acc_y': -0.17,
    'acc_z': -1.01,
    'gyro_x': -31.47,
    'gyro_y': 12.73,
    'gyro_z': -16.44,
    'heading': 7.86
  },
  {
    'time': 54160,
    'acc_x': -0.21,
    'acc_y': -0.1,
    'acc_z': -0.96,
    'gyro_x': -56.47,
    'gyro_y': 19.44,
    'gyro_z': -15.16,
    'heading': 9.48
  },
  {
    'time': 54195,
    'acc_x': -0.12,
    'acc_y': -0.11,
    'acc_z': -0.87,
    'gyro_x': -80.68,
    'gyro_y': 29.25,
    'gyro_z': 2.91,
    'heading': 8.05
  },
  {
    'time': 54230,
    'acc_x': -0.23,
    'acc_y': -0.16,
    'acc_z': -0.86,
    'gyro_x': -13.36,
    'gyro_y': 4.98,
    'gyro_z': -12.62,
    'heading': 8.58
  },
  {
    'time': 54265,
    'acc_x': -0.15,
    'acc_y': 0.02,
    'acc_z': -0.86,
    'gyro_x': -30.3,
    'gyro_y': -10.16,
    'gyro_z': -7.85,
    'heading': 7.04
  },
  {
    'time': 54300,
    'acc_x': -0.27,
    'acc_y': -0.09,
    'acc_z': -1.09,
    'gyro_x': 1.53,
    'gyro_y': -8.42,
    'gyro_z': 9.11,
    'heading': 10.09
  },
  {
    'time': 54335,
    'acc_x': -0.36,
    'acc_y': -0.11,
    'acc_z': -1,
    'gyro_x': 87.16,
    'gyro_y': -59.95,
    'gyro_z': -33.7,
    'heading': 6.37
  },
  {
    'time': 54370,
    'acc_x': -0.25,
    'acc_y': -0.12,
    'acc_z': -0.87,
    'gyro_x': 75.61,
    'gyro_y': -46.46,
    'gyro_z': -36.95,
    'heading': 8.34
  },
  {
    'time': 54405,
    'acc_x': -0.33,
    'acc_y': -0.17,
    'acc_z': -1.01,
    'gyro_x': 109.37,
    'gyro_y': -41.35,
    'gyro_z': -8.03,
    'heading': 8.73
  },
  {
    'time': 54440,
    'acc_x': -0.32,
    'acc_y': -0.2,
    'acc_z': -0.92,
    'gyro_x': 60.39,
    'gyro_y': -2.76,
    'gyro_z': -3.66,
    'heading': 10.43
  },
  {
    'time': 54475,
    'acc_x': -0.29,
    'acc_y': -0.28,
    'acc_z': -0.82,
    'gyro_x': 113.64,
    'gyro_y': -40.17,
    'gyro_z': -3.58,
    'heading': 10.25
  },
  {
    'time': 54510,
    'acc_x': -0.43,
    'acc_y': -0.41,
    'acc_z': -0.85,
    'gyro_x': 110.53,
    'gyro_y': -93.11,
    'gyro_z': -12.6,
    'heading': 13.45
  },
  {
    'time': 54545,
    'acc_x': -0.43,
    'acc_y': -0.4,
    'acc_z': -0.87,
    'gyro_x': 67.81,
    'gyro_y': -94.82,
    'gyro_z': -15.33,
    'heading': 13.49
  },
  {
    'time': 54580,
    'acc_x': -0.52,
    'acc_y': -0.45,
    'acc_z': -0.78,
    'gyro_x': 42.93,
    'gyro_y': -57.28,
    'gyro_z': -8.19,
    'heading': 13.08
  },
  {
    'time': 54614,
    'acc_x': -0.49,
    'acc_y': -0.48,
    'acc_z': -0.88,
    'gyro_x': 78.32,
    'gyro_y': -55.36,
    'gyro_z': -13.58,
    'heading': 12.01
  },
  {
    'time': 54650,
    'acc_x': -0.43,
    'acc_y': -0.51,
    'acc_z': -0.86,
    'gyro_x': 30.14,
    'gyro_y': 2.25,
    'gyro_z': -3.07,
    'heading': 11.73
  },
  {
    'time': 54685,
    'acc_x': -0.48,
    'acc_y': -0.54,
    'acc_z': -0.91,
    'gyro_x': 47.11,
    'gyro_y': 42.07,
    'gyro_z': 10.47,
    'heading': 12.34
  },
  {
    'time': 54720,
    'acc_x': -0.42,
    'acc_y': -0.51,
    'acc_z': -0.72,
    'gyro_x': -23.34,
    'gyro_y': 60.99,
    'gyro_z': -4.8,
    'heading': 12.66
  },
  {
    'time': 54754,
    'acc_x': -0.32,
    'acc_y': -0.43,
    'acc_z': -0.5,
    'gyro_x': -93.76,
    'gyro_y': 41.24,
    'gyro_z': -14.97,
    'heading': 12.75
  },
  {
    'time': 54789,
    'acc_x': -0.4,
    'acc_y': -0.45,
    'acc_z': -1,
    'gyro_x': -214.29,
    'gyro_y': -9.99,
    'gyro_z': -17.51,
    'heading': 13.94
  },
  {
    'time': 54824,
    'acc_x': -0.48,
    'acc_y': -0.25,
    'acc_z': -1.09,
    'gyro_x': -250.14,
    'gyro_y': 127.15,
    'gyro_z': 23.46,
    'heading': 13.19
  },
  {
    'time': 54860,
    'acc_x': -0.17,
    'acc_y': -0.4,
    'acc_z': -0.56,
    'gyro_x': -250.14,
    'gyro_y': 111.6,
    'gyro_z': -17.15,
    'heading': 12.84
  },
  {
    'time': 54894,
    'acc_x': -0.4,
    'acc_y': 0.06,
    'acc_z': -1.09,
    'gyro_x': -3.41,
    'gyro_y': -65.98,
    'gyro_z': -84.54,
    'heading': 10.63
  },
  {
    'time': 54929,
    'acc_x': -0.29,
    'acc_y': 0.23,
    'acc_z': -1.04,
    'gyro_x': -60.57,
    'gyro_y': -3.05,
    'gyro_z': -37.02,
    'heading': 10.49
  },
  {
    'time': 54964,
    'acc_x': -0.28,
    'acc_y': 0.19,
    'acc_z': -1.02,
    'gyro_x': -110.18,
    'gyro_y': 63.72,
    'gyro_z': 38.82,
    'heading': 10.09
  },
  {
    'time': 55000,
    'acc_x': -0.26,
    'acc_y': -0.03,
    'acc_z': -0.82,
    'gyro_x': -72.18,
    'gyro_y': 52.85,
    'gyro_z': 64.51,
    'heading': 9.08
  },
  {
    'time': 55035,
    'acc_x': -0.31,
    'acc_y': -0.2,
    'acc_z': -0.66,
    'gyro_x': 59.5,
    'gyro_y': -45.24,
    'gyro_z': -12.4,
    'heading': 7.31
  },
  {
    'time': 55069,
    'acc_x': -0.29,
    'acc_y': 0.15,
    'acc_z': -1.02,
    'gyro_x': 96.53,
    'gyro_y': -67.04,
    'gyro_z': -65.8,
    'heading': 5.37
  },
  {
    'time': 55104,
    'acc_x': -0.29,
    'acc_y': 0.21,
    'acc_z': -1.06,
    'gyro_x': -10.42,
    'gyro_y': -0.03,
    'gyro_z': -10.05,
    'heading': 8.21
  },
  {
    'time': 55139,
    'acc_x': -0.33,
    'acc_y': 0.09,
    'acc_z': -1.03,
    'gyro_x': -15.08,
    'gyro_y': 12.79,
    'gyro_z': 32.79,
    'heading': 9.91
  },
  {
    'time': 55174,
    'acc_x': -0.31,
    'acc_y': 0.09,
    'acc_z': -0.92,
    'gyro_x': 83.91,
    'gyro_y': -61.73,
    'gyro_z': -28.53,
    'heading': 9.98
  },
  {
    'time': 55209,
    'acc_x': -0.33,
    'acc_y': 0.06,
    'acc_z': -1,
    'gyro_x': 36.69,
    'gyro_y': -33.15,
    'gyro_z': -31.24,
    'heading': 9.08
  },
  {
    'time': 55244,
    'acc_x': -0.42,
    'acc_y': 0.07,
    'acc_z': -1.14,
    'gyro_x': 85.36,
    'gyro_y': -1.49,
    'gyro_z': 28.36,
    'heading': 10.75
  },
  {
    'time': 55279,
    'acc_x': -0.25,
    'acc_y': 0.02,
    'acc_z': -0.88,
    'gyro_x': 30.71,
    'gyro_y': 12.83,
    'gyro_z': 22.95,
    'heading': 10.19
  },
  {
    'time': 55314,
    'acc_x': -0.39,
    'acc_y': -0.1,
    'acc_z': -0.99,
    'gyro_x': 103.47,
    'gyro_y': -35.75,
    'gyro_z': -9.75,
    'heading': 11.5
  },
  {
    'time': 55349,
    'acc_x': -0.35,
    'acc_y': -0.13,
    'acc_z': -0.97,
    'gyro_x': 179.04,
    'gyro_y': -19.27,
    'gyro_z': -4.18,
    'heading': 12.07
  },
  {
    'time': 55384,
    'acc_x': -0.33,
    'acc_y': -0.21,
    'acc_z': -0.83,
    'gyro_x': 127.31,
    'gyro_y': -2.14,
    'gyro_z': 9.27,
    'heading': 13
  },
  {
    'time': 55419,
    'acc_x': -0.32,
    'acc_y': -0.31,
    'acc_z': -0.81,
    'gyro_x': 105.55,
    'gyro_y': -13.24,
    'gyro_z': 3.48,
    'heading': 14.75
  },
  {
    'time': 55454,
    'acc_x': -0.41,
    'acc_y': -0.37,
    'acc_z': -0.92,
    'gyro_x': 250.12,
    'gyro_y': -70.54,
    'gyro_z': 11.43,
    'heading': 13.14
  },
  {
    'time': 55489,
    'acc_x': -0.43,
    'acc_y': -0.52,
    'acc_z': -0.83,
    'gyro_x': 154.76,
    'gyro_y': -31.55,
    'gyro_z': 15.8,
    'heading': 15.4
  },
  {
    'time': 55524,
    'acc_x': -0.39,
    'acc_y': -0.52,
    'acc_z': -0.74,
    'gyro_x': 14.42,
    'gyro_y': 4.74,
    'gyro_z': 4.84,
    'heading': 14.91
  },
  {
    'time': 55559,
    'acc_x': -0.4,
    'acc_y': -0.51,
    'acc_z': -0.83,
    'gyro_x': -129.71,
    'gyro_y': 11.21,
    'gyro_z': 5.88,
    'heading': 15.38
  },
  {
    'time': 55594,
    'acc_x': -0.41,
    'acc_y': -0.25,
    'acc_z': -1.07,
    'gyro_x': -250.14,
    'gyro_y': 85.6,
    'gyro_z': 13.08,
    'heading': 13.94
  },
  {
    'time': 55628,
    'acc_x': -0.41,
    'acc_y': -0.21,
    'acc_z': -0.92,
    'gyro_x': -250.14,
    'gyro_y': 83.11,
    'gyro_z': 50.07,
    'heading': 13.08
  },
  {
    'time': 55663,
    'acc_x': -0.37,
    'acc_y': -0.13,
    'acc_z': -0.88,
    'gyro_x': -250.14,
    'gyro_y': 40.58,
    'gyro_z': 6.51,
    'heading': 11.07
  },
  {
    'time': 55699,
    'acc_x': -0.33,
    'acc_y': 0.15,
    'acc_z': -0.87,
    'gyro_x': 67.38,
    'gyro_y': -2.92,
    'gyro_z': -31.05,
    'heading': 8.38
  },
  {
    'time': 55734,
    'acc_x': -0.33,
    'acc_y': 0.07,
    'acc_z': -1.01,
    'gyro_x': 147.27,
    'gyro_y': -19.45,
    'gyro_z': 1.06,
    'heading': 6.28
  },
  {
    'time': 55769,
    'acc_x': -0.35,
    'acc_y': -0.02,
    'acc_z': -0.96,
    'gyro_x': 135.47,
    'gyro_y': -17.84,
    'gyro_z': -4.07,
    'heading': 7.53
  },
  {
    'time': 55803,
    'acc_x': -0.27,
    'acc_y': -0.03,
    'acc_z': -0.94,
    'gyro_x': 112.89,
    'gyro_y': -16.71,
    'gyro_z': -5.34,
    'heading': 9.6
  },
  {
    'time': 55838,
    'acc_x': -0.3,
    'acc_y': -0.09,
    'acc_z': -0.93,
    'gyro_x': 65.3,
    'gyro_y': -30.92,
    'gyro_z': -11.44,
    'heading': 10.96
  },
  {
    'time': 55873,
    'acc_x': -0.38,
    'acc_y': -0.12,
    'acc_z': -1.01,
    'gyro_x': 8.07,
    'gyro_y': -14.12,
    'gyro_z': 3.52,
    'heading': 12.79
  },
  {
    'time': 55908,
    'acc_x': -0.38,
    'acc_y': -0.21,
    'acc_z': -0.89,
    'gyro_x': -56.69,
    'gyro_y': 19.06,
    'gyro_z': 16.29,
    'heading': 11.1
  },
  {
    'time': 55944,
    'acc_x': -0.45,
    'acc_y': -0.18,
    'acc_z': -1.03,
    'gyro_x': 201.21,
    'gyro_y': -14.63,
    'gyro_z': 6.4,
    'heading': 11.89
  },
  {
    'time': 55978,
    'acc_x': -0.39,
    'acc_y': -0.26,
    'acc_z': -0.88,
    'gyro_x': 250.13,
    'gyro_y': 6.4,
    'gyro_z': 25.4,
    'heading': 11.36
  },
  {
    'time': 56013,
    'acc_x': -0.19,
    'acc_y': -0.32,
    'acc_z': -0.64,
    'gyro_x': 82.4,
    'gyro_y': -7.17,
    'gyro_z': 16.37,
    'heading': 11.99
  },
  {
    'time': 56048,
    'acc_x': -0.42,
    'acc_y': -0.48,
    'acc_z': -0.87,
    'gyro_x': -51.63,
    'gyro_y': -46.94,
    'gyro_z': 9.28,
    'heading': 13.65
  },
  {
    'time': 56083,
    'acc_x': -0.53,
    'acc_y': -0.35,
    'acc_z': -0.76,
    'gyro_x': -81.5,
    'gyro_y': 7.03,
    'gyro_z': -4.95,
    'heading': 13.49
  },
  {
    'time': 56118,
    'acc_x': -0.44,
    'acc_y': -0.39,
    'acc_z': -0.9,
    'gyro_x': 200.03,
    'gyro_y': -5.98,
    'gyro_z': 3.16,
    'heading': 14.28
  },
  {
    'time': 56153,
    'acc_x': -0.36,
    'acc_y': -0.47,
    'acc_z': -0.86,
    'gyro_x': 48.84,
    'gyro_y': 20.89,
    'gyro_z': -0.3,
    'heading': 11.34
  },
  {
    'time': 56188,
    'acc_x': -0.38,
    'acc_y': -0.46,
    'acc_z': -0.77,
    'gyro_x': -84.57,
    'gyro_y': -35.21,
    'gyro_z': 8.63,
    'heading': 12.46
  },
  {
    'time': 56223,
    'acc_x': -0.48,
    'acc_y': -0.41,
    'acc_z': -0.89,
    'gyro_x': -128.65,
    'gyro_y': 7.53,
    'gyro_z': -12.78,
    'heading': 12.98
  },
  {
    'time': 56258,
    'acc_x': -0.46,
    'acc_y': -0.35,
    'acc_z': -0.95,
    'gyro_x': -28.35,
    'gyro_y': 21.44,
    'gyro_z': -1.78,
    'heading': 12.26
  },
  {
    'time': 56293,
    'acc_x': -0.25,
    'acc_y': -0.25,
    'acc_z': -0.91,
    'gyro_x': -111.41,
    'gyro_y': 42.83,
    'gyro_z': -4.75,
    'heading': 12.3
  },
  {
    'time': 56328,
    'acc_x': -0.34,
    'acc_y': -0.17,
    'acc_z': -1,
    'gyro_x': -250.14,
    'gyro_y': 48.77,
    'gyro_z': 7.69,
    'heading': 12.94
  },
  {
    'time': 56363,
    'acc_x': -0.39,
    'acc_y': -0.35,
    'acc_z': -0.87,
    'gyro_x': -250.14,
    'gyro_y': 52.91,
    'gyro_z': 12.98,
    'heading': 12.46
  },
  {
    'time': 56397,
    'acc_x': -0.39,
    'acc_y': 0.04,
    'acc_z': -1.07,
    'gyro_x': 147.86,
    'gyro_y': -41.63,
    'gyro_z': -35.63,
    'heading': 8.98
  },
  {
    'time': 56433,
    'acc_x': -0.33,
    'acc_y': -0.07,
    'acc_z': -1.06,
    'gyro_x': 139.76,
    'gyro_y': -10.01,
    'gyro_z': -6.44,
    'heading': 9.59
  },
  {
    'time': 56468,
    'acc_x': -0.36,
    'acc_y': -0.19,
    'acc_z': -1,
    'gyro_x': 124.59,
    'gyro_y': 3.28,
    'gyro_z': 3.19,
    'heading': 10.66
  },
  {
    'time': 56503,
    'acc_x': -0.28,
    'acc_y': -0.24,
    'acc_z': -0.94,
    'gyro_x': 136.84,
    'gyro_y': -2.47,
    'gyro_z': 8.15,
    'heading': 11.1
  },
  {
    'time': 56538,
    'acc_x': -0.27,
    'acc_y': -0.26,
    'acc_z': -0.93,
    'gyro_x': 137.05,
    'gyro_y': -8.12,
    'gyro_z': 7.47,
    'heading': 12.9
  },
  {
    'time': 56573,
    'acc_x': -0.35,
    'acc_y': -0.42,
    'acc_z': -0.97,
    'gyro_x': 121.21,
    'gyro_y': -3.04,
    'gyro_z': 11.98,
    'heading': 12.59
  },
  {
    'time': 56607,
    'acc_x': -0.34,
    'acc_y': -0.44,
    'acc_z': -0.83,
    'gyro_x': 39.45,
    'gyro_y': 16.98,
    'gyro_z': 8.7,
    'heading': 13.72
  },
  {
    'time': 56642,
    'acc_x': -0.37,
    'acc_y': -0.45,
    'acc_z': -0.86,
    'gyro_x': -8.53,
    'gyro_y': 17.35,
    'gyro_z': 6.53,
    'heading': 14.6
  },
  {
    'time': 56677,
    'acc_x': -0.43,
    'acc_y': -0.41,
    'acc_z': -0.81,
    'gyro_x': -102,
    'gyro_y': 27.45,
    'gyro_z': -2.97,
    'heading': 13.18
  },
  {
    'time': 56712,
    'acc_x': -0.49,
    'acc_y': -0.31,
    'acc_z': -0.82,
    'gyro_x': -95.89,
    'gyro_y': 18.07,
    'gyro_z': -9.95,
    'heading': 13.97
  },
  {
    'time': 56747,
    'acc_x': -0.22,
    'acc_y': -0.31,
    'acc_z': -0.83,
    'gyro_x': -11.6,
    'gyro_y': 23.85,
    'gyro_z': -16.58,
    'heading': 14.58
  },
  {
    'time': 56782,
    'acc_x': -0.11,
    'acc_y': -0.27,
    'acc_z': -0.73,
    'gyro_x': -67.19,
    'gyro_y': 36.62,
    'gyro_z': -0.79,
    'heading': 13.48
  },
  {
    'time': 56818,
    'acc_x': -0.26,
    'acc_y': -0.3,
    'acc_z': -0.77,
    'gyro_x': -43.32,
    'gyro_y': -19.01,
    'gyro_z': 3.79,
    'heading': 13.04
  },
  {
    'time': 56853,
    'acc_x': -0.41,
    'acc_y': -0.22,
    'acc_z': -1.23,
    'gyro_x': 23.55,
    'gyro_y': -41.66,
    'gyro_z': -19.59,
    'heading': 12.7
  },
  {
    'time': 56887,
    'acc_x': -0.35,
    'acc_y': -0.22,
    'acc_z': -1.17,
    'gyro_x': -32.96,
    'gyro_y': 26.85,
    'gyro_z': -1.86,
    'heading': 13.44
  },
  {
    'time': 56922,
    'acc_x': -0.1,
    'acc_y': -0.2,
    'acc_z': -0.92,
    'gyro_x': -48.11,
    'gyro_y': 47.76,
    'gyro_z': -1.97,
    'heading': 14.07
  },
  {
    'time': 56957,
    'acc_x': -0.25,
    'acc_y': -0.28,
    'acc_z': -0.7,
    'gyro_x': -59.35,
    'gyro_y': 5.8,
    'gyro_z': -7.68,
    'heading': 13.12
  },
  {
    'time': 56992,
    'acc_x': -0.25,
    'acc_y': -0.23,
    'acc_z': -0.81,
    'gyro_x': 24.9,
    'gyro_y': -4.15,
    'gyro_z': 13.76,
    'heading': 13.77
  },
  {
    'time': 57027,
    'acc_x': -0.38,
    'acc_y': -0.34,
    'acc_z': -0.99,
    'gyro_x': 22.85,
    'gyro_y': 19.44,
    'gyro_z': 23.4,
    'heading': 12.73
  },
  {
    'time': 57062,
    'acc_x': -0.23,
    'acc_y': -0.27,
    'acc_z': -0.85,
    'gyro_x': -12.31,
    'gyro_y': -10.74,
    'gyro_z': -22.77,
    'heading': 12.33
  },
  {
    'time': 57097,
    'acc_x': -0.2,
    'acc_y': -0.13,
    'acc_z': -1.07,
    'gyro_x': 10.57,
    'gyro_y': -19.76,
    'gyro_z': -28.06,
    'heading': 12.34
  },
  {
    'time': 57132,
    'acc_x': -0.28,
    'acc_y': -0.27,
    'acc_z': -0.99,
    'gyro_x': 6.72,
    'gyro_y': 20.61,
    'gyro_z': 21.05,
    'heading': 13.11
  },
  {
    'time': 57167,
    'acc_x': -0.19,
    'acc_y': -0.24,
    'acc_z': -0.99,
    'gyro_x': -15.21,
    'gyro_y': 35.56,
    'gyro_z': 8.68,
    'heading': 14.26
  },
  {
    'time': 57202,
    'acc_x': -0.17,
    'acc_y': -0.19,
    'acc_z': -0.8,
    'gyro_x': 12.67,
    'gyro_y': -43.41,
    'gyro_z': -20.83,
    'heading': 12.46
  },
  {
    'time': 57237,
    'acc_x': -0.19,
    'acc_y': -0.24,
    'acc_z': -0.9,
    'gyro_x': 30.08,
    'gyro_y': -17.48,
    'gyro_z': 33.44,
    'heading': 13.61
  },
  {
    'time': 57272,
    'acc_x': -0.45,
    'acc_y': -0.52,
    'acc_z': -0.94,
    'gyro_x': 10.35,
    'gyro_y': -3.05,
    'gyro_z': 34.49,
    'heading': 14.63
  },
  {
    'time': 57307,
    'acc_x': -0.35,
    'acc_y': -0.33,
    'acc_z': -1.08,
    'gyro_x': 14.31,
    'gyro_y': -16.37,
    'gyro_z': -15.44,
    'heading': 14.82
  },
  {
    'time': 57342,
    'acc_x': -0.29,
    'acc_y': -0.15,
    'acc_z': -1.12,
    'gyro_x': 42.25,
    'gyro_y': -15.73,
    'gyro_z': -17.98,
    'heading': 14.36
  },
  {
    'time': 57376,
    'acc_x': -0.28,
    'acc_y': -0.29,
    'acc_z': -0.99,
    'gyro_x': 8.12,
    'gyro_y': 25.4,
    'gyro_z': -4.22,
    'heading': 14.53
  },
  {
    'time': 57412,
    'acc_x': -0.2,
    'acc_y': -0.3,
    'acc_z': -0.84,
    'gyro_x': -8.49,
    'gyro_y': 24.19,
    'gyro_z': -8.64,
    'heading': 14.5
  },
  {
    'time': 57447,
    'acc_x': -0.18,
    'acc_y': -0.28,
    'acc_z': -0.85,
    'gyro_x': -12.11,
    'gyro_y': 5.21,
    'gyro_z': -3.79,
    'heading': 14.99
  },
  {
    'time': 57482,
    'acc_x': -0.26,
    'acc_y': -0.31,
    'acc_z': -1,
    'gyro_x': -10.5,
    'gyro_y': 4.73,
    'gyro_z': 2.73,
    'heading': 15.72
  },
  {
    'time': 57517,
    'acc_x': -0.27,
    'acc_y': -0.28,
    'acc_z': -0.99,
    'gyro_x': -6.53,
    'gyro_y': 9.53,
    'gyro_z': 0,
    'heading': 15.73
  },
  {
    'time': 57552,
    'acc_x': -0.28,
    'acc_y': -0.27,
    'acc_z': -1.02,
    'gyro_x': -3.61,
    'gyro_y': 12.32,
    'gyro_z': 2.66,
    'heading': 15.76
  },
  {
    'time': 57587,
    'acc_x': -0.23,
    'acc_y': -0.3,
    'acc_z': -0.96,
    'gyro_x': -1.4,
    'gyro_y': 19.47,
    'gyro_z': 2.34,
    'heading': 15.18
  },
  {
    'time': 57622,
    'acc_x': -0.17,
    'acc_y': -0.31,
    'acc_z': -0.87,
    'gyro_x': 7.24,
    'gyro_y': 13.71,
    'gyro_z': 1.43,
    'heading': 16.1
  },
  {
    'time': 57657,
    'acc_x': -0.23,
    'acc_y': -0.3,
    'acc_z': -1,
    'gyro_x': 11.73,
    'gyro_y': 6.79,
    'gyro_z': 2.5,
    'heading': 16.41
  },
  {
    'time': 57692,
    'acc_x': -0.19,
    'acc_y': -0.29,
    'acc_z': -0.95,
    'gyro_x': 3.54,
    'gyro_y': 18.79,
    'gyro_z': -0.64,
    'heading': 15.61
  },
  {
    'time': 57726,
    'acc_x': -0.13,
    'acc_y': -0.24,
    'acc_z': -0.91,
    'gyro_x': -2.37,
    'gyro_y': 12.85,
    'gyro_z': 1.11,
    'heading': 15.46
  },
  {
    'time': 57761,
    'acc_x': -0.17,
    'acc_y': -0.3,
    'acc_z': -1.02,
    'gyro_x': -11.25,
    'gyro_y': 14.27,
    'gyro_z': 6.98,
    'heading': 15.83
  },
  {
    'time': 57796,
    'acc_x': -0.17,
    'acc_y': -0.33,
    'acc_z': -0.94,
    'gyro_x': -9.69,
    'gyro_y': 23.86,
    'gyro_z': 6.16,
    'heading': 16.8
  },
  {
    'time': 57831,
    'acc_x': -0.18,
    'acc_y': -0.34,
    'acc_z': -0.91,
    'gyro_x': -7.24,
    'gyro_y': 15.63,
    'gyro_z': 6.11,
    'heading': 15.91
  },
  {
    'time': 57866,
    'acc_x': -0.22,
    'acc_y': -0.36,
    'acc_z': -0.92,
    'gyro_x': -15.24,
    'gyro_y': 18.61,
    'gyro_z': 5.47,
    'heading': 15.79
  },
  {
    'time': 57901,
    'acc_x': -0.13,
    'acc_y': -0.31,
    'acc_z': -0.87,
    'gyro_x': -1.64,
    'gyro_y': 19.12,
    'gyro_z': 0.84,
    'heading': 15.89
  },
  {
    'time': 57936,
    'acc_x': -0.09,
    'acc_y': -0.28,
    'acc_z': -0.84,
    'gyro_x': 0.19,
    'gyro_y': 4.4,
    'gyro_z': 2.11,
    'heading': 15.42
  },
  {
    'time': 57971,
    'acc_x': -0.15,
    'acc_y': -0.29,
    'acc_z': -1,
    'gyro_x': -0.37,
    'gyro_y': -4.72,
    'gyro_z': 0.84,
    'heading': 16.71
  },
  {
    'time': 58006,
    'acc_x': -0.12,
    'acc_y': -0.26,
    'acc_z': -0.94,
    'gyro_x': -2.15,
    'gyro_y': 2.37,
    'gyro_z': 1.44,
    'heading': 16.18
  },
  {
    'time': 58041,
    'acc_x': -0.12,
    'acc_y': -0.26,
    'acc_z': -1,
    'gyro_x': -7.7,
    'gyro_y': 0.53,
    'gyro_z': 2.29,
    'heading': 16.28
  },
  {
    'time': 58076,
    'acc_x': -0.13,
    'acc_y': -0.28,
    'acc_z': -0.97,
    'gyro_x': -2.53,
    'gyro_y': -1.85,
    'gyro_z': 0.54,
    'heading': 15.93
  },
  {
    'time': 58111,
    'acc_x': -0.14,
    'acc_y': -0.3,
    'acc_z': -0.94,
    'gyro_x': -2.95,
    'gyro_y': 1.81,
    'gyro_z': -1,
    'heading': 16.8
  },
  {
    'time': 58146,
    'acc_x': -0.15,
    'acc_y': -0.32,
    'acc_z': -0.96,
    'gyro_x': -2.93,
    'gyro_y': -0.54,
    'gyro_z': -1.76,
    'heading': 16.38
  },
  {
    'time': 58181,
    'acc_x': -0.1,
    'acc_y': -0.28,
    'acc_z': -0.92,
    'gyro_x': 2.49,
    'gyro_y': -2.19,
    'gyro_z': -3.6,
    'heading': 15.3
  },
  {
    'time': 58216,
    'acc_x': -0.14,
    'acc_y': -0.26,
    'acc_z': -1.04,
    'gyro_x': -7.31,
    'gyro_y': -7.91,
    'gyro_z': 0.02,
    'heading': 16.21
  },
  {
    'time': 58251,
    'acc_x': -0.14,
    'acc_y': -0.27,
    'acc_z': -1.01,
    'gyro_x': -1.7,
    'gyro_y': 1.14,
    'gyro_z': -2.63,
    'heading': 14.81
  },
  {
    'time': 58286,
    'acc_x': -0.12,
    'acc_y': -0.26,
    'acc_z': -0.94,
    'gyro_x': 14.54,
    'gyro_y': -2.6,
    'gyro_z': 0.5,
    'heading': 14.88
  },
  {
    'time': 58320,
    'acc_x': -0.2,
    'acc_y': -0.23,
    'acc_z': -1.11,
    'gyro_x': 8.16,
    'gyro_y': -2.87,
    'gyro_z': 0,
    'heading': 15.31
  },
  {
    'time': 58356,
    'acc_x': -0.12,
    'acc_y': -0.29,
    'acc_z': -0.95,
    'gyro_x': 12.66,
    'gyro_y': 12.73,
    'gyro_z': -1.43,
    'heading': 15.59
  },
  {
    'time': 58390,
    'acc_x': 0.06,
    'acc_y': -0.25,
    'acc_z': -0.75,
    'gyro_x': 5.65,
    'gyro_y': 5.88,
    'gyro_z': 8.08,
    'heading': 15.6
  },
  {
    'time': 58425,
    'acc_x': -0.12,
    'acc_y': -0.34,
    'acc_z': -1.1,
    'gyro_x': -4.57,
    'gyro_y': 17.34,
    'gyro_z': 34.18,
    'heading': 17.78
  },
  {
    'time': 58460,
    'acc_x': -0.05,
    'acc_y': -0.42,
    'acc_z': -0.72,
    'gyro_x': 10.34,
    'gyro_y': -15.46,
    'gyro_z': -7.98,
    'heading': 16.38
  },
  {
    'time': 58495,
    'acc_x': -0.36,
    'acc_y': -0.46,
    'acc_z': -1.22,
    'gyro_x': 49.5,
    'gyro_y': -79.78,
    'gyro_z': -86.69,
    'heading': 16.3
  },
  {
    'time': 58531,
    'acc_x': -0.02,
    'acc_y': -0.23,
    'acc_z': -0.93,
    'gyro_x': -13.25,
    'gyro_y': 11.02,
    'gyro_z': -44.12,
    'heading': 15.89
  },
  {
    'time': 58565,
    'acc_x': -0.19,
    'acc_y': -0.45,
    'acc_z': -0.73,
    'gyro_x': 75.2,
    'gyro_y': -30.38,
    'gyro_z': 3.63,
    'heading': 19.11
  },
  {
    'time': 58600,
    'acc_x': -0.27,
    'acc_y': -0.45,
    'acc_z': -0.94,
    'gyro_x': 84.31,
    'gyro_y': -39.46,
    'gyro_z': -0.63,
    'heading': 19.55
  },
  {
    'time': 58636,
    'acc_x': -0.03,
    'acc_y': -0.22,
    'acc_z': -0.89,
    'gyro_x': 130.89,
    'gyro_y': -36.76,
    'gyro_z': 9.92,
    'heading': 19.44
  },
  {
    'time': 58670,
    'acc_x': -0.11,
    'acc_y': -0.44,
    'acc_z': -0.81,
    'gyro_x': 24.52,
    'gyro_y': -23.47,
    'gyro_z': 54.21,
    'heading': 20.62
  },
  {
    'time': 58705,
    'acc_x': -0.37,
    'acc_y': -0.55,
    'acc_z': -0.76,
    'gyro_x': 146.52,
    'gyro_y': -50.79,
    'gyro_z': 52.59,
    'heading': 18.3
  },
  {
    'time': 58740,
    'acc_x': -0.4,
    'acc_y': -0.66,
    'acc_z': -1.08,
    'gyro_x': 128.07,
    'gyro_y': -49,
    'gyro_z': 15.27,
    'heading': 19.55
  },
  {
    'time': 58775,
    'acc_x': -0.19,
    'acc_y': -0.62,
    'acc_z': -0.65,
    'gyro_x': 72.86,
    'gyro_y': -13.1,
    'gyro_z': 0.17,
    'heading': 19.32
  },
  {
    'time': 58810,
    'acc_x': -0.33,
    'acc_y': -0.76,
    'acc_z': -0.82,
    'gyro_x': 84.37,
    'gyro_y': -25.76,
    'gyro_z': 2.13,
    'heading': 19.5
  },
  {
    'time': 58845,
    'acc_x': -0.24,
    'acc_y': -0.72,
    'acc_z': -0.59,
    'gyro_x': 59.13,
    'gyro_y': -0.91,
    'gyro_z': -22.27,
    'heading': 19.27
  },
  {
    'time': 58880,
    'acc_x': -0.25,
    'acc_y': -0.73,
    'acc_z': -0.55,
    'gyro_x': 34.58,
    'gyro_y': -36.53,
    'gyro_z': -7.27,
    'heading': 18.64
  },
  {
    'time': 58915,
    'acc_x': -0.33,
    'acc_y': -0.73,
    'acc_z': -0.65,
    'gyro_x': -30.73,
    'gyro_y': -34.15,
    'gyro_z': 3.27,
    'heading': 20.72
  },
  {
    'time': 58950,
    'acc_x': -0.43,
    'acc_y': -0.79,
    'acc_z': -0.61,
    'gyro_x': -135.55,
    'gyro_y': -2.74,
    'gyro_z': -21.02,
    'heading': 19.95
  },
  {
    'time': 58985,
    'acc_x': -0.33,
    'acc_y': -0.52,
    'acc_z': -0.81,
    'gyro_x': 250.13,
    'gyro_y': -36.25,
    'gyro_z': -12.94,
    'heading': 19.66
  },
  {
    'time': 59020,
    'acc_x': -0.44,
    'acc_y': -0.33,
    'acc_z': -1.08,
    'gyro_x': -250.14,
    'gyro_y': 13.04,
    'gyro_z': -15.27,
    'heading': 20.04
  },
  {
    'time': 59055,
    'acc_x': -0.28,
    'acc_y': -0.08,
    'acc_z': -0.9,
    'gyro_x': -250.14,
    'gyro_y': 68.3,
    'gyro_z': 5.37,
    'heading': 18.73
  },
  {
    'time': 59090,
    'acc_x': -0.25,
    'acc_y': -0.02,
    'acc_z': -0.86,
    'gyro_x': -195.62,
    'gyro_y': 15.56,
    'gyro_z': 3.02,
    'heading': 14.27
  },
  {
    'time': 59124,
    'acc_x': -0.28,
    'acc_y': 0.16,
    'acc_z': -1.03,
    'gyro_x': -55.91,
    'gyro_y': 15.84,
    'gyro_z': 2.65,
    'heading': 9.46
  },
  {
    'time': 59160,
    'acc_x': -0.28,
    'acc_y': 0.23,
    'acc_z': -0.94,
    'gyro_x': 31.61,
    'gyro_y': 14.44,
    'gyro_z': -4.66,
    'heading': 7.14
  },
  {
    'time': 59195,
    'acc_x': -0.27,
    'acc_y': 0.11,
    'acc_z': -1.12,
    'gyro_x': 119.53,
    'gyro_y': -21.43,
    'gyro_z': 31.45,
    'heading': 8.33
  },
  {
    'time': 59230,
    'acc_x': -0.17,
    'acc_y': -0.18,
    'acc_z': -0.73,
    'gyro_x': 250.12,
    'gyro_y': -49.5,
    'gyro_z': 3.4,
    'heading': 7.56
  },
  {
    'time': 59264,
    'acc_x': -0.31,
    'acc_y': -0.08,
    'acc_z': -0.85,
    'gyro_x': 242.66,
    'gyro_y': -98.85,
    'gyro_z': -3.58,
    'heading': 8.84
  },
  {
    'time': 59299,
    'acc_x': -0.47,
    'acc_y': -0.3,
    'acc_z': -0.85,
    'gyro_x': 250.12,
    'gyro_y': -109.88,
    'gyro_z': -7.69,
    'heading': 12.26
  },
  {
    'time': 59335,
    'acc_x': -0.47,
    'acc_y': -0.44,
    'acc_z': -0.81,
    'gyro_x': 250.12,
    'gyro_y': -94.98,
    'gyro_z': 17.69,
    'heading': 15.28
  },
  {
    'time': 59370,
    'acc_x': -0.54,
    'acc_y': -0.64,
    'acc_z': -0.85,
    'gyro_x': 163.24,
    'gyro_y': -51.13,
    'gyro_z': 33.35,
    'heading': 16.47
  },
  {
    'time': 59404,
    'acc_x': -0.64,
    'acc_y': -0.77,
    'acc_z': -0.88,
    'gyro_x': 45.46,
    'gyro_y': 40.01,
    'gyro_z': -5.35,
    'heading': 16.46
  },
  {
    'time': 59439,
    'acc_x': -0.45,
    'acc_y': -0.55,
    'acc_z': -0.57,
    'gyro_x': -20.37,
    'gyro_y': 66.11,
    'gyro_z': -33.49,
    'heading': 15.84
  },
  {
    'time': 59474,
    'acc_x': -0.34,
    'acc_y': -0.4,
    'acc_z': -0.79,
    'gyro_x': -168.98,
    'gyro_y': 29.68,
    'gyro_z': -11.4,
    'heading': 16.02
  },
  {
    'time': 59510,
    'acc_x': -0.41,
    'acc_y': -0.38,
    'acc_z': -1.02,
    'gyro_x': -250.14,
    'gyro_y': 70.95,
    'gyro_z': -17.12,
    'heading': 16.91
  },
  {
    'time': 59544,
    'acc_x': -0.18,
    'acc_y': -0.02,
    'acc_z': -0.87,
    'gyro_x': -250.14,
    'gyro_y': 80.87,
    'gyro_z': -2.16,
    'heading': 15.98
  },
  {
    'time': 59579,
    'acc_x': -0.54,
    'acc_y': -0.59,
    'acc_z': -0.76,
    'gyro_x': -250.14,
    'gyro_y': 10.51,
    'gyro_z': -21.8,
    'heading': 11.34
  },
  {
    'time': 59614,
    'acc_x': -0.24,
    'acc_y': 0.34,
    'acc_z': -0.98,
    'gyro_x': 112.18,
    'gyro_y': -25.59,
    'gyro_z': -42.37,
    'heading': 3.37
  },
  {
    'time': 59649,
    'acc_x': -0.26,
    'acc_y': 0.34,
    'acc_z': -1.14,
    'gyro_x': 227.05,
    'gyro_y': -14.36,
    'gyro_z': -13.52,
    'heading': 5.81
  },
  {
    'time': 59684,
    'acc_x': -0.36,
    'acc_y': 0.07,
    'acc_z': -1.13,
    'gyro_x': 147.54,
    'gyro_y': 59.66,
    'gyro_z': 17.78,
    'heading': 8.71
  },
  {
    'time': 59719,
    'acc_x': -0.34,
    'acc_y': 0.04,
    'acc_z': -1.23,
    'gyro_x': 250.13,
    'gyro_y': 52.95,
    'gyro_z': -19.43,
    'heading': 8.93
  },
  {
    'time': 59754,
    'acc_x': -0.16,
    'acc_y': -0.14,
    'acc_z': -1.31,
    'gyro_x': 208.28,
    'gyro_y': 50.95,
    'gyro_z': -13.85,
    'heading': 11.84
  },
  {
    'time': 59789,
    'acc_x': -0.23,
    'acc_y': -0.28,
    'acc_z': -1.01,
    'gyro_x': 24.84,
    'gyro_y': 117.47,
    'gyro_z': -1.6,
    'heading': 16.48
  },
  {
    'time': 59824,
    'acc_x': 0.01,
    'acc_y': -0.4,
    'acc_z': -0.54,
    'gyro_x': -167.78,
    'gyro_y': 134.36,
    'gyro_z': -75.57,
    'heading': 16.75
  },
  {
    'time': 59859,
    'acc_x': -0.03,
    'acc_y': -0.06,
    'acc_z': -1.04,
    'gyro_x': -2.44,
    'gyro_y': 45.26,
    'gyro_z': -29.86,
    'heading': 17.7
  },
  {
    'time': 59894,
    'acc_x': 0.02,
    'acc_y': -0.31,
    'acc_z': -1.11,
    'gyro_x': -86.85,
    'gyro_y': 96.63,
    'gyro_z': -32.65,
    'heading': 18.2
  },
  {
    'time': 59929,
    'acc_x': -0.03,
    'acc_y': -0.1,
    'acc_z': -0.87,
    'gyro_x': 164.18,
    'gyro_y': 92.18,
    'gyro_z': -29.62,
    'heading': 18.29
  },
  {
    'time': 59964,
    'acc_x': -0.14,
    'acc_y': -0.45,
    'acc_z': -1.04,
    'gyro_x': 168.58,
    'gyro_y': 151.45,
    'gyro_z': -3.31,
    'heading': 19.35
  },
  {
    'time': 59999,
    'acc_x': 0.2,
    'acc_y': -0.19,
    'acc_z': -0.86,
    'gyro_x': -19.08,
    'gyro_y': 105.35,
    'gyro_z': 6.24,
    'heading': 24.18
  },
  {
    'time': 60034,
    'acc_x': 0.2,
    'acc_y': -0.35,
    'acc_z': -0.79,
    'gyro_x': -6.44,
    'gyro_y': 40.2,
    'gyro_z': 48.66,
    'heading': 24.18
  },
  {
    'time': 60069,
    'acc_x': 0.22,
    'acc_y': -0.37,
    'acc_z': -0.7,
    'gyro_x': -24.13,
    'gyro_y': -15.74,
    'gyro_z': -6.21,
    'heading': 25.05
  },
  {
    'time': 60104,
    'acc_x': 0.21,
    'acc_y': -0.28,
    'acc_z': -0.73,
    'gyro_x': -69.21,
    'gyro_y': -61.67,
    'gyro_z': -28.37,
    'heading': 24.5
  },
  {
    'time': 60138,
    'acc_x': 0.23,
    'acc_y': -0.06,
    'acc_z': -0.8,
    'gyro_x': -42.02,
    'gyro_y': -87.85,
    'gyro_z': -39.01,
    'heading': 23.63
  },
  {
    'time': 60174,
    'acc_x': 0.06,
    'acc_y': -0.2,
    'acc_z': -0.87,
    'gyro_x': -17.93,
    'gyro_y': -137.03,
    'gyro_z': 23.5,
    'heading': 24.1
  },
  {
    'time': 60209,
    'acc_x': 0.04,
    'acc_y': -0.16,
    'acc_z': -1.42,
    'gyro_x': 98.96,
    'gyro_y': -79.71,
    'gyro_z': 13.38,
    'heading': 21.98
  },
  {
    'time': 60244,
    'acc_x': 0.01,
    'acc_y': -0.14,
    'acc_z': -1.1,
    'gyro_x': 24.65,
    'gyro_y': -46.3,
    'gyro_z': 57.8,
    'heading': 20.1
  },
  {
    'time': 60278,
    'acc_x': -0.11,
    'acc_y': -0.41,
    'acc_z': -1.11,
    'gyro_x': 36.22,
    'gyro_y': -56.97,
    'gyro_z': 71.4,
    'heading': 19.14
  },
  {
    'time': 60314,
    'acc_x': -0.07,
    'acc_y': -0.27,
    'acc_z': -0.83,
    'gyro_x': 222.45,
    'gyro_y': -63.72,
    'gyro_z': 56.08,
    'heading': 18.11
  },
  {
    'time': 60348,
    'acc_x': -0.19,
    'acc_y': -0.41,
    'acc_z': -0.71,
    'gyro_x': 70.79,
    'gyro_y': -115.4,
    'gyro_z': 86.6,
    'heading': 19.78
  },
  {
    'time': 60384,
    'acc_x': -0.27,
    'acc_y': -0.6,
    'acc_z': -0.84,
    'gyro_x': 152.55,
    'gyro_y': -69.82,
    'gyro_z': 44.02,
    'heading': 19.08
  },
  {
    'time': 60418,
    'acc_x': -0.28,
    'acc_y': -0.54,
    'acc_z': -0.72,
    'gyro_x': 178.89,
    'gyro_y': -41.02,
    'gyro_z': 54.33,
    'heading': 18.48
  },
  {
    'time': 60453,
    'acc_x': -0.31,
    'acc_y': -0.63,
    'acc_z': -0.71,
    'gyro_x': 68.52,
    'gyro_y': -21.87,
    'gyro_z': 47.77,
    'heading': 17.98
  },
  {
    'time': 60488,
    'acc_x': -0.29,
    'acc_y': -0.66,
    'acc_z': -0.89,
    'gyro_x': 2.08,
    'gyro_y': -2.24,
    'gyro_z': 30.07,
    'heading': 17.59
  },
  {
    'time': 60523,
    'acc_x': -0.34,
    'acc_y': -0.65,
    'acc_z': -0.96,
    'gyro_x': -68.85,
    'gyro_y': 46.5,
    'gyro_z': -11.54,
    'heading': 17.01
  },
  {
    'time': 60559,
    'acc_x': -0.25,
    'acc_y': -0.46,
    'acc_z': -0.73,
    'gyro_x': -178.71,
    'gyro_y': 62.25,
    'gyro_z': -17.3,
    'heading': 16.3
  },
  {
    'time': 60593,
    'acc_x': -0.16,
    'acc_y': -0.39,
    'acc_z': -0.87,
    'gyro_x': -238.97,
    'gyro_y': 81.15,
    'gyro_z': 15.21,
    'heading': 16.99
  },
  {
    'time': 60628,
    'acc_x': -0.06,
    'acc_y': -0.31,
    'acc_z': -0.82,
    'gyro_x': -132.37,
    'gyro_y': 91.21,
    'gyro_z': 20.71,
    'heading': 15.21
  },
  {
    'time': 60663,
    'acc_x': -0.1,
    'acc_y': -0.22,
    'acc_z': -0.89,
    'gyro_x': -108.12,
    'gyro_y': 74.59,
    'gyro_z': 41.39,
    'heading': 14.85
  },
  {
    'time': 60698,
    'acc_x': -0.16,
    'acc_y': -0.31,
    'acc_z': -1.04,
    'gyro_x': -71.36,
    'gyro_y': 37.94,
    'gyro_z': 53.31,
    'heading': 11.49
  },
  {
    'time': 60733,
    'acc_x': -0.32,
    'acc_y': -0.38,
    'acc_z': -1.05,
    'gyro_x': -49.23,
    'gyro_y': 23.33,
    'gyro_z': 38.97,
    'heading': 8.82
  },
  {
    'time': 60768,
    'acc_x': -0.23,
    'acc_y': -0.25,
    'acc_z': -1.27,
    'gyro_x': 16.25,
    'gyro_y': -5.53,
    'gyro_z': 7.85,
    'heading': 7.04
  },
  {
    'time': 60803,
    'acc_x': -0.18,
    'acc_y': -0.18,
    'acc_z': -0.97,
    'gyro_x': 25,
    'gyro_y': 21.98,
    'gyro_z': -3.98,
    'heading': 6.84
  },
  {
    'time': 60838,
    'acc_x': -0.18,
    'acc_y': -0.26,
    'acc_z': -0.97,
    'gyro_x': 64.17,
    'gyro_y': -0.21,
    'gyro_z': -1.95,
    'heading': 6.73
  },
  {
    'time': 60873,
    'acc_x': -0.11,
    'acc_y': -0.24,
    'acc_z': -0.98,
    'gyro_x': 47.92,
    'gyro_y': 5.08,
    'gyro_z': -0.19,
    'heading': 7.34
  },
  {
    'time': 60908,
    'acc_x': -0.19,
    'acc_y': -0.34,
    'acc_z': -0.91,
    'gyro_x': 92.68,
    'gyro_y': -8.05,
    'gyro_z': 8.83,
    'heading': 8.57
  },
  {
    'time': 60943,
    'acc_x': -0.22,
    'acc_y': -0.39,
    'acc_z': -0.92,
    'gyro_x': 55.27,
    'gyro_y': -13.77,
    'gyro_z': 10.86,
    'heading': 9.05
  },
  {
    'time': 60978,
    'acc_x': -0.21,
    'acc_y': -0.38,
    'acc_z': -0.89,
    'gyro_x': 35.82,
    'gyro_y': -1.68,
    'gyro_z': -1.22,
    'heading': 10.45
  },
  {
    'time': 61013,
    'acc_x': -0.11,
    'acc_y': -0.37,
    'acc_z': -0.84,
    'gyro_x': 15.38,
    'gyro_y': -15.47,
    'gyro_z': -0.4,
    'heading': 11.1
  },
  {
    'time': 61048,
    'acc_x': -0.17,
    'acc_y': -0.4,
    'acc_z': -0.92,
    'gyro_x': -30.13,
    'gyro_y': -19.65,
    'gyro_z': -1.31,
    'heading': 12.4
  },
  {
    'time': 61082,
    'acc_x': -0.21,
    'acc_y': -0.4,
    'acc_z': -1.04,
    'gyro_x': -36.68,
    'gyro_y': -6.56,
    'gyro_z': -4.82,
    'heading': 10.14
  },
  {
    'time': 61117,
    'acc_x': -0.23,
    'acc_y': -0.37,
    'acc_z': -0.97,
    'gyro_x': -32.28,
    'gyro_y': -6.35,
    'gyro_z': -17.51,
    'heading': 9.79
  },
  {
    'time': 61152,
    'acc_x': -0.18,
    'acc_y': -0.32,
    'acc_z': -0.97,
    'gyro_x': -46.82,
    'gyro_y': 11.28,
    'gyro_z': -18.08,
    'heading': 11.36
  },
  {
    'time': 61188,
    'acc_x': -0.09,
    'acc_y': -0.31,
    'acc_z': -0.87,
    'gyro_x': -27.95,
    'gyro_y': 6.3,
    'gyro_z': -21.28,
    'heading': 10.57
  },
  {
    'time': 61223,
    'acc_x': -0.05,
    'acc_y': -0.27,
    'acc_z': -0.99,
    'gyro_x': 18.8,
    'gyro_y': -11.91,
    'gyro_z': -19.66,
    'heading': 10.43
  },
  {
    'time': 61258,
    'acc_x': 0.09,
    'acc_y': -0.17,
    'acc_z': -1.02,
    'gyro_x': 8.65,
    'gyro_y': -4.35,
    'gyro_z': -6.47,
    'heading': 13.26
  },
  {
    'time': 61292,
    'acc_x': 0.25,
    'acc_y': -0.01,
    'acc_z': -0.97,
    'gyro_x': 19.47,
    'gyro_y': -5.6,
    'gyro_z': 24.49,
    'heading': 12.29
  },
  {
    'time': 61327,
    'acc_x': -0.08,
    'acc_y': -0.24,
    'acc_z': -0.94,
    'gyro_x': 30.6,
    'gyro_y': 9.05,
    'gyro_z': 52.85,
    'heading': 11.23
  },
  {
    'time': 61362,
    'acc_x': -0.65,
    'acc_y': -0.76,
    'acc_z': -0.57,
    'gyro_x': 0.98,
    'gyro_y': 18.66,
    'gyro_z': 41.02,
    'heading': 11.04
  },
  {
    'time': 61397,
    'acc_x': -0.72,
    'acc_y': -0.83,
    'acc_z': -0.94,
    'gyro_x': 15.63,
    'gyro_y': -29.46,
    'gyro_z': -14.22,
    'heading': 9.87
  },
  {
    'time': 61433,
    'acc_x': -0.16,
    'acc_y': -0.26,
    'acc_z': -1.16,
    'gyro_x': -10.4,
    'gyro_y': -23.49,
    'gyro_z': -65.57,
    'heading': 12.24
  },
  {
    'time': 61467,
    'acc_x': 0.24,
    'acc_y': -0.05,
    'acc_z': -1.14,
    'gyro_x': -10.34,
    'gyro_y': -16.22,
    'gyro_z': -22.79,
    'heading': 13.05
  },
  {
    'time': 61502,
    'acc_x': 0.09,
    'acc_y': -0.25,
    'acc_z': -0.79,
    'gyro_x': -28.75,
    'gyro_y': 22.31,
    'gyro_z': 8.54,
    'heading': 13.61
  },
  {
    'time': 61537,
    'acc_x': -0.16,
    'acc_y': -0.42,
    'acc_z': -0.28,
    'gyro_x': -65.79,
    'gyro_y': 34.17,
    'gyro_z': 19.56,
    'heading': 13
  },
  {
    'time': 61572,
    'acc_x': -0.81,
    'acc_y': -0.69,
    'acc_z': -1.6,
    'gyro_x': 18.34,
    'gyro_y': -67.75,
    'gyro_z': -0.6,
    'heading': 12.69
  },
  {
    'time': 61607,
    'acc_x': -0.38,
    'acc_y': -0.31,
    'acc_z': -1.65,
    'gyro_x': -11.04,
    'gyro_y': 14.43,
    'gyro_z': -64.4,
    'heading': 11.34
  },
  {
    'time': 61642,
    'acc_x': 0.42,
    'acc_y': 0.25,
    'acc_z': -0.37,
    'gyro_x': -51.28,
    'gyro_y': 58.33,
    'gyro_z': -25.21,
    'heading': 11.26
  },
  {
    'time': 61677,
    'acc_x': -0.01,
    'acc_y': -0.42,
    'acc_z': -0.32,
    'gyro_x': -37.35,
    'gyro_y': 27.83,
    'gyro_z': 35.29,
    'heading': 12.64
  },
  {
    'time': 61712,
    'acc_x': -0.71,
    'acc_y': -0.74,
    'acc_z': -0.75,
    'gyro_x': 57.74,
    'gyro_y': -70.79,
    'gyro_z': -18.23,
    'heading': 12.68
  },
  {
    'time': 61747,
    'acc_x': -0.41,
    'acc_y': -0.43,
    'acc_z': -1.44,
    'gyro_x': -12.89,
    'gyro_y': -59.64,
    'gyro_z': -98.74,
    'heading': 12.3
  },
  {
    'time': 61782,
    'acc_x': 1.16,
    'acc_y': 0.99,
    'acc_z': -0.58,
    'gyro_x': 0.53,
    'gyro_y': -60.44,
    'gyro_z': 64.22,
    'heading': 13.67
  },
  {
    'time': 61817,
    'acc_x': -0.29,
    'acc_y': -0.31,
    'acc_z': -1.24,
    'gyro_x': 89.82,
    'gyro_y': -23.31,
    'gyro_z': 112.4,
    'heading': 15.34
  },
  {
    'time': 61852,
    'acc_x': -1.02,
    'acc_y': -0.92,
    'acc_z': -1.38,
    'gyro_x': 100.73,
    'gyro_y': 6.05,
    'gyro_z': 3.94,
    'heading': 11.28
  },
  {
    'time': 61887,
    'acc_x': -0.75,
    'acc_y': -0.76,
    'acc_z': -0.59,
    'gyro_x': -30.46,
    'gyro_y': 57.87,
    'gyro_z': -92.44,
    'heading': 10.55
  },
  {
    'time': 61922,
    'acc_x': 0.23,
    'acc_y': 0.08,
    'acc_z': -0.8,
    'gyro_x': -59.53,
    'gyro_y': -8.15,
    'gyro_z': -48.6,
    'heading': 13.29
  },
  {
    'time': 61957,
    'acc_x': 0.15,
    'acc_y': -0.21,
    'acc_z': -0.86,
    'gyro_x': -12.28,
    'gyro_y': -32.28,
    'gyro_z': -44.19,
    'heading': 13.2
  },
  {
    'time': 61991,
    'acc_x': -0.1,
    'acc_y': -0.16,
    'acc_z': -0.76,
    'gyro_x': -16.24,
    'gyro_y': -33.04,
    'gyro_z': -40.56,
    'heading': 14.21
  },
  {
    'time': 62027,
    'acc_x': -0.46,
    'acc_y': -0.49,
    'acc_z': -0.91,
    'gyro_x': -58.51,
    'gyro_y': -28.09,
    'gyro_z': -18.73,
    'heading': 14.94
  },
  {
    'time': 62062,
    'acc_x': -0.27,
    'acc_y': -0.41,
    'acc_z': -1,
    'gyro_x': -59.26,
    'gyro_y': -50.91,
    'gyro_z': -90.93,
    'heading': 14.17
  },
  {
    'time': 62097,
    'acc_x': 0.1,
    'acc_y': 0.24,
    'acc_z': -0.63,
    'gyro_x': -49.43,
    'gyro_y': -82.13,
    'gyro_z': -26.98,
    'heading': 14.77
  },
  {
    'time': 62131,
    'acc_x': -0.45,
    'acc_y': -0.15,
    'acc_z': -1.41,
    'gyro_x': -16.5,
    'gyro_y': -53.62,
    'gyro_z': 18.89,
    'heading': 14.94
  },
  {
    'time': 62167,
    'acc_x': -0.41,
    'acc_y': -0.44,
    'acc_z': -1.12,
    'gyro_x': 20.97,
    'gyro_y': 10.7,
    'gyro_z': -55.27,
    'heading': 14
  },
  {
    'time': 62201,
    'acc_x': 0.05,
    'acc_y': 0.26,
    'acc_z': -0.08,
    'gyro_x': -103.4,
    'gyro_y': 20.73,
    'gyro_z': 8.35,
    'heading': 14.7
  },
  {
    'time': 62237,
    'acc_x': -0.6,
    'acc_y': -0.38,
    'acc_z': -1.78,
    'gyro_x': -78.22,
    'gyro_y': -18.25,
    'gyro_z': 62.95,
    'heading': 14.99
  },
  {
    'time': 62272,
    'acc_x': -0.44,
    'acc_y': -0.44,
    'acc_z': -1.17,
    'gyro_x': 68.49,
    'gyro_y': 6.89,
    'gyro_z': -57.99,
    'heading': 11.82
  },
  {
    'time': 62307,
    'acc_x': 0.56,
    'acc_y': 0.92,
    'acc_z': 0.07,
    'gyro_x': -162.79,
    'gyro_y': 39.31,
    'gyro_z': 106.34,
    'heading': 13.39
  },
  {
    'time': 62341,
    'acc_x': -0.74,
    'acc_y': -0.65,
    'acc_z': -1.47,
    'gyro_x': -45.37,
    'gyro_y': -4.06,
    'gyro_z': 164.42,
    'heading': 14.77
  },
  {
    'time': 62376,
    'acc_x': -0.86,
    'acc_y': -0.57,
    'acc_z': -1.38,
    'gyro_x': 20.05,
    'gyro_y': -0.28,
    'gyro_z': -123.4,
    'heading': 7.84
  },
  {
    'time': 62412,
    'acc_x': 0.46,
    'acc_y': 1.34,
    'acc_z': -0.36,
    'gyro_x': -134.03,
    'gyro_y': 29.42,
    'gyro_z': -64.9,
    'heading': 8.74
  },
  {
    'time': 62447,
    'acc_x': -0.31,
    'acc_y': -0.15,
    'acc_z': -1.21,
    'gyro_x': -108.27,
    'gyro_y': -0.55,
    'gyro_z': 153.65,
    'heading': 10.43
  },
  {
    'time': 62481,
    'acc_x': -0.74,
    'acc_y': -0.7,
    'acc_z': -1.2,
    'gyro_x': -36.18,
    'gyro_y': -17.16,
    'gyro_z': -38.76,
    'heading': 6.3
  },
  {
    'time': 62516,
    'acc_x': -0.46,
    'acc_y': 0.17,
    'acc_z': -1.22,
    'gyro_x': 243.87,
    'gyro_y': -37.07,
    'gyro_z': -205.73,
    'heading': 4.9
  },
  {
    'time': 62551,
    'acc_x': 0.23,
    'acc_y': 0.49,
    'acc_z': -0.6,
    'gyro_x': 2.72,
    'gyro_y': -26.63,
    'gyro_z': 76.96,
    'heading': 8.87
  },
  {
    'time': 62586,
    'acc_x': -0.56,
    'acc_y': -0.55,
    'acc_z': -1.04,
    'gyro_x': 17.76,
    'gyro_y': -11.31,
    'gyro_z': 96.91,
    'heading': 14.04
  },
  {
    'time': 62622,
    'acc_x': -0.55,
    'acc_y': -0.46,
    'acc_z': -1.03,
    'gyro_x': 180.17,
    'gyro_y': -44.41,
    'gyro_z': -72.33,
    'heading': 10.54
  },
  {
    'time': 62656,
    'acc_x': 0.06,
    'acc_y': 0.4,
    'acc_z': -0.61,
    'gyro_x': 94.18,
    'gyro_y': -52.51,
    'gyro_z': 6.63,
    'heading': 10.4
  },
  {
    'time': 62691,
    'acc_x': -0.65,
    'acc_y': -0.57,
    'acc_z': -1.19,
    'gyro_x': 85.32,
    'gyro_y': -6.76,
    'gyro_z': 86.35,
    'heading': 13.82
  },
  {
    'time': 62726,
    'acc_x': -0.56,
    'acc_y': -0.64,
    'acc_z': -0.83,
    'gyro_x': 250.12,
    'gyro_y': -27.08,
    'gyro_z': -36.79,
    'heading': 13.36
  },
  {
    'time': 62761,
    'acc_x': -0.12,
    'acc_y': -0.02,
    'acc_z': -0.84,
    'gyro_x': 148.85,
    'gyro_y': -36.01,
    'gyro_z': -64.28,
    'heading': 13.27
  },
  {
    'time': 62796,
    'acc_x': -0.3,
    'acc_y': -0.56,
    'acc_z': -0.81,
    'gyro_x': 49.44,
    'gyro_y': 9.03,
    'gyro_z': 26.09,
    'heading': 16.37
  },
  {
    'time': 62831,
    'acc_x': -0.4,
    'acc_y': -0.7,
    'acc_z': -0.77,
    'gyro_x': 34.11,
    'gyro_y': -8.85,
    'gyro_z': 4.28,
    'heading': 17.53
  },
  {
    'time': 62866,
    'acc_x': -0.29,
    'acc_y': -0.41,
    'acc_z': -0.8,
    'gyro_x': -16.21,
    'gyro_y': 6.3,
    'gyro_z': -23.35,
    'heading': 17.09
  },
  {
    'time': 62901,
    'acc_x': -0.43,
    'acc_y': -0.64,
    'acc_z': -0.86,
    'gyro_x': -95.91,
    'gyro_y': 27.82,
    'gyro_z': 14.86,
    'heading': 16.12
  },
  {
    'time': 62936,
    'acc_x': -0.41,
    'acc_y': -0.45,
    'acc_z': -1.04,
    'gyro_x': -250.14,
    'gyro_y': 84.42,
    'gyro_z': -42.17,
    'heading': 17.15
  },
  {
    'time': 62971,
    'acc_x': -0.14,
    'acc_y': 0.02,
    'acc_z': -0.37,
    'gyro_x': -246.85,
    'gyro_y': 77.63,
    'gyro_z': -3.37,
    'heading': 16.39
  },
  {
    'time': 63006,
    'acc_x': -0.31,
    'acc_y': -0.57,
    'acc_z': -1.48,
    'gyro_x': 250.12,
    'gyro_y': -46.72,
    'gyro_z': 107.18,
    'heading': 13.88
  },
  {
    'time': 63041,
    'acc_x': -0.31,
    'acc_y': -0.77,
    'acc_z': -0.52,
    'gyro_x': 218.36,
    'gyro_y': 12.47,
    'gyro_z': 25.15,
    'heading': 14.92
  },
  {
    'time': 63076,
    'acc_x': -0.34,
    'acc_y': -0.66,
    'acc_z': -0.6,
    'gyro_x': 23.48,
    'gyro_y': -46.97,
    'gyro_z': -8.55,
    'heading': 17.07
  },
  {
    'time': 63111,
    'acc_x': -0.28,
    'acc_y': -0.63,
    'acc_z': -0.83,
    'gyro_x': -98.44,
    'gyro_y': -34.85,
    'gyro_z': -16.24,
    'heading': 16.37
  },
  {
    'time': 63145,
    'acc_x': -0.41,
    'acc_y': -0.31,
    'acc_z': -0.91,
    'gyro_x': -250.14,
    'gyro_y': 82.89,
    'gyro_z': -59.73,
    'heading': 17.09
  },
  {
    'time': 63180,
    'acc_x': -0.29,
    'acc_y': -0.35,
    'acc_z': -0.79,
    'gyro_x': -250.14,
    'gyro_y': 55.45,
    'gyro_z': -33.17,
    'heading': 16.38
  },
  {
    'time': 63216,
    'acc_x': -0.24,
    'acc_y': -0.12,
    'acc_z': -1.04,
    'gyro_x': -184.39,
    'gyro_y': -2.94,
    'gyro_z': -67.85,
    'heading': 14.46
  },
  {
    'time': 63251,
    'acc_x': -0.21,
    'acc_y': -0.07,
    'acc_z': -0.75,
    'gyro_x': 30.55,
    'gyro_y': -16.98,
    'gyro_z': -21.27,
    'heading': 13
  },
  {
    'time': 63286,
    'acc_x': -0.23,
    'acc_y': -0.12,
    'acc_z': -1.16,
    'gyro_x': 250.12,
    'gyro_y': -28.26,
    'gyro_z': 56.93,
    'heading': 13.27
  },
  {
    'time': 63320,
    'acc_x': -0.31,
    'acc_y': -0.44,
    'acc_z': -0.94,
    'gyro_x': 250.12,
    'gyro_y': -0.18,
    'gyro_z': 38.25,
    'heading': 15.65
  },
  {
    'time': 63355,
    'acc_x': -0.16,
    'acc_y': -0.23,
    'acc_z': -0.79,
    'gyro_x': -19.95,
    'gyro_y': -40.21,
    'gyro_z': -9.19,
    'heading': 16.84
  },
  {
    'time': 63390,
    'acc_x': -0.41,
    'acc_y': -0.44,
    'acc_z': -0.86,
    'gyro_x': -61.51,
    'gyro_y': -35.95,
    'gyro_z': -33.84,
    'heading': 17.76
  },
  {
    'time': 63425,
    'acc_x': -0.35,
    'acc_y': -0.45,
    'acc_z': -0.98,
    'gyro_x': 187.72,
    'gyro_y': 1.19,
    'gyro_z': -1,
    'heading': 16.74
  },
  {
    'time': 63460,
    'acc_x': -0.33,
    'acc_y': -0.55,
    'acc_z': -0.83,
    'gyro_x': 101.62,
    'gyro_y': 43.65,
    'gyro_z': 20.86,
    'heading': 18.64
  },
  {
    'time': 63496,
    'acc_x': -0.17,
    'acc_y': -0.4,
    'acc_z': -0.7,
    'gyro_x': -162.21,
    'gyro_y': -11.95,
    'gyro_z': 4.62,
    'heading': 18.89
  },
  {
    'time': 63530,
    'acc_x': -0.49,
    'acc_y': -0.5,
    'acc_z': -0.67,
    'gyro_x': -184.43,
    'gyro_y': -9.5,
    'gyro_z': -35.28,
    'heading': 18.8
  },
  {
    'time': 63565,
    'acc_x': -0.35,
    'acc_y': -0.48,
    'acc_z': -1.06,
    'gyro_x': 34.23,
    'gyro_y': 20.85,
    'gyro_z': -13.6,
    'heading': 18.52
  },
  {
    'time': 63600,
    'acc_x': -0.13,
    'acc_y': -0.49,
    'acc_z': -0.76,
    'gyro_x': -21.11,
    'gyro_y': 51.79,
    'gyro_z': -8.33,
    'heading': 17.18
  },
  {
    'time': 63635,
    'acc_x': -0.26,
    'acc_y': -0.51,
    'acc_z': -0.92,
    'gyro_x': -57.08,
    'gyro_y': -60.43,
    'gyro_z': -34.76,
    'heading': 18.52
  },
  {
    'time': 63670,
    'acc_x': -0.25,
    'acc_y': -0.21,
    'acc_z': -0.84,
    'gyro_x': -6.56,
    'gyro_y': -12.48,
    'gyro_z': -18.19,
    'heading': 17.96
  },
  {
    'time': 63705,
    'acc_x': -0.38,
    'acc_y': -0.48,
    'acc_z': -0.95,
    'gyro_x': 37.68,
    'gyro_y': 44,
    'gyro_z': 54.61,
    'heading': 19.46
  },
  {
    'time': 63740,
    'acc_x': -0.2,
    'acc_y': -0.28,
    'acc_z': -0.68,
    'gyro_x': -35.45,
    'gyro_y': 18.59,
    'gyro_z': 4.15,
    'heading': 18.86
  },
  {
    'time': 63775,
    'acc_x': -0.45,
    'acc_y': -0.55,
    'acc_z': -1.1,
    'gyro_x': 97.39,
    'gyro_y': -80.08,
    'gyro_z': -55.07,
    'heading': 17.1
  },
  {
    'time': 63810,
    'acc_x': -0.04,
    'acc_y': -0.08,
    'acc_z': -0.77,
    'gyro_x': 41.63,
    'gyro_y': 19.92,
    'gyro_z': -7.76,
    'heading': 18.18
  },
  {
    'time': 63845,
    'acc_x': -0.12,
    'acc_y': -0.53,
    'acc_z': -0.72,
    'gyro_x': -28.48,
    'gyro_y': 60.23,
    'gyro_z': 67.75,
    'heading': 19.49
  },
  {
    'time': 63880,
    'acc_x': -0.58,
    'acc_y': -0.88,
    'acc_z': -1.14,
    'gyro_x': -11.76,
    'gyro_y': -74.89,
    'gyro_z': -40.36,
    'heading': 19.49
  },
  {
    'time': 63915,
    'acc_x': -0.08,
    'acc_y': 0.14,
    'acc_z': -0.83,
    'gyro_x': -54.43,
    'gyro_y': 2.13,
    'gyro_z': -90.8,
    'heading': 18.14
  },
  {
    'time': 63950,
    'acc_x': -0.14,
    'acc_y': -0.2,
    'acc_z': -0.94,
    'gyro_x': -235.21,
    'gyro_y': 91.8,
    'gyro_z': 140.4,
    'heading': 18.1
  },
  {
    'time': 63985,
    'acc_x': -0.48,
    'acc_y': -0.68,
    'acc_z': -1.02,
    'gyro_x': -37.24,
    'gyro_y': -4.93,
    'gyro_z': 46.39,
    'heading': 17.38
  },
  {
    'time': 64020,
    'acc_x': -0.55,
    'acc_y': -0.55,
    'acc_z': -1.23,
    'gyro_x': 79.98,
    'gyro_y': -31.42,
    'gyro_z': -112.35,
    'heading': 14.91
  },
  {
    'time': 64054,
    'acc_x': 0.15,
    'acc_y': 0.13,
    'acc_z': -0.57,
    'gyro_x': -113.25,
    'gyro_y': 49.19,
    'gyro_z': 50.07,
    'heading': 15.76
  },
  {
    'time': 64090,
    'acc_x': -0.21,
    'acc_y': -0.4,
    'acc_z': -1.03,
    'gyro_x': 57.23,
    'gyro_y': 4.56,
    'gyro_z': 65.2,
    'heading': 15.73
  },
  {
    'time': 64125,
    'acc_x': -0.52,
    'acc_y': -0.69,
    'acc_z': -1.19,
    'gyro_x': 194.5,
    'gyro_y': -76.16,
    'gyro_z': -87.43,
    'heading': 14.53
  },
  {
    'time': 64160,
    'acc_x': 0.14,
    'acc_y': 0.36,
    'acc_z': -0.54,
    'gyro_x': 0.53,
    'gyro_y': 12.31,
    'gyro_z': -60.6,
    'heading': 17.67
  },
  {
    'time': 64194,
    'acc_x': -0.16,
    'acc_y': -0.4,
    'acc_z': -0.88,
    'gyro_x': -56.82,
    'gyro_y': 40.34,
    'gyro_z': 127.21,
    'heading': 19.97
  },
  {
    'time': 64229,
    'acc_x': -0.74,
    'acc_y': -1.14,
    'acc_z': -1.37,
    'gyro_x': 120.84,
    'gyro_y': -51.26,
    'gyro_z': -9.15,
    'heading': 18.18
  },
  {
    'time': 64265,
    'acc_x': -0.2,
    'acc_y': 0.02,
    'acc_z': -0.93,
    'gyro_x': 29.06,
    'gyro_y': -4.66,
    'gyro_z': -154.26,
    'heading': 16.65
  },
  {
    'time': 64300,
    'acc_x': 0.07,
    'acc_y': -0.16,
    'acc_z': -0.85,
    'gyro_x': -153.89,
    'gyro_y': 72.03,
    'gyro_z': 109.7,
    'heading': 19.95
  },
  {
    'time': 64334,
    'acc_x': -0.31,
    'acc_y': -0.88,
    'acc_z': -0.76,
    'gyro_x': 42.5,
    'gyro_y': -19.78,
    'gyro_z': 52.3,
    'heading': 18.83
  },
  {
    'time': 64369,
    'acc_x': -0.5,
    'acc_y': -0.66,
    'acc_z': -1.13,
    'gyro_x': 88.5,
    'gyro_y': -55.6,
    'gyro_z': -103.64,
    'heading': 16.58
  },
  {
    'time': 64404,
    'acc_x': 0.35,
    'acc_y': 0.4,
    'acc_z': -0.55,
    'gyro_x': -0.91,
    'gyro_y': 4.52,
    'gyro_z': 30.43,
    'heading': 18.48
  },
  {
    'time': 64439,
    'acc_x': -0.47,
    'acc_y': -0.77,
    'acc_z': -0.95,
    'gyro_x': 17.76,
    'gyro_y': 22.9,
    'gyro_z': 91.43,
    'heading': 19.87
  },
  {
    'time': 64474,
    'acc_x': -0.46,
    'acc_y': -0.74,
    'acc_z': -0.94,
    'gyro_x': 49.93,
    'gyro_y': -39.68,
    'gyro_z': -4.22,
    'heading': 19.33
  },
  {
    'time': 64509,
    'acc_x': -0.12,
    'acc_y': -0.14,
    'acc_z': -0.71,
    'gyro_x': 52.76,
    'gyro_y': -34.99,
    'gyro_z': -30.8,
    'heading': 17.93
  },
  {
    'time': 64544,
    'acc_x': -0.34,
    'acc_y': -0.6,
    'acc_z': -0.89,
    'gyro_x': 45.96,
    'gyro_y': 8.09,
    'gyro_z': 66.45,
    'heading': 19.25
  },
  {
    'time': 64579,
    'acc_x': -0.61,
    'acc_y': -0.94,
    'acc_z': -1.13,
    'gyro_x': 43.21,
    'gyro_y': -17.74,
    'gyro_z': -41.62,
    'heading': 18.97
  },
  {
    'time': 64614,
    'acc_x': 0.28,
    'acc_y': 0.37,
    'acc_z': -0.67,
    'gyro_x': -127.57,
    'gyro_y': 22.79,
    'gyro_z': -90.49,
    'heading': 18.81
  },
  {
    'time': 64649,
    'acc_x': -0.09,
    'acc_y': -0.4,
    'acc_z': -0.93,
    'gyro_x': -149.6,
    'gyro_y': 57.24,
    'gyro_z': 157.33,
    'heading': 20.6
  },
  {
    'time': 64684,
    'acc_x': -0.89,
    'acc_y': -1.28,
    'acc_z': -1.31,
    'gyro_x': -99.06,
    'gyro_y': -23.58,
    'gyro_z': 13.03,
    'heading': 18.64
  },
  {
    'time': 64719,
    'acc_x': -0.64,
    'acc_y': -0.49,
    'acc_z': -0.99,
    'gyro_x': -106.7,
    'gyro_y': 29.58,
    'gyro_z': -240.66,
    'heading': 15.02
  },
  {
    'time': 64754,
    'acc_x': 0.63,
    'acc_y': 0.73,
    'acc_z': -0.34,
    'gyro_x': -158.67,
    'gyro_y': 27.92,
    'gyro_z': -14.26,
    'heading': 16.87
  },
  {
    'time': 64788,
    'acc_x': -0.16,
    'acc_y': -0.48,
    'acc_z': -0.96,
    'gyro_x': -61.39,
    'gyro_y': 29.73,
    'gyro_z': 156.7,
    'heading': 19.2
  },
  {
    'time': 64824,
    'acc_x': -0.78,
    'acc_y': -1.02,
    'acc_z': -1.63,
    'gyro_x': 245.76,
    'gyro_y': -106.49,
    'gyro_z': -5.31,
    'heading': 14.17
  },
  {
    'time': 64859,
    'acc_x': -0.59,
    'acc_y': -0.4,
    'acc_z': -1.1,
    'gyro_x': 180.87,
    'gyro_y': -49.44,
    'gyro_z': -158.49,
    'heading': 13.76
  },
  {
    'time': 64894,
    'acc_x': 0.44,
    'acc_y': 0.35,
    'acc_z': -0.69,
    'gyro_x': -72.96,
    'gyro_y': 47.47,
    'gyro_z': 65.43,
    'heading': 18.79
  },
  {
    'time': 64928,
    'acc_x': -0.25,
    'acc_y': -0.67,
    'acc_z': -0.42,
    'gyro_x': 144.4,
    'gyro_y': 9.93,
    'gyro_z': 117.21,
    'heading': 21.08
  },
  {
    'time': 64964,
    'acc_x': -0.54,
    'acc_y': -0.76,
    'acc_z': -0.95,
    'gyro_x': 190.17,
    'gyro_y': -103.4,
    'gyro_z': -36.09,
    'heading': 18.43
  },
  {
    'time': 64999,
    'acc_x': -0.03,
    'acc_y': 0.08,
    'acc_z': -0.93,
    'gyro_x': 62.5,
    'gyro_y': -61.95,
    'gyro_z': -63.69,
    'heading': 17.93
  },
  {
    'time': 65034,
    'acc_x': -0.26,
    'acc_y': -0.58,
    'acc_z': -0.93,
    'gyro_x': 3.21,
    'gyro_y': 40.43,
    'gyro_z': 72.81,
    'heading': 19.33
  },
  {
    'time': 65068,
    'acc_x': -0.52,
    'acc_y': -0.9,
    'acc_z': -0.71,
    'gyro_x': 67.47,
    'gyro_y': -6.25,
    'gyro_z': 30.83,
    'heading': 19.14
  },
  {
    'time': 65103,
    'acc_x': -0.5,
    'acc_y': -0.72,
    'acc_z': -0.88,
    'gyro_x': 52.2,
    'gyro_y': -48.76,
    'gyro_z': -58.79,
    'heading': 18.35
  },
  {
    'time': 65139,
    'acc_x': 0.01,
    'acc_y': -0.29,
    'acc_z': -0.79,
    'gyro_x': -50.76,
    'gyro_y': 37.98,
    'gyro_z': 27.83,
    'heading': 18.52
  },
  {
    'time': 65173,
    'acc_x': -0.36,
    'acc_y': -0.78,
    'acc_z': -0.74,
    'gyro_x': -73.94,
    'gyro_y': 41.41,
    'gyro_z': 35.87,
    'heading': 19.39
  },
  {
    'time': 65209,
    'acc_x': -0.45,
    'acc_y': -0.74,
    'acc_z': -0.82,
    'gyro_x': -5.09,
    'gyro_y': -44.05,
    'gyro_z': -58.82,
    'heading': 18.89
  },
  {
    'time': 65244,
    'acc_x': -0.05,
    'acc_y': -0.08,
    'acc_z': -0.83,
    'gyro_x': -91.01,
    'gyro_y': -10.77,
    'gyro_z': -66.65,
    'heading': 18.86
  },
  {
    'time': 65278,
    'acc_x': -0.12,
    'acc_y': -0.38,
    'acc_z': -0.65,
    'gyro_x': -156.98,
    'gyro_y': 57.66,
    'gyro_z': 55.77,
    'heading': 19.66
  },
  {
    'time': 65313,
    'acc_x': -0.55,
    'acc_y': -0.82,
    'acc_z': -0.95,
    'gyro_x': 28.27,
    'gyro_y': -21.03,
    'gyro_z': 17.5,
    'heading': 17.56
  },
  {
    'time': 65348,
    'acc_x': -0.4,
    'acc_y': -0.48,
    'acc_z': -1.01,
    'gyro_x': -34.51,
    'gyro_y': -6.95,
    'gyro_z': -54.19,
    'heading': 19.24
  },
  {
    'time': 65383,
    'acc_x': 0.01,
    'acc_y': -0.15,
    'acc_z': -0.68,
    'gyro_x': -96.59,
    'gyro_y': 36.67,
    'gyro_z': 55.42,
    'heading': 16.76
  },
  {
    'time': 65418,
    'acc_x': -0.44,
    'acc_y': -0.7,
    'acc_z': -0.86,
    'gyro_x': 29.53,
    'gyro_y': 0.77,
    'gyro_z': 50.65,
    'heading': 19.32
  },
  {
    'time': 65453,
    'acc_x': -0.47,
    'acc_y': -0.56,
    'acc_z': -1.01,
    'gyro_x': 64.35,
    'gyro_y': -42.79,
    'gyro_z': -66.56,
    'heading': 14.91
  },
  {
    'time': 65488,
    'acc_x': 0.06,
    'acc_y': 0.07,
    'acc_z': -0.71,
    'gyro_x': -33.02,
    'gyro_y': 11.35,
    'gyro_z': 8.52,
    'heading': 17.21
  },
  {
    'time': 65523,
    'acc_x': -0.3,
    'acc_y': -0.57,
    'acc_z': -0.88,
    'gyro_x': 22.25,
    'gyro_y': 30.47,
    'gyro_z': 96.6,
    'heading': 17.32
  },
  {
    'time': 65558,
    'acc_x': -0.59,
    'acc_y': -0.79,
    'acc_z': -1.06,
    'gyro_x': 63.53,
    'gyro_y': -42.02,
    'gyro_z': -16.3,
    'heading': 16.93
  },
  {
    'time': 65593,
    'acc_x': -0.44,
    'acc_y': -0.52,
    'acc_z': -1.04,
    'gyro_x': 40.87,
    'gyro_y': -29.81,
    'gyro_z': -102.98,
    'heading': 14.29
  },
  {
    'time': 65628,
    'acc_x': 0.22,
    'acc_y': 0.1,
    'acc_z': -0.59,
    'gyro_x': -58.02,
    'gyro_y': 53.93,
    'gyro_z': 57.29,
    'heading': 17.36
  },
  {
    'time': 65662,
    'acc_x': -0.4,
    'acc_y': -0.68,
    'acc_z': -0.79,
    'gyro_x': 20.67,
    'gyro_y': 23.57,
    'gyro_z': 79.95,
    'heading': 18.95
  },
  {
    'time': 65698,
    'acc_x': -0.54,
    'acc_y': -0.71,
    'acc_z': -0.99,
    'gyro_x': 111.76,
    'gyro_y': -52.81,
    'gyro_z': -54.32,
    'heading': 16.02
  },
  {
    'time': 65733,
    'acc_x': 0.16,
    'acc_y': 0.33,
    'acc_z': -0.73,
    'gyro_x': -2.2,
    'gyro_y': -15.05,
    'gyro_z': -61.92,
    'heading': 16.74
  },
  {
    'time': 65768,
    'acc_x': -0.35,
    'acc_y': -0.64,
    'acc_z': -1.03,
    'gyro_x': -55.62,
    'gyro_y': 51.87,
    'gyro_z': 64.77,
    'heading': 18.43
  },
  {
    'time': 65803,
    'acc_x': -0.54,
    'acc_y': -0.77,
    'acc_z': -0.98,
    'gyro_x': 46.45,
    'gyro_y': -39.09,
    'gyro_z': -29.28,
    'heading': 17.48
  },
  {
    'time': 65837,
    'acc_x': -0.39,
    'acc_y': -0.57,
    'acc_z': -0.99,
    'gyro_x': 14.73,
    'gyro_y': -43.23,
    'gyro_z': -102.57,
    'heading': 17.17
  },
  {
    'time': 65872,
    'acc_x': 0.13,
    'acc_y': -0.03,
    'acc_z': -0.56,
    'gyro_x': -40.08,
    'gyro_y': 19.65,
    'gyro_z': -24.6,
    'heading': 18.23
  },
  {
    'time': 65908,
    'acc_x': -0.16,
    'acc_y': -0.52,
    'acc_z': -0.55,
    'gyro_x': 11.67,
    'gyro_y': 12.27,
    'gyro_z': 37.8,
    'heading': 19.41
  },
  {
    'time': 65943,
    'acc_x': -0.33,
    'acc_y': -0.59,
    'acc_z': -0.75,
    'gyro_x': 63.83,
    'gyro_y': -56.73,
    'gyro_z': 21.69,
    'heading': 20.21
  },
  {
    'time': 65977,
    'acc_x': -0.39,
    'acc_y': -0.5,
    'acc_z': -0.94,
    'gyro_x': 67.6,
    'gyro_y': -61.18,
    'gyro_z': 17.27,
    'heading': 18.92
  },
  {
    'time': 66012,
    'acc_x': -0.39,
    'acc_y': -0.62,
    'acc_z': -0.88,
    'gyro_x': 6.48,
    'gyro_y': 2.32,
    'gyro_z': 33.95,
    'heading': 18.6
  },
  {
    'time': 66047,
    'acc_x': -0.57,
    'acc_y': -0.86,
    'acc_z': -0.78,
    'gyro_x': -6.5,
    'gyro_y': -11.24,
    'gyro_z': -8.11,
    'heading': 16.09
  },
  {
    'time': 66083,
    'acc_x': -0.48,
    'acc_y': -0.64,
    'acc_z': -0.96,
    'gyro_x': -4.73,
    'gyro_y': -43.63,
    'gyro_z': -92.6,
    'heading': 17.53
  },
  {
    'time': 66118,
    'acc_x': 0,
    'acc_y': -0.03,
    'acc_z': -0.91,
    'gyro_x': -77.94,
    'gyro_y': 25.58,
    'gyro_z': -46.27,
    'heading': 17.02
  },
  {
    'time': 66152,
    'acc_x': -0.13,
    'acc_y': -0.42,
    'acc_z': -0.74,
    'gyro_x': -190.9,
    'gyro_y': 96.5,
    'gyro_z': 81.74,
    'heading': 19.46
  },
  {
    'time': 66187,
    'acc_x': -0.53,
    'acc_y': -0.85,
    'acc_z': -0.92,
    'gyro_x': -5.71,
    'gyro_y': 3.08,
    'gyro_z': 42.81,
    'heading': 17.38
  },
  {
    'time': 66222,
    'acc_x': -0.5,
    'acc_y': -0.62,
    'acc_z': -1.08,
    'gyro_x': -27.26,
    'gyro_y': -1.35,
    'gyro_z': -108.23,
    'heading': 17.81
  },
  {
    'time': 66257,
    'acc_x': 0.13,
    'acc_y': 0.24,
    'acc_z': -0.44,
    'gyro_x': -140.82,
    'gyro_y': 45.51,
    'gyro_z': -37.91,
    'heading': 17.39
  },
  {
    'time': 66293,
    'acc_x': -0.15,
    'acc_y': -0.39,
    'acc_z': -0.87,
    'gyro_x': -138.54,
    'gyro_y': 24.94,
    'gyro_z': 126.76,
    'heading': 18.86
  },
  {
    'time': 66327,
    'acc_x': -0.42,
    'acc_y': -0.65,
    'acc_z': -0.71,
    'gyro_x': -69.83,
    'gyro_y': -39.92,
    'gyro_z': 56.68,
    'heading': 16.57
  },
  {
    'time': 66363,
    'acc_x': -0.53,
    'acc_y': -0.48,
    'acc_z': -1.18,
    'gyro_x': 70.36,
    'gyro_y': -81.43,
    'gyro_z': -65.32,
    'heading': 14.46
  },
  {
    'time': 66397,
    'acc_x': -0.28,
    'acc_y': -0.02,
    'acc_z': -0.97,
    'gyro_x': 52.05,
    'gyro_y': -35.21,
    'gyro_z': -86.87,
    'heading': 13.62
  },
  {
    'time': 66432,
    'acc_x': -0.21,
    'acc_y': -0.22,
    'acc_z': -0.97,
    'gyro_x': 67.12,
    'gyro_y': -13.45,
    'gyro_z': 34.38,
    'heading': 16.2
  },
  {
    'time': 66467,
    'acc_x': -0.4,
    'acc_y': -0.54,
    'acc_z': -0.85,
    'gyro_x': 192.55,
    'gyro_y': -22.91,
    'gyro_z': 36.22,
    'heading': 16.18
  },
  {
    'time': 66502,
    'acc_x': -0.36,
    'acc_y': -0.54,
    'acc_z': -0.89,
    'gyro_x': 192.43,
    'gyro_y': -49.31,
    'gyro_z': -1.82,
    'heading': 15.33
  },
  {
    'time': 66537,
    'acc_x': -0.26,
    'acc_y': -0.4,
    'acc_z': -0.84,
    'gyro_x': 87.21,
    'gyro_y': -14.26,
    'gyro_z': 37.58,
    'heading': 17.59
  },
  {
    'time': 66572,
    'acc_x': -0.51,
    'acc_y': -0.75,
    'acc_z': -0.81,
    'gyro_x': 71.67,
    'gyro_y': 7.26,
    'gyro_z': 37.82,
    'heading': 16.46
  },
  {
    'time': 66607,
    'acc_x': -0.45,
    'acc_y': -0.64,
    'acc_z': -0.77,
    'gyro_x': 8.05,
    'gyro_y': 13.15,
    'gyro_z': -6.48,
    'heading': 15.21
  },
  {
    'time': 66642,
    'acc_x': -0.35,
    'acc_y': -0.63,
    'acc_z': -0.58,
    'gyro_x': 4.05,
    'gyro_y': -10.37,
    'gyro_z': -23.66,
    'heading': 14.82
  },
  {
    'time': 66676,
    'acc_x': -0.43,
    'acc_y': -0.67,
    'acc_z': -0.77,
    'gyro_x': 1.85,
    'gyro_y': -17.88,
    'gyro_z': -18.47,
    'heading': 15.48
  },
  {
    'time': 66712,
    'acc_x': -0.28,
    'acc_y': -0.58,
    'acc_z': -0.76,
    'gyro_x': -43.05,
    'gyro_y': 18.16,
    'gyro_z': -34.43,
    'heading': 17
  },
  {
    'time': 66747,
    'acc_x': -0.16,
    'acc_y': -0.32,
    'acc_z': -0.54,
    'gyro_x': -118.14,
    'gyro_y': 42.75,
    'gyro_z': 3.95,
    'heading': 17.64
  },
  {
    'time': 66782,
    'acc_x': -0.55,
    'acc_y': -0.8,
    'acc_z': -0.88,
    'gyro_x': 24.56,
    'gyro_y': -21.37,
    'gyro_z': 19.4,
    'heading': 17.79
  },
  {
    'time': 66817,
    'acc_x': -0.52,
    'acc_y': -0.74,
    'acc_z': -1.05,
    'gyro_x': -18.4,
    'gyro_y': 5.99,
    'gyro_z': -54.32,
    'heading': 16.85
  },
  {
    'time': 66851,
    'acc_x': 0.04,
    'acc_y': -0.01,
    'acc_z': -0.44,
    'gyro_x': -95.53,
    'gyro_y': 52.11,
    'gyro_z': -17.69,
    'heading': 17.26
  },
  {
    'time': 66887,
    'acc_x': -0.26,
    'acc_y': -0.46,
    'acc_z': -0.69,
    'gyro_x': -55.17,
    'gyro_y': 39.26,
    'gyro_z': 80.83,
    'heading': 19.14
  },
  {
    'time': 66922,
    'acc_x': -0.54,
    'acc_y': -0.77,
    'acc_z': -0.92,
    'gyro_x': 76.85,
    'gyro_y': -44.83,
    'gyro_z': -6.36,
    'heading': 17.46
  },
  {
    'time': 66956,
    'acc_x': -0.44,
    'acc_y': -0.61,
    'acc_z': -0.91,
    'gyro_x': 31.89,
    'gyro_y': -35.43,
    'gyro_z': -81.39,
    'heading': 15.46
  },
  {
    'time': 66992,
    'acc_x': 0.07,
    'acc_y': 0.04,
    'acc_z': -0.54,
    'gyro_x': -117.78,
    'gyro_y': 54.11,
    'gyro_z': 65.11,
    'heading': 18.27
  },
  {
    'time': 67027,
    'acc_x': -0.43,
    'acc_y': -0.66,
    'acc_z': -0.66,
    'gyro_x': -52.31,
    'gyro_y': 43.02,
    'gyro_z': 101.54,
    'heading': 18.56
  },
  {
    'time': 67061,
    'acc_x': -0.6,
    'acc_y': -0.77,
    'acc_z': -0.92,
    'gyro_x': 72.44,
    'gyro_y': -64.76,
    'gyro_z': -9.66,
    'heading': 16.02
  },
  {
    'time': 67096,
    'acc_x': -0.53,
    'acc_y': -0.63,
    'acc_z': -0.99,
    'gyro_x': 17.88,
    'gyro_y': -53.65,
    'gyro_z': -83.31,
    'heading': 15.3
  },
  {
    'time': 67132,
    'acc_x': -0.04,
    'acc_y': -0.01,
    'acc_z': -0.75,
    'gyro_x': -3.8,
    'gyro_y': -3.11,
    'gyro_z': 17.73,
    'heading': 15.91
  },
  {
    'time': 67167,
    'acc_x': -0.48,
    'acc_y': -0.75,
    'acc_z': -0.82,
    'gyro_x': 12.29,
    'gyro_y': 33.55,
    'gyro_z': 53.31,
    'heading': 15.22
  },
  {
    'time': 67201,
    'acc_x': -0.5,
    'acc_y': -0.78,
    'acc_z': -1.02,
    'gyro_x': 55.02,
    'gyro_y': -28.89,
    'gyro_z': -45.87,
    'heading': 15.7
  },
  {
    'time': 67236,
    'acc_x': -0.24,
    'acc_y': -0.28,
    'acc_z': -0.87,
    'gyro_x': 9.36,
    'gyro_y': -19.63,
    'gyro_z': -85.89,
    'heading': 15.77
  },
  {
    'time': 67271,
    'acc_x': 0.03,
    'acc_y': -0.06,
    'acc_z': -0.64,
    'gyro_x': -77.65,
    'gyro_y': 55.05,
    'gyro_z': 54.6,
    'heading': 18.1
  },
  {
    'time': 67306,
    'acc_x': -0.44,
    'acc_y': -0.71,
    'acc_z': -0.82,
    'gyro_x': -18.77,
    'gyro_y': 45.71,
    'gyro_z': 68.9,
    'heading': 17.89
  },
  {
    'time': 67341,
    'acc_x': -0.53,
    'acc_y': -0.84,
    'acc_z': -0.89,
    'gyro_x': 17.46,
    'gyro_y': -37.13,
    'gyro_z': -48.05,
    'heading': 16.29
  },
  {
    'time': 67376,
    'acc_x': -0.28,
    'acc_y': -0.24,
    'acc_z': -0.84,
    'gyro_x': 20.46,
    'gyro_y': -49.19,
    'gyro_z': -107.44,
    'heading': 16.56
  },
  {
    'time': 67411,
    'acc_x': -0.05,
    'acc_y': -0.02,
    'acc_z': -0.72,
    'gyro_x': -120.81,
    'gyro_y': 85.57,
    'gyro_z': 92.65,
    'heading': 17.98
  },
  {
    'time': 67446,
    'acc_x': -0.5,
    'acc_y': -0.9,
    'acc_z': -0.91,
    'gyro_x': 12.6,
    'gyro_y': 51.7,
    'gyro_z': 83.94,
    'heading': 18.39
  },
  {
    'time': 67481,
    'acc_x': -0.61,
    'acc_y': -0.85,
    'acc_z': -1,
    'gyro_x': 51.36,
    'gyro_y': -88.42,
    'gyro_z': -79.32,
    'heading': 15.86
  },
  {
    'time': 67516,
    'acc_x': 0.05,
    'acc_y': 0.33,
    'acc_z': -0.96,
    'gyro_x': -27.78,
    'gyro_y': -46.06,
    'gyro_z': -110.78,
    'heading': 15.55
  },
  {
    'time': 67551,
    'acc_x': -0.03,
    'acc_y': 0,
    'acc_z': -0.91,
    'gyro_x': -141.84,
    'gyro_y': 106.05,
    'gyro_z': 175.89,
    'heading': 17.72
  },
  {
    'time': 67586,
    'acc_x': -0.72,
    'acc_y': -1.2,
    'acc_z': -0.56,
    'gyro_x': 108.82,
    'gyro_y': 12.14,
    'gyro_z': 97.1,
    'heading': 17.76
  },
  {
    'time': 67621,
    'acc_x': -0.67,
    'acc_y': -0.79,
    'acc_z': -1.04,
    'gyro_x': 110.18,
    'gyro_y': -132.9,
    'gyro_z': -138.67,
    'heading': 13.08
  },
  {
    'time': 67656,
    'acc_x': 0.1,
    'acc_y': 0.5,
    'acc_z': -0.76,
    'gyro_x': -51.94,
    'gyro_y': 10.91,
    'gyro_z': -80.11,
    'heading': 14.93
  },
  {
    'time': 67691,
    'acc_x': -0.24,
    'acc_y': -0.5,
    'acc_z': -1.04,
    'gyro_x': -125.02,
    'gyro_y': 148.1,
    'gyro_z': 201.7,
    'heading': 18.89
  },
  {
    'time': 67726,
    'acc_x': -0.88,
    'acc_y': -1.41,
    'acc_z': -0.55,
    'gyro_x': 88.57,
    'gyro_y': -13.87,
    'gyro_z': 69.9,
    'heading': 15.86
  },
  {
    'time': 67760,
    'acc_x': -0.62,
    'acc_y': -0.74,
    'acc_z': -0.97,
    'gyro_x': 64.61,
    'gyro_y': -119.16,
    'gyro_z': -136.8,
    'heading': 13.13
  },
  {
    'time': 67796,
    'acc_x': 0.34,
    'acc_y': 0.78,
    'acc_z': -0.78,
    'gyro_x': -100.6,
    'gyro_y': 3.63,
    'gyro_z': -63.05,
    'heading': 13.82
  },
  {
    'time': 67831,
    'acc_x': -0.28,
    'acc_y': -0.63,
    'acc_z': -1.15,
    'gyro_x': -92.24,
    'gyro_y': 95.94,
    'gyro_z': 171.69,
    'heading': 17.89
  },
  {
    'time': 67866,
    'acc_x': -0.9,
    'acc_y': -1.43,
    'acc_z': -0.83,
    'gyro_x': 82.87,
    'gyro_y': -54.44,
    'gyro_z': -6.05,
    'heading': 15.57
  },
  {
    'time': 67900,
    'acc_x': -0.55,
    'acc_y': -0.52,
    'acc_z': -1.04,
    'gyro_x': 69.48,
    'gyro_y': -100.01,
    'gyro_z': -180.51,
    'heading': 12.85
  },
  {
    'time': 67935,
    'acc_x': 0.38,
    'acc_y': 0.63,
    'acc_z': -0.61,
    'gyro_x': -180.98,
    'gyro_y': 76.34,
    'gyro_z': 20.88,
    'heading': 15.75
  },
  {
    'time': 67971,
    'acc_x': -0.4,
    'acc_y': -0.68,
    'acc_z': -1.12,
    'gyro_x': -56.64,
    'gyro_y': 77.54,
    'gyro_z': 132.12,
    'heading': 19.17
  },
  {
    'time': 68005,
    'acc_x': -0.68,
    'acc_y': -0.89,
    'acc_z': -1.2,
    'gyro_x': 29.19,
    'gyro_y': -36.19,
    'gyro_z': -83.88,
    'heading': 15.86
  },
  {
    'time': 68040,
    'acc_x': -0.37,
    'acc_y': -0.27,
    'acc_z': -0.88,
    'gyro_x': -87.47,
    'gyro_y': -3.41,
    'gyro_z': -176.03,
    'heading': 14.93
  },
  {
    'time': 68075,
    'acc_x': 0.19,
    'acc_y': 0.18,
    'acc_z': -0.65,
    'gyro_x': -217.21,
    'gyro_y': 36.98,
    'gyro_z': 6.19,
    'heading': 17.89
  },
  {
    'time': 68111,
    'acc_x': -0.24,
    'acc_y': -0.59,
    'acc_z': -0.83,
    'gyro_x': -107.51,
    'gyro_y': 47.98,
    'gyro_z': 81.43,
    'heading': 17.15
  },
  {
    'time': 68145,
    'acc_x': -0.35,
    'acc_y': -0.24,
    'acc_z': -1.09,
    'gyro_x': 250.12,
    'gyro_y': -160.16,
    'gyro_z': -118.21,
    'heading': 14.61
  },
  {
    'time': 68180,
    'acc_x': 0.13,
    'acc_y': 0.51,
    'acc_z': -0.83,
    'gyro_x': 43.33,
    'gyro_y': -67.73,
    'gyro_z': -36.7,
    'heading': 17.64
  },
  {
    'time': 68215,
    'acc_x': -0.28,
    'acc_y': -0.35,
    'acc_z': -1.27,
    'gyro_x': -42.88,
    'gyro_y': 29.72,
    'gyro_z': 112.3,
    'heading': 19.08
  },
  {
    'time': 68250,
    'acc_x': -0.68,
    'acc_y': -1.1,
    'acc_z': -1.07,
    'gyro_x': 136.02,
    'gyro_y': 5.3,
    'gyro_z': -15.31,
    'heading': 18.69
  },
  {
    'time': 68285,
    'acc_x': -0.16,
    'acc_y': -0.13,
    'acc_z': -0.59,
    'gyro_x': 80.81,
    'gyro_y': -34.69,
    'gyro_z': -118.27,
    'heading': 17.79
  },
  {
    'time': 68320,
    'acc_x': -0.01,
    'acc_y': -0.15,
    'acc_z': -0.89,
    'gyro_x': -91.32,
    'gyro_y': -15.95,
    'gyro_z': 69.74,
    'heading': 20.14
  },
  {
    'time': 68355,
    'acc_x': -0.4,
    'acc_y': -0.65,
    'acc_z': -1.04,
    'gyro_x': -112.02,
    'gyro_y': -9.8,
    'gyro_z': 105.92,
    'heading': 21.14
  },
  {
    'time': 68390,
    'acc_x': -0.56,
    'acc_y': -0.62,
    'acc_z': -1.12,
    'gyro_x': 97.74,
    'gyro_y': -17.46,
    'gyro_z': -94,
    'heading': 17.97
  },
  {
    'time': 68425,
    'acc_x': -0.31,
    'acc_y': -0.24,
    'acc_z': -0.98,
    'gyro_x': -25.24,
    'gyro_y': 16.06,
    'gyro_z': -121.79,
    'heading': 18.94
  },
  {
    'time': 68460,
    'acc_x': 0.21,
    'acc_y': 0.16,
    'acc_z': -0.55,
    'gyro_x': -111.48,
    'gyro_y': 30.5,
    'gyro_z': 54.33,
    'heading': 19.64
  },
  {
    'time': 68495,
    'acc_x': -0.4,
    'acc_y': -0.68,
    'acc_z': -0.82,
    'gyro_x': -23.77,
    'gyro_y': -3.53,
    'gyro_z': 66.45,
    'heading': 20.61
  },
  {
    'time': 68530,
    'acc_x': -0.48,
    'acc_y': -0.5,
    'acc_z': -1.29,
    'gyro_x': -2.81,
    'gyro_y': -11.27,
    'gyro_z': -36.56,
    'heading': 18.35
  },
  {
    'time': 68565,
    'acc_x': -0.01,
    'acc_y': 0.06,
    'acc_z': -0.77,
    'gyro_x': -88.2,
    'gyro_y': 36.9,
    'gyro_z': -0.98,
    'heading': 18.1
  },
  {
    'time': 68599,
    'acc_x': -0.27,
    'acc_y': -0.39,
    'acc_z': -0.99,
    'gyro_x': -39.44,
    'gyro_y': 1.1,
    'gyro_z': 63.66,
    'heading': 18.52
  },
  {
    'time': 68634,
    'acc_x': -0.44,
    'acc_y': -0.51,
    'acc_z': -1.2,
    'gyro_x': 49.62,
    'gyro_y': 0.38,
    'gyro_z': -46.77,
    'heading': 16.67
  },
  {
    'time': 68670,
    'acc_x': 0.3,
    'acc_y': 0.51,
    'acc_z': -0.27,
    'gyro_x': -67.27,
    'gyro_y': -2.15,
    'gyro_z': 20.49,
    'heading': 17.31
  },
  {
    'time': 68705,
    'acc_x': -0.27,
    'acc_y': -0.3,
    'acc_z': -1.29,
    'gyro_x': -91.99,
    'gyro_y': 33.7,
    'gyro_z': 181.62,
    'heading': 17.87
  },
  {
    'time': 68739,
    'acc_x': -0.92,
    'acc_y': -0.87,
    'acc_z': -1.2,
    'gyro_x': -70.74,
    'gyro_y': 6.26,
    'gyro_z': 51.34,
    'heading': 14.63
  },
  {
    'time': 68774,
    'acc_x': -0.65,
    'acc_y': -0.52,
    'acc_z': -1.14,
    'gyro_x': 128.25,
    'gyro_y': -2.44,
    'gyro_z': -192.7,
    'heading': 13.19
  },
  {
    'time': 68810,
    'acc_x': 0.01,
    'acc_y': 0.44,
    'acc_z': -0.83,
    'gyro_x': -1.9,
    'gyro_y': 17.05,
    'gyro_z': -157.4,
    'heading': 15.47
  },
  {
    'time': 68845,
    'acc_x': 0.16,
    'acc_y': 0.25,
    'acc_z': -0.81,
    'gyro_x': -117.35,
    'gyro_y': 20.85,
    'gyro_z': 93.48,
    'heading': 19.45
  },
  {
    'time': 68879,
    'acc_x': -0.22,
    'acc_y': -0.33,
    'acc_z': -0.88,
    'gyro_x': -58.95,
    'gyro_y': 2.34,
    'gyro_z': 91.91,
    'heading': 18.52
  },
  {
    'time': 68914,
    'acc_x': -0.43,
    'acc_y': -0.32,
    'acc_z': -1.37,
    'gyro_x': -14.98,
    'gyro_y': -9.58,
    'gyro_z': -40.16,
    'heading': 14.51
  },
  {
    'time': 68949,
    'acc_x': -0.35,
    'acc_y': -0.09,
    'acc_z': -1.21,
    'gyro_x': -89.38,
    'gyro_y': 35.03,
    'gyro_z': -128.85,
    'heading': 13.06
  },
  {
    'time': 68985,
    'acc_x': 0.07,
    'acc_y': 0.26,
    'acc_z': -0.62,
    'gyro_x': -117.98,
    'gyro_y': 23.57,
    'gyro_z': -50.8,
    'heading': 14.88
  },
  {
    'time': 69019,
    'acc_x': -0.08,
    'acc_y': -0.09,
    'acc_z': -0.86,
    'gyro_x': -19.77,
    'gyro_y': -5.85,
    'gyro_z': 21.86,
    'heading': 15.5
  },
  {
    'time': 69054,
    'acc_x': -0.24,
    'acc_y': -0.12,
    'acc_z': -0.87,
    'gyro_x': 133.06,
    'gyro_y': -49.77,
    'gyro_z': 0.43,
    'heading': 14.79
  },
  {
    'time': 69089,
    'acc_x': -0.27,
    'acc_y': -0.17,
    'acc_z': -1.05,
    'gyro_x': 201.11,
    'gyro_y': -50.35,
    'gyro_z': -9.76,
    'heading': 15.78
  },
  {
    'time': 69124,
    'acc_x': -0.31,
    'acc_y': -0.34,
    'acc_z': -1,
    'gyro_x': 250.12,
    'gyro_y': -54.21,
    'gyro_z': -0.72,
    'heading': 18.2
  },
  {
    'time': 69160,
    'acc_x': -0.28,
    'acc_y': -0.41,
    'acc_z': -0.96,
    'gyro_x': 214.19,
    'gyro_y': -29.7,
    'gyro_z': 1.33,
    'heading': 19.87
  },
  {
    'time': 69194,
    'acc_x': -0.19,
    'acc_y': -0.44,
    'acc_z': -0.82,
    'gyro_x': 160.42,
    'gyro_y': -11.34,
    'gyro_z': 8.06,
    'heading': 21.49
  },
  {
    'time': 69229,
    'acc_x': -0.23,
    'acc_y': -0.55,
    'acc_z': -0.85,
    'gyro_x': 83.42,
    'gyro_y': -1.95,
    'gyro_z': 19.25,
    'heading': 21.49
  },
  {
    'time': 69264,
    'acc_x': -0.3,
    'acc_y': -0.61,
    'acc_z': -0.87,
    'gyro_x': -11.03,
    'gyro_y': 15.37,
    'gyro_z': 2.85,
    'heading': 21.18
  },
  {
    'time': 69299,
    'acc_x': -0.23,
    'acc_y': -0.47,
    'acc_z': -0.88,
    'gyro_x': -140.47,
    'gyro_y': 31.08,
    'gyro_z': -11.85,
    'heading': 21.29
  },
  {
    'time': 69334,
    'acc_x': -0.18,
    'acc_y': -0.33,
    'acc_z': -0.87,
    'gyro_x': -250.14,
    'gyro_y': 41.01,
    'gyro_z': -22.21,
    'heading': 21.7
  },
  {
    'time': 69369,
    'acc_x': -0.23,
    'acc_y': -0.3,
    'acc_z': -0.92,
    'gyro_x': -250.14,
    'gyro_y': 25.85,
    'gyro_z': -21.77,
    'heading': 21.65
  },
  {
    'time': 69404,
    'acc_x': -0.2,
    'acc_y': -0.2,
    'acc_z': -0.89,
    'gyro_x': -216.32,
    'gyro_y': 31.58,
    'gyro_z': -14.61,
    'heading': 17.67
  },
  {
    'time': 69439,
    'acc_x': -0.19,
    'acc_y': -0.07,
    'acc_z': -1.07,
    'gyro_x': -76.15,
    'gyro_y': 14.63,
    'gyro_z': -19.12,
    'heading': 17.09
  },
  {
    'time': 69474,
    'acc_x': -0.16,
    'acc_y': -0.1,
    'acc_z': -1,
    'gyro_x': -28.11,
    'gyro_y': 25.85,
    'gyro_z': -28.71,
    'heading': 14.81
  },
  {
    'time': 69509,
    'acc_x': -0.13,
    'acc_y': -0.05,
    'acc_z': -0.95,
    'gyro_x': 29.33,
    'gyro_y': 25.42,
    'gyro_z': -18.11,
    'heading': 15.06
  },
  {
    'time': 69544,
    'acc_x': -0.11,
    'acc_y': -0.01,
    'acc_z': -1.05,
    'gyro_x': 104.5,
    'gyro_y': 5.36,
    'gyro_z': 11.92,
    'heading': 15.27
  },
  {
    'time': 69579,
    'acc_x': -0.1,
    'acc_y': -0.07,
    'acc_z': -1.02,
    'gyro_x': 104.91,
    'gyro_y': 7.03,
    'gyro_z': 33.24,
    'heading': 18.1
  },
  {
    'time': 69614,
    'acc_x': -0.11,
    'acc_y': -0.22,
    'acc_z': -0.9,
    'gyro_x': 104.64,
    'gyro_y': -0.57,
    'gyro_z': 24.07,
    'heading': 18.39
  },
  {
    'time': 69649,
    'acc_x': -0.13,
    'acc_y': -0.23,
    'acc_z': -0.98,
    'gyro_x': 123.04,
    'gyro_y': -21.55,
    'gyro_z': 28.36,
    'heading': 19.08
  },
  {
    'time': 69683,
    'acc_x': -0.13,
    'acc_y': -0.24,
    'acc_z': -0.97,
    'gyro_x': 86.43,
    'gyro_y': -6.66,
    'gyro_z': 42.78,
    'heading': 19.83
  },
  {
    'time': 69718,
    'acc_x': -0.11,
    'acc_y': -0.29,
    'acc_z': -0.85,
    'gyro_x': 64.05,
    'gyro_y': 7,
    'gyro_z': 58.08,
    'heading': 20.35
  },
  {
    'time': 69753,
    'acc_x': -0.09,
    'acc_y': -0.3,
    'acc_z': -0.87,
    'gyro_x': 32.79,
    'gyro_y': 18.59,
    'gyro_z': 63.34,
    'heading': 19.26
  },
  {
    'time': 69789,
    'acc_x': -0.16,
    'acc_y': -0.39,
    'acc_z': -0.9,
    'gyro_x': 16.33,
    'gyro_y': 33.27,
    'gyro_z': 52.2,
    'heading': 19.47
  },
  {
    'time': 69824,
    'acc_x': -0.08,
    'acc_y': -0.28,
    'acc_z': -0.77,
    'gyro_x': -44.98,
    'gyro_y': 15.59,
    'gyro_z': 62.64,
    'heading': 18.57
  },
  {
    'time': 69858,
    'acc_x': -0.24,
    'acc_y': -0.49,
    'acc_z': -1.03,
    'gyro_x': -30.69,
    'gyro_y': 20.22,
    'gyro_z': 54.11,
    'heading': 16.87
  },
  {
    'time': 69893,
    'acc_x': -0.32,
    'acc_y': -0.52,
    'acc_z': -0.89,
    'gyro_x': -3.64,
    'gyro_y': 32.55,
    'gyro_z': -6.26,
    'heading': 15.57
  },
  {
    'time': 69928,
    'acc_x': -0.2,
    'acc_y': -0.36,
    'acc_z': -0.82,
    'gyro_x': -40.45,
    'gyro_y': 27.12,
    'gyro_z': -26.28,
    'heading': 15.65
  },
  {
    'time': 69963,
    'acc_x': -0.12,
    'acc_y': -0.39,
    'acc_z': -1.06,
    'gyro_x': -2.87,
    'gyro_y': -5.38,
    'gyro_z': 12.18,
    'heading': 16.75
  },
  {
    'time': 69998,
    'acc_x': -0.31,
    'acc_y': -0.56,
    'acc_z': -0.98,
    'gyro_x': 8.18,
    'gyro_y': -9.89,
    'gyro_z': -1.79,
    'heading': 15.35
  },
  {
    'time': 70033,
    'acc_x': -0.01,
    'acc_y': -0.1,
    'acc_z': -0.97,
    'gyro_x': -11.27,
    'gyro_y': 49.85,
    'gyro_z': 3.5,
    'heading': 14.87
  },
  {
    'time': 70068,
    'acc_x': -0.01,
    'acc_y': -0.14,
    'acc_z': -0.96,
    'gyro_x': -64.5,
    'gyro_y': 45.48,
    'gyro_z': 25.51,
    'heading': 15.61
  },
  {
    'time': 70103,
    'acc_x': -0.11,
    'acc_y': -0.31,
    'acc_z': -0.78,
    'gyro_x': -52.85,
    'gyro_y': 38.47,
    'gyro_z': 38.9,
    'heading': 12.79
  },
  {
    'time': 70138,
    'acc_x': -0.04,
    'acc_y': -0.47,
    'acc_z': -0.81,
    'gyro_x': -59.72,
    'gyro_y': 15.53,
    'gyro_z': 7.94,
    'heading': 12.85
  },
  {
    'time': 70173,
    'acc_x': -0.02,
    'acc_y': -0.18,
    'acc_z': -1.16,
    'gyro_x': -51.01,
    'gyro_y': 1.44,
    'gyro_z': -17.6,
    'heading': 12.15
  },
  {
    'time': 70208,
    'acc_x': 0.03,
    'acc_y': -0.03,
    'acc_z': -1.23,
    'gyro_x': -80.27,
    'gyro_y': 85.08,
    'gyro_z': 42.23,
    'heading': 12.62
  },
  {
    'time': 70243,
    'acc_x': -0.41,
    'acc_y': -0.28,
    'acc_z': -1.07,
    'gyro_x': 17.03,
    'gyro_y': 84.21,
    'gyro_z': 114.21,
    'heading': 12.06
  },
  {
    'time': 70278,
    'acc_x': -0.03,
    'acc_y': -0.27,
    'acc_z': -0.92,
    'gyro_x': 8.54,
    'gyro_y': 62.92,
    'gyro_z': 62.93,
    'heading': 10.71
  },
  {
    'time': 70313,
    'acc_x': 0.07,
    'acc_y': -0.07,
    'acc_z': -0.66,
    'gyro_x': -50.73,
    'gyro_y': 28.95,
    'gyro_z': 27.27,
    'heading': 9.3
  },
  {
    'time': 70348,
    'acc_x': 0,
    'acc_y': -0.09,
    'acc_z': -1.03,
    'gyro_x': 12.38,
    'gyro_y': -5.95,
    'gyro_z': 7.34,
    'heading': 8.77
  },
  {
    'time': 70383,
    'acc_x': -0.04,
    'acc_y': -0.23,
    'acc_z': -0.92,
    'gyro_x': 48.57,
    'gyro_y': 7.08,
    'gyro_z': -28.15,
    'heading': 9.86
  },
  {
    'time': 70418,
    'acc_x': 0.01,
    'acc_y': -0.07,
    'acc_z': -1.02,
    'gyro_x': -23.6,
    'gyro_y': -17.22,
    'gyro_z': -22.11,
    'heading': 8.33
  },
  {
    'time': 70453,
    'acc_x': 0.22,
    'acc_y': -0.02,
    'acc_z': -0.88,
    'gyro_x': -16.85,
    'gyro_y': 5.4,
    'gyro_z': 3.43,
    'heading': 8.61
  },
  {
    'time': 70488,
    'acc_x': 0.08,
    'acc_y': -0.07,
    'acc_z': -0.88,
    'gyro_x': -23.53,
    'gyro_y': 1.12,
    'gyro_z': 14.16,
    'heading': 8.17
  },
  {
    'time': 70523,
    'acc_x': -0.23,
    'acc_y': -0.3,
    'acc_z': -0.87,
    'gyro_x': -49.5,
    'gyro_y': -7.28,
    'gyro_z': -12.24,
    'heading': 7.78
  },
  {
    'time': 70558,
    'acc_x': 0.02,
    'acc_y': -0.1,
    'acc_z': -0.94,
    'gyro_x': -38.93,
    'gyro_y': -42.13,
    'gyro_z': -29.92,
    'heading': 7.34
  },
  {
    'time': 70593,
    'acc_x': 0.13,
    'acc_y': 0.17,
    'acc_z': -1.12,
    'gyro_x': -59.53,
    'gyro_y': -20.79,
    'gyro_z': -23.09,
    'heading': 8.25
  },
  {
    'time': 70628,
    'acc_x': 0.05,
    'acc_y': 0.03,
    'acc_z': -0.93,
    'gyro_x': -44.11,
    'gyro_y': -6.05,
    'gyro_z': 1.09,
    'heading': 8.38
  },
  {
    'time': 70663,
    'acc_x': -0.06,
    'acc_y': -0.04,
    'acc_z': -1.17,
    'gyro_x': -101.46,
    'gyro_y': -15.85,
    'gyro_z': -11.92,
    'heading': 8.23
  },
  {
    'time': 70698,
    'acc_x': -0.04,
    'acc_y': 0.02,
    'acc_z': -0.99,
    'gyro_x': 33.37,
    'gyro_y': -11.15,
    'gyro_z': -19.23,
    'heading': 7.75
  },
  {
    'time': 70732,
    'acc_x': 0,
    'acc_y': 0.09,
    'acc_z': -0.92,
    'gyro_x': -15.76,
    'gyro_y': -18.73,
    'gyro_z': -4.34,
    'heading': 6.59
  },
  {
    'time': 70767,
    'acc_x': -0.07,
    'acc_y': 0.04,
    'acc_z': -1.11,
    'gyro_x': -0.83,
    'gyro_y': 12.89,
    'gyro_z': -8.65,
    'heading': 8.25
  },
  {
    'time': 70802,
    'acc_x': -0.05,
    'acc_y': 0.05,
    'acc_z': -1.01,
    'gyro_x': -1.02,
    'gyro_y': 16.18,
    'gyro_z': 1.6,
    'heading': 5.68
  },
  {
    'time': 70837,
    'acc_x': 0,
    'acc_y': 0.02,
    'acc_z': -1.04,
    'gyro_x': -28.98,
    'gyro_y': -4.37,
    'gyro_z': 12.6,
    'heading': 7.88
  },
  {
    'time': 70872,
    'acc_x': -0.07,
    'acc_y': -0.02,
    'acc_z': -0.98,
    'gyro_x': -26.65,
    'gyro_y': -6.02,
    'gyro_z': 22.87,
    'heading': 6.84
  },
  {
    'time': 70907,
    'acc_x': -0.02,
    'acc_y': 0.05,
    'acc_z': -0.93,
    'gyro_x': -38.25,
    'gyro_y': -20.97,
    'gyro_z': 10.94,
    'heading': 6.63
  },
  {
    'time': 70942,
    'acc_x': -0.02,
    'acc_y': 0.21,
    'acc_z': -1.24,
    'gyro_x': -44.18,
    'gyro_y': -35.63,
    'gyro_z': 0.52,
    'heading': 7.05
  },
  {
    'time': 70977,
    'acc_x': -0.09,
    'acc_y': 0.08,
    'acc_z': -1.02,
    'gyro_x': -10.95,
    'gyro_y': -11.96,
    'gyro_z': -0.95,
    'heading': 7.23
  },
  {
    'time': 71012,
    'acc_x': -0.06,
    'acc_y': 0.16,
    'acc_z': -1,
    'gyro_x': -42.44,
    'gyro_y': -17.32,
    'gyro_z': -3.61,
    'heading': 5.93
  },
  {
    'time': 71047,
    'acc_x': -0.09,
    'acc_y': 0.13,
    'acc_z': -1.05,
    'gyro_x': -45.65,
    'gyro_y': -16.35,
    'gyro_z': -8.49,
    'heading': 6.14
  },
  {
    'time': 71082,
    'acc_x': -0.08,
    'acc_y': 0.24,
    'acc_z': -0.97,
    'gyro_x': -104.3,
    'gyro_y': -7.81,
    'gyro_z': -19.13,
    'heading': 4.63
  },
  {
    'time': 71117,
    'acc_x': -0.13,
    'acc_y': 0.31,
    'acc_z': -1.03,
    'gyro_x': -153.87,
    'gyro_y': 11.18,
    'gyro_z': -13.58,
    'heading': 5.54
  },
  {
    'time': 71152,
    'acc_x': -0.12,
    'acc_y': 0.52,
    'acc_z': -0.94,
    'gyro_x': -78.63,
    'gyro_y': 49.79,
    'gyro_z': -35.27,
    'heading': 4.9
  },
  {
    'time': 71187,
    'acc_x': -0.01,
    'acc_y': 0.41,
    'acc_z': -1.05,
    'gyro_x': -125.34,
    'gyro_y': 32.02,
    'gyro_z': 17.25,
    'heading': 4.33
  },
  {
    'time': 71222,
    'acc_x': -0.1,
    'acc_y': 0.39,
    'acc_z': -0.93,
    'gyro_x': -65.76,
    'gyro_y': 22.31,
    'gyro_z': 32.53,
    'heading': 2.85
  },
  {
    'time': 71257,
    'acc_x': -0.06,
    'acc_y': 0.47,
    'acc_z': -0.88,
    'gyro_x': -8.15,
    'gyro_y': 7.79,
    'gyro_z': 11.35,
    'heading': 0.9
  },
  {
    'time': 71292,
    'acc_x': 0.02,
    'acc_y': 0.48,
    'acc_z': -0.89,
    'gyro_x': -19.62,
    'gyro_y': -12.02,
    'gyro_z': -14.95,
    'heading': 0.61
  },
  {
    'time': 71327,
    'acc_x': -0.04,
    'acc_y': 0.53,
    'acc_z': -0.94,
    'gyro_x': -18.79,
    'gyro_y': 4.25,
    'gyro_z': -4.48,
    'heading': 2.14
  },
  {
    'time': 71362,
    'acc_x': -0.01,
    'acc_y': 0.55,
    'acc_z': -0.96,
    'gyro_x': -22.1,
    'gyro_y': 0.65,
    'gyro_z': -8.7,
    'heading': 0.31
  },
  {
    'time': 71397,
    'acc_x': -0.01,
    'acc_y': 0.53,
    'acc_z': -0.92,
    'gyro_x': -13.98,
    'gyro_y': 13.73,
    'gyro_z': 3.63,
    'heading': 0.93
  },
  {
    'time': 71432,
    'acc_x': -0.03,
    'acc_y': 0.45,
    'acc_z': -0.84,
    'gyro_x': 24.95,
    'gyro_y': 0.56,
    'gyro_z': 5.66,
    'heading': 1.4
  },
  {
    'time': 71467,
    'acc_x': -0.01,
    'acc_y': 0.47,
    'acc_z': -0.88,
    'gyro_x': 40.75,
    'gyro_y': -35.98,
    'gyro_z': -24.64,
    'heading': 3
  },
  {
    'time': 71502,
    'acc_x': -0.07,
    'acc_y': 0.43,
    'acc_z': -1.01,
    'gyro_x': 98.79,
    'gyro_y': -39.5,
    'gyro_z': -23.28,
    'heading': 3.37
  },
  {
    'time': 71537,
    'acc_x': -0.09,
    'acc_y': 0.41,
    'acc_z': -0.82,
    'gyro_x': 127.41,
    'gyro_y': -23.16,
    'gyro_z': -41.03,
    'heading': 3.88
  },
  {
    'time': 71571,
    'acc_x': -0.06,
    'acc_y': 0.42,
    'acc_z': -0.93,
    'gyro_x': -14.4,
    'gyro_y': -16.73,
    'gyro_z': -29.34,
    'heading': 4.55
  },
  {
    'time': 71606,
    'acc_x': -0.12,
    'acc_y': 0.35,
    'acc_z': -0.97,
    'gyro_x': -5.47,
    'gyro_y': -19.31,
    'gyro_z': -17.29,
    'heading': 6.36
  },
  {
    'time': 71641,
    'acc_x': -0.13,
    'acc_y': 0.49,
    'acc_z': -1.01,
    'gyro_x': -23.24,
    'gyro_y': -15.76,
    'gyro_z': -19.87,
    'heading': 5.92
  },
  {
    'time': 71677,
    'acc_x': -0.11,
    'acc_y': 0.38,
    'acc_z': -1.04,
    'gyro_x': -43.07,
    'gyro_y': 7.08,
    'gyro_z': 16.08,
    'heading': 6.56
  },
  {
    'time': 71712,
    'acc_x': -0.12,
    'acc_y': 0.39,
    'acc_z': -0.8,
    'gyro_x': -49.6,
    'gyro_y': 58.4,
    'gyro_z': -68.68,
    'heading': 6.56
  },
  {
    'time': 71747,
    'acc_x': -0.08,
    'acc_y': 0.44,
    'acc_z': -0.96,
    'gyro_x': -5.65,
    'gyro_y': -4.22,
    'gyro_z': -26.67,
    'heading': 6.08
  },
  {
    'time': 71782,
    'acc_x': -0.09,
    'acc_y': 0.39,
    'acc_z': -0.81,
    'gyro_x': -14.96,
    'gyro_y': -7.31,
    'gyro_z': -1.15,
    'heading': 6.48
  },
  {
    'time': 71816,
    'acc_x': -0.12,
    'acc_y': 0.47,
    'acc_z': -0.96,
    'gyro_x': -73.12,
    'gyro_y': 1.87,
    'gyro_z': -1.31,
    'heading': 7.13
  },
  {
    'time': 71851,
    'acc_x': -0.11,
    'acc_y': 0.47,
    'acc_z': -1.07,
    'gyro_x': -14.96,
    'gyro_y': 11.48,
    'gyro_z': -6.73,
    'heading': 7.7
  },
  {
    'time': 71886,
    'acc_x': -0.07,
    'acc_y': 0.47,
    'acc_z': -0.89,
    'gyro_x': 7.94,
    'gyro_y': -2.8,
    'gyro_z': 3.43,
    'heading': 6.86
  },
  {
    'time': 71921,
    'acc_x': -0.09,
    'acc_y': 0.53,
    'acc_z': -1.06,
    'gyro_x': -0.12,
    'gyro_y': -11.94,
    'gyro_z': 6.76,
    'heading': 5.55
  },
  {
    'time': 71956,
    'acc_x': -0.1,
    'acc_y': 0.39,
    'acc_z': -0.9,
    'gyro_x': 6.92,
    'gyro_y': -3.49,
    'gyro_z': 8.72,
    'heading': 7.52
  },
  {
    'time': 71991,
    'acc_x': -0.1,
    'acc_y': 0.41,
    'acc_z': -0.88,
    'gyro_x': -1.26,
    'gyro_y': -4.9,
    'gyro_z': -9.28,
    'heading': 5.84
  },
  {
    'time': 72026,
    'acc_x': -0.1,
    'acc_y': 0.45,
    'acc_z': -0.92,
    'gyro_x': 25.82,
    'gyro_y': -11.31,
    'gyro_z': 2.24,
    'heading': 7.14
  },
  {
    'time': 72061,
    'acc_x': -0.12,
    'acc_y': 0.42,
    'acc_z': -0.96,
    'gyro_x': 136.37,
    'gyro_y': -28.44,
    'gyro_z': -2.74,
    'heading': 6.95
  },
  {
    'time': 72096,
    'acc_x': -0.08,
    'acc_y': 0.41,
    'acc_z': -0.99,
    'gyro_x': 108.44,
    'gyro_y': -19.65,
    'gyro_z': -27.95,
    'heading': 8.35
  },
  {
    'time': 72131,
    'acc_x': -0.14,
    'acc_y': 0.2,
    'acc_z': -1.01,
    'gyro_x': 250.12,
    'gyro_y': -46.1,
    'gyro_z': 4.24,
    'heading': 8.99
  },
  {
    'time': 72166,
    'acc_x': -0.14,
    'acc_y': 0.05,
    'acc_z': -0.95,
    'gyro_x': 188.63,
    'gyro_y': -4.25,
    'gyro_z': 5.01,
    'heading': 10.23
  },
  {
    'time': 72201,
    'acc_x': -0.13,
    'acc_y': -0.01,
    'acc_z': -0.9,
    'gyro_x': 122.03,
    'gyro_y': -5.08,
    'gyro_z': 12.86,
    'heading': 12.28
  },
  {
    'time': 72236,
    'acc_x': -0.17,
    'acc_y': -0.03,
    'acc_z': -1.02,
    'gyro_x': 46.18,
    'gyro_y': -1.99,
    'gyro_z': 13.78,
    'heading': 13.01
  },
  {
    'time': 72271,
    'acc_x': -0.12,
    'acc_y': -0.06,
    'acc_z': -1.04,
    'gyro_x': 7.65,
    'gyro_y': 6.78,
    'gyro_z': 18.69,
    'heading': 11.86
  },
  {
    'time': 72306,
    'acc_x': -0.18,
    'acc_y': -0.14,
    'acc_z': -0.88,
    'gyro_x': -1.66,
    'gyro_y': -3.42,
    'gyro_z': 24.68,
    'heading': 13.6
  },
  {
    'time': 72341,
    'acc_x': -0.21,
    'acc_y': -0.14,
    'acc_z': -1,
    'gyro_x': -12.78,
    'gyro_y': 3.18,
    'gyro_z': 15.89,
    'heading': 13.07
  },
  {
    'time': 72376,
    'acc_x': -0.2,
    'acc_y': -0.15,
    'acc_z': -1.05,
    'gyro_x': -20.01,
    'gyro_y': 6.22,
    'gyro_z': 1.3,
    'heading': 12.05
  },
  {
    'time': 72410,
    'acc_x': -0.13,
    'acc_y': 0.02,
    'acc_z': -1.1,
    'gyro_x': -8.27,
    'gyro_y': 15.64,
    'gyro_z': 6.02,
    'heading': 12.33
  },
  {
    'time': 72446,
    'acc_x': -0.13,
    'acc_y': 0,
    'acc_z': -1.02,
    'gyro_x': -15.05,
    'gyro_y': 29.85,
    'gyro_z': 1.34,
    'heading': 11.11
  },
  {
    'time': 72480,
    'acc_x': -0.09,
    'acc_y': -0.01,
    'acc_z': -1.08,
    'gyro_x': -9.94,
    'gyro_y': 51.47,
    'gyro_z': 18.66,
    'heading': 13.34
  },
  {
    'time': 72515,
    'acc_x': -0.06,
    'acc_y': -0.03,
    'acc_z': -0.89,
    'gyro_x': -23.32,
    'gyro_y': 45.97,
    'gyro_z': 6,
    'heading': 11.51
  },
  {
    'time': 72550,
    'acc_x': -0.04,
    'acc_y': -0.03,
    'acc_z': -0.87,
    'gyro_x': -27.85,
    'gyro_y': 27.05,
    'gyro_z': 14.71,
    'heading': 10.78
  },
  {
    'time': 72586,
    'acc_x': -0.09,
    'acc_y': -0.05,
    'acc_z': -1.04,
    'gyro_x': 3.27,
    'gyro_y': 7.77,
    'gyro_z': 17.91,
    'heading': 10.08
  },
  {
    'time': 72621,
    'acc_x': -0.05,
    'acc_y': -0.11,
    'acc_z': -1.62,
    'gyro_x': -74.9,
    'gyro_y': -52.05,
    'gyro_z': 29.56,
    'heading': 11.82
  },
  {
    'time': 72656,
    'acc_x': -0.06,
    'acc_y': 0.02,
    'acc_z': -0.97,
    'gyro_x': -65.35,
    'gyro_y': 8.69,
    'gyro_z': 2.37,
    'heading': 10.9
  },
  {
    'time': 72691,
    'acc_x': -0.04,
    'acc_y': 0.24,
    'acc_z': -1,
    'gyro_x': -88.63,
    'gyro_y': 6.27,
    'gyro_z': 7.54,
    'heading': 10.01
  },
  {
    'time': 72725,
    'acc_x': -0.06,
    'acc_y': -0.04,
    'acc_z': -1.16,
    'gyro_x': -60.61,
    'gyro_y': 20.15,
    'gyro_z': 2.24,
    'heading': 7.79
  },
  {
    'time': 72760,
    'acc_x': -0.07,
    'acc_y': 0.16,
    'acc_z': -0.97,
    'gyro_x': 13.74,
    'gyro_y': 25.23,
    'gyro_z': -18.6,
    'heading': 6.31
  },
  {
    'time': 72795,
    'acc_x': 0,
    'acc_y': 0.1,
    'acc_z': -0.78,
    'gyro_x': 5.73,
    'gyro_y': 13.33,
    'gyro_z': -10.4,
    'heading': 7.55
  },
  {
    'time': 72830,
    'acc_x': -0.07,
    'acc_y': 0.52,
    'acc_z': -1.04,
    'gyro_x': 52.85,
    'gyro_y': -14.12,
    'gyro_z': -8.92,
    'heading': 7.92
  },
  {
    'time': 72865,
    'acc_x': -0.01,
    'acc_y': 0.04,
    'acc_z': -0.99,
    'gyro_x': 11.26,
    'gyro_y': 10.6,
    'gyro_z': 4.36,
    'heading': 8.36
  },
  {
    'time': 72900,
    'acc_x': 0.01,
    'acc_y': 0.11,
    'acc_z': -0.94,
    'gyro_x': 7.83,
    'gyro_y': -1.88,
    'gyro_z': -3.66,
    'heading': 8.41
  },
  {
    'time': 72935,
    'acc_x': -0.01,
    'acc_y': 0.02,
    'acc_z': -0.97,
    'gyro_x': -12.45,
    'gyro_y': -13.98,
    'gyro_z': -5.78,
    'heading': 7.96
  },
  {
    'time': 72970,
    'acc_x': -0.05,
    'acc_y': 0.16,
    'acc_z': -1.04,
    'gyro_x': -41.79,
    'gyro_y': -26.99,
    'gyro_z': -3.68,
    'heading': 8.77
  },
  {
    'time': 73005,
    'acc_x': -0.12,
    'acc_y': 0.23,
    'acc_z': -0.85,
    'gyro_x': -83.21,
    'gyro_y': -27.67,
    'gyro_z': -4.6,
    'heading': 6.81
  },
  {
    'time': 73040,
    'acc_x': -0.12,
    'acc_y': 0.22,
    'acc_z': -0.97,
    'gyro_x': -101.94,
    'gyro_y': -44.45,
    'gyro_z': -16.92,
    'heading': 8.49
  },
  {
    'time': 73075,
    'acc_x': -0.12,
    'acc_y': 0.21,
    'acc_z': -1.06,
    'gyro_x': -37.23,
    'gyro_y': -17.97,
    'gyro_z': -18.97,
    'heading': 6.8
  },
  {
    'time': 73110,
    'acc_x': -0.09,
    'acc_y': 0.3,
    'acc_z': -1,
    'gyro_x': 7.81,
    'gyro_y': -18.93,
    'gyro_z': -7.84,
    'heading': 7.96
  },
  {
    'time': 73145,
    'acc_x': -0.14,
    'acc_y': 0.18,
    'acc_z': -0.99,
    'gyro_x': 32.76,
    'gyro_y': -22.6,
    'gyro_z': -18.4,
    'heading': 7.2
  },
  {
    'time': 73180,
    'acc_x': -0.16,
    'acc_y': 0.15,
    'acc_z': -0.89,
    'gyro_x': 50.85,
    'gyro_y': -31.89,
    'gyro_z': -27.79,
    'heading': 8.64
  },
  {
    'time': 73215,
    'acc_x': -0.15,
    'acc_y': 0.09,
    'acc_z': -1.22,
    'gyro_x': 57.03,
    'gyro_y': -44.69,
    'gyro_z': -16.29,
    'heading': 7.92
  },
  {
    'time': 73250,
    'acc_x': -0.16,
    'acc_y': -0.32,
    'acc_z': -1.59,
    'gyro_x': 44.19,
    'gyro_y': -31.89,
    'gyro_z': -23.08,
    'heading': 9.34
  },
  {
    'time': 73285,
    'acc_x': -0.22,
    'acc_y': 0.06,
    'acc_z': -0.97,
    'gyro_x': 18.19,
    'gyro_y': -28.72,
    'gyro_z': -18.95,
    'heading': 11.82
  },
  {
    'time': 73320,
    'acc_x': -0.27,
    'acc_y': -0.17,
    'acc_z': -1.1,
    'gyro_x': 142.64,
    'gyro_y': -36.57,
    'gyro_z': -22.44,
    'heading': 10.01
  },
  {
    'time': 73354,
    'acc_x': -0.29,
    'acc_y': 0.01,
    'acc_z': -1.01,
    'gyro_x': 155.03,
    'gyro_y': -36.53,
    'gyro_z': -33.9,
    'heading': 10.75
  },
  {
    'time': 73390,
    'acc_x': -0.26,
    'acc_y': -0.19,
    'acc_z': -1.01,
    'gyro_x': 74.45,
    'gyro_y': 6.18,
    'gyro_z': -15.05,
    'heading': 14.18
  },
  {
    'time': 73425,
    'acc_x': -0.24,
    'acc_y': -0.19,
    'acc_z': -1.1,
    'gyro_x': 60.53,
    'gyro_y': 13.72,
    'gyro_z': -16.29,
    'heading': 12.5
  },
  {
    'time': 73459,
    'acc_x': -0.24,
    'acc_y': -0.15,
    'acc_z': -1,
    'gyro_x': -6.45,
    'gyro_y': 17.16,
    'gyro_z': 9.66,
    'heading': 13.34
  },
  {
    'time': 73494,
    'acc_x': -0.21,
    'acc_y': -0.19,
    'acc_z': -0.95,
    'gyro_x': -0.94,
    'gyro_y': 14.85,
    'gyro_z': 9.59,
    'heading': 13.89
  },
  {
    'time': 73529,
    'acc_x': -0.23,
    'acc_y': -0.22,
    'acc_z': -1.09,
    'gyro_x': -35.4,
    'gyro_y': 12.97,
    'gyro_z': 3.14,
    'heading': 13.25
  },
  {
    'time': 73564,
    'acc_x': -0.2,
    'acc_y': -0.17,
    'acc_z': -1.02,
    'gyro_x': -72.75,
    'gyro_y': 33.39,
    'gyro_z': -5.57,
    'heading': 12.33
  },
  {
    'time': 73599,
    'acc_x': -0.21,
    'acc_y': -0.12,
    'acc_z': -0.98,
    'gyro_x': -70.88,
    'gyro_y': 40.74,
    'gyro_z': -15.18,
    'heading': 13.12
  },
  {
    'time': 73635,
    'acc_x': -0.15,
    'acc_y': -0.03,
    'acc_z': -1.08,
    'gyro_x': -15.1,
    'gyro_y': 48.52,
    'gyro_z': -4.92,
    'heading': 12.63
  },
  {
    'time': 73669,
    'acc_x': -0.11,
    'acc_y': -0.06,
    'acc_z': -1.02,
    'gyro_x': -38.94,
    'gyro_y': 49.56,
    'gyro_z': 7,
    'heading': 12.68
  },
  {
    'time': 73705,
    'acc_x': -0.06,
    'acc_y': -0.09,
    'acc_z': -1.09,
    'gyro_x': 6.87,
    'gyro_y': 58.13,
    'gyro_z': 2.76,
    'heading': 10.81
  },
  {
    'time': 73740,
    'acc_x': -0.06,
    'acc_y': -0.02,
    'acc_z': -0.93,
    'gyro_x': 13.27,
    'gyro_y': 45.65,
    'gyro_z': -5.91,
    'heading': 10.75
  },
  {
    'time': 73774,
    'acc_x': -0.01,
    'acc_y': -0.04,
    'acc_z': -0.9,
    'gyro_x': 16.99,
    'gyro_y': 31.4,
    'gyro_z': -2.29,
    'heading': 10.47
  },
  {
    'time': 73809,
    'acc_x': -0.03,
    'acc_y': -0.24,
    'acc_z': -1.04,
    'gyro_x': 39.23,
    'gyro_y': 33.05,
    'gyro_z': 6.3,
    'heading': 12.09
  },
  {
    'time': 73844,
    'acc_x': 0.02,
    'acc_y': -0.03,
    'acc_z': -0.86,
    'gyro_x': -30.71,
    'gyro_y': 34.29,
    'gyro_z': -7.88,
    'heading': 11.65
  },
  {
    'time': 73879,
    'acc_x': 0.03,
    'acc_y': -0.05,
    'acc_z': -0.89,
    'gyro_x': -25.8,
    'gyro_y': 23.93,
    'gyro_z': -0.84,
    'heading': 12.33
  },
  {
    'time': 73914,
    'acc_x': 0.06,
    'acc_y': 0.02,
    'acc_z': -1.12,
    'gyro_x': 3.53,
    'gyro_y': 15.29,
    'gyro_z': -2.5,
    'heading': 11.52
  },
  {
    'time': 73949,
    'acc_x': 0.05,
    'acc_y': -0.14,
    'acc_z': -0.96,
    'gyro_x': 25.74,
    'gyro_y': 31.76,
    'gyro_z': 3.01,
    'heading': 11.34
  },
  {
    'time': 73984,
    'acc_x': 0.06,
    'acc_y': -0.08,
    'acc_z': -1.03,
    'gyro_x': 51.07,
    'gyro_y': 5.59,
    'gyro_z': -5.89,
    'heading': 11.16
  },
  {
    'time': 74019,
    'acc_x': 0.08,
    'acc_y': -0.02,
    'acc_z': -1.01,
    'gyro_x': 56.58,
    'gyro_y': 12.2,
    'gyro_z': -7.88,
    'heading': 13.19
  },
  {
    'time': 74054,
    'acc_x': 0.09,
    'acc_y': -0.21,
    'acc_z': -0.93,
    'gyro_x': -8.98,
    'gyro_y': 14.31,
    'gyro_z': 19.32,
    'heading': 13.08
  },
  {
    'time': 74089,
    'acc_x': 0.08,
    'acc_y': -0.12,
    'acc_z': -0.79,
    'gyro_x': 104.05,
    'gyro_y': 25.6,
    'gyro_z': 1.3,
    'heading': 14.23
  },
  {
    'time': 74124,
    'acc_x': 0.1,
    'acc_y': -0.1,
    'acc_z': -0.85,
    'gyro_x': -4.53,
    'gyro_y': 10.92,
    'gyro_z': 8.01,
    'heading': 14.86
  },
  {
    'time': 74159,
    'acc_x': 0.07,
    'acc_y': -0.18,
    'acc_z': -0.92,
    'gyro_x': 41.87,
    'gyro_y': 2.7,
    'gyro_z': 4.13,
    'heading': 14.92
  },
  {
    'time': 74194,
    'acc_x': 0.1,
    'acc_y': -0.32,
    'acc_z': -1.16,
    'gyro_x': 30.94,
    'gyro_y': 8.06,
    'gyro_z': 6.13,
    'heading': 14.15
  },
  {
    'time': 74229,
    'acc_x': 0.11,
    'acc_y': -0.25,
    'acc_z': -0.66,
    'gyro_x': 205.14,
    'gyro_y': 40.02,
    'gyro_z': -4.97,
    'heading': 14.07
  },
  {
    'time': 74263,
    'acc_x': 0.14,
    'acc_y': -0.37,
    'acc_z': -0.87,
    'gyro_x': 74.6,
    'gyro_y': 0.05,
    'gyro_z': -6.8,
    'heading': 17.73
  },
  {
    'time': 74298,
    'acc_x': 0.14,
    'acc_y': -0.27,
    'acc_z': -0.93,
    'gyro_x': -65.04,
    'gyro_y': -13.89,
    'gyro_z': 2.6,
    'heading': 18.03
  },
  {
    'time': 74334,
    'acc_x': 0.12,
    'acc_y': -0.35,
    'acc_z': -1.04,
    'gyro_x': -40.02,
    'gyro_y': 3.15,
    'gyro_z': 5.34,
    'heading': 17.83
  },
  {
    'time': 74369,
    'acc_x': 0.1,
    'acc_y': -0.3,
    'acc_z': -0.88,
    'gyro_x': -26.81,
    'gyro_y': 0.9,
    'gyro_z': 0.59,
    'heading': 17.35
  },
  {
    'time': 74403,
    'acc_x': 0.14,
    'acc_y': -0.28,
    'acc_z': -1.04,
    'gyro_x': -74.66,
    'gyro_y': -0.4,
    'gyro_z': -0.02,
    'heading': 16.87
  },
  {
    'time': 74438,
    'acc_x': 0.12,
    'acc_y': -0.33,
    'acc_z': -1.03,
    'gyro_x': -59.23,
    'gyro_y': -0.34,
    'gyro_z': 2.69,
    'heading': 18.08
  },
  {
    'time': 74473,
    'acc_x': 0.12,
    'acc_y': -0.23,
    'acc_z': -0.93,
    'gyro_x': 71.27,
    'gyro_y': 6.32,
    'gyro_z': -3.33,
    'heading': 14.74
  },
  {
    'time': 74508,
    'acc_x': 0.15,
    'acc_y': -0.24,
    'acc_z': -0.93,
    'gyro_x': 24.83,
    'gyro_y': -3.86,
    'gyro_z': -0.4,
    'heading': 16.67
  },
  {
    'time': 74543,
    'acc_x': 0.11,
    'acc_y': -0.26,
    'acc_z': -0.92,
    'gyro_x': -17.11,
    'gyro_y': -5.34,
    'gyro_z': 2.68,
    'heading': 15.42
  },
  {
    'time': 74578,
    'acc_x': 0.1,
    'acc_y': -0.27,
    'acc_z': -1.06,
    'gyro_x': -7.74,
    'gyro_y': -8.41,
    'gyro_z': 2.32,
    'heading': 17.05
  },
  {
    'time': 74613,
    'acc_x': 0.11,
    'acc_y': -0.28,
    'acc_z': -0.87,
    'gyro_x': -2.85,
    'gyro_y': -5.4,
    'gyro_z': 1.2,
    'heading': 15.2
  },
  {
    'time': 74648,
    'acc_x': 0.11,
    'acc_y': -0.26,
    'acc_z': -1.03,
    'gyro_x': -25.28,
    'gyro_y': -17.42,
    'gyro_z': 4.6,
    'heading': 17.93
  },
  {
    'time': 74684,
    'acc_x': 0.1,
    'acc_y': -0.28,
    'acc_z': -1.09,
    'gyro_x': -13.73,
    'gyro_y': -12.15,
    'gyro_z': 5.47,
    'heading': 15.86
  },
  {
    'time': 74718,
    'acc_x': 0.08,
    'acc_y': -0.25,
    'acc_z': -1.02,
    'gyro_x': 17.75,
    'gyro_y': 4.46,
    'gyro_z': 0.25,
    'heading': 15.12
  },
  {
    'time': 74753,
    'acc_x': 0.1,
    'acc_y': -0.25,
    'acc_z': -0.93,
    'gyro_x': -7.73,
    'gyro_y': -9.45,
    'gyro_z': -1.98,
    'heading': 15.31
  },
  {
    'time': 74788,
    'acc_x': 0.09,
    'acc_y': -0.23,
    'acc_z': -0.99,
    'gyro_x': -1.22,
    'gyro_y': -12.43,
    'gyro_z': 1.06,
    'heading': 16.64
  },
  {
    'time': 74823,
    'acc_x': 0.08,
    'acc_y': -0.25,
    'acc_z': -0.98,
    'gyro_x': -3.24,
    'gyro_y': -10.25,
    'gyro_z': 2.88,
    'heading': 14.8
  },
  {
    'time': 74858,
    'acc_x': 0.05,
    'acc_y': -0.24,
    'acc_z': -1.01,
    'gyro_x': 7.77,
    'gyro_y': -15.25,
    'gyro_z': 9.81,
    'heading': 14.46
  },
  {
    'time': 74893,
    'acc_x': 0.08,
    'acc_y': -0.26,
    'acc_z': -0.96,
    'gyro_x': -5.79,
    'gyro_y': -10.46,
    'gyro_z': 3.71,
    'heading': 15.21
  },
  {
    'time': 74928,
    'acc_x': 0.07,
    'acc_y': -0.2,
    'acc_z': -0.96,
    'gyro_x': -20.45,
    'gyro_y': -17.75,
    'gyro_z': 0.99,
    'heading': 15.44
  },
  {
    'time': 74963,
    'acc_x': 0.05,
    'acc_y': -0.23,
    'acc_z': -1.05,
    'gyro_x': -4.18,
    'gyro_y': -17.47,
    'gyro_z': 10.15,
    'heading': 14.07
  },
  {
    'time': 74998,
    'acc_x': 0.08,
    'acc_y': -0.43,
    'acc_z': -1.06,
    'gyro_x': 1.53,
    'gyro_y': -17.76,
    'gyro_z': 9.04,
    'heading': 14.74
  },
  {
    'time': 75033,
    'acc_x': 0.03,
    'acc_y': -0.23,
    'acc_z': -0.89,
    'gyro_x': 21.2,
    'gyro_y': -18.02,
    'gyro_z': -4.61,
    'heading': 14.19
  },
  {
    'time': 75068,
    'acc_x': 0.08,
    'acc_y': -0.2,
    'acc_z': -0.85,
    'gyro_x': -18.89,
    'gyro_y': -40.58,
    'gyro_z': 9.37,
    'heading': 16.09
  },
  {
    'time': 75103,
    'acc_x': -0.11,
    'acc_y': -0.13,
    'acc_z': -1.01,
    'gyro_x': 12.34,
    'gyro_y': -38.15,
    'gyro_z': 15.21,
    'heading': 13.85
  },
  {
    'time': 75138,
    'acc_x': -0.07,
    'acc_y': -0.26,
    'acc_z': -0.98,
    'gyro_x': 3.62,
    'gyro_y': -10.66,
    'gyro_z': 3.73,
    'heading': 12.66
  },
  {
    'time': 75173,
    'acc_x': -0.06,
    'acc_y': -0.39,
    'acc_z': -1.06,
    'gyro_x': 4.59,
    'gyro_y': -20.2,
    'gyro_z': -0.81,
    'heading': 14.44
  },
  {
    'time': 75208,
    'acc_x': -0.02,
    'acc_y': -0.31,
    'acc_z': -1.28,
    'gyro_x': 2.6,
    'gyro_y': -25.04,
    'gyro_z': -6.91,
    'heading': 12.61
  },
  {
    'time': 75243,
    'acc_x': -0.04,
    'acc_y': -0.34,
    'acc_z': -1.04,
    'gyro_x': 17.78,
    'gyro_y': -15.34,
    'gyro_z': -9.37,
    'heading': 15.38
  },
  {
    'time': 75278,
    'acc_x': -0.05,
    'acc_y': -0.18,
    'acc_z': -0.9,
    'gyro_x': -9.43,
    'gyro_y': -23.25,
    'gyro_z': -6.21,
    'heading': 14.99
  },
  {
    'time': 75313,
    'acc_x': -0.07,
    'acc_y': -0.24,
    'acc_z': -1.02,
    'gyro_x': -53.08,
    'gyro_y': -14.22,
    'gyro_z': 13.41,
    'heading': 13.7
  },
  {
    'time': 75347,
    'acc_x': -0.08,
    'acc_y': -0.17,
    'acc_z': -1.12,
    'gyro_x': -47.82,
    'gyro_y': -18.87,
    'gyro_z': 16.35,
    'heading': 13.48
  },
  {
    'time': 75382,
    'acc_x': -0.14,
    'acc_y': -0.09,
    'acc_z': -1.26,
    'gyro_x': -61.86,
    'gyro_y': -21.5,
    'gyro_z': 2.56,
    'heading': 12.33
  },
  {
    'time': 75417,
    'acc_x': -0.37,
    'acc_y': -0.22,
    'acc_z': -1.15,
    'gyro_x': -52.7,
    'gyro_y': -3.19,
    'gyro_z': -12.46,
    'heading': 12.97
  },
  {
    'time': 75453,
    'acc_x': 0.03,
    'acc_y': -0.09,
    'acc_z': -1.06,
    'gyro_x': -59.17,
    'gyro_y': 33.05,
    'gyro_z': 31.24,
    'heading': 11.92
  },
  {
    'time': 75488,
    'acc_x': -0.03,
    'acc_y': -0.08,
    'acc_z': -1.04,
    'gyro_x': -33.71,
    'gyro_y': 27.48,
    'gyro_z': 16.91,
    'heading': 12.61
  },
  {
    'time': 75522,
    'acc_x': -0.09,
    'acc_y': -0.13,
    'acc_z': -1.08,
    'gyro_x': -55.08,
    'gyro_y': 41.19,
    'gyro_z': 15.12,
    'heading': 11.16
  },
  {
    'time': 75557,
    'acc_x': 0.04,
    'acc_y': 0.07,
    'acc_z': -0.93,
    'gyro_x': 0.42,
    'gyro_y': 54.42,
    'gyro_z': 35.82,
    'heading': 11.58
  },
  {
    'time': 75592,
    'acc_x': 0.01,
    'acc_y': -0.16,
    'acc_z': -1.03,
    'gyro_x': 27.94,
    'gyro_y': 58.99,
    'gyro_z': 65.19,
    'heading': 10.9
  },
  {
    'time': 75627,
    'acc_x': 0.05,
    'acc_y': -0.08,
    'acc_z': -0.98,
    'gyro_x': 39.34,
    'gyro_y': 54.56,
    'gyro_z': 43.97,
    'heading': 10.87
  },
  {
    'time': 75662,
    'acc_x': 0.14,
    'acc_y': -0.03,
    'acc_z': -0.92,
    'gyro_x': 63.02,
    'gyro_y': 2.85,
    'gyro_z': 29.52,
    'heading': 11.22
  },
  {
    'time': 75697,
    'acc_x': 0.01,
    'acc_y': -0.24,
    'acc_z': -1.09,
    'gyro_x': 66.87,
    'gyro_y': -2.21,
    'gyro_z': 35.19,
    'heading': 11.28
  },
  {
    'time': 75732,
    'acc_x': -0.07,
    'acc_y': -0.34,
    'acc_z': -1.04,
    'gyro_x': 6.7,
    'gyro_y': 11.05,
    'gyro_z': 11.92,
    'heading': 10.69
  },
  {
    'time': 75767,
    'acc_x': 0.1,
    'acc_y': -0.14,
    'acc_z': -0.97,
    'gyro_x': -43.2,
    'gyro_y': -8.21,
    'gyro_z': -16.37,
    'heading': 11.09
  },
  {
    'time': 75802,
    'acc_x': -0.06,
    'acc_y': -0.32,
    'acc_z': -1.06,
    'gyro_x': -10.64,
    'gyro_y': 18.09,
    'gyro_z': 19.2,
    'heading': 11.44
  },
  {
    'time': 75837,
    'acc_x': 0.05,
    'acc_y': -0.16,
    'acc_z': -0.93,
    'gyro_x': 4.57,
    'gyro_y': -1.56,
    'gyro_z': -3.16,
    'heading': 9.18
  },
  {
    'time': 75872,
    'acc_x': -0.11,
    'acc_y': -0.33,
    'acc_z': -1,
    'gyro_x': 5.91,
    'gyro_y': -26.82,
    'gyro_z': -16.4,
    'heading': 10.23
  },
  {
    'time': 75907,
    'acc_x': 0.14,
    'acc_y': -0.1,
    'acc_z': -0.95,
    'gyro_x': 6.21,
    'gyro_y': -10.52,
    'gyro_z': -25.9,
    'heading': 10.68
  },
  {
    'time': 75942,
    'acc_x': 0.08,
    'acc_y': -0.15,
    'acc_z': -1.01,
    'gyro_x': 0.14,
    'gyro_y': -9.91,
    'gyro_z': -8.03,
    'heading': 11.93
  },
  {
    'time': 75976,
    'acc_x': 0.09,
    'acc_y': -0.15,
    'acc_z': -1.01,
    'gyro_x': 2.26,
    'gyro_y': -6.12,
    'gyro_z': -9.6,
    'heading': 11.06
  },
  {
    'time': 76011,
    'acc_x': 0.12,
    'acc_y': -0.12,
    'acc_z': -1.01,
    'gyro_x': 4.05,
    'gyro_y': -8.76,
    'gyro_z': -6.18,
    'heading': 12.15
  },
  {
    'time': 76046,
    'acc_x': 0.08,
    'acc_y': -0.18,
    'acc_z': -1,
    'gyro_x': 1.73,
    'gyro_y': -9.97,
    'gyro_z': 0.4,
    'heading': 12.07
  },
  {
    'time': 76081,
    'acc_x': 0.05,
    'acc_y': -0.2,
    'acc_z': -1.01,
    'gyro_x': 3.76,
    'gyro_y': -14.86,
    'gyro_z': -0.62,
    'heading': 11.37
  },
  {
    'time': 76116,
    'acc_x': 0.03,
    'acc_y': -0.2,
    'acc_z': -1.03,
    'gyro_x': 1.95,
    'gyro_y': -11.18,
    'gyro_z': 1.08,
    'heading': 10.99
  },
  {
    'time': 76151,
    'acc_x': -0.01,
    'acc_y': -0.22,
    'acc_z': -0.97,
    'gyro_x': 7.21,
    'gyro_y': -10.93,
    'gyro_z': -3.04,
    'heading': 9.94
  },
  {
    'time': 76186,
    'acc_x': 0.01,
    'acc_y': -0.2,
    'acc_z': -1.06,
    'gyro_x': -4.24,
    'gyro_y': -17.99,
    'gyro_z': -5.21,
    'heading': 11.31
  },
  {
    'time': 76221,
    'acc_x': 0,
    'acc_y': -0.21,
    'acc_z': -1.06,
    'gyro_x': -11.98,
    'gyro_y': 11.71,
    'gyro_z': -2.6,
    'heading': 12.36
  },
  {
    'time': 76256,
    'acc_x': -0.48,
    'acc_y': -0.56,
    'acc_z': 0.53,
    'gyro_x': -8.4,
    'gyro_y': 31.44,
    'gyro_z': 12.22,
    'heading': 11.8
  },
  {
    'time': 76291,
    'acc_x': 0.04,
    'acc_y': -0.03,
    'acc_z': -0.68,
    'gyro_x': -60.29,
    'gyro_y': -25.66,
    'gyro_z': -8.98,
    'heading': 11.23
  },
  {
    'time': 76326,
    'acc_x': -0.06,
    'acc_y': -0.07,
    'acc_z': -1,
    'gyro_x': -25.86,
    'gyro_y': -43.85,
    'gyro_z': -3.97,
    'heading': 12.53
  },
  {
    'time': 76362,
    'acc_x': -0.05,
    'acc_y': -0.1,
    'acc_z': -0.97,
    'gyro_x': -0.63,
    'gyro_y': -27.97,
    'gyro_z': 1.3,
    'heading': 11.34
  },
  {
    'time': 76397,
    'acc_x': -0.06,
    'acc_y': -0.06,
    'acc_z': -1,
    'gyro_x': 15.5,
    'gyro_y': -24.5,
    'gyro_z': 3.25,
    'heading': 10.83
  },
  {
    'time': 76432,
    'acc_x': -0.21,
    'acc_y': -0.21,
    'acc_z': -1.14,
    'gyro_x': 3.46,
    'gyro_y': -0.88,
    'gyro_z': -1.93,
    'heading': 10.29
  },
  {
    'time': 76466,
    'acc_x': 0.18,
    'acc_y': 0.12,
    'acc_z': -0.89,
    'gyro_x': -4.45,
    'gyro_y': -13.15,
    'gyro_z': -37.05,
    'heading': 10.11
  },
  {
    'time': 76501,
    'acc_x': -0.05,
    'acc_y': -0.07,
    'acc_z': -1.13,
    'gyro_x': -17.64,
    'gyro_y': 18.05,
    'gyro_z': 79.81,
    'heading': 11.34
  },
  {
    'time': 76536,
    'acc_x': -0.27,
    'acc_y': -0.33,
    'acc_z': -1.11,
    'gyro_x': 1.4,
    'gyro_y': 12.27,
    'gyro_z': -3.69,
    'heading': 8.94
  },
  {
    'time': 76571,
    'acc_x': 0.11,
    'acc_y': 0.05,
    'acc_z': -0.86,
    'gyro_x': -0.42,
    'gyro_y': -48.69,
    'gyro_z': -58.68,
    'heading': 8.59
  },
  {
    'time': 76606,
    'acc_x': 0.07,
    'acc_y': 0.2,
    'acc_z': -1.16,
    'gyro_x': -13.53,
    'gyro_y': 32.35,
    'gyro_z': 80.18,
    'heading': 8.99
  },
  {
    'time': 76641,
    'acc_x': -0.61,
    'acc_y': -0.56,
    'acc_z': -1.1,
    'gyro_x': 30.72,
    'gyro_y': 7.53,
    'gyro_z': -27.76,
    'heading': 9.93
  },
  {
    'time': 76676,
    'acc_x': 0.09,
    'acc_y': 0.1,
    'acc_z': -0.96,
    'gyro_x': 13.98,
    'gyro_y': -47.56,
    'gyro_z': -121.37,
    'heading': 8.49
  },
  {
    'time': 76711,
    'acc_x': 0.35,
    'acc_y': 0.35,
    'acc_z': -1.34,
    'gyro_x': -14.54,
    'gyro_y': 72.64,
    'gyro_z': 134.14,
    'heading': 11.25
  },
  {
    'time': 76746,
    'acc_x': -0.9,
    'acc_y': -1.08,
    'acc_z': -0.82,
    'gyro_x': 50.04,
    'gyro_y': 42.05,
    'gyro_z': 56.03,
    'heading': 10.54
  },
  {
    'time': 76781,
    'acc_x': -0.36,
    'acc_y': -0.44,
    'acc_z': -0.98,
    'gyro_x': 8.53,
    'gyro_y': -88.05,
    'gyro_z': -172.91,
    'heading': 8.99
  },
  {
    'time': 76816,
    'acc_x': 0.86,
    'acc_y': 0.91,
    'acc_z': -1.05,
    'gyro_x': -32.32,
    'gyro_y': -10.32,
    'gyro_z': 32.92,
    'heading': 10.39
  },
  {
    'time': 76851,
    'acc_x': -0.92,
    'acc_y': -0.9,
    'acc_z': -0.74,
    'gyro_x': 43.07,
    'gyro_y': 99.76,
    'gyro_z': 166.79,
    'heading': 10.37
  },
  {
    'time': 76886,
    'acc_x': -0.35,
    'acc_y': -0.41,
    'acc_z': -0.98,
    'gyro_x': 14.4,
    'gyro_y': -97.79,
    'gyro_z': -149.95,
    'heading': 10.74
  },
  {
    'time': 76921,
    'acc_x': 0.69,
    'acc_y': 0.76,
    'acc_z': -0.92,
    'gyro_x': -17.74,
    'gyro_y': -54.78,
    'gyro_z': -107.31,
    'heading': 10.81
  },
  {
    'time': 76955,
    'acc_x': -0.09,
    'acc_y': -0.09,
    'acc_z': -1.27,
    'gyro_x': -16.92,
    'gyro_y': 63.54,
    'gyro_z': 131.44,
    'heading': 11.11
  },
  {
    'time': 76991,
    'acc_x': -0.4,
    'acc_y': -0.49,
    'acc_z': -0.89,
    'gyro_x': 18.4,
    'gyro_y': -26.24,
    'gyro_z': -28.03,
    'heading': 12.45
  },
  {
    'time': 77026,
    'acc_x': 0,
    'acc_y': 0,
    'acc_z': -1.08,
    'gyro_x': 6.44,
    'gyro_y': -79.24,
    'gyro_z': -83.84,
    'heading': 11.76
  },
  {
    'time': 77061,
    'acc_x': 0.02,
    'acc_y': -0.01,
    'acc_z': -1.1,
    'gyro_x': -13.98,
    'gyro_y': -10.53,
    'gyro_z': 63.28,
    'heading': 11.71
  },
  {
    'time': 77095,
    'acc_x': -0.46,
    'acc_y': -0.49,
    'acc_z': -1.06,
    'gyro_x': 21.51,
    'gyro_y': -0.45,
    'gyro_z': 1.06,
    'heading': 12.9
  },
  {
    'time': 77130,
    'acc_x': -0.11,
    'acc_y': -0.12,
    'acc_z': -0.97,
    'gyro_x': 9.34,
    'gyro_y': -39.36,
    'gyro_z': -57.41,
    'heading': 12.84
  },
  {
    'time': 77165,
    'acc_x': 0.02,
    'acc_y': 0.01,
    'acc_z': -1.08,
    'gyro_x': -1.92,
    'gyro_y': -9.82,
    'gyro_z': 22.83,
    'heading': 12.64
  },
  {
    'time': 77200,
    'acc_x': -0.43,
    'acc_y': -0.49,
    'acc_z': -0.85,
    'gyro_x': 21.77,
    'gyro_y': 18.47,
    'gyro_z': 15.08,
    'heading': 11.31
  },
  {
    'time': 77236,
    'acc_x': -0.11,
    'acc_y': -0.13,
    'acc_z': -0.95,
    'gyro_x': 6.87,
    'gyro_y': -42.39,
    'gyro_z': -49.05,
    'heading': 12.83
  },
  {
    'time': 77271,
    'acc_x': 0.1,
    'acc_y': 0.09,
    'acc_z': -1.07,
    'gyro_x': -19.37,
    'gyro_y': 11.28,
    'gyro_z': 58.49,
    'heading': 11.72
  },
  {
    'time': 77305,
    'acc_x': -0.68,
    'acc_y': -0.74,
    'acc_z': -0.93,
    'gyro_x': 5.09,
    'gyro_y': 29,
    'gyro_z': 18.95,
    'heading': 13.17
  },
  {
    'time': 77340,
    'acc_x': -0.18,
    'acc_y': -0.14,
    'acc_z': -0.86,
    'gyro_x': -16.85,
    'gyro_y': -51.26,
    'gyro_z': -90.05,
    'heading': 12.12
  },
  {
    'time': 77375,
    'acc_x': 0.24,
    'acc_y': 0.25,
    'acc_z': -1.02,
    'gyro_x': -17.54,
    'gyro_y': -20.5,
    'gyro_z': -11.44,
    'heading': 12.4
  },
  {
    'time': 77411,
    'acc_x': -0.33,
    'acc_y': -0.24,
    'acc_z': -1.07,
    'gyro_x': 16.52,
    'gyro_y': 66.66,
    'gyro_z': 110.53,
    'heading': 11.84
  },
  {
    'time': 77445,
    'acc_x': -0.32,
    'acc_y': -0.3,
    'acc_z': -0.93,
    'gyro_x': 19.47,
    'gyro_y': -15.4,
    'gyro_z': -14.38,
    'heading': 12.78
  },
  {
    'time': 77480,
    'acc_x': 0.01,
    'acc_y': 0.06,
    'acc_z': -1.06,
    'gyro_x': -16.66,
    'gyro_y': -27.1,
    'gyro_z': -34.81,
    'heading': 10.99
  },
  {
    'time': 77515,
    'acc_x': -0.15,
    'acc_y': -0.13,
    'acc_z': -1.05,
    'gyro_x': -8.45,
    'gyro_y': 18.27,
    'gyro_z': 22.57,
    'heading': 10.83
  },
  {
    'time': 77550,
    'acc_x': -0.2,
    'acc_y': -0.23,
    'acc_z': -0.89,
    'gyro_x': 17.82,
    'gyro_y': 24.62,
    'gyro_z': 22.53,
    'heading': 12.9
  },
  {
    'time': 77585,
    'acc_x': -0.09,
    'acc_y': -0.1,
    'acc_z': -0.98,
    'gyro_x': -2.65,
    'gyro_y': -10.08,
    'gyro_z': 3.62,
    'heading': 12.15
  },
  {
    'time': 77620,
    'acc_x': -0.21,
    'acc_y': -0.23,
    'acc_z': -1.06,
    'gyro_x': 1.58,
    'gyro_y': 3.31,
    'gyro_z': 15.78,
    'heading': 10.54
  },
  {
    'time': 77655,
    'acc_x': -0.18,
    'acc_y': -0.19,
    'acc_z': -0.94,
    'gyro_x': 2.73,
    'gyro_y': 0.81,
    'gyro_z': -5.01,
    'heading': 11.4
  },
  {
    'time': 77689,
    'acc_x': -0.17,
    'acc_y': -0.13,
    'acc_z': -0.96,
    'gyro_x': -2.93,
    'gyro_y': -20.05,
    'gyro_z': -2.47,
    'heading': 10.66
  },
  {
    'time': 77725,
    'acc_x': -0.19,
    'acc_y': -0.18,
    'acc_z': -1.04,
    'gyro_x': 5.6,
    'gyro_y': -5.5,
    'gyro_z': -30.15,
    'heading': 11.74
  },
  {
    'time': 77760,
    'acc_x': 0.1,
    'acc_y': 0.11,
    'acc_z': -0.89,
    'gyro_x': -10.43,
    'gyro_y': 2.91,
    'gyro_z': 17.7,
    'heading': 11.17
  },
  {
    'time': 77795,
    'acc_x': -0.4,
    'acc_y': -0.41,
    'acc_z': -1.08,
    'gyro_x': -7.97,
    'gyro_y': 17.43,
    'gyro_z': 47.33,
    'heading': 10.81
  },
  {
    'time': 77830,
    'acc_x': -0.3,
    'acc_y': -0.32,
    'acc_z': -0.81,
    'gyro_x': 2.92,
    'gyro_y': -23.24,
    'gyro_z': -43.33,
    'heading': 11.6
  },
  {
    'time': 77865,
    'acc_x': 0.14,
    'acc_y': 0.12,
    'acc_z': -0.87,
    'gyro_x': 4.32,
    'gyro_y': -47.34,
    'gyro_z': -33.21,
    'heading': 11.14
  },
  {
    'time': 77899,
    'acc_x': -0.35,
    'acc_y': -0.26,
    'acc_z': -1.04,
    'gyro_x': 28.66,
    'gyro_y': 15.05,
    'gyro_z': 49.64,
    'heading': 12.83
  },
  {
    'time': 77935,
    'acc_x': -0.33,
    'acc_y': -0.33,
    'acc_z': -0.98,
    'gyro_x': 16.9,
    'gyro_y': -29.5,
    'gyro_z': -38.1,
    'heading': 10.67
  },
  {
    'time': 77970,
    'acc_x': 0.41,
    'acc_y': 0.39,
    'acc_z': -1.01,
    'gyro_x': -37.95,
    'gyro_y': -13.22,
    'gyro_z': 58.85,
    'heading': 11.68
  },
  {
    'time': 78005,
    'acc_x': -0.85,
    'acc_y': -0.74,
    'acc_z': -1.22,
    'gyro_x': -60.59,
    'gyro_y': 112.43,
    'gyro_z': 78.4,
    'heading': 12.46
  },
  {
    'time': 78039,
    'acc_x': -0.47,
    'acc_y': -0.54,
    'acc_z': -0.66,
    'gyro_x': -60.47,
    'gyro_y': 3.1,
    'gyro_z': -92.89,
    'heading': 11.65
  },
  {
    'time': 78074,
    'acc_x': 0.44,
    'acc_y': 0.58,
    'acc_z': -0.78,
    'gyro_x': -63.89,
    'gyro_y': -34.91,
    'gyro_z': -119.35,
    'heading': 10.46
  },
  {
    'time': 78109,
    'acc_x': -0.21,
    'acc_y': 0.01,
    'acc_z': -1.11,
    'gyro_x': -14.58,
    'gyro_y': -25.76,
    'gyro_z': 62.82,
    'heading': 10.56
  },
  {
    'time': 78144,
    'acc_x': -0.36,
    'acc_y': -0.29,
    'acc_z': -0.9,
    'gyro_x': 41.53,
    'gyro_y': -44.71,
    'gyro_z': -25.07,
    'heading': 10.71
  },
  {
    'time': 78180,
    'acc_x': 0.05,
    'acc_y': 0.18,
    'acc_z': -0.85,
    'gyro_x': 9.35,
    'gyro_y': -61.37,
    'gyro_z': -46.73,
    'heading': 12.42
  },
  {
    'time': 78214,
    'acc_x': -0.29,
    'acc_y': -0.18,
    'acc_z': -1.28,
    'gyro_x': 38.02,
    'gyro_y': -41.84,
    'gyro_z': 51.11,
    'heading': 9.94
  },
  {
    'time': 78249,
    'acc_x': -0.48,
    'acc_y': -0.33,
    'acc_z': -1.08,
    'gyro_x': 72.52,
    'gyro_y': -23.08,
    'gyro_z': -37.09,
    'heading': 12.46
  },
  {
    'time': 78284,
    'acc_x': 0.03,
    'acc_y': 0.24,
    'acc_z': -0.86,
    'gyro_x': 7.07,
    'gyro_y': -17.01,
    'gyro_z': -61.94,
    'heading': 11.31
  },
  {
    'time': 78319,
    'acc_x': -0.38,
    'acc_y': -0.17,
    'acc_z': -1.18,
    'gyro_x': 7.91,
    'gyro_y': -4.27,
    'gyro_z': 67.31,
    'heading': 10.71
  },
  {
    'time': 78354,
    'acc_x': -0.59,
    'acc_y': -0.5,
    'acc_z': -0.95,
    'gyro_x': 61.05,
    'gyro_y': -14.31,
    'gyro_z': -23.06,
    'heading': 12.43
  },
  {
    'time': 78389,
    'acc_x': -0.02,
    'acc_y': 0.12,
    'acc_z': -0.86,
    'gyro_x': 11.72,
    'gyro_y': -27.63,
    'gyro_z': -54.15,
    'heading': 10.79
  },
  {
    'time': 78424,
    'acc_x': -0.31,
    'acc_y': -0.13,
    'acc_z': -1.14,
    'gyro_x': -9.78,
    'gyro_y': 24.67,
    'gyro_z': 72.86,
    'heading': 12.26
  },
  {
    'time': 78459,
    'acc_x': -0.62,
    'acc_y': -0.56,
    'acc_z': -0.85,
    'gyro_x': 31.85,
    'gyro_y': -2.82,
    'gyro_z': -9.88,
    'heading': 12.9
  },
  {
    'time': 78494,
    'acc_x': -0.28,
    'acc_y': -0.16,
    'acc_z': -0.96,
    'gyro_x': 10.36,
    'gyro_y': -45.63,
    'gyro_z': -85.73,
    'heading': 11.57
  },
  {
    'time': 78529,
    'acc_x': -0.01,
    'acc_y': 0.13,
    'acc_z': -1.07,
    'gyro_x': -11.34,
    'gyro_y': 1.85,
    'gyro_z': 43.81,
    'heading': 13.29
  },
  {
    'time': 78564,
    'acc_x': -0.6,
    'acc_y': -0.51,
    'acc_z': -0.83,
    'gyro_x': 22.75,
    'gyro_y': 25.05,
    'gyro_z': 62.99,
    'heading': 13.55
  },
  {
    'time': 78599,
    'acc_x': -0.48,
    'acc_y': -0.4,
    'acc_z': -0.99,
    'gyro_x': 4.69,
    'gyro_y': -28.74,
    'gyro_z': -61.83,
    'heading': 11.89
  },
  {
    'time': 78634,
    'acc_x': 0.12,
    'acc_y': 0.23,
    'acc_z': -0.93,
    'gyro_x': -32.04,
    'gyro_y': 17.79,
    'gyro_z': 15.22,
    'heading': 12.84
  },
  {
    'time': 78669,
    'acc_x': -0.53,
    'acc_y': -0.41,
    'acc_z': -0.94,
    'gyro_x': 2.57,
    'gyro_y': 50.66,
    'gyro_z': 86.43,
    'heading': 12.68
  },
  {
    'time': 78703,
    'acc_x': -0.54,
    'acc_y': -0.49,
    'acc_z': -1,
    'gyro_x': 11.11,
    'gyro_y': -43.31,
    'gyro_z': -76.12,
    'heading': 11.93
  },
  {
    'time': 78739,
    'acc_x': 0.04,
    'acc_y': 0.19,
    'acc_z': -0.81,
    'gyro_x': -15.88,
    'gyro_y': -19.24,
    'gyro_z': -64.65,
    'heading': 12.86
  },
  {
    'time': 78773,
    'acc_x': -0.28,
    'acc_y': -0.26,
    'acc_z': -1.12,
    'gyro_x': -8.95,
    'gyro_y': 23.79,
    'gyro_z': 61.23,
    'heading': 13.82
  },
  {
    'time': 78808,
    'acc_x': -0.53,
    'acc_y': -0.52,
    'acc_z': -0.83,
    'gyro_x': 33.26,
    'gyro_y': -12.48,
    'gyro_z': 4.21,
    'heading': 12.42
  },
  {
    'time': 78844,
    'acc_x': -0.15,
    'acc_y': -0.03,
    'acc_z': -0.91,
    'gyro_x': -9.54,
    'gyro_y': -31.79,
    'gyro_z': -64.52,
    'heading': 12.11
  },
  {
    'time': 78879,
    'acc_x': -0.22,
    'acc_y': -0.1,
    'acc_z': -1.09,
    'gyro_x': -19.62,
    'gyro_y': 10.49,
    'gyro_z': 48.09,
    'heading': 13.65
  },
  {
    'time': 78914,
    'acc_x': -0.65,
    'acc_y': -0.54,
    'acc_z': -0.85,
    'gyro_x': 0.11,
    'gyro_y': -0.16,
    'gyro_z': -11.23,
    'heading': 12.83
  },
  {
    'time': 78948,
    'acc_x': -0.01,
    'acc_y': 0.17,
    'acc_z': -0.81,
    'gyro_x': -16.44,
    'gyro_y': -33.89,
    'gyro_z': -73.52,
    'heading': 11.51
  },
  {
    'time': 78983,
    'acc_x': -0.24,
    'acc_y': -0.04,
    'acc_z': -1.2,
    'gyro_x': -30.12,
    'gyro_y': 20.83,
    'gyro_z': 119.27,
    'heading': 13.64
  },
  {
    'time': 79018,
    'acc_x': -0.74,
    'acc_y': -0.69,
    'acc_z': -0.79,
    'gyro_x': 3.3,
    'gyro_y': 67.13,
    'gyro_z': 76.45,
    'heading': 11.76
  },
  {
    'time': 79054,
    'acc_x': -0.6,
    'acc_y': -0.49,
    'acc_z': -0.97,
    'gyro_x': -27.11,
    'gyro_y': -23.73,
    'gyro_z': -116.64,
    'heading': 12.51
  },
  {
    'time': 79088,
    'acc_x': 0.26,
    'acc_y': 0.56,
    'acc_z': -0.76,
    'gyro_x': -94.41,
    'gyro_y': 12.45,
    'gyro_z': -40.34,
    'heading': 11.34
  },
  {
    'time': 79123,
    'acc_x': -0.38,
    'acc_y': -0.31,
    'acc_z': -0.97,
    'gyro_x': -10.31,
    'gyro_y': 31.21,
    'gyro_z': 83.87,
    'heading': 13.15
  },
  {
    'time': 79158,
    'acc_x': -0.58,
    'acc_y': -0.43,
    'acc_z': -1,
    'gyro_x': 55.27,
    'gyro_y': -21.69,
    'gyro_z': -30.53,
    'heading': 12.94
  },
  {
    'time': 79193,
    'acc_x': -0.17,
    'acc_y': -0.02,
    'acc_z': -0.84,
    'gyro_x': 40.35,
    'gyro_y': -17.56,
    'gyro_z': -92.58,
    'heading': 12.78
  },
  {
    'time': 79228,
    'acc_x': -0.07,
    'acc_y': 0.16,
    'acc_z': -0.98,
    'gyro_x': 2.39,
    'gyro_y': 6.02,
    'gyro_z': 61.76,
    'heading': 12.94
  },
  {
    'time': 79263,
    'acc_x': -0.69,
    'acc_y': -0.63,
    'acc_z': -0.93,
    'gyro_x': 85.45,
    'gyro_y': 13.36,
    'gyro_z': 61.47,
    'heading': 13.23
  },
  {
    'time': 79298,
    'acc_x': -0.43,
    'acc_y': -0.38,
    'acc_z': -0.91,
    'gyro_x': 47.38,
    'gyro_y': -35.54,
    'gyro_z': -79.44,
    'heading': 12.68
  },
  {
    'time': 79333,
    'acc_x': 0.1,
    'acc_y': 0.2,
    'acc_z': -0.86,
    'gyro_x': -11.99,
    'gyro_y': 5.53,
    'gyro_z': -17.69,
    'heading': 13.76
  },
  {
    'time': 79368,
    'acc_x': -0.39,
    'acc_y': -0.37,
    'acc_z': -0.99,
    'gyro_x': 22.04,
    'gyro_y': 23.2,
    'gyro_z': 53.48,
    'heading': 14.6
  },
  {
    'time': 79403,
    'acc_x': -0.45,
    'acc_y': -0.4,
    'acc_z': -1.03,
    'gyro_x': 49.08,
    'gyro_y': -44.76,
    'gyro_z': -49.79,
    'heading': 12.9
  },
  {
    'time': 79438,
    'acc_x': -0.09,
    'acc_y': -0.05,
    'acc_z': -0.82,
    'gyro_x': -0.83,
    'gyro_y': -16.02,
    'gyro_z': -61.52,
    'heading': 13.02
  },
  {
    'time': 79473,
    'acc_x': -0.19,
    'acc_y': -0.21,
    'acc_z': -1.07,
    'gyro_x': 4.59,
    'gyro_y': 15.49,
    'gyro_z': 63.99,
    'heading': 13.65
  },
  {
    'time': 79508,
    'acc_x': -0.6,
    'acc_y': -0.66,
    'acc_z': -0.75,
    'gyro_x': 27.85,
    'gyro_y': -7.32,
    'gyro_z': 14.69,
    'heading': 14
  },
  {
    'time': 79543,
    'acc_x': -0.38,
    'acc_y': -0.32,
    'acc_z': -0.93,
    'gyro_x': -1.18,
    'gyro_y': -36.42,
    'gyro_z': -72.53,
    'heading': 15.41
  },
  {
    'time': 79578,
    'acc_x': -0.02,
    'acc_y': 0.01,
    'acc_z': -0.87,
    'gyro_x': -27.78,
    'gyro_y': -2.47,
    'gyro_z': -11.53,
    'heading': 14.86
  },
  {
    'time': 79613,
    'acc_x': -0.56,
    'acc_y': -0.65,
    'acc_z': -0.86,
    'gyro_x': -12.2,
    'gyro_y': 9.44,
    'gyro_z': 33.85,
    'heading': 14.07
  },
  {
    'time': 79647,
    'acc_x': -0.41,
    'acc_y': -0.4,
    'acc_z': -0.92,
    'gyro_x': 7.21,
    'gyro_y': -36.4,
    'gyro_z': -64.46,
    'heading': 13.82
  },
  {
    'time': 79683,
    'acc_x': -0.11,
    'acc_y': -0.06,
    'acc_z': -0.98,
    'gyro_x': -25.98,
    'gyro_y': 2.73,
    'gyro_z': 6.15,
    'heading': 14.18
  },
  {
    'time': 79718,
    'acc_x': -0.4,
    'acc_y': -0.44,
    'acc_z': -0.91,
    'gyro_x': 0.49,
    'gyro_y': 34.89,
    'gyro_z': 52.6,
    'heading': 14.81
  },
  {
    'time': 79753,
    'acc_x': -0.4,
    'acc_y': -0.43,
    'acc_z': -0.79,
    'gyro_x': 9.03,
    'gyro_y': -14.44,
    'gyro_z': -17.59,
    'heading': 16.01
  },
  {
    'time': 79788,
    'acc_x': 0.01,
    'acc_y': 0.09,
    'acc_z': -0.9,
    'gyro_x': -32.21,
    'gyro_y': 2.1,
    'gyro_z': 10.96,
    'heading': 14.18
  },
  {
    'time': 79823,
    'acc_x': -0.44,
    'acc_y': -0.43,
    'acc_z': -1.03,
    'gyro_x': -25.76,
    'gyro_y': 23.11,
    'gyro_z': 95.79,
    'heading': 14.8
  },
  {
    'time': 79857,
    'acc_x': -0.63,
    'acc_y': -0.48,
    'acc_z': -0.87,
    'gyro_x': 10.94,
    'gyro_y': -20.93,
    'gyro_z': -10.89,
    'heading': 14
  },
  {
    'time': 79892,
    'acc_x': -0.42,
    'acc_y': -0.34,
    'acc_z': -1.04,
    'gyro_x': 5.84,
    'gyro_y': -24.82,
    'gyro_z': -82.02,
    'heading': 12.99
  },
  {
    'time': 79927,
    'acc_x': -0.06,
    'acc_y': 0.06,
    'acc_z': -0.98,
    'gyro_x': -9.28,
    'gyro_y': 7.36,
    'gyro_z': -7.47,
    'heading': 14.11
  },
  {
    'time': 79962,
    'acc_x': -0.36,
    'acc_y': -0.35,
    'acc_z': -0.89,
    'gyro_x': 2.17,
    'gyro_y': 21.11,
    'gyro_z': 39.71,
    'heading': 14
  },
  {
    'time': 79997,
    'acc_x': -0.45,
    'acc_y': -0.39,
    'acc_z': -0.97,
    'gyro_x': 20.39,
    'gyro_y': -22.25,
    'gyro_z': -32.63,
    'heading': 14.36
  },
  {
    'time': 80032,
    'acc_x': -0.25,
    'acc_y': -0.26,
    'acc_z': -0.94,
    'gyro_x': -5.33,
    'gyro_y': -7.9,
    'gyro_z': -47.62,
    'heading': 14.89
  },
  {
    'time': 80068,
    'acc_x': -0.46,
    'acc_y': -0.49,
    'acc_z': -0.9,
    'gyro_x': -18.85,
    'gyro_y': -30.18,
    'gyro_z': -82.18,
    'heading': 14.6
  },
  {
    'time': 80102,
    'acc_x': 0.03,
    'acc_y': 0.11,
    'acc_z': -0.74,
    'gyro_x': -33.24,
    'gyro_y': -33.24,
    'gyro_z': -82.11,
    'heading': 14.25
  },
  {
    'time': 80137,
    'acc_x': -0.2,
    'acc_y': -0.19,
    'acc_z': -1.18,
    'gyro_x': -16.82,
    'gyro_y': -8.13,
    'gyro_z': 60.01,
    'heading': 17.01
  },
  {
    'time': 80172,
    'acc_x': -0.41,
    'acc_y': -0.29,
    'acc_z': -0.79,
    'gyro_x': -3.08,
    'gyro_y': 35.37,
    'gyro_z': 67.4,
    'heading': 16.81
  },
  {
    'time': 80207,
    'acc_x': -0.57,
    'acc_y': -0.54,
    'acc_z': -1.1,
    'gyro_x': 45.98,
    'gyro_y': -31.82,
    'gyro_z': -52.21,
    'heading': 16.07
  },
  {
    'time': 80242,
    'acc_x': -0.19,
    'acc_y': -0.2,
    'acc_z': -0.87,
    'gyro_x': 24.09,
    'gyro_y': -0.83,
    'gyro_z': -105.19,
    'heading': 15.32
  },
  {
    'time': 80277,
    'acc_x': 0,
    'acc_y': 0.04,
    'acc_z': -0.93,
    'gyro_x': -9.91,
    'gyro_y': 19.33,
    'gyro_z': 32.68,
    'heading': 17.04
  },
  {
    'time': 80312,
    'acc_x': -0.39,
    'acc_y': -0.4,
    'acc_z': -0.8,
    'gyro_x': 26.61,
    'gyro_y': 24.42,
    'gyro_z': 71.72,
    'heading': 17.72
  },
  {
    'time': 80347,
    'acc_x': -0.48,
    'acc_y': -0.51,
    'acc_z': -0.97,
    'gyro_x': 22.33,
    'gyro_y': -34.01,
    'gyro_z': -32.48,
    'heading': 15.62
  },
  {
    'time': 80381,
    'acc_x': -0.14,
    'acc_y': -0.12,
    'acc_z': -0.93,
    'gyro_x': -5.77,
    'gyro_y': -10.48,
    'gyro_z': -31.07,
    'heading': 15.55
  },
  {
    'time': 80417,
    'acc_x': -0.26,
    'acc_y': -0.34,
    'acc_z': -0.99,
    'gyro_x': -9.79,
    'gyro_y': 26.85,
    'gyro_z': 41.89,
    'heading': 15.06
  },
  {
    'time': 80452,
    'acc_x': -0.44,
    'acc_y': -0.51,
    'acc_z': -0.89,
    'gyro_x': 15.11,
    'gyro_y': -9.47,
    'gyro_z': -2.09,
    'heading': 16.82
  },
  {
    'time': 80487,
    'acc_x': -0.18,
    'acc_y': -0.21,
    'acc_z': -0.84,
    'gyro_x': -25.63,
    'gyro_y': -4.98,
    'gyro_z': -50.9,
    'heading': 15.6
  },
  {
    'time': 80522,
    'acc_x': -0.04,
    'acc_y': 0.01,
    'acc_z': -0.98,
    'gyro_x': -42.37,
    'gyro_y': 68.48,
    'gyro_z': 75.57,
    'heading': 17.04
  },
  {
    'time': 80557,
    'acc_x': -0.56,
    'acc_y': -0.59,
    'acc_z': -0.81,
    'gyro_x': -7.65,
    'gyro_y': 27.36,
    'gyro_z': 62.31,
    'heading': 16.22
  },
  {
    'time': 80592,
    'acc_x': -0.51,
    'acc_y': -0.49,
    'acc_z': -1.01,
    'gyro_x': 7.86,
    'gyro_y': -43.99,
    'gyro_z': -48.08,
    'heading': 15.36
  },
  {
    'time': 80626,
    'acc_x': 0,
    'acc_y': 0.01,
    'acc_z': -0.95,
    'gyro_x': -16.99,
    'gyro_y': -12.4,
    'gyro_z': -47.07,
    'heading': 15.78
  },
  {
    'time': 80661,
    'acc_x': -0.27,
    'acc_y': -0.32,
    'acc_z': -1.02,
    'gyro_x': -7.98,
    'gyro_y': 32.01,
    'gyro_z': 69.98,
    'heading': 14.52
  },
  {
    'time': 80697,
    'acc_x': -0.5,
    'acc_y': -0.57,
    'acc_z': -0.84,
    'gyro_x': 24.49,
    'gyro_y': 4.27,
    'gyro_z': 24.18,
    'heading': 15.77
  },
  {
    'time': 80732,
    'acc_x': -0.37,
    'acc_y': -0.37,
    'acc_z': -0.97,
    'gyro_x': 0.04,
    'gyro_y': -40.53,
    'gyro_z': -59.27,
    'heading': 15.28
  },
  {
    'time': 80767,
    'acc_x': -0.11,
    'acc_y': -0.07,
    'acc_z': -0.97,
    'gyro_x': -15.11,
    'gyro_y': -2.06,
    'gyro_z': -9.24,
    'heading': 15.7
  },
  {
    'time': 80802,
    'acc_x': -0.59,
    'acc_y': -0.66,
    'acc_z': -0.7,
    'gyro_x': 11.05,
    'gyro_y': 6.12,
    'gyro_z': 2.15,
    'heading': 15.27
  },
  {
    'time': 80836,
    'acc_x': -0.37,
    'acc_y': -0.33,
    'acc_z': -1.14,
    'gyro_x': 12.34,
    'gyro_y': -80.59,
    'gyro_z': -176.42,
    'heading': 15.67
  },
  {
    'time': 80871,
    'acc_x': -0.13,
    'acc_y': -0.04,
    'acc_z': -0.87,
    'gyro_x': -35.9,
    'gyro_y': -18.67,
    'gyro_z': -50.75,
    'heading': 16.63
  },
  {
    'time': 80906,
    'acc_x': -0.2,
    'acc_y': -0.28,
    'acc_z': -0.95,
    'gyro_x': -14.79,
    'gyro_y': 46.08,
    'gyro_z': 58.14,
    'heading': 17.14
  },
  {
    'time': 80942,
    'acc_x': -0.31,
    'acc_y': -0.41,
    'acc_z': -0.9,
    'gyro_x': 6.3,
    'gyro_y': 43.77,
    'gyro_z': 94.5,
    'heading': 19.07
  },
  {
    'time': 80976,
    'acc_x': -0.45,
    'acc_y': -0.53,
    'acc_z': -0.87,
    'gyro_x': 4.02,
    'gyro_y': 8.81,
    'gyro_z': 30.15,
    'heading': 18.53
  },
  {
    'time': 81011,
    'acc_x': -0.17,
    'acc_y': -0.18,
    'acc_z': -0.91,
    'gyro_x': -17.11,
    'gyro_y': -3.6,
    'gyro_z': -21.95,
    'heading': 15.07
  },
  {
    'time': 81046,
    'acc_x': -0.16,
    'acc_y': -0.23,
    'acc_z': -1.05,
    'gyro_x': -26.05,
    'gyro_y': 7.5,
    'gyro_z': 42.59,
    'heading': 16.28
  },
  {
    'time': 81081,
    'acc_x': -0.46,
    'acc_y': -0.51,
    'acc_z': -0.9,
    'gyro_x': 14.07,
    'gyro_y': 9.47,
    'gyro_z': 25.4,
    'heading': 15.9
  },
  {
    'time': 81116,
    'acc_x': -0.29,
    'acc_y': -0.35,
    'acc_z': -0.92,
    'gyro_x': 7.86,
    'gyro_y': -28.29,
    'gyro_z': -49.81,
    'heading': 14.99
  },
  {
    'time': 81151,
    'acc_x': -0.08,
    'acc_y': -0.05,
    'acc_z': -1,
    'gyro_x': -8.34,
    'gyro_y': 5.96,
    'gyro_z': 6.35,
    'heading': 14.93
  },
  {
    'time': 81186,
    'acc_x': -0.5,
    'acc_y': -0.54,
    'acc_z': -0.81,
    'gyro_x': 12.18,
    'gyro_y': 17.27,
    'gyro_z': 27.97,
    'heading': 13.59
  },
  {
    'time': 81221,
    'acc_x': -0.32,
    'acc_y': -0.35,
    'acc_z': -0.95,
    'gyro_x': 14.27,
    'gyro_y': -53.02,
    'gyro_z': -94.12,
    'heading': 15.9
  },
  {
    'time': 81256,
    'acc_x': 0.11,
    'acc_y': 0.12,
    'acc_z': -0.88,
    'gyro_x': -28.65,
    'gyro_y': 2.49,
    'gyro_z': -6.86,
    'heading': 16.71
  },
  {
    'time': 81291,
    'acc_x': -0.3,
    'acc_y': -0.37,
    'acc_z': -1.04,
    'gyro_x': -8.55,
    'gyro_y': 47.66,
    'gyro_z': 89.52,
    'heading': 16.07
  },
  {
    'time': 81326,
    'acc_x': -0.61,
    'acc_y': -0.75,
    'acc_z': -0.81,
    'gyro_x': 30.44,
    'gyro_y': 4.23,
    'gyro_z': 30.44,
    'heading': 15.1
  },
  {
    'time': 81361,
    'acc_x': -0.36,
    'acc_y': -0.4,
    'acc_z': -0.95,
    'gyro_x': 8.98,
    'gyro_y': -39.21,
    'gyro_z': -71.03,
    'heading': 15.26
  },
  {
    'time': 81396,
    'acc_x': 0.07,
    'acc_y': 0.16,
    'acc_z': -0.99,
    'gyro_x': -41.29,
    'gyro_y': 23.15,
    'gyro_z': 37.6,
    'heading': 15.35
  },
  {
    'time': 81430,
    'acc_x': -0.37,
    'acc_y': -0.41,
    'acc_z': -0.98,
    'gyro_x': -2.98,
    'gyro_y': 60.51,
    'gyro_z': 82.31,
    'heading': 15.57
  },
  {
    'time': 81465,
    'acc_x': -0.5,
    'acc_y': -0.59,
    'acc_z': -0.93,
    'gyro_x': 26.27,
    'gyro_y': -39.32,
    'gyro_z': -35.51,
    'heading': 16.01
  },
  {
    'time': 81501,
    'acc_x': -0.19,
    'acc_y': -0.21,
    'acc_z': -0.96,
    'gyro_x': 0.08,
    'gyro_y': -36.32,
    'gyro_z': -87.94,
    'heading': 15.47
  },
  {
    'time': 81536,
    'acc_x': 0.04,
    'acc_y': 0.1,
    'acc_z': -0.97,
    'gyro_x': -44.59,
    'gyro_y': 30.98,
    'gyro_z': 31.22,
    'heading': 16.68
  },
  {
    'time': 81571,
    'acc_x': -0.52,
    'acc_y': -0.62,
    'acc_z': -0.78,
    'gyro_x': 14.71,
    'gyro_y': 11.41,
    'gyro_z': 41.59,
    'heading': 16.22
  },
  {
    'time': 81605,
    'acc_x': -0.36,
    'acc_y': -0.43,
    'acc_z': -1,
    'gyro_x': 23.15,
    'gyro_y': -70.19,
    'gyro_z': -103.78,
    'heading': 15.8
  },
  {
    'time': 81640,
    'acc_x': 0.05,
    'acc_y': 0.15,
    'acc_z': -0.8,
    'gyro_x': -3.16,
    'gyro_y': -18.25,
    'gyro_z': -86.08,
    'heading': 16.11
  },
  {
    'time': 81676,
    'acc_x': -0.38,
    'acc_y': -0.45,
    'acc_z': -0.94,
    'gyro_x': -4.18,
    'gyro_y': 31.53,
    'gyro_z': 39.96,
    'heading': 17.65
  },
  {
    'time': 81711,
    'acc_x': -0.41,
    'acc_y': -0.41,
    'acc_z': -0.94,
    'gyro_x': 45,
    'gyro_y': -34.87,
    'gyro_z': -139.31,
    'heading': 17.33
  },
  {
    'time': 81745,
    'acc_x': -0.18,
    'acc_y': -0.38,
    'acc_z': -0.84,
    'gyro_x': 30.29,
    'gyro_y': -10.67,
    'gyro_z': -124.32,
    'heading': 18.73
  },
  {
    'time': 81780,
    'acc_x': -0.01,
    'acc_y': -0.19,
    'acc_z': -0.81,
    'gyro_x': -38.75,
    'gyro_y': 7.67,
    'gyro_z': 0.44,
    'heading': 18.34
  },
  {
    'time': 81815,
    'acc_x': -0.27,
    'acc_y': -0.29,
    'acc_z': -0.84,
    'gyro_x': -29.46,
    'gyro_y': 69.69,
    'gyro_z': 112.53,
    'heading': 20.46
  },
  {
    'time': 81850,
    'acc_x': -0.56,
    'acc_y': -0.81,
    'acc_z': -0.74,
    'gyro_x': 41.14,
    'gyro_y': -9.08,
    'gyro_z': 11.44,
    'heading': 17.86
  },
  {
    'time': 81885,
    'acc_x': -0.25,
    'acc_y': -0.41,
    'acc_z': -1.03,
    'gyro_x': 2.08,
    'gyro_y': -35.67,
    'gyro_z': -85.21,
    'heading': 18.74
  },
  {
    'time': 81920,
    'acc_x': 0.08,
    'acc_y': 0.02,
    'acc_z': -0.89,
    'gyro_x': -38.87,
    'gyro_y': -2.83,
    'gyro_z': -32.13,
    'heading': 19.49
  },
  {
    'time': 81955,
    'acc_x': -0.15,
    'acc_y': -0.26,
    'acc_z': -0.96,
    'gyro_x': -31.08,
    'gyro_y': 45.18,
    'gyro_z': 96.48,
    'heading': 20.85
  },
  {
    'time': 81990,
    'acc_x': -0.52,
    'acc_y': -0.79,
    'acc_z': -0.82,
    'gyro_x': 33.44,
    'gyro_y': 5.48,
    'gyro_z': 39.31,
    'heading': 19.24
  },
  {
    'time': 82025,
    'acc_x': -0.28,
    'acc_y': -0.39,
    'acc_z': -0.95,
    'gyro_x': 28.5,
    'gyro_y': -32.47,
    'gyro_z': -58.78,
    'heading': 16.71
  },
  {
    'time': 82060,
    'acc_x': 0.01,
    'acc_y': -0.03,
    'acc_z': -0.95,
    'gyro_x': -27.9,
    'gyro_y': 4.85,
    'gyro_z': -18.09,
    'heading': 19.09
  },
  {
    'time': 82095,
    'acc_x': -0.19,
    'acc_y': -0.33,
    'acc_z': -0.91,
    'gyro_x': -16.35,
    'gyro_y': 37.22,
    'gyro_z': 59.11,
    'heading': 19.33
  },
  {
    'time': 82130,
    'acc_x': -0.3,
    'acc_y': -0.51,
    'acc_z': -0.88,
    'gyro_x': 15.66,
    'gyro_y': -19.56,
    'gyro_z': -3.98,
    'heading': 18.03
  },
  {
    'time': 82165,
    'acc_x': -0.22,
    'acc_y': -0.32,
    'acc_z': -1,
    'gyro_x': -3.1,
    'gyro_y': -19.23,
    'gyro_z': -29.21,
    'heading': 18.73
  },
  {
    'time': 82200,
    'acc_x': -0.16,
    'acc_y': -0.26,
    'acc_z': -0.96,
    'gyro_x': -19.25,
    'gyro_y': 12.4,
    'gyro_z': 1.7,
    'heading': 18.34
  },
  {
    'time': 82235,
    'acc_x': -0.26,
    'acc_y': -0.41,
    'acc_z': -0.89,
    'gyro_x': 9.63,
    'gyro_y': -4.03,
    'gyro_z': -2.31,
    'heading': 17.65
  },
  {
    'time': 82270,
    'acc_x': -0.18,
    'acc_y': -0.3,
    'acc_z': -0.94,
    'gyro_x': -1.91,
    'gyro_y': -12.88,
    'gyro_z': -18.94,
    'heading': 17.79
  },
  {
    'time': 82305,
    'acc_x': -0.22,
    'acc_y': -0.34,
    'acc_z': -0.87,
    'gyro_x': -15.02,
    'gyro_y': 10.27,
    'gyro_z': 1.79,
    'heading': 18.34
  },
  {
    'time': 82340,
    'acc_x': -0.21,
    'acc_y': -0.29,
    'acc_z': -1.04,
    'gyro_x': 4.34,
    'gyro_y': -29.98,
    'gyro_z': -105.98,
    'heading': 18.24
  },
  {
    'time': 82374,
    'acc_x': -0.07,
    'acc_y': -0.09,
    'acc_z': -0.92,
    'gyro_x': 5.94,
    'gyro_y': -12.08,
    'gyro_z': -48,
    'heading': 17.89
  },
  {
    'time': 82409,
    'acc_x': -0.1,
    'acc_y': -0.23,
    'acc_z': -1.11,
    'gyro_x': -35.02,
    'gyro_y': 29.7,
    'gyro_z': 56.15,
    'heading': 19.8
  },
  {
    'time': 82445,
    'acc_x': -0.2,
    'acc_y': -0.27,
    'acc_z': -1.01,
    'gyro_x': -33.56,
    'gyro_y': 65.53,
    'gyro_z': 103.48,
    'heading': 17.52
  },
  {
    'time': 82480,
    'acc_x': -0.37,
    'acc_y': -0.6,
    'acc_z': -0.8,
    'gyro_x': 26.62,
    'gyro_y': 10.6,
    'gyro_z': 1.24,
    'heading': 18.79
  },
  {
    'time': 82515,
    'acc_x': -0.05,
    'acc_y': -0.13,
    'acc_z': -0.98,
    'gyro_x': 2.06,
    'gyro_y': -8.63,
    'gyro_z': -48.01,
    'heading': 19.08
  },
  {
    'time': 82550,
    'acc_x': 0.04,
    'acc_y': 0.01,
    'acc_z': -0.95,
    'gyro_x': -43.62,
    'gyro_y': 29.15,
    'gyro_z': 32.93,
    'heading': 19.9
  },
  {
    'time': 82584,
    'acc_x': -0.25,
    'acc_y': -0.37,
    'acc_z': -0.91,
    'gyro_x': -26.83,
    'gyro_y': 59.54,
    'gyro_z': 77.56,
    'heading': 17.65
  },
  {
    'time': 82619,
    'acc_x': -0.21,
    'acc_y': -0.45,
    'acc_z': -1.13,
    'gyro_x': -4.1,
    'gyro_y': -7.72,
    'gyro_z': 0.43,
    'heading': 17.59
  },
  {
    'time': 82654,
    'acc_x': 0.1,
    'acc_y': 0.06,
    'acc_z': -0.89,
    'gyro_x': -81.61,
    'gyro_y': 29.98,
    'gyro_z': 35.66,
    'heading': 16.91
  },
  {
    'time': 82689,
    'acc_x': -0.41,
    'acc_y': -0.59,
    'acc_z': -0.96,
    'gyro_x': -81.11,
    'gyro_y': 69.54,
    'gyro_z': 95.21,
    'heading': 16.85
  },
  {
    'time': 82724,
    'acc_x': -0.27,
    'acc_y': -0.45,
    'acc_z': -0.88,
    'gyro_x': 20.42,
    'gyro_y': -81.92,
    'gyro_z': -78.38,
    'heading': 16.71
  },
  {
    'time': 82759,
    'acc_x': 0.14,
    'acc_y': 0.23,
    'acc_z': -0.94,
    'gyro_x': 31.98,
    'gyro_y': -76.2,
    'gyro_z': -82.28,
    'heading': 17.03
  },
  {
    'time': 82794,
    'acc_x': -0.07,
    'acc_y': -0.04,
    'acc_z': -1.27,
    'gyro_x': -13.5,
    'gyro_y': 10.21,
    'gyro_z': 76.02,
    'heading': 19.28
  },
  {
    'time': 82829,
    'acc_x': -0.45,
    'acc_y': -0.58,
    'acc_z': -0.91,
    'gyro_x': 88.33,
    'gyro_y': -10.9,
    'gyro_z': 56.24,
    'heading': 17.6
  },
  {
    'time': 82864,
    'acc_x': -0.09,
    'acc_y': -0.08,
    'acc_z': -0.98,
    'gyro_x': 64.64,
    'gyro_y': -34.45,
    'gyro_z': -0.99,
    'heading': 17.39
  },
  {
    'time': 82899,
    'acc_x': -0.22,
    'acc_y': -0.35,
    'acc_z': -1.19,
    'gyro_x': 1.58,
    'gyro_y': 49.49,
    'gyro_z': 59.05,
    'heading': 17.26
  },
  {
    'time': 82934,
    'acc_x': -0.29,
    'acc_y': -0.49,
    'acc_z': -0.83,
    'gyro_x': 60.32,
    'gyro_y': 0.34,
    'gyro_z': 9.08,
    'heading': 18.39
  },
  {
    'time': 82969,
    'acc_x': 0.01,
    'acc_y': -0.11,
    'acc_z': -1.08,
    'gyro_x': 21.15,
    'gyro_y': -13.98,
    'gyro_z': 1.24,
    'heading': 16.68
  },
  {
    'time': 83004,
    'acc_x': -0.39,
    'acc_y': -0.59,
    'acc_z': -0.91,
    'gyro_x': -5.24,
    'gyro_y': 14.56,
    'gyro_z': 12.26,
    'heading': 17.5
  },
  {
    'time': 83039,
    'acc_x': -0.19,
    'acc_y': -0.36,
    'acc_z': -0.92,
    'gyro_x': 45.6,
    'gyro_y': -89.95,
    'gyro_z': -70.54,
    'heading': 17.23
  },
  {
    'time': 83074,
    'acc_x': 0.09,
    'acc_y': 0.07,
    'acc_z': -1.01,
    'gyro_x': -1.51,
    'gyro_y': -46.39,
    'gyro_z': -24.83,
    'heading': 17.04
  },
  {
    'time': 83108,
    'acc_x': -0.3,
    'acc_y': -0.5,
    'acc_z': -1.28,
    'gyro_x': -15.74,
    'gyro_y': 111.27,
    'gyro_z': 37.82,
    'heading': 16.71
  },
  {
    'time': 83144,
    'acc_x': -0.13,
    'acc_y': -0.33,
    'acc_z': -1.26,
    'gyro_x': -16.55,
    'gyro_y': 164.85,
    'gyro_z': 15.85,
    'heading': 18.82
  },
  {
    'time': 83179,
    'acc_x': -0.27,
    'acc_y': -0.23,
    'acc_z': 0.36,
    'gyro_x': 25.36,
    'gyro_y': 213.18,
    'gyro_z': 57.63,
    'heading': 16.31
  },
  {
    'time': 83213,
    'acc_x': -0.09,
    'acc_y': -0.47,
    'acc_z': -0.84,
    'gyro_x': -27.73,
    'gyro_y': 23.56,
    'gyro_z': 1.9,
    'heading': 18.19
  },
  {
    'time': 83248,
    'acc_x': 0.18,
    'acc_y': -0.22,
    'acc_z': -1,
    'gyro_x': -21.63,
    'gyro_y': 57.69,
    'gyro_z': 35.49,
    'heading': 17.07
  },
  {
    'time': 83283,
    'acc_x': 0.03,
    'acc_y': -0.35,
    'acc_z': -0.79,
    'gyro_x': -16.59,
    'gyro_y': 72.75,
    'gyro_z': 10.47,
    'heading': 17.79
  },
  {
    'time': 83319,
    'acc_x': 0.04,
    'acc_y': -0.22,
    'acc_z': -0.69,
    'gyro_x': -27.52,
    'gyro_y': 28.59,
    'gyro_z': -17.71,
    'heading': 16.97
  },
  {
    'time': 83354,
    'acc_x': 0.15,
    'acc_y': -0.15,
    'acc_z': -0.88,
    'gyro_x': -48.93,
    'gyro_y': -24.04,
    'gyro_z': 8.1,
    'heading': 13.65
  },
  {
    'time': 83388,
    'acc_x': 0.1,
    'acc_y': -0.26,
    'acc_z': -1.17,
    'gyro_x': -47.95,
    'gyro_y': -27.06,
    'gyro_z': 41.82,
    'heading': 14.66
  },
  {
    'time': 83423,
    'acc_x': -0.05,
    'acc_y': -0.34,
    'acc_z': -1.12,
    'gyro_x': -41.63,
    'gyro_y': -21.95,
    'gyro_z': 7.09,
    'heading': 13.69
  },
  {
    'time': 83458,
    'acc_x': 0.12,
    'acc_y': -0.03,
    'acc_z': -0.93,
    'gyro_x': -10.01,
    'gyro_y': -17.27,
    'gyro_z': 4.45,
    'heading': 12.42
  },
  {
    'time': 83493,
    'acc_x': 0.21,
    'acc_y': -0.09,
    'acc_z': -1.1,
    'gyro_x': -31.11,
    'gyro_y': -61.76,
    'gyro_z': 21.19,
    'heading': 12.05
  },
  {
    'time': 83529,
    'acc_x': -0.02,
    'acc_y': -0.24,
    'acc_z': -1.05,
    'gyro_x': -3.01,
    'gyro_y': -10.89,
    'gyro_z': 0.81,
    'heading': 10.64
  },
  {
    'time': 83563,
    'acc_x': 0.08,
    'acc_y': -0.06,
    'acc_z': -1.02,
    'gyro_x': -20.41,
    'gyro_y': 1.89,
    'gyro_z': -3.77,
    'heading': 11.09
  },
  {
    'time': 83598,
    'acc_x': 0.05,
    'acc_y': -0.04,
    'acc_z': -0.89,
    'gyro_x': -49,
    'gyro_y': 13.5,
    'gyro_z': -23.81,
    'heading': 9.23
  },
  {
    'time': 83633,
    'acc_x': 0.02,
    'acc_y': -0.08,
    'acc_z': -0.94,
    'gyro_x': -93.12,
    'gyro_y': 19.63,
    'gyro_z': -33.23,
    'heading': 9.25
  },
  {
    'time': 83668,
    'acc_x': 0.02,
    'acc_y': 0.03,
    'acc_z': -1.02,
    'gyro_x': -86.52,
    'gyro_y': -21.95,
    'gyro_z': 12.03,
    'heading': 8.13
  },
  {
    'time': 83703,
    'acc_x': -0.01,
    'acc_y': 0.02,
    'acc_z': -1.09,
    'gyro_x': -9.58,
    'gyro_y': -12.02,
    'gyro_z': -15.71,
    'heading': 7.51
  },
  {
    'time': 83738,
    'acc_x': 0.11,
    'acc_y': 0.77,
    'acc_z': -0.36,
    'gyro_x': 250.13,
    'gyro_y': -60.95,
    'gyro_z': 84.96,
    'heading': 9.3
  },
  {
    'time': 83773,
    'acc_x': 0.08,
    'acc_y': -0.34,
    'acc_z': -1.39,
    'gyro_x': -187.63,
    'gyro_y': -8.31,
    'gyro_z': 123.12,
    'heading': 8.11
  },
  {
    'time': 83808,
    'acc_x': 0.14,
    'acc_y': 0.05,
    'acc_z': -1.64,
    'gyro_x': -108.05,
    'gyro_y': 7.77,
    'gyro_z': 8.43,
    'heading': 1.78
  },
  {
    'time': 83843,
    'acc_x': 0.03,
    'acc_y': 0.25,
    'acc_z': -0.92,
    'gyro_x': 230.25,
    'gyro_y': 87.91,
    'gyro_z': -31.67,
    'heading': 358.09
  },
  {
    'time': 83878,
    'acc_x': 0.09,
    'acc_y': 0.15,
    'acc_z': -1.27,
    'gyro_x': 130.6,
    'gyro_y': 75.73,
    'gyro_z': -39.44,
    'heading': 359.67
  },
  {
    'time': 83913,
    'acc_x': 0.18,
    'acc_y': -0.06,
    'acc_z': -0.43,
    'gyro_x': 123.02,
    'gyro_y': 83.79,
    'gyro_z': -38.92,
    'heading': 2.4
  },
  {
    'time': 83948,
    'acc_x': 0.09,
    'acc_y': 0.13,
    'acc_z': -1.22,
    'gyro_x': 70.87,
    'gyro_y': -19.66,
    'gyro_z': -38.58,
    'heading': 3.13
  },
  {
    'time': 83983,
    'acc_x': 0.12,
    'acc_y': -0.06,
    'acc_z': -1.15,
    'gyro_x': 106.37,
    'gyro_y': 34.98,
    'gyro_z': -8.21,
    'heading': 3.89
  },
  {
    'time': 84018,
    'acc_x': 0.14,
    'acc_y': 0.1,
    'acc_z': -0.77,
    'gyro_x': 72.42,
    'gyro_y': 11.53,
    'gyro_z': -17.24,
    'heading': 6.45
  },
  {
    'time': 84053,
    'acc_x': 0.16,
    'acc_y': 0.22,
    'acc_z': -1,
    'gyro_x': 8.77,
    'gyro_y': -13.21,
    'gyro_z': -3.6,
    'heading': 6.55
  },
  {
    'time': 84088,
    'acc_x': 0.15,
    'acc_y': 0.13,
    'acc_z': -0.96,
    'gyro_x': -23.82,
    'gyro_y': -17.26,
    'gyro_z': 4.54,
    'heading': 4.44
  },
  {
    'time': 84122,
    'acc_x': 0.14,
    'acc_y': 0,
    'acc_z': -1.05,
    'gyro_x': -17.95,
    'gyro_y': -19.25,
    'gyro_z': 4.21,
    'heading': 3.02
  },
  {
    'time': 84157,
    'acc_x': 0.12,
    'acc_y': 0.13,
    'acc_z': -1,
    'gyro_x': -44.09,
    'gyro_y': -9.19,
    'gyro_z': 15.05,
    'heading': 2.04
  },
  {
    'time': 84192,
    'acc_x': 0.16,
    'acc_y': -0.07,
    'acc_z': -1.07,
    'gyro_x': -9.92,
    'gyro_y': -1.04,
    'gyro_z': 20.58,
    'heading': 1.52
  },
  {
    'time': 84227,
    'acc_x': 0.12,
    'acc_y': 0.01,
    'acc_z': -1.07,
    'gyro_x': -14.4,
    'gyro_y': -5.7,
    'gyro_z': 14.15,
    'heading': 2.36
  },
  {
    'time': 84262,
    'acc_x': 0.15,
    'acc_y': -0.04,
    'acc_z': -1.05,
    'gyro_x': 16.86,
    'gyro_y': -3.23,
    'gyro_z': -3.55,
    'heading': 2.56
  },
  {
    'time': 84297,
    'acc_x': 0.13,
    'acc_y': 0.07,
    'acc_z': -1.05,
    'gyro_x': -28.89,
    'gyro_y': 1.89,
    'gyro_z': 17.11,
    'heading': 2.18
  },
  {
    'time': 84332,
    'acc_x': 0.19,
    'acc_y': -0.11,
    'acc_z': -1.32,
    'gyro_x': 21.59,
    'gyro_y': 34.79,
    'gyro_z': 21.77,
    'heading': 2.24
  },
  {
    'time': 84369,
    'acc_x': 0.21,
    'acc_y': 0.12,
    'acc_z': -1.06,
    'gyro_x': -13,
    'gyro_y': 33.08,
    'gyro_z': 0.17,
    'heading': 2.3
  },
  {
    'time': 84402,
    'acc_x': 0.2,
    'acc_y': 0.09,
    'acc_z': -0.89,
    'gyro_x': 27.32,
    'gyro_y': 14.02,
    'gyro_z': 7.44,
    'heading': 2.56
  },
  {
    'time': 84437,
    'acc_x': 0.19,
    'acc_y': -0.11,
    'acc_z': -1.08,
    'gyro_x': -23.66,
    'gyro_y': 3.93,
    'gyro_z': 15.28,
    'heading': 3.87
  },
  {
    'time': 84472,
    'acc_x': 0.22,
    'acc_y': 0,
    'acc_z': -0.88,
    'gyro_x': -7.91,
    'gyro_y': 15.32,
    'gyro_z': 1.87,
    'heading': 3.18
  },
  {
    'time': 84507,
    'acc_x': 0.22,
    'acc_y': -0.02,
    'acc_z': -1.08,
    'gyro_x': -16.27,
    'gyro_y': -0.28,
    'gyro_z': 9.5,
    'heading': 4.36
  },
  {
    'time': 84542,
    'acc_x': 0.2,
    'acc_y': 0.05,
    'acc_z': -0.93,
    'gyro_x': 16.65,
    'gyro_y': 6.84,
    'gyro_z': -0.45,
    'heading': 2.08
  },
  {
    'time': 84577,
    'acc_x': 0.26,
    'acc_y': 0.25,
    'acc_z': -1.02,
    'gyro_x': -17.54,
    'gyro_y': -5.47,
    'gyro_z': -1.7,
    'heading': 4.26
  },
  {
    'time': 84612,
    'acc_x': 0.22,
    'acc_y': 0.1,
    'acc_z': -1.03,
    'gyro_x': 2.07,
    'gyro_y': 22.42,
    'gyro_z': 23.22,
    'heading': 0.69
  },
  {
    'time': 84647,
    'acc_x': 0.24,
    'acc_y': -0.01,
    'acc_z': -1.03,
    'gyro_x': 41.5,
    'gyro_y': 21.72,
    'gyro_z': 6.79,
    'heading': 1.25
  },
  {
    'time': 84682,
    'acc_x': 0.25,
    'acc_y': 0.03,
    'acc_z': -0.91,
    'gyro_x': -7.29,
    'gyro_y': 3.6,
    'gyro_z': 7.6,
    'heading': 3.21
  },
  {
    'time': 84717,
    'acc_x': 0.26,
    'acc_y': -0.02,
    'acc_z': -0.98,
    'gyro_x': 14.76,
    'gyro_y': 2.12,
    'gyro_z': 2.11,
    'heading': 2.99
  },
  {
    'time': 84752,
    'acc_x': 0.26,
    'acc_y': 0.05,
    'acc_z': -1.01,
    'gyro_x': 8.47,
    'gyro_y': -7.68,
    'gyro_z': -1.71,
    'heading': 2.33
  },
  {
    'time': 84787,
    'acc_x': 0.28,
    'acc_y': 0.1,
    'acc_z': -1.09,
    'gyro_x': -10.21,
    'gyro_y': -0.61,
    'gyro_z': 11.98,
    'heading': 2.33
  },
  {
    'time': 84822,
    'acc_x': 0.28,
    'acc_y': -0.04,
    'acc_z': -1.06,
    'gyro_x': 2.53,
    'gyro_y': 5.61,
    'gyro_z': 15.32,
    'heading': 1.94
  },
  {
    'time': 84857,
    'acc_x': 0.23,
    'acc_y': 0.03,
    'acc_z': -0.96,
    'gyro_x': -3.31,
    'gyro_y': 6.2,
    'gyro_z': 10.79,
    'heading': 3.43
  },
  {
    'time': 84892,
    'acc_x': -2,
    'acc_y': -2,
    'acc_z': 2,
    'gyro_x': -19.72,
    'gyro_y': 0.08,
    'gyro_z': 22.16,
    'heading': 3.09
  },
  {
    'time': 84927,
    'acc_x': 0.19,
    'acc_y': 0.56,
    'acc_z': -1.08,
    'gyro_x': -23.21,
    'gyro_y': 156.01,
    'gyro_z': -8.7,
    'heading': 4.04
  },
  {
    'time': 84961,
    'acc_x': 0.18,
    'acc_y': 0.32,
    'acc_z': -0.24,
    'gyro_x': -10.1,
    'gyro_y': 68.36,
    'gyro_z': -0.92,
    'heading': 2.17
  },
  {
    'time': 84996,
    'acc_x': 0.27,
    'acc_y': 0.18,
    'acc_z': -1,
    'gyro_x': -7.63,
    'gyro_y': 0.17,
    'gyro_z': 2.14,
    'heading': 1.94
  },
  {
    'time': 85032,
    'acc_x': 0.27,
    'acc_y': 0.08,
    'acc_z': -1.03,
    'gyro_x': 1.3,
    'gyro_y': 9.42,
    'gyro_z': 16.03,
    'heading': 1.38
  },
  {
    'time': 85067,
    'acc_x': 0.25,
    'acc_y': 0.04,
    'acc_z': -1.09,
    'gyro_x': -11.54,
    'gyro_y': 5.17,
    'gyro_z': 14.86,
    'heading': 4.04
  },
  {
    'time': 85102,
    'acc_x': 0.25,
    'acc_y': 0.09,
    'acc_z': -1.01,
    'gyro_x': 12.33,
    'gyro_y': 12.67,
    'gyro_z': 12.73,
    'heading': 0.71
  },
  {
    'time': 85136,
    'acc_x': 0.25,
    'acc_y': 0.01,
    'acc_z': -0.98,
    'gyro_x': -0.1,
    'gyro_y': 1.46,
    'gyro_z': 10.28,
    'heading': 3.23
  },
  {
    'time': 85171,
    'acc_x': 0.26,
    'acc_y': 0.04,
    'acc_z': -0.99,
    'gyro_x': 5.61,
    'gyro_y': 0.51,
    'gyro_z': 3.54,
    'heading': 3.53
  },
  {
    'time': 85207,
    'acc_x': 0.25,
    'acc_y': 0.06,
    'acc_z': -0.92,
    'gyro_x': 12.51,
    'gyro_y': 5.24,
    'gyro_z': 1.66,
    'heading': 4.2
  },
  {
    'time': 85242,
    'acc_x': 0.25,
    'acc_y': 0.04,
    'acc_z': -0.94,
    'gyro_x': -1.87,
    'gyro_y': 0.18,
    'gyro_z': 3.01,
    'heading': 3.33
  },
  {
    'time': 85277,
    'acc_x': 0.27,
    'acc_y': 0.02,
    'acc_z': -0.96,
    'gyro_x': -2.21,
    'gyro_y': -1.71,
    'gyro_z': -1.18,
    'heading': 3.59
  },
  {
    'time': 85311,
    'acc_x': 0.27,
    'acc_y': 0.07,
    'acc_z': -0.96,
    'gyro_x': -0.43,
    'gyro_y': -0.92,
    'gyro_z': -4.68,
    'heading': 1.4
  },
  {
    'time': 85346,
    'acc_x': 0.26,
    'acc_y': 0.06,
    'acc_z': -0.96,
    'gyro_x': -6.92,
    'gyro_y': -2.89,
    'gyro_z': -1.07,
    'heading': 2.22
  },
  {
    'time': 85381,
    'acc_x': 0.27,
    'acc_y': 0,
    'acc_z': -1.01,
    'gyro_x': -2.15,
    'gyro_y': -1.22,
    'gyro_z': 6.84,
    'heading': 3.11
  },
  {
    'time': 85416,
    'acc_x': 0.27,
    'acc_y': 0.06,
    'acc_z': -0.98,
    'gyro_x': 1.12,
    'gyro_y': -1.4,
    'gyro_z': 2.32,
    'heading': 2.54
  },
  {
    'time': 85451,
    'acc_x': 0.27,
    'acc_y': 0.01,
    'acc_z': -1.05,
    'gyro_x': -6.95,
    'gyro_y': -0.75,
    'gyro_z': 6.62,
    'heading': 1.23
  },
  {
    'time': 85486,
    'acc_x': 0.26,
    'acc_y': 0.02,
    'acc_z': -0.96,
    'gyro_x': -1.61,
    'gyro_y': 2.58,
    'gyro_z': -0.57,
    'heading': 4.26
  },
  {
    'time': 85521,
    'acc_x': 0.26,
    'acc_y': 0.08,
    'acc_z': -1.03,
    'gyro_x': 1.5,
    'gyro_y': 3.82,
    'gyro_z': -1.79,
    'heading': 3.14
  },
  {
    'time': 85556,
    'acc_x': 0.28,
    'acc_y': 0.06,
    'acc_z': -1.05,
    'gyro_x': -4.85,
    'gyro_y': 13.89,
    'gyro_z': 1.65,
    'heading': 4.55
  },
  {
    'time': 85591,
    'acc_x': 0.29,
    'acc_y': 0.33,
    'acc_z': -2,
    'gyro_x': 3.82,
    'gyro_y': 250.13,
    'gyro_z': -64.39,
    'heading': 4.45
  },
  {
    'time': 85626,
    'acc_x': 0.13,
    'acc_y': 0.11,
    'acc_z': -0.52,
    'gyro_x': 0.08,
    'gyro_y': 73.79,
    'gyro_z': 63.61,
    'heading': 3.49
  },
  {
    'time': 85661,
    'acc_x': 0.14,
    'acc_y': 0.43,
    'acc_z': -0.26,
    'gyro_x': 2.24,
    'gyro_y': 104.53,
    'gyro_z': -25.89,
    'heading': 2.15
  },
  {
    'time': 85696,
    'acc_x': 0.22,
    'acc_y': 0.18,
    'acc_z': -0.95,
    'gyro_x': -0.78,
    'gyro_y': 15.4,
    'gyro_z': -2.36,
    'heading': 2.91
  },
  {
    'time': 85731,
    'acc_x': 0.25,
    'acc_y': 0.02,
    'acc_z': -0.97,
    'gyro_x': 1.4,
    'gyro_y': 4.75,
    'gyro_z': 4.44,
    'heading': 5.61
  },
  {
    'time': 85766,
    'acc_x': 0.24,
    'acc_y': 0.05,
    'acc_z': -1,
    'gyro_x': 1.23,
    'gyro_y': 3.64,
    'gyro_z': 2.53,
    'heading': 2.08
  },
  {
    'time': 85801,
    'acc_x': 0.24,
    'acc_y': 0.08,
    'acc_z': -0.99,
    'gyro_x': -0.59,
    'gyro_y': 1.49,
    'gyro_z': 1.04,
    'heading': 2.1
  },
  {
    'time': 85835,
    'acc_x': 0.24,
    'acc_y': 0.01,
    'acc_z': -0.98,
    'gyro_x': 2.82,
    'gyro_y': 0.32,
    'gyro_z': 3.08,
    'heading': 3.51
  },
  {
    'time': 85870,
    'acc_x': 0.23,
    'acc_y': 0.01,
    'acc_z': -0.98,
    'gyro_x': 0.24,
    'gyro_y': -0.05,
    'gyro_z': 2.3,
    'heading': 3.3
  },
  {
    'time': 85905,
    'acc_x': 0.24,
    'acc_y': 0.08,
    'acc_z': -1.03,
    'gyro_x': -5.08,
    'gyro_y': -3.67,
    'gyro_z': -2.67,
    'heading': 3.57
  },
  {
    'time': 85940,
    'acc_x': 0.24,
    'acc_y': 0.05,
    'acc_z': -0.96,
    'gyro_x': 0.31,
    'gyro_y': 0.61,
    'gyro_z': -3.74,
    'heading': 4.88
  },
  {
    'time': 85976,
    'acc_x': 0.25,
    'acc_y': 0.04,
    'acc_z': -0.98,
    'gyro_x': -0.29,
    'gyro_y': -1.16,
    'gyro_z': -1.19,
    'heading': 3.44
  },
  {
    'time': 86011,
    'acc_x': 0.24,
    'acc_y': 0.09,
    'acc_z': -1,
    'gyro_x': 2.31,
    'gyro_y': -1.05,
    'gyro_z': -1.09,
    'heading': 3.97
  },
  {
    'time': 86046,
    'acc_x': 0.25,
    'acc_y': 0.05,
    'acc_z': -1.02,
    'gyro_x': 3.22,
    'gyro_y': -0.84,
    'gyro_z': 0.59,
    'heading': 3.97
  },
  {
    'time': 86080,
    'acc_x': 0.26,
    'acc_y': 0.04,
    'acc_z': -1.01,
    'gyro_x': -0.89,
    'gyro_y': 0.87,
    'gyro_z': 4.25,
    'heading': 3.33
  },
  {
    'time': 86115,
    'acc_x': 0.26,
    'acc_y': -0.01,
    'acc_z': -0.99,
    'gyro_x': -2.73,
    'gyro_y': -0.44,
    'gyro_z': 1.11,
    'heading': 5.1
  },
  {
    'time': 86150,
    'acc_x': 0.25,
    'acc_y': 0.02,
    'acc_z': -0.98,
    'gyro_x': -5.65,
    'gyro_y': -0.57,
    'gyro_z': 0.55,
    'heading': 2.39
  },
  {
    'time': 86185,
    'acc_x': 0.25,
    'acc_y': 0.08,
    'acc_z': -1.02,
    'gyro_x': -3.45,
    'gyro_y': -1.97,
    'gyro_z': 0.46,
    'heading': 4.1
  },
  {
    'time': 86220,
    'acc_x': 0.25,
    'acc_y': 0.06,
    'acc_z': -1,
    'gyro_x': -1.56,
    'gyro_y': 1.29,
    'gyro_z': 0.37,
    'heading': 3.95
  },
  {
    'time': 86255,
    'acc_x': 0.25,
    'acc_y': 0.04,
    'acc_z': -1.03,
    'gyro_x': -2.69,
    'gyro_y': 1.04,
    'gyro_z': 1.88,
    'heading': 2.27
  },
  {
    'time': 86290,
    'acc_x': 0.26,
    'acc_y': 0.02,
    'acc_z': -1.02,
    'gyro_x': -1.74,
    'gyro_y': 4.49,
    'gyro_z': 0.61,
    'heading': 3.97
  },
  {
    'time': 86325,
    'acc_x': 0.06,
    'acc_y': 0.43,
    'acc_z': -2,
    'gyro_x': 74.43,
    'gyro_y': 250.13,
    'gyro_z': -52.8,
    'heading': 4.57
  },
  {
    'time': 86360,
    'acc_x': 0.05,
    'acc_y': 0.21,
    'acc_z': -0.33,
    'gyro_x': -14.74,
    'gyro_y': 112.11,
    'gyro_z': 25.18,
    'heading': 2.58
  },
  {
    'time': 86395,
    'acc_x': 0.14,
    'acc_y': 0.43,
    'acc_z': -0.82,
    'gyro_x': 8.59,
    'gyro_y': 114.25,
    'gyro_z': -43.63,
    'heading': 2.4
  },
  {
    'time': 86430,
    'acc_x': 0.21,
    'acc_y': 0.19,
    'acc_z': -0.98,
    'gyro_x': 2.69,
    'gyro_y': 23.91,
    'gyro_z': -4.61,
    'heading': 3.21
  },
  {
    'time': 86465,
    'acc_x': 0.23,
    'acc_y': 0.08,
    'acc_z': -0.92,
    'gyro_x': 6.03,
    'gyro_y': 13.41,
    'gyro_z': -1.23,
    'heading': 2.04
  },
  {
    'time': 86500,
    'acc_x': 0.2,
    'acc_y': 0.09,
    'acc_z': -0.97,
    'gyro_x': -0.26,
    'gyro_y': 4.81,
    'gyro_z': 2.81,
    'heading': 3.05
  },
  {
    'time': 86535,
    'acc_x': 0.19,
    'acc_y': 0.07,
    'acc_z': -0.97,
    'gyro_x': 0.08,
    'gyro_y': 3.95,
    'gyro_z': 0.02,
    'heading': 4.36
  },
  {
    'time': 86569,
    'acc_x': 0.21,
    'acc_y': 0.07,
    'acc_z': -0.95,
    'gyro_x': 1.06,
    'gyro_y': 4.88,
    'gyro_z': -1.15,
    'heading': 2.87
  },
  {
    'time': 86605,
    'acc_x': 0.22,
    'acc_y': 0.05,
    'acc_z': -0.99,
    'gyro_x': -5.81,
    'gyro_y': -3.42,
    'gyro_z': 3.37,
    'heading': 3.09
  },
  {
    'time': 86640,
    'acc_x': 0.21,
    'acc_y': 0.04,
    'acc_z': -0.99,
    'gyro_x': -2.61,
    'gyro_y': -3.1,
    'gyro_z': 1.65,
    'heading': 4.1
  },
  {
    'time': 86675,
    'acc_x': 0.22,
    'acc_y': 0.09,
    'acc_z': -1,
    'gyro_x': -1.97,
    'gyro_y': -1.82,
    'gyro_z': -1.16,
    'heading': 4.39
  },
  {
    'time': 86710,
    'acc_x': 0.21,
    'acc_y': 0.04,
    'acc_z': -0.98,
    'gyro_x': -0.09,
    'gyro_y': 0.75,
    'gyro_z': -0.8,
    'heading': 3.44
  },
  {
    'time': 86745,
    'acc_x': 0.22,
    'acc_y': 0.06,
    'acc_z': -1,
    'gyro_x': 0.65,
    'gyro_y': -0.69,
    'gyro_z': -1.2,
    'heading': 3.11
  },
  {
    'time': 86780,
    'acc_x': 0.22,
    'acc_y': 0.09,
    'acc_z': -1.02,
    'gyro_x': -1.27,
    'gyro_y': -1.35,
    'gyro_z': 0.6,
    'heading': 3.18
  },
  {
    'time': 86815,
    'acc_x': 0.21,
    'acc_y': 0.07,
    'acc_z': -1,
    'gyro_x': -0.15,
    'gyro_y': 0.37,
    'gyro_z': 1.92,
    'heading': 2.54
  },
  {
    'time': 86849,
    'acc_x': 0.21,
    'acc_y': 0.04,
    'acc_z': -0.99,
    'gyro_x': 1.73,
    'gyro_y': 0.61,
    'gyro_z': -0.15,
    'heading': 3.46
  },
  {
    'time': 86884,
    'acc_x': 0.21,
    'acc_y': 0.1,
    'acc_z': -0.99,
    'gyro_x': -3.06,
    'gyro_y': 0.89,
    'gyro_z': 0.44,
    'heading': 1.95
  },
  {
    'time': 86919,
    'acc_x': 0.22,
    'acc_y': 0.06,
    'acc_z': -0.98,
    'gyro_x': -1.6,
    'gyro_y': -0.91,
    'gyro_z': -0.58,
    'heading': 2.41
  },
  {
    'time': 86954,
    'acc_x': 0.22,
    'acc_y': 0.09,
    'acc_z': -1.01,
    'gyro_x': -1.05,
    'gyro_y': 0.08,
    'gyro_z': -0.72,
    'heading': 3.25
  },
  {
    'time': 86989,
    'acc_x': 0.22,
    'acc_y': 0.07,
    'acc_z': -0.98,
    'gyro_x': -3.89,
    'gyro_y': 0.33,
    'gyro_z': 1.87,
    'heading': 3.05
  },
  {
    'time': 87024,
    'acc_x': 0.23,
    'acc_y': 0.06,
    'acc_z': -1.07,
    'gyro_x': -1.25,
    'gyro_y': 1.07,
    'gyro_z': -0.76,
    'heading': 4.01
  },
  {
    'time': 87059,
    'acc_x': 0.23,
    'acc_y': 0.06,
    'acc_z': -1.05,
    'gyro_x': -0.08,
    'gyro_y': 7.85,
    'gyro_z': 1.03,
    'heading': 5.29
  },
  {
    'time': 87094,
    'acc_x': 1.19,
    'acc_y': 2,
    'acc_z': -2,
    'gyro_x': -83.01,
    'gyro_y': 250.12,
    'gyro_z': -118.71,
    'heading': 3.26
  },
  {
    'time': 87129,
    'acc_x': 0.05,
    'acc_y': 0.34,
    'acc_z': -0.23,
    'gyro_x': -7.82,
    'gyro_y': 103.36,
    'gyro_z': 42.56,
    'heading': 3.49
  },
  {
    'time': 87164,
    'acc_x': 0.16,
    'acc_y': 0.01,
    'acc_z': -1.34,
    'gyro_x': 5.54,
    'gyro_y': 86.77,
    'gyro_z': -19.21,
    'heading': 3.12
  },
  {
    'time': 87199,
    'acc_x': 0.21,
    'acc_y': 0.11,
    'acc_z': -1.13,
    'gyro_x': 5.8,
    'gyro_y': 14.97,
    'gyro_z': -2.66,
    'heading': 3.07
  },
  {
    'time': 87234,
    'acc_x': 0.23,
    'acc_y': 0.11,
    'acc_z': -0.92,
    'gyro_x': 9.31,
    'gyro_y': 15.95,
    'gyro_z': 0,
    'heading': 3.46
  },
  {
    'time': 87269,
    'acc_x': 0.22,
    'acc_y': 0.06,
    'acc_z': -0.95,
    'gyro_x': 0.92,
    'gyro_y': 5.6,
    'gyro_z': 2.29,
    'heading': 2.62
  },
  {
    'time': 87304,
    'acc_x': 0.23,
    'acc_y': 0.08,
    'acc_z': -1,
    'gyro_x': 4.41,
    'gyro_y': 4.84,
    'gyro_z': 2.71,
    'heading': 4.01
  },
  {
    'time': 87339,
    'acc_x': 0.23,
    'acc_y': 0.01,
    'acc_z': -0.99,
    'gyro_x': 2,
    'gyro_y': 1.9,
    'gyro_z': 3,
    'heading': 2.39
  },
  {
    'time': 87374,
    'acc_x': 0.21,
    'acc_y': 0.09,
    'acc_z': -0.96,
    'gyro_x': -2.04,
    'gyro_y': -1.32,
    'gyro_z': 1.11,
    'heading': 3.3
  },
  {
    'time': 87409,
    'acc_x': 0.21,
    'acc_y': 0.06,
    'acc_z': -0.97,
    'gyro_x': -2.38,
    'gyro_y': 0.24,
    'gyro_z': 1.09,
    'heading': 2.93
  },
  {
    'time': 87443,
    'acc_x': 0.23,
    'acc_y': 0.05,
    'acc_z': -0.98,
    'gyro_x': -1.61,
    'gyro_y': -1.08,
    'gyro_z': 0.76,
    'heading': 1.4
  },
  {
    'time': 87478,
    'acc_x': 0.22,
    'acc_y': 0.02,
    'acc_z': -1.03,
    'gyro_x': -3.22,
    'gyro_y': 1.22,
    'gyro_z': 0.1,
    'heading': 3.3
  },
  {
    'time': 87514,
    'acc_x': 0.23,
    'acc_y': 0.11,
    'acc_z': -1,
    'gyro_x': 2.14,
    'gyro_y': 3.79,
    'gyro_z': -2.95,
    'heading': 2.28
  },
  {
    'time': 87549,
    'acc_x': 0.23,
    'acc_y': 0.1,
    'acc_z': -0.97,
    'gyro_x': 3.22,
    'gyro_y': 2.87,
    'gyro_z': -0.37,
    'heading': 3.95
  },
  {
    'time': 87584,
    'acc_x': 0.23,
    'acc_y': 0.06,
    'acc_z': -1.02,
    'gyro_x': -0.95,
    'gyro_y': 1.07,
    'gyro_z': -1.49,
    'heading': 3.35
  },
  {
    'time': 87619,
    'acc_x': 0.22,
    'acc_y': 0.07,
    'acc_z': -0.99,
    'gyro_x': 3.47,
    'gyro_y': 3.32,
    'gyro_z': -0.79,
    'heading': 3.46
  },
  {
    'time': 87654,
    'acc_x': 0.23,
    'acc_y': 0.09,
    'acc_z': -0.99,
    'gyro_x': 2.6,
    'gyro_y': 0.36,
    'gyro_z': -1.35,
    'heading': 4.36
  },
  {
    'time': 87688,
    'acc_x': 0.24,
    'acc_y': 0.04,
    'acc_z': -1.02,
    'gyro_x': -3.78,
    'gyro_y': 0.1,
    'gyro_z': 0.55,
    'heading': 1.9
  },
  {
    'time': 87723,
    'acc_x': 0.23,
    'acc_y': 0.04,
    'acc_z': -0.98,
    'gyro_x': 2.5,
    'gyro_y': 1.93,
    'gyro_z': -1.85,
    'heading': 3.85
  },
  {
    'time': 87759,
    'acc_x': 0.23,
    'acc_y': 0.08,
    'acc_z': -1,
    'gyro_x': 7.47,
    'gyro_y': 5.92,
    'gyro_z': -2.11,
    'heading': 1.21
  },
  {
    'time': 87794,
    'acc_x': -2,
    'acc_y': -1.58,
    'acc_z': 2,
    'gyro_x': 2.79,
    'gyro_y': 6.59,
    'gyro_z': 1.06,
    'heading': 3.97
  },
  {
    'time': 87829,
    'acc_x': 0.09,
    'acc_y': 1.1,
    'acc_z': 0.06,
    'gyro_x': -24.02,
    'gyro_y': 173.21,
    'gyro_z': -33.4,
    'heading': 0.7
  },
  {
    'time': 87864,
    'acc_x': -0.27,
    'acc_y': -2,
    'acc_z': -0.96,
    'gyro_x': 2.91,
    'gyro_y': 135.92,
    'gyro_z': 88,
    'heading': 4.01
  },
  {
    'time': 87899,
    'acc_x': 0.25,
    'acc_y': -0.35,
    'acc_z': -1.65,
    'gyro_x': 8.78,
    'gyro_y': -13.15,
    'gyro_z': 19.92,
    'heading': 2.47
  },
  {
    'time': 87933,
    'acc_x': 0.25,
    'acc_y': -0.04,
    'acc_z': -0.98,
    'gyro_x': 10.24,
    'gyro_y': 13.19,
    'gyro_z': 4.71,
    'heading': 4.19
  },
  {
    'time': 87968,
    'acc_x': 0.24,
    'acc_y': 0.03,
    'acc_z': -0.94,
    'gyro_x': -2.55,
    'gyro_y': 4.13,
    'gyro_z': 1.66,
    'heading': 3.05
  },
  {
    'time': 88003,
    'acc_x': 0.22,
    'acc_y': 0.1,
    'acc_z': -1.01,
    'gyro_x': -2.42,
    'gyro_y': 0.78,
    'gyro_z': 0.07,
    'heading': 3.18
  },
  {
    'time': 88038,
    'acc_x': 0.22,
    'acc_y': 0.04,
    'acc_z': -1,
    'gyro_x': -1.23,
    'gyro_y': 1.71,
    'gyro_z': 2.47,
    'heading': 2.38
  },
  {
    'time': 88073,
    'acc_x': 0.21,
    'acc_y': 0.03,
    'acc_z': -1.01,
    'gyro_x': -1.18,
    'gyro_y': 0.97,
    'gyro_z': 1.38,
    'heading': 1.22
  },
  {
    'time': 88108,
    'acc_x': 0.21,
    'acc_y': 0.01,
    'acc_z': -0.99,
    'gyro_x': -1.65,
    'gyro_y': -0.77,
    'gyro_z': 1.98,
    'heading': 2.62
  },
  {
    'time': 88143,
    'acc_x': 0.21,
    'acc_y': 0.01,
    'acc_z': -1,
    'gyro_x': -4.87,
    'gyro_y': -0.47,
    'gyro_z': 3,
    'heading': 3.46
  },
  {
    'time': 88178,
    'acc_x': 0.21,
    'acc_y': 0.05,
    'acc_z': -0.99,
    'gyro_x': -0.89,
    'gyro_y': -1.47,
    'gyro_z': -1.61,
    'heading': 3.38
  },
  {
    'time': 88213,
    'acc_x': 0.22,
    'acc_y': 0.02,
    'acc_z': -0.98,
    'gyro_x': -2.38,
    'gyro_y': 0.15,
    'gyro_z': -1.79,
    'heading': 4.22
  },
  {
    'time': 88248,
    'acc_x': 0.24,
    'acc_y': 0.05,
    'acc_z': -1,
    'gyro_x': -2.74,
    'gyro_y': -0.17,
    'gyro_z': 0.37,
    'heading': 0.67
  },
  {
    'time': 88283,
    'acc_x': 0.22,
    'acc_y': 0.08,
    'acc_z': -0.98,
    'gyro_x': -2.34,
    'gyro_y': -0.52,
    'gyro_z': -4.79,
    'heading': 2.63
  },
  {
    'time': 88318,
    'acc_x': 0.23,
    'acc_y': 0.08,
    'acc_z': -1,
    'gyro_x': -1.44,
    'gyro_y': 0.37,
    'gyro_z': -2.76,
    'heading': 2.43
  },
  {
    'time': 88352,
    'acc_x': 0.23,
    'acc_y': 0.05,
    'acc_z': -0.98,
    'gyro_x': 0.17,
    'gyro_y': 1.66,
    'gyro_z': -0.11,
    'heading': 2.54
  },
  {
    'time': 88388,
    'acc_x': 0.23,
    'acc_y': 0.05,
    'acc_z': -0.98,
    'gyro_x': 1.31,
    'gyro_y': -0.6,
    'gyro_z': -3.13,
    'heading': 2.11
  },
  {
    'time': 88423,
    'acc_x': 0.23,
    'acc_y': 0.06,
    'acc_z': -1.02,
    'gyro_x': -2.35,
    'gyro_y': -0.21,
    'gyro_z': -3.31,
    'heading': 2.08
  },
  {
    'time': 88458,
    'acc_x': 0.22,
    'acc_y': 0.06,
    'acc_z': -1.05,
    'gyro_x': -1.18,
    'gyro_y': 0.75,
    'gyro_z': -2.02,
    'heading': 4.22
  },
  {
    'time': 88493,
    'acc_x': 0.23,
    'acc_y': 0.08,
    'acc_z': -0.99,
    'gyro_x': 1.31,
    'gyro_y': 3.68,
    'gyro_z': -2.92,
    'heading': 4.57
  },
  {
    'time': 88528,
    'acc_x': -2,
    'acc_y': -0.28,
    'acc_z': 2,
    'gyro_x': 4.49,
    'gyro_y': 9.55,
    'gyro_z': 1.01,
    'heading': 4.16
  },
  {
    'time': 88563,
    'acc_x': 0.01,
    'acc_y': 1.12,
    'acc_z': -0.11,
    'gyro_x': -46.53,
    'gyro_y': 212.34,
    'gyro_z': -40.56,
    'heading': 3.28
  },
  {
    'time': 88598,
    'acc_x': 0.09,
    'acc_y': 0.06,
    'acc_z': -1.75,
    'gyro_x': 3.47,
    'gyro_y': 114.3,
    'gyro_z': 77.84,
    'heading': 3.66
  },
  {
    'time': 88633,
    'acc_x': 0.21,
    'acc_y': -0.24,
    'acc_z': -1.3,
    'gyro_x': 6.92,
    'gyro_y': 3.13,
    'gyro_z': 27.06,
    'heading': 3.29
  },
  {
    'time': 88668,
    'acc_x': 0.23,
    'acc_y': -0.1,
    'acc_z': -1.03,
    'gyro_x': 9.75,
    'gyro_y': 11.73,
    'gyro_z': 7.27,
    'heading': 1.38
  },
  {
    'time': 88703,
    'acc_x': 0.21,
    'acc_y': -0.01,
    'acc_z': -0.99,
    'gyro_x': -6.27,
    'gyro_y': 3.77,
    'gyro_z': 3.02,
    'heading': 2.56
  },
  {
    'time': 88738,
    'acc_x': 0.19,
    'acc_y': 0.07,
    'acc_z': -1.03,
    'gyro_x': 3.74,
    'gyro_y': 5.3,
    'gyro_z': 1.3,
    'heading': 4.07
  },
  {
    'time': 88772,
    'acc_x': 0.2,
    'acc_y': 0,
    'acc_z': -0.97,
    'gyro_x': 1.95,
    'gyro_y': 6.04,
    'gyro_z': 4.48,
    'heading': 4.1
  },
  {
    'time': 88807,
    'acc_x': 0.22,
    'acc_y': -0.04,
    'acc_z': -0.92,
    'gyro_x': 0.95,
    'gyro_y': 1.8,
    'gyro_z': 2.44,
    'heading': 2.87
  },
  {
    'time': 88842,
    'acc_x': 0.22,
    'acc_y': 0.05,
    'acc_z': -0.99,
    'gyro_x': -5.29,
    'gyro_y': -4,
    'gyro_z': -1.29,
    'heading': 3.41
  },
  {
    'time': 88877,
    'acc_x': 0.22,
    'acc_y': 0.03,
    'acc_z': -1.02,
    'gyro_x': -1.22,
    'gyro_y': -2.56,
    'gyro_z': -0.56,
    'heading': 5.37
  },
  {
    'time': 88912,
    'acc_x': 0.22,
    'acc_y': 0.03,
    'acc_z': -1.09,
    'gyro_x': 3.69,
    'gyro_y': -1.45,
    'gyro_z': -0.44,
    'heading': 2.65
  },
  {
    'time': 88947,
    'acc_x': 0.21,
    'acc_y': 0.06,
    'acc_z': -1.02,
    'gyro_x': 2.76,
    'gyro_y': 2.4,
    'gyro_z': 0.06,
    'heading': 3.25
  },
  {
    'time': 88982,
    'acc_x': 0.2,
    'acc_y': 0.05,
    'acc_z': -1.02,
    'gyro_x': -0.85,
    'gyro_y': 2.37,
    'gyro_z': 1.13,
    'heading': 2.58
  },
  {
    'time': 89017,
    'acc_x': 0.22,
    'acc_y': 0.01,
    'acc_z': -1,
    'gyro_x': 3.44,
    'gyro_y': 2.76,
    'gyro_z': 2.74,
    'heading': 3.28
  },
  {
    'time': 89052,
    'acc_x': 0.22,
    'acc_y': -0.01,
    'acc_z': -0.97,
    'gyro_x': -0.12,
    'gyro_y': 1.05,
    'gyro_z': 2.63,
    'heading': 6.04
  },
  {
    'time': 89087,
    'acc_x': 0.2,
    'acc_y': 0.05,
    'acc_z': -1.04,
    'gyro_x': -2.11,
    'gyro_y': 0.33,
    'gyro_z': 0.53,
    'heading': 4.5
  },
  {
    'time': 89122,
    'acc_x': 0.22,
    'acc_y': 0.01,
    'acc_z': -0.98,
    'gyro_x': -3,
    'gyro_y': 2.93,
    'gyro_z': 0.89,
    'heading': 3.97
  },
  {
    'time': 89157,
    'acc_x': 0.26,
    'acc_y': 0.03,
    'acc_z': -0.92,
    'gyro_x': -1.37,
    'gyro_y': -1.51,
    'gyro_z': -0.15,
    'heading': 3.11
  },
  {
    'time': 89192,
    'acc_x': 0.24,
    'acc_y': 0.04,
    'acc_z': -1,
    'gyro_x': -3.93,
    'gyro_y': -7.63,
    'gyro_z': 0.79,
    'heading': 2.93
  },
  {
    'time': 89227,
    'acc_x': 0.21,
    'acc_y': 0.08,
    'acc_z': -1.12,
    'gyro_x': 2.45,
    'gyro_y': -4.21,
    'gyro_z': 1.45,
    'heading': 2.95
  },
  {
    'time': 89262,
    'acc_x': 0.2,
    'acc_y': 0.04,
    'acc_z': -1.12,
    'gyro_x': 4.06,
    'gyro_y': 3.93,
    'gyro_z': 3.68,
    'heading': 3.28
  },
  {
    'time': 89297,
    'acc_x': 0.21,
    'acc_y': 0.07,
    'acc_z': -1.05,
    'gyro_x': 4.14,
    'gyro_y': 13.53,
    'gyro_z': 0.69,
    'heading': 3.49
  },
  {
    'time': 89332,
    'acc_x': -2,
    'acc_y': -0.06,
    'acc_z': 2,
    'gyro_x': 8.93,
    'gyro_y': 18.28,
    'gyro_z': 1.47,
    'heading': 2.22
  },
  {
    'time': 89366,
    'acc_x': 0.02,
    'acc_y': 0.84,
    'acc_z': 0.24,
    'gyro_x': -5.64,
    'gyro_y': 220.28,
    'gyro_z': 22.06,
    'heading': 4.13
  },
  {
    'time': 89402,
    'acc_x': 0.17,
    'acc_y': 0.82,
    'acc_z': -0.29,
    'gyro_x': -9.76,
    'gyro_y': 157.26,
    'gyro_z': -95.81,
    'heading': 3.09
  },
  {
    'time': 89437,
    'acc_x': 0.21,
    'acc_y': 0.25,
    'acc_z': -0.93,
    'gyro_x': -0.04,
    'gyro_y': 16.7,
    'gyro_z': -13.46,
    'heading': 4.1
  },
  {
    'time': 89472,
    'acc_x': 0.27,
    'acc_y': 0.03,
    'acc_z': -0.96,
    'gyro_x': 10.93,
    'gyro_y': 6.39,
    'gyro_z': -6.14,
    'heading': 2.83
  },
  {
    'time': 89507,
    'acc_x': 0.26,
    'acc_y': 0.06,
    'acc_z': -0.95,
    'gyro_x': -7.43,
    'gyro_y': -2.84,
    'gyro_z': -5.61,
    'heading': 3.46
  },
  {
    'time': 89542,
    'acc_x': 0.2,
    'acc_y': 0.15,
    'acc_z': -1.13,
    'gyro_x': -0.47,
    'gyro_y': -0.71,
    'gyro_z': 0.1,
    'heading': 1.36
  },
  {
    'time': 89576,
    'acc_x': 0.18,
    'acc_y': 0.06,
    'acc_z': -1.06,
    'gyro_x': 7.41,
    'gyro_y': 10.95,
    'gyro_z': 4.18,
    'heading': 2.93
  },
  {
    'time': 89611,
    'acc_x': 0.18,
    'acc_y': 0.06,
    'acc_z': -1,
    'gyro_x': 3.02,
    'gyro_y': 12.21,
    'gyro_z': 4.56,
    'heading': 2.99
  },
  {
    'time': 89646,
    'acc_x': 0.22,
    'acc_y': -0.01,
    'acc_z': -0.88,
    'gyro_x': 7.4,
    'gyro_y': 11.31,
    'gyro_z': 4.28,
    'heading': 2.3
  },
  {
    'time': 89681,
    'acc_x': 0.26,
    'acc_y': -0.03,
    'acc_z': -0.83,
    'gyro_x': 10.95,
    'gyro_y': 3.08,
    'gyro_z': 0.28,
    'heading': 3.91
  },
  {
    'time': 89716,
    'acc_x': 0.24,
    'acc_y': 0.02,
    'acc_z': -0.95,
    'gyro_x': -9.73,
    'gyro_y': -11.98,
    'gyro_z': -0.05,
    'heading': 4.94
  },
  {
    'time': 89751,
    'acc_x': 0.21,
    'acc_y': 0.01,
    'acc_z': -1.1,
    'gyro_x': -11.46,
    'gyro_y': -14.63,
    'gyro_z': 2.26,
    'heading': 3.21
  },
  {
    'time': 89786,
    'acc_x': 0.21,
    'acc_y': 0.04,
    'acc_z': -1.16,
    'gyro_x': 2.65,
    'gyro_y': -2.15,
    'gyro_z': 2.07,
    'heading': 4.04
  },
  {
    'time': 89821,
    'acc_x': 0.23,
    'acc_y': 0.02,
    'acc_z': -0.99,
    'gyro_x': 4.09,
    'gyro_y': 7.69,
    'gyro_z': -1.05,
    'heading': 2.99
  },
  {
    'time': 89856,
    'acc_x': 0.22,
    'acc_y': 0.05,
    'acc_z': -0.92,
    'gyro_x': 3.18,
    'gyro_y': 6.11,
    'gyro_z': -1.37,
    'heading': 4.07
  },
  {
    'time': 89891,
    'acc_x': 0.21,
    'acc_y': 0.04,
    'acc_z': -0.99,
    'gyro_x': -4.15,
    'gyro_y': -0.4,
    'gyro_z': 1.85,
    'heading': 5.1
  },
  {
    'time': 89926,
    'acc_x': 0.23,
    'acc_y': -0.03,
    'acc_z': -1,
    'gyro_x': -5.32,
    'gyro_y': -0.1,
    'gyro_z': 2.93,
    'heading': 3.3
  },
  {
    'time': 89961,
    'acc_x': 0.24,
    'acc_y': 0.03,
    'acc_z': -1.01,
    'gyro_x': 0.16,
    'gyro_y': -1.76,
    'gyro_z': 0.17,
    'heading': 4.36
  },
  {
    'time': 89996,
    'acc_x': 0.24,
    'acc_y': 0,
    'acc_z': -1.06,
    'gyro_x': 0.91,
    'gyro_y': 0.79,
    'gyro_z': 0.67,
    'heading': 4.69
  },
  {
    'time': 90031,
    'acc_x': 0.23,
    'acc_y': 0.04,
    'acc_z': -0.98,
    'gyro_x': -1.34,
    'gyro_y': 4.76,
    'gyro_z': -0.63,
    'heading': 4.84
  },
  {
    'time': 90066,
    'acc_x': 0.24,
    'acc_y': 0.04,
    'acc_z': -1,
    'gyro_x': -1.14,
    'gyro_y': 3.84,
    'gyro_z': -0.04,
    'heading': 4.84
  },
  {
    'time': 90101,
    'acc_x': 0.24,
    'acc_y': 0.04,
    'acc_z': -0.96,
    'gyro_x': 0.47,
    'gyro_y': 9.11,
    'gyro_z': 0.26,
    'heading': 4.55
  },
  {
    'time': 90136,
    'acc_x': 0.11,
    'acc_y': 0.92,
    'acc_z': -1.65,
    'gyro_x': -23.13,
    'gyro_y': 228.14,
    'gyro_z': -40.21,
    'heading': 3.04
  },
  {
    'time': 90171,
    'acc_x': 0.18,
    'acc_y': -0.09,
    'acc_z': -0.58,
    'gyro_x': 10.48,
    'gyro_y': 59.06,
    'gyro_z': -5.47,
    'heading': 5.15
  },
  {
    'time': 90206,
    'acc_x': 0.2,
    'acc_y': 0.11,
    'acc_z': -1,
    'gyro_x': -2.89,
    'gyro_y': 10.23,
    'gyro_z': -3.81,
    'heading': 3.92
  },
  {
    'time': 90241,
    'acc_x': 0.24,
    'acc_y': 0.07,
    'acc_z': -0.94,
    'gyro_x': 13.31,
    'gyro_y': 9.44,
    'gyro_z': -2.79,
    'heading': 2.2
  },
  {
    'time': 90276,
    'acc_x': 0.23,
    'acc_y': 0.06,
    'acc_z': -0.96,
    'gyro_x': -2.55,
    'gyro_y': 0.24,
    'gyro_z': 0,
    'heading': 5.5
  },
  {
    'time': 90310,
    'acc_x': 0.22,
    'acc_y': 0.04,
    'acc_z': -1.05,
    'gyro_x': -0.68,
    'gyro_y': 0.89,
    'gyro_z': 4.06,
    'heading': 4.69
  },
  {
    'time': 90346,
    'acc_x': 0.23,
    'acc_y': 0.01,
    'acc_z': -1,
    'gyro_x': 0.45,
    'gyro_y': 0.38,
    'gyro_z': 3.89,
    'heading': 3.44
  },
  {
    'time': 90381,
    'acc_x': 0.23,
    'acc_y': 0.01,
    'acc_z': -0.99,
    'gyro_x': 1.25,
    'gyro_y': -0.05,
    'gyro_z': 0.31,
    'heading': 4.76
  },
  {
    'time': 90416,
    'acc_x': 0.23,
    'acc_y': -0.03,
    'acc_z': -1,
    'gyro_x': -2.48,
    'gyro_y': -1.6,
    'gyro_z': 0.09,
    'heading': 6.23
  },
  {
    'time': 90450,
    'acc_x': 0.23,
    'acc_y': 0.02,
    'acc_z': -1.04,
    'gyro_x': -0.91,
    'gyro_y': -0.11,
    'gyro_z': -1.52,
    'heading': 4.16
  },
  {
    'time': 90485,
    'acc_x': 0.23,
    'acc_y': 0.04,
    'acc_z': -0.98,
    'gyro_x': 1.6,
    'gyro_y': 2.9,
    'gyro_z': -0.57,
    'heading': 4.99
  },
  {
    'time': 90520,
    'acc_x': 0.24,
    'acc_y': 0,
    'acc_z': -1,
    'gyro_x': 1.04,
    'gyro_y': 0.95,
    'gyro_z': 0.4,
    'heading': 4.36
  },
  {
    'time': 90555,
    'acc_x': 0.23,
    'acc_y': 0.02,
    'acc_z': -1.01,
    'gyro_x': -1.08,
    'gyro_y': -0.04,
    'gyro_z': 3.5,
    'heading': 4.91
  },
  {
    'time': 90590,
    'acc_x': 0.23,
    'acc_y': 0.04,
    'acc_z': -0.99,
    'gyro_x': -1.08,
    'gyro_y': 1.29,
    'gyro_z': 0.89,
    'heading': 4.99
  },
  {
    'time': 90625,
    'acc_x': 0.24,
    'acc_y': 0.02,
    'acc_z': -1.02,
    'gyro_x': -1.96,
    'gyro_y': 0.72,
    'gyro_z': 2.27,
    'heading': 4.41
  },
  {
    'time': 90660,
    'acc_x': 0.24,
    'acc_y': 0.02,
    'acc_z': -1.01,
    'gyro_x': 2.54,
    'gyro_y': 1.4,
    'gyro_z': 1.5,
    'heading': 4.36
  },
  {
    'time': 90695,
    'acc_x': 0.23,
    'acc_y': 0,
    'acc_z': -1.01,
    'gyro_x': -0.44,
    'gyro_y': 0.89,
    'gyro_z': 3.05,
    'heading': 4.99
  },
  {
    'time': 90730,
    'acc_x': 0.23,
    'acc_y': 0,
    'acc_z': -1.01,
    'gyro_x': 0.88,
    'gyro_y': 3.26,
    'gyro_z': 1.3,
    'heading': 4.04
  },
  {
    'time': 90765,
    'acc_x': 0.22,
    'acc_y': 0.06,
    'acc_z': -0.99,
    'gyro_x': -0.54,
    'gyro_y': 5.33,
    'gyro_z': 2.56,
    'heading': 4.33
  },
  {
    'time': 90800,
    'acc_x': 0.23,
    'acc_y': 0,
    'acc_z': -0.95,
    'gyro_x': 1.01,
    'gyro_y': 12.49,
    'gyro_z': 6.79,
    'heading': 3.57
  },
  {
    'time': 90835,
    'acc_x': -2,
    'acc_y': -2,
    'acc_z': 2,
    'gyro_x': 6.63,
    'gyro_y': 1.08,
    'gyro_z': 2.89,
    'heading': 5.1
  },
  {
    'time': 90870,
    'acc_x': 0.13,
    'acc_y': 0.86,
    'acc_z': 0.09,
    'gyro_x': -18.55,
    'gyro_y': 249,
    'gyro_z': -9.94,
    'heading': 4.33
  },
  {
    'time': 90905,
    'acc_x': 0.22,
    'acc_y': 0.12,
    'acc_z': -1.74,
    'gyro_x': 5.84,
    'gyro_y': 22.98,
    'gyro_z': -10.4,
    'heading': 3.16
  },
  {
    'time': 90940,
    'acc_x': 0.25,
    'acc_y': -0.08,
    'acc_z': -1.38,
    'gyro_x': -1.7,
    'gyro_y': -7.24,
    'gyro_z': 3.81,
    'heading': 4.35
  },
  {
    'time': 90975,
    'acc_x': 0.23,
    'acc_y': -0.03,
    'acc_z': -1.05,
    'gyro_x': 2.19,
    'gyro_y': 9.42,
    'gyro_z': 3.01,
    'heading': 5.97
  },
  {
    'time': 91009,
    'acc_x': 0.21,
    'acc_y': -0.01,
    'acc_z': -1.03,
    'gyro_x': 5.29,
    'gyro_y': 9.42,
    'gyro_z': -1.08,
    'heading': 5.69
  },
  {
    'time': 91044,
    'acc_x': 0.2,
    'acc_y': 0.05,
    'acc_z': -0.96,
    'gyro_x': 9.44,
    'gyro_y': 11.71,
    'gyro_z': 0.34,
    'heading': 5.53
  },
  {
    'time': 91079,
    'acc_x': 0.23,
    'acc_y': -0.02,
    'acc_z': -0.89,
    'gyro_x': 6.8,
    'gyro_y': 5.63,
    'gyro_z': 1.69,
    'heading': 5.1
  },
  {
    'time': 91114,
    'acc_x': 0.25,
    'acc_y': 0.01,
    'acc_z': -0.92,
    'gyro_x': -5.08,
    'gyro_y': -6.18,
    'gyro_z': 1.02,
    'heading': 5.34
  },
  {
    'time': 91149,
    'acc_x': 0.25,
    'acc_y': -0.04,
    'acc_z': -1.01,
    'gyro_x': -4.93,
    'gyro_y': -9.74,
    'gyro_z': -0.32,
    'heading': 5.15
  },
  {
    'time': 91184,
    'acc_x': 0.24,
    'acc_y': 0,
    'acc_z': -1.11,
    'gyro_x': -8.42,
    'gyro_y': -6.69,
    'gyro_z': -1.46,
    'heading': 7.59
  },
  {
    'time': 91220,
    'acc_x': 0.23,
    'acc_y': 0.01,
    'acc_z': -1.1,
    'gyro_x': 1.18,
    'gyro_y': 1.18,
    'gyro_z': 0.77,
    'heading': 4.29
  },
  {
    'time': 91255,
    'acc_x': 0.22,
    'acc_y': 0.04,
    'acc_z': -1.02,
    'gyro_x': 5.18,
    'gyro_y': 6.84,
    'gyro_z': -1.95,
    'heading': 5.15
  },
  {
    'time': 91289,
    'acc_x': 0.21,
    'acc_y': 0.02,
    'acc_z': -0.96,
    'gyro_x': 2.11,
    'gyro_y': 7.18,
    'gyro_z': -0.24,
    'heading': 4.1
  },
  {
    'time': 91324,
    'acc_x': 0.23,
    'acc_y': -0.03,
    'acc_z': -0.92,
    'gyro_x': -1.18,
    'gyro_y': 1.91,
    'gyro_z': 1.13,
    'heading': 5.26
  },
  {
    'time': 91359,
    'acc_x': 0.26,
    'acc_y': -0.01,
    'acc_z': -0.94,
    'gyro_x': -2.98,
    'gyro_y': -2.86,
    'gyro_z': -0.6,
    'heading': 4.16
  },
  {
    'time': 91394,
    'acc_x': 0.27,
    'acc_y': -0.02,
    'acc_z': -1.03,
    'gyro_x': -2,
    'gyro_y': -7.08,
    'gyro_z': -2.08,
    'heading': 4.88
  },
  {
    'time': 91429,
    'acc_x': 0.24,
    'acc_y': 0.01,
    'acc_z': -1.1,
    'gyro_x': -3.71,
    'gyro_y': -3.41,
    'gyro_z': -2.21,
    'heading': 4.32
  },
  {
    'time': 91464,
    'acc_x': 0.22,
    'acc_y': 0.02,
    'acc_z': -1.1,
    'gyro_x': 2.87,
    'gyro_y': 4.34,
    'gyro_z': -0.68,
    'heading': 5.1
  },
  {
    'time': 91499,
    'acc_x': 0.22,
    'acc_y': 0.03,
    'acc_z': -0.99,
    'gyro_x': 3.63,
    'gyro_y': 8.76,
    'gyro_z': -1.42,
    'heading': 4.22
  },
  {
    'time': 91534,
    'acc_x': 0.25,
    'acc_y': 0.03,
    'acc_z': -0.95,
    'gyro_x': 2.69,
    'gyro_y': 10.56,
    'gyro_z': -0.69,
    'heading': 4.74
  },
  {
    'time': 91569,
    'acc_x': 0.28,
    'acc_y': 0.02,
    'acc_z': -0.94,
    'gyro_x': 2.64,
    'gyro_y': 6.69,
    'gyro_z': 2.88,
    'heading': 5.42
  },
  {
    'time': 91604,
    'acc_x': 0.2,
    'acc_y': -0.18,
    'acc_z': -2,
    'gyro_x': -34.28,
    'gyro_y': -4.86,
    'gyro_z': -3.77,
    'heading': 4.69
  },
  {
    'time': 91639,
    'acc_x': 0.19,
    'acc_y': -0.5,
    'acc_z': -1.43,
    'gyro_x': -7.15,
    'gyro_y': 31.16,
    'gyro_z': 19.47,
    'heading': 3.56
  },
  {
    'time': 91673,
    'acc_x': 0.21,
    'acc_y': -0.02,
    'acc_z': -1.06,
    'gyro_x': -0.87,
    'gyro_y': 11.18,
    'gyro_z': -0.66,
    'heading': 4.91
  },
  {
    'time': 91708,
    'acc_x': 0.25,
    'acc_y': 0.02,
    'acc_z': -0.93,
    'gyro_x': 13.3,
    'gyro_y': 13.89,
    'gyro_z': -5.22,
    'heading': 4.22
  },
  {
    'time': 91744,
    'acc_x': 0.26,
    'acc_y': 0.03,
    'acc_z': -0.91,
    'gyro_x': 1.56,
    'gyro_y': 2.47,
    'gyro_z': -2.24,
    'heading': 3.59
  },
  {
    'time': 91778,
    'acc_x': 0.23,
    'acc_y': 0.02,
    'acc_z': -1.04,
    'gyro_x': -8.59,
    'gyro_y': -4.1,
    'gyro_z': 1.85,
    'heading': 5.07
  },
  {
    'time': 91813,
    'acc_x': 0.23,
    'acc_y': 0.02,
    'acc_z': -1.01,
    'gyro_x': -1.31,
    'gyro_y': -1.24,
    'gyro_z': 2.39,
    'heading': 4.2
  },
  {
    'time': 91848,
    'acc_x': 0.25,
    'acc_y': -0.01,
    'acc_z': -1.01,
    'gyro_x': 1.25,
    'gyro_y': -1.19,
    'gyro_z': 2.39,
    'heading': 5.15
  },
  {
    'time': 91884,
    'acc_x': 0.24,
    'acc_y': 0,
    'acc_z': -0.97,
    'gyro_x': 0.59,
    'gyro_y': 0.59,
    'gyro_z': -1.18,
    'heading': 4.99
  },
  {
    'time': 91919,
    'acc_x': 0.25,
    'acc_y': 0.01,
    'acc_z': -0.99,
    'gyro_x': 0.27,
    'gyro_y': 0,
    'gyro_z': -2.19,
    'heading': 4.88
  },
  {
    'time': 91954,
    'acc_x': 0.24,
    'acc_y': 0.01,
    'acc_z': -1,
    'gyro_x': 0.18,
    'gyro_y': -1.25,
    'gyro_z': -0.35,
    'heading': 7
  },
  {
    'time': 91989,
    'acc_x': 0.24,
    'acc_y': 0.01,
    'acc_z': -1.01,
    'gyro_x': 0.41,
    'gyro_y': -0.28,
    'gyro_z': -0.89,
    'heading': 4.88
  },
  {
    'time': 92023,
    'acc_x': 0.24,
    'acc_y': 0.02,
    'acc_z': -1.01,
    'gyro_x': -0.73,
    'gyro_y': 1.95,
    'gyro_z': 0.74,
    'heading': 5.1
  },
  {
    'time': 92058,
    'acc_x': 0.25,
    'acc_y': 0,
    'acc_z': -0.98,
    'gyro_x': 0.69,
    'gyro_y': 1.18,
    'gyro_z': 1.85,
    'heading': 4.48
  },
  {
    'time': 92093,
    'acc_x': 0.25,
    'acc_y': 0,
    'acc_z': -0.95,
    'gyro_x': 2.15,
    'gyro_y': -1.41,
    'gyro_z': 1.95,
    'heading': 5.02
  },
  {
    'time': 92128,
    'acc_x': 0.25,
    'acc_y': -0.01,
    'acc_z': -0.95,
    'gyro_x': -0.14,
    'gyro_y': -1.77,
    'gyro_z': 1.2,
    'heading': 3.85
  },
  {
    'time': 92163,
    'acc_x': 0.24,
    'acc_y': -0.01,
    'acc_z': -0.96,
    'gyro_x': 4.39,
    'gyro_y': -3.79,
    'gyro_z': -1.55,
    'heading': 3.59
  },
  {
    'time': 92198,
    'acc_x': 0.26,
    'acc_y': -0.05,
    'acc_z': -0.95,
    'gyro_x': 1.24,
    'gyro_y': -6.39,
    'gyro_z': -2.63,
    'heading': 2.51
  },
  {
    'time': 92234,
    'acc_x': 0.27,
    'acc_y': -0.07,
    'acc_z': -1,
    'gyro_x': -2.01,
    'gyro_y': -8.45,
    'gyro_z': -7.63,
    'heading': 3.97
  },
  {
    'time': 92269,
    'acc_x': 0.26,
    'acc_y': 0,
    'acc_z': -1.08,
    'gyro_x': -4.23,
    'gyro_y': -6.52,
    'gyro_z': -12.73,
    'heading': 3.87
  },
  {
    'time': 92303,
    'acc_x': 0.27,
    'acc_y': -0.02,
    'acc_z': -1.16,
    'gyro_x': 1.96,
    'gyro_y': 1.92,
    'gyro_z': -10.77,
    'heading': 3.46
  },
  {
    'time': 92338,
    'acc_x': 0.24,
    'acc_y': 0.02,
    'acc_z': -1.18,
    'gyro_x': 0.64,
    'gyro_y': 6.56,
    'gyro_z': -16.91,
    'heading': 3.07
  },
  {
    'time': 92373,
    'acc_x': 0.22,
    'acc_y': 0.05,
    'acc_z': -1.13,
    'gyro_x': -4.33,
    'gyro_y': 21.27,
    'gyro_z': -11.54,
    'heading': 3.02
  },
  {
    'time': 92408,
    'acc_x': 0.21,
    'acc_y': -0.03,
    'acc_z': -0.93,
    'gyro_x': 7.02,
    'gyro_y': 25.24,
    'gyro_z': -19.4,
    'heading': 1.25
  },
  {
    'time': 92443,
    'acc_x': 0.2,
    'acc_y': 0,
    'acc_z': -1,
    'gyro_x': 6.54,
    'gyro_y': 21.45,
    'gyro_z': -16.71,
    'heading': 0.71
  },
  {
    'time': 92478,
    'acc_x': 0.2,
    'acc_y': -0.07,
    'acc_z': -0.97,
    'gyro_x': 7.37,
    'gyro_y': 22.35,
    'gyro_z': -16.45,
    'heading': 2.03
  },
  {
    'time': 92513,
    'acc_x': 0.23,
    'acc_y': -0.04,
    'acc_z': -0.84,
    'gyro_x': 17.07,
    'gyro_y': 18.03,
    'gyro_z': -23.03,
    'heading': 359.45
  },
  {
    'time': 92548,
    'acc_x': 0.26,
    'acc_y': 0.03,
    'acc_z': -0.84,
    'gyro_x': 7.98,
    'gyro_y': 7.53,
    'gyro_z': -21.59,
    'heading': 359.23
  },
  {
    'time': 92582,
    'acc_x': 0.28,
    'acc_y': 0.07,
    'acc_z': -0.91,
    'gyro_x': -11.85,
    'gyro_y': -2.08,
    'gyro_z': -17.58,
    'heading': 0.8
  },
  {
    'time': 92617,
    'acc_x': 0.29,
    'acc_y': 0.09,
    'acc_z': -0.96,
    'gyro_x': -0.65,
    'gyro_y': -3.19,
    'gyro_z': -13.69,
    'heading': 359.22
  },
  {
    'time': 92653,
    'acc_x': 0.31,
    'acc_y': 0.11,
    'acc_z': -0.94,
    'gyro_x': -7.66,
    'gyro_y': -4,
    'gyro_z': -8.65,
    'heading': 357.13
  },
  {
    'time': 92688,
    'acc_x': 0.32,
    'acc_y': 0.05,
    'acc_z': -0.97,
    'gyro_x': -11.79,
    'gyro_y': -5.73,
    'gyro_z': -6.06,
    'heading': 355.2
  },
  {
    'time': 92723,
    'acc_x': 0.33,
    'acc_y': 0.05,
    'acc_z': -1.03,
    'gyro_x': -6.48,
    'gyro_y': -5.55,
    'gyro_z': -4.4,
    'heading': 353.77
  },
  {
    'time': 92758,
    'acc_x': 0.34,
    'acc_y': -0.01,
    'acc_z': -0.97,
    'gyro_x': -0.77,
    'gyro_y': -10.89,
    'gyro_z': 5.27,
    'heading': 350.17
  },
  {
    'time': 92793,
    'acc_x': 0.34,
    'acc_y': -0.06,
    'acc_z': -1.08,
    'gyro_x': -3.93,
    'gyro_y': -7.88,
    'gyro_z': 1.72,
    'heading': 349.2
  },
  {
    'time': 92828,
    'acc_x': 0.32,
    'acc_y': 0.01,
    'acc_z': -1.08,
    'gyro_x': 3.16,
    'gyro_y': -0.92,
    'gyro_z': -1.13,
    'heading': 350.17
  },
  {
    'time': 92863,
    'acc_x': 0.31,
    'acc_y': 0.04,
    'acc_z': -0.88,
    'gyro_x': 10.16,
    'gyro_y': 9.46,
    'gyro_z': -1.48,
    'heading': 347.47
  },
  {
    'time': 92898,
    'acc_x': 0.3,
    'acc_y': -0.02,
    'acc_z': -0.98,
    'gyro_x': 16.76,
    'gyro_y': 7.86,
    'gyro_z': -9.6,
    'heading': 349.33
  },
  {
    'time': 92932,
    'acc_x': 0.27,
    'acc_y': 0.04,
    'acc_z': -0.97,
    'gyro_x': -0.51,
    'gyro_y': 1.57,
    'gyro_z': -9.98,
    'heading': 347.47
  },
  {
    'time': 92968,
    'acc_x': 0.29,
    'acc_y': 0.02,
    'acc_z': -1,
    'gyro_x': 4.78,
    'gyro_y': -0.4,
    'gyro_z': -3.66,
    'heading': 346.37
  },
  {
    'time': 93003,
    'acc_x': 0.3,
    'acc_y': 0.05,
    'acc_z': -1.02,
    'gyro_x': 14.36,
    'gyro_y': 0.67,
    'gyro_z': -10.4,
    'heading': 344.48
  },
  {
    'time': 93038,
    'acc_x': 0.29,
    'acc_y': 0.07,
    'acc_z': -0.96,
    'gyro_x': -7.2,
    'gyro_y': -0.63,
    'gyro_z': -7.37,
    'heading': 345.49
  },
  {
    'time': 93072,
    'acc_x': 0.3,
    'acc_y': 0,
    'acc_z': -0.97,
    'gyro_x': -2.08,
    'gyro_y': -2.15,
    'gyro_z': -3.52,
    'heading': 343.6
  },
  {
    'time': 93107,
    'acc_x': 0.32,
    'acc_y': -0.04,
    'acc_z': -0.96,
    'gyro_x': 7.22,
    'gyro_y': -1.77,
    'gyro_z': -6.62,
    'heading': 341.1
  },
  {
    'time': 93142,
    'acc_x': 0.3,
    'acc_y': 0.04,
    'acc_z': -0.99,
    'gyro_x': -5.79,
    'gyro_y': -6.44,
    'gyro_z': -5.69,
    'heading': 341.95
  },
  {
    'time': 93177,
    'acc_x': 0.3,
    'acc_y': 0.01,
    'acc_z': -1.01,
    'gyro_x': 1.03,
    'gyro_y': -3.92,
    'gyro_z': -4.13,
    'heading': 342.11
  },
  {
    'time': 93212,
    'acc_x': 0.31,
    'acc_y': 0.01,
    'acc_z': -1.03,
    'gyro_x': 2.85,
    'gyro_y': -0.79,
    'gyro_z': -7.53,
    'heading': 338.26
  },
  {
    'time': 93247,
    'acc_x': 0.32,
    'acc_y': 0.05,
    'acc_z': -0.96,
    'gyro_x': -4.47,
    'gyro_y': 3.34,
    'gyro_z': -7.13,
    'heading': 338.41
  },
  {
    'time': 93282,
    'acc_x': 0.32,
    'acc_y': -0.06,
    'acc_z': -1,
    'gyro_x': 9.34,
    'gyro_y': -0.5,
    'gyro_z': -2.66,
    'heading': 338.6
  },
  {
    'time': 93317,
    'acc_x': 0.32,
    'acc_y': 0.01,
    'acc_z': -1.03,
    'gyro_x': 11.27,
    'gyro_y': 1.95,
    'gyro_z': -12.45,
    'heading': 336.17
  },
  {
    'time': 93352,
    'acc_x': 0.31,
    'acc_y': 0.02,
    'acc_z': -0.98,
    'gyro_x': 9.35,
    'gyro_y': 2.92,
    'gyro_z': -9.31,
    'heading': 335.28
  },
  {
    'time': 93387,
    'acc_x': 0.28,
    'acc_y': -0.04,
    'acc_z': -0.94,
    'gyro_x': 9,
    'gyro_y': 3.29,
    'gyro_z': -6.7,
    'heading': 335.8
  },
  {
    'time': 93421,
    'acc_x': 0.31,
    'acc_y': 0.02,
    'acc_z': -0.94,
    'gyro_x': 10.96,
    'gyro_y': -1,
    'gyro_z': -9.52,
    'heading': 337.11
  },
  {
    'time': 93456,
    'acc_x': 0.31,
    'acc_y': 0.05,
    'acc_z': -0.97,
    'gyro_x': 9.01,
    'gyro_y': 1.31,
    'gyro_z': -8.05,
    'heading': 336.37
  },
  {
    'time': 93492,
    'acc_x': 0.32,
    'acc_y': 0.06,
    'acc_z': -0.96,
    'gyro_x': -11.27,
    'gyro_y': -4.02,
    'gyro_z': -5.8,
    'heading': 336.12
  },
  {
    'time': 93527,
    'acc_x': 0.32,
    'acc_y': 0.06,
    'acc_z': -1.04,
    'gyro_x': 1.5,
    'gyro_y': -5.89,
    'gyro_z': -5.09,
    'heading': 336.8
  },
  {
    'time': 93562,
    'acc_x': 0.32,
    'acc_y': -0.02,
    'acc_z': -1,
    'gyro_x': -7.98,
    'gyro_y': -0.94,
    'gyro_z': -3.33,
    'heading': 334.93
  },
  {
    'time': 93596,
    'acc_x': 0.31,
    'acc_y': 0.08,
    'acc_z': -0.94,
    'gyro_x': -14.98,
    'gyro_y': 8.05,
    'gyro_z': -10.18,
    'heading': 333.29
  },
  {
    'time': 93632,
    'acc_x': 0.3,
    'acc_y': 0.11,
    'acc_z': -1.03,
    'gyro_x': -9.01,
    'gyro_y': 4.18,
    'gyro_z': -4.87,
    'heading': 333.72
  },
  {
    'time': 93667,
    'acc_x': 0.3,
    'acc_y': 0.02,
    'acc_z': -0.95,
    'gyro_x': -2.45,
    'gyro_y': 6.08,
    'gyro_z': -4.4,
    'heading': 332.65
  },
  {
    'time': 93702,
    'acc_x': 0.3,
    'acc_y': 0.01,
    'acc_z': -0.99,
    'gyro_x': -1.27,
    'gyro_y': 4.53,
    'gyro_z': -3.81,
    'heading': 332.44
  },
  {
    'time': 93737,
    'acc_x': 0.3,
    'acc_y': -0.08,
    'acc_z': -1.11,
    'gyro_x': -12.67,
    'gyro_y': 1.14,
    'gyro_z': -1.87,
    'heading': 332.92
  },
  {
    'time': 93771,
    'acc_x': 0.31,
    'acc_y': -0.04,
    'acc_z': -1.04,
    'gyro_x': 1.8,
    'gyro_y': 13.85,
    'gyro_z': -11.15,
    'heading': 335.5
  },
  {
    'time': 93806,
    'acc_x': 0.34,
    'acc_y': -0.03,
    'acc_z': -0.95,
    'gyro_x': 12.49,
    'gyro_y': 13.95,
    'gyro_z': -13.31,
    'heading': 337.81
  },
  {
    'time': 93842,
    'acc_x': 0.33,
    'acc_y': 0.02,
    'acc_z': -0.99,
    'gyro_x': 13.44,
    'gyro_y': 12.24,
    'gyro_z': -10.55,
    'heading': 342.49
  },
  {
    'time': 93876,
    'acc_x': 0.34,
    'acc_y': 0.02,
    'acc_z': -0.93,
    'gyro_x': 14.57,
    'gyro_y': 10.47,
    'gyro_z': -15.62,
    'heading': 351.18
  },
  {
    'time': 93911,
    'acc_x': 0.34,
    'acc_y': 0.03,
    'acc_z': -0.97,
    'gyro_x': 15.65,
    'gyro_y': 5.92,
    'gyro_z': -11.56,
    'heading': 355
  },
  {
    'time': 93946,
    'acc_x': 0.34,
    'acc_y': 0.12,
    'acc_z': -0.98,
    'gyro_x': -3.22,
    'gyro_y': 3.65,
    'gyro_z': -15.79,
    'heading': 358.63
  },
  {
    'time': 93981,
    'acc_x': 0.35,
    'acc_y': 0.13,
    'acc_z': -0.98,
    'gyro_x': -6.36,
    'gyro_y': 6.63,
    'gyro_z': -11.19,
    'heading': 4.68
  },
  {
    'time': 94016,
    'acc_x': 0.36,
    'acc_y': 0.08,
    'acc_z': -0.99,
    'gyro_x': -5.79,
    'gyro_y': 9.46,
    'gyro_z': -4.21,
    'heading': 10.38
  },
  {
    'time': 94051,
    'acc_x': 0.37,
    'acc_y': 0.1,
    'acc_z': -0.95,
    'gyro_x': -2.03,
    'gyro_y': 7.15,
    'gyro_z': -1.62,
    'heading': 13.5
  },
  {
    'time': 94086,
    'acc_x': 0.38,
    'acc_y': 0.05,
    'acc_z': -0.91,
    'gyro_x': -0.27,
    'gyro_y': 11.31,
    'gyro_z': 3.73,
    'heading': 13.99
  },
  {
    'time': 94121,
    'acc_x': 0.41,
    'acc_y': 0.06,
    'acc_z': -1.02,
    'gyro_x': -3.69,
    'gyro_y': 9.97,
    'gyro_z': 11.15,
    'heading': 14.83
  },
  {
    'time': 94156,
    'acc_x': 0.41,
    'acc_y': -0.07,
    'acc_z': -1,
    'gyro_x': -2.97,
    'gyro_y': 5.79,
    'gyro_z': 5.53,
    'heading': 13.99
  },
  {
    'time': 94191,
    'acc_x': 0.43,
    'acc_y': -0.04,
    'acc_z': -0.95,
    'gyro_x': -1.49,
    'gyro_y': 8.72,
    'gyro_z': -1.71,
    'heading': 19.52
  },
  {
    'time': 94226,
    'acc_x': 0.42,
    'acc_y': 0.02,
    'acc_z': -0.9,
    'gyro_x': -3.84,
    'gyro_y': 10.91,
    'gyro_z': -7.53,
    'heading': 18.82
  },
  {
    'time': 94261,
    'acc_x': 0.44,
    'acc_y': 0.06,
    'acc_z': -0.9,
    'gyro_x': 4.52,
    'gyro_y': 7.45,
    'gyro_z': -9.63,
    'heading': 18.31
  },
  {
    'time': 94296,
    'acc_x': 0.4,
    'acc_y': 0.08,
    'acc_z': -0.91,
    'gyro_x': -5.35,
    'gyro_y': -0.69,
    'gyro_z': -10.18,
    'heading': 17.86
  },
  {
    'time': 94330,
    'acc_x': 0.37,
    'acc_y': 0.02,
    'acc_z': -0.92,
    'gyro_x': 5.88,
    'gyro_y': -1.16,
    'gyro_z': -9.85,
    'heading': 19.57
  },
  {
    'time': 94365,
    'acc_x': 0.39,
    'acc_y': 0.07,
    'acc_z': -0.98,
    'gyro_x': 0.81,
    'gyro_y': 1.03,
    'gyro_z': -7.63,
    'heading': 20.27
  },
  {
    'time': 94400,
    'acc_x': 0.4,
    'acc_y': 0.02,
    'acc_z': -0.97,
    'gyro_x': -2.92,
    'gyro_y': 3.37,
    'gyro_z': -7.98,
    'heading': 21.11
  },
  {
    'time': 94435,
    'acc_x': 0.41,
    'acc_y': 0,
    'acc_z': -0.9,
    'gyro_x': 6.08,
    'gyro_y': 0.05,
    'gyro_z': -6.21,
    'heading': 23.01
  },
  {
    'time': 94470,
    'acc_x': 0.42,
    'acc_y': -0.01,
    'acc_z': -0.9,
    'gyro_x': 0.05,
    'gyro_y': 1.73,
    'gyro_z': -7.69,
    'heading': 22.31
  },
  {
    'time': 94505,
    'acc_x': 0.42,
    'acc_y': 0.05,
    'acc_z': -0.93,
    'gyro_x': -10.87,
    'gyro_y': 0.58,
    'gyro_z': -9.64,
    'heading': 23.31
  },
  {
    'time': 94540,
    'acc_x': 0.41,
    'acc_y': 0.02,
    'acc_z': -0.96,
    'gyro_x': -0.26,
    'gyro_y': 1.69,
    'gyro_z': -5.44,
    'heading': 21.8
  },
  {
    'time': 94575,
    'acc_x': 0.43,
    'acc_y': 0.03,
    'acc_z': -0.92,
    'gyro_x': 4.73,
    'gyro_y': 0.21,
    'gyro_z': -8.55,
    'heading': 22.99
  },
  {
    'time': 94610,
    'acc_x': 0.45,
    'acc_y': 0.06,
    'acc_z': -0.91,
    'gyro_x': 0.31,
    'gyro_y': 1.27,
    'gyro_z': -10.95,
    'heading': 22.62
  },
  {
    'time': 94645,
    'acc_x': 0.44,
    'acc_y': 0.07,
    'acc_z': -0.92,
    'gyro_x': 7.74,
    'gyro_y': -1.24,
    'gyro_z': -7.18,
    'heading': 25.58
  },
  {
    'time': 94680,
    'acc_x': 0.45,
    'acc_y': 0.1,
    'acc_z': -0.94,
    'gyro_x': 3.89,
    'gyro_y': -3.65,
    'gyro_z': -8.93,
    'heading': 26.04
  },
  {
    'time': 94715,
    'acc_x': 0.43,
    'acc_y': 0.11,
    'acc_z': -0.97,
    'gyro_x': 2.05,
    'gyro_y': -3.58,
    'gyro_z': -5.48,
    'heading': 26.65
  },
  {
    'time': 94750,
    'acc_x': 0.43,
    'acc_y': 0.1,
    'acc_z': -0.94,
    'gyro_x': -4.03,
    'gyro_y': -2.75,
    'gyro_z': -1.48,
    'heading': 26.91
  },
  {
    'time': 94786,
    'acc_x': 0.43,
    'acc_y': 0.07,
    'acc_z': -0.95,
    'gyro_x': -4.24,
    'gyro_y': -1.69,
    'gyro_z': 0.6,
    'heading': 29.43
  },
  {
    'time': 94821,
    'acc_x': 0.42,
    'acc_y': 0.07,
    'acc_z': -0.94,
    'gyro_x': -2.34,
    'gyro_y': -0.66,
    'gyro_z': 3.47,
    'heading': 27.59
  },
  {
    'time': 94856,
    'acc_x': 0.42,
    'acc_y': 0,
    'acc_z': -0.92,
    'gyro_x': -3.74,
    'gyro_y': 0.97,
    'gyro_z': 4.93,
    'heading': 28.48
  },
  {
    'time': 94890,
    'acc_x': 0.44,
    'acc_y': 0.04,
    'acc_z': -0.93,
    'gyro_x': -4.03,
    'gyro_y': -0.9,
    'gyro_z': 1.47,
    'heading': 28.15
  },
  {
    'time': 94925,
    'acc_x': 0.42,
    'acc_y': 0.07,
    'acc_z': -0.93,
    'gyro_x': -4.89,
    'gyro_y': -3.74,
    'gyro_z': 4.12,
    'heading': 26.22
  },
  {
    'time': 94960,
    'acc_x': 0.43,
    'acc_y': 0.02,
    'acc_z': -0.92,
    'gyro_x': -12.4,
    'gyro_y': -5.33,
    'gyro_z': 7.5,
    'heading': 26.31
  },
  {
    'time': 94995,
    'acc_x': 0.45,
    'acc_y': 0.09,
    'acc_z': -1,
    'gyro_x': -7.56,
    'gyro_y': -5.37,
    'gyro_z': 5.37,
    'heading': 26.91
  },
  {
    'time': 95030,
    'acc_x': 0.44,
    'acc_y': 0.13,
    'acc_z': -0.95,
    'gyro_x': -3.46,
    'gyro_y': 1.95,
    'gyro_z': 5.7,
    'heading': 25.72
  },
  {
    'time': 95065,
    'acc_x': 0.42,
    'acc_y': 0,
    'acc_z': -0.93,
    'gyro_x': -9.64,
    'gyro_y': -4.3,
    'gyro_z': 6.89,
    'heading': 23.12
  },
  {
    'time': 95100,
    'acc_x': 0.42,
    'acc_y': 0.06,
    'acc_z': -0.97,
    'gyro_x': -3.55,
    'gyro_y': -2.52,
    'gyro_z': 5.61,
    'heading': 22.86
  },
  {
    'time': 95135,
    'acc_x': 0.42,
    'acc_y': 0.05,
    'acc_z': -0.9,
    'gyro_x': -0.18,
    'gyro_y': 1.08,
    'gyro_z': 5.17,
    'heading': 23.22
  },
  {
    'time': 95170,
    'acc_x': 0.41,
    'acc_y': 0,
    'acc_z': -0.95,
    'gyro_x': -3.07,
    'gyro_y': -3.35,
    'gyro_z': 6.4,
    'heading': 22.36
  },
  {
    'time': 95205,
    'acc_x': 0.41,
    'acc_y': 0.04,
    'acc_z': -0.89,
    'gyro_x': 3.24,
    'gyro_y': -2.66,
    'gyro_z': 3.96,
    'heading': 22.97
  },
  {
    'time': 95240,
    'acc_x': 0.41,
    'acc_y': 0.02,
    'acc_z': -0.92,
    'gyro_x': -0.3,
    'gyro_y': -3.52,
    'gyro_z': 3.59,
    'heading': 21.14
  },
  {
    'time': 95275,
    'acc_x': 0.41,
    'acc_y': 0,
    'acc_z': -0.97,
    'gyro_x': 0.45,
    'gyro_y': -5.45,
    'gyro_z': 3.63,
    'heading': 23.7
  },
  {
    'time': 95310,
    'acc_x': 0.42,
    'acc_y': 0.03,
    'acc_z': -0.95,
    'gyro_x': 3.44,
    'gyro_y': -4.48,
    'gyro_z': 2.94,
    'heading': 24.08
  },
  {
    'time': 95345,
    'acc_x': 0.41,
    'acc_y': 0.05,
    'acc_z': -0.92,
    'gyro_x': 1.04,
    'gyro_y': -2.45,
    'gyro_z': 3.02,
    'heading': 22
  },
  {
    'time': 95380,
    'acc_x': 0.41,
    'acc_y': 0.05,
    'acc_z': -0.95,
    'gyro_x': 1.79,
    'gyro_y': -3.74,
    'gyro_z': 4.71,
    'heading': 22.96
  },
  {
    'time': 95415,
    'acc_x': 0.41,
    'acc_y': 0.08,
    'acc_z': -0.94,
    'gyro_x': -1.85,
    'gyro_y': -2.68,
    'gyro_z': 2.71,
    'heading': 21.08
  },
  {
    'time': 95450,
    'acc_x': 0.41,
    'acc_y': 0.08,
    'acc_z': -0.96,
    'gyro_x': -1.11,
    'gyro_y': -1.98,
    'gyro_z': 6.52,
    'heading': 22.56
  },
  {
    'time': 95485,
    'acc_x': 0.41,
    'acc_y': 0.07,
    'acc_z': -0.98,
    'gyro_x': -0.78,
    'gyro_y': -2.59,
    'gyro_z': 4.37,
    'heading': 21.66
  }
]
let exportedData = {}
let gyro = []
let accel = []
let timeValues = []
let headingValues = []

sensordata.forEach(function (each) {
  let accMagnitude = Math.sqrt(Math.pow(each.acc_x, 2) + Math.pow(each.acc_y, 2) + Math.pow(each.acc_z, 2))
  let gyroMagnitude = Math.log(Math.sqrt(Math.pow(each.gyro_x, 2) + Math.pow(each.gyro_y, 2) + Math.pow(each.gyro_z, 2)))
  gyro.push(gyroMagnitude)
  accel.push(accMagnitude)
  timeValues.push(each.time)
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
