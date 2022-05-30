// Changed to A330-200 -
const airDistanceCoeff = math.bignumber(math.matrix([
    [-1.193421E-01,9.999208E-01,1.972686E-07,-9.876398E-11,2.034579E-14,-1.845797E-18,6.125290E-23],
    [-6.393208E-04,-2.113044E-03,-2.291667E-09,6.381421E-13,-7.194315E-17,2.813711E-21,0],
    [8.624292E-05,4.444231E-06,3.601339E-12,-6.830779E-16,3.515138E-20,0,0],
    [1.175757E-08,-9.387742E-09,2.145913E-15,5.336677E-20,0,0,0],
    [-1.009757E-08,2.329512E-11,1.864882E-17,0,0,0,0],
    [1.714159E-12,-5.146532E-14,0,0,0,0,0],
    [2.942529E-13,0,0,0,0,0,0]
]));

// Changed to A330-200 -
const fuelConsumedCoeff = math.bignumber(math.matrix([
    [-4.147506E+03,1.708797E+01,2.477514E-03,-5.813358E-07,1.253461E-11,8.261034E-16],
    [1.456786E+02,-8.071866E-02,3.737334E-06,2.599796E-09,-9.285001E-14, 0],
    [-1.456217E+00,4.560996E-04,-6.707909E-08,-1.126971E-12, 0, 0],
    [6.544570E-03,-1.125090E-06,8.837668E-11, 0, 0, 0],
    [-1.356472E-05,1.005294E-09, 0, 0, 0, 0],
    [1.049711E-08, 0, 0, 0, 0, 0]
]));

// Changed to A330-200
const timeCoeff = math.bignumber(math.matrix([
    [1.139448E+02,2.260917E-01,-9.019192E-05,9.890140E-09,-5.747274E-13,1.961756E-17],
    [-3.375217E+00,1.326073E-03,3.789866E-07,-2.610647E-11,2.678575E-16, 0],
    [3.099789E-02,-1.261851E-05,-4.810104E-10,2.889694E-14, 0, 0],
    [-1.286199E-04,3.337153E-08,-4.897841E-15, 0, 0, 0],
    [2.499341E-07,-2.792571E-11, 0, 0, 0, 0],
    [-1.860773E-10, 0, 0, 0, 0, 0]
]));

// Changed to A330-200
const correctionsCoef = math.bignumber(math.matrix ([
    [5.0156E+02,-5.9530E-01,2.3913E-04,-1.8050E-09,-6.1541E-13,1.2490E-17],
    [-9.9221E+00,8.7919E-03,-2.0251E-06,4.4300E-11,8.4076E-16, 0],
    [37.5345E-02,-4.4865E-05,5.1193E-09,-8.5846E-14, 0, 0],
    [-2.7390E-04,1.0040E-07,-3.9221E-12, 0, 0, 0],
    [4.7907E-07,-8.2989E-11, 0, 0, 0, 0],
    [-3.2429E-10, 0, 0, 0, 0, 0]
]));

// Changed to A330-200
const altTimeCoef = math.bignumber(math.matrix([
    [-2.8551E+00,3.2843E-02,7.2674E-04,-1.0798E-06,7.6211E-10,-2.0046E-13],
    [4.6657E-02,5.2254E-04,-2.8088E-06,2.2768E-09,-8.7169E-13, 0],
    [2.2543E-04,2.0673E-06,3.4955E-09,5.9417E-13, 0, 0],
    [-7.6148E-06,-1.2862E-08,-8.2971E-12, 0, 0, 0],
    [2.9672E-08,2.6357E-11, 0, 0, 0, 0],
    [-3.7950E-11, 0, 0, 0, 0, 0]
]));

// Changed to A330-200
const altFuelConsumedCoef = math.bignumber(math.matrix([
    [5.7465E+03,2.5621E+01,-5.6915E-02,1.2417E-04,-1.2072E-07,4.2687E-11],
    [-1.3778E+02,8.7152E-02,-2.1152E-04,3.2341E-07,-1.5671E-10, 0],
    [1.1286E+00,-2.6889E-04,-4.8825E-07,3.2328E-10, 0, 0],
    [-4.5306E-03,1.8050E-06,-3.8252E-10, 0, 0, 0],
    [8.0530E-06,-1.2126E-09, 0, 0, 0, 0],
    [-5.7534E-09, 0, 0, 0, 0, 0]
]));

// Changed to A330-200
const altCorrectionsCoeff = math.bignumber(math.matrix([
    [2.8073E+01,3.8330E-02,-8.2075E-05,2.2611E-07,-2.5298E-10,9.7959E-14],
    [-7.0439E-01,5.4567E-04,-5.9324E-07,9.4852E-10,-4.7601E-13, 0],
    [6.2980E-03,-2.3102E-06,-1.5183E-09,1.0758E-12, 0, 0],
    [-2.7231E-05,9.0828E-09,-1.4299E-12, 0, 0, 0],
    [5.4405E-08,-6.4057E-12, 0, 0, 0, 0],
    [-4.2977E-11, 0, 0, 0, 0, 0]
]));

// Changed to A330-200
const holdingFFCoeff = math.bignumber(math.matrix([
    [1.4880E+03,-1.1726E+01,4.4394E-02,1.8137E-03,-1.6466E-05,5.5592E-08,-6.7326E-11],
    [7.1323E+00,2.2026E-01,-5.8571E-03,4.3047E-05,-1.2946E-07,1.3984E-10, 0],
    [-5.4500E-01,7.3688E-03,-3.0702E-05,3.6727E-08,1.5018E-11, 0, 0],
    [3.0546E-03,-3.5044E-05,1.2062E-07,-1.2810E-10, 0, 0, 0],
    [-6.8774E-06,5.6990E-08,-1.0004E-10, 0, 0, 0, 0],
    [6.4511E-09,-3.3384E-11, 0, 0, 0, 0, 0],
    [-9.4914E-13, 0, 0, 0, 0, 0, 0]
]));

const userAltTimeCoeff = math.bignumber(math.matrix([
    [-1.3971E+01,-1.4150E-02,6.0052E-06,-6.2156E-10,3.1424E-14,-5.9078E-19],
    [5.3276E-01,1.4916E-04,-1.7054E-08,5.8997E-13,-1.2773E-17, 0],
    [-5.6128E-03,-4.8051E-07,6.1736E-11,-7.5211E-16, 0, 0],
    [2.3590E-05,-5.4871E-11,-6.9153E-14, 0, 0, 0],
    [-4.1375E-08,1.2055E-12, 0, 0, 0, 0],
    [2.3940E-11, 0, 0, 0, 0, 0]
]));

/**
 * @param {number}value - the value to build the matrix from
 * @returns {math.matrix} return a 7x7 matrix for A predictors
 */
const _buildAMatrix7 = (value) => {
    return math.bignumber(math.matrix([
        [1, value ** 1, value ** 2, value ** 3, value ** 4, value ** 5, value ** 6],
        [0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0],
    ]));
};

/**
 * @param {number}value - the value to build the matrix from
 * @returns {math.matrix} return a 6x6 matrix for A predictors
 */
const _buildAMatrix6 = (value) => {
    return math.bignumber(math.matrix([
        [1, value ** 1, value ** 2, value ** 3, value ** 4, value ** 5],
        [0,0,0,0,0,0],
        [0,0,0,0,0,0],
        [0,0,0,0,0,0],
        [0,0,0,0,0,0],
        [0,0,0,0,0,0],
    ]));
};

/**
 * @param {number}value - the value to build the matrix from
 * @returns {math.matrix} return a 7x7 matrix for B predictors
 */
const _buildBMatrix7 = (value) => {
    return math.bignumber(math.matrix([
        [1,0,0,0,0,0,0],
        [value ** 1,0,0,0,0,0,0],
        [value ** 2,0,0,0,0,0,0],
        [value ** 3,0,0,0,0,0,0],
        [value ** 4,0,0,0,0,0,0],
        [value ** 5,0,0,0,0,0,0],
        [value ** 6,0,0,0,0,0,0],
    ]));
};

/**
 * @param {number}value - the value to build the matrix from
 * @returns {math.matrix} return a 6x6 matrix for B predictors
 */
const _buildBMatrix6 = (value) => {
    return math.bignumber(math.matrix([
        [1,0,0,0,0,0],
        [value ** 1,0,0,0,0,0],
        [value ** 2,0,0,0,0,0],
        [value ** 3,0,0,0,0,0],
        [value ** 4,0,0,0,0,0],
        [value ** 5,0,0,0,0,0],
    ]));
};
//TODO Refactor this when you have time
class A32NX_FuelPred {

    /**
     * Computes a flight time when a user inputs they're own weight for alternate fuel
     * @param {number} fuel - fuel in kg e.g 1200KG
     * @param {number} flightLevel - Flight Level in raw form e.g FL120 = 120
     * @return {number} predicted flight time
     */
    static computeUserAltTime(fuel, flightLevel) {
        const fuelMatrix = _buildAMatrix6(fuel);
        const flightLevelMatrix = _buildBMatrix6(flightLevel);
        const mmOfFuelFL = math.multiply(flightLevelMatrix, fuelMatrix);
        return (Math.round(math.sum(math.dotMultiply(userAltTimeCoeff, mmOfFuelFL))));
    }

    /**
     * Computes Air Distance in NM using computed polynomial coefficients
     * @param {number} groundDistance - ground distance in NM e.g 200
     * @param {number} windComponent - wind in KTs, HD should be identified with a negative number
     * e.g HD150 == -150 vice versa for tailwind
     * @returns {number} computedAirDistance in NM
     */
    static computeAirDistance(groundDistance, windComponent) {
        const groundMatrix = _buildAMatrix7(groundDistance);
        const windMatrix = _buildBMatrix7(windComponent);

        const mmOfGroundWind = math.multiply(windMatrix, groundMatrix);
        return (Math.round(math.sum(math.dotMultiply(airDistanceCoeff,mmOfGroundWind))));
    }

    /**
     *
     * @param {number} weight - ZFW weight of the aircraft in padded form e.g 53,000KG = 53
     * @param {number} flightLevel - Flight level in padded form without any alpha chracters e.g FL250 = 250
     * @return {number} predicted fuel flow for one engine per hour e.g result = 600, then 600kg for 30 minutes of holding
     */
    static computeHoldingTrackFF(weight, flightLevel) {
        const weightMatrix = _buildAMatrix7(weight);
        const flightLevelMatrix = _buildBMatrix7(flightLevel);
        const mmOfWeightFL = math.multiply(flightLevelMatrix, weightMatrix);
        return (Math.round(math.sum(math.dotMultiply(holdingFFCoeff,mmOfWeightFL))));
    }

    /**
     * Computes time, fuel and corrections needed for a trip or alternate //TODO work on a new method name
     * @param {number} airDistance - air distance in NM e.g 200
     * @param {number} flightLevel - cruising flight level e.g FL290 == 290
     * @param {computations} computation - ENUM of either TIME, FUEL or CORRECTIONS
     * @param {boolean} alternate - States whether this computations is for an alternate destination or not
     * @returns {number} fuel consumed in KG
     */
    static computeNumbers(airDistance, flightLevel, computation, alternate) {
        const airDistanceMatrix = _buildAMatrix6(airDistance);
        const flightLevelMatrix = _buildBMatrix6(flightLevel);
        const mmOfDistFL = math.multiply(flightLevelMatrix, airDistanceMatrix);
        //TODO Create logic for handling 200NM and FL390 = 0
        switch (computation) {
            case this.computations.FUEL:
                return (Math.round(math.sum(math.dotMultiply((alternate ? altFuelConsumedCoef : fuelConsumedCoeff), mmOfDistFL))));
            case this.computations.TIME:
                return (Math.round(math.sum(math.dotMultiply((alternate ? altTimeCoef : timeCoeff), mmOfDistFL))));
            case this.computations.CORRECTIONS:
                return (Math.round(math.sum(math.dotMultiply((alternate ? altCorrectionsCoeff : correctionsCoef), mmOfDistFL))));
        }
    }

    constructor() {
    }
}

A32NX_FuelPred.refWeight = 140;

A32NX_FuelPred.computations = {
    TIME:"time",
    FUEL:"fuel",
    CORRECTIONS:"corrections"
};

A32NX_FuelPred.correction = {
    LOW_AIR_CONDITIONING : -0.005,
    ENGINE_ANTI_ICE_ON : 0.015,
    TOTAL_ANTI_ICE_ON : 0.03,
};
// Pack HI : 0.01

A32NX_FuelPred.altCorrection = {
    LOW_AIR_CONDITIONING: -0.005,
    ENGINE_ANTI_ICE_ON: 0.03,
    TOTAL_ANTI_ICE_ON: 0.05,
    LOW_AIR_CONDITIONING_HIGH_FL: -0.005,
    ENGINE_ANTI_ICE_ON_HIGH_FL : 0.03,
    TOTAL_ANTI_ICE_ON_HIGH_FL : 0.05
};
