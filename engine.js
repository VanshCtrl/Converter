/**
 * QUANTUM_CONVERT - Metric Real-time Execution Module
 * Tailored mathematical processing pipeline for bi-directional ratio scales.
 */

/**
 * Normalizes floating-point calculation output layers to eliminate JavaScript rounding micro-anomalies.
 * @param {number} value - Raw mathematical calculation product.
 * @returns {number} - Formatted clean decimal scale.
 */
function normalizePrecision(value) {
    if (isNaN(value) || value === 0) return "";
    // Limit processing resolution to 4 decimal places, trimming unnecessary trailing zeros
    return parseFloat(value.toFixed(4));
}

/**
 * Handles the calculation routine for bidirectional Mass metrics.
 * Baseline Const: 1 Kilogram = 2.2046226218 Pounds.
 */
function processMassConversion(triggerSource) {
    const lbsField = document.getElementById("input-lbs");
    const kgField = document.getElementById("input-kg");

    if (triggerSource === 'lbs') {
        const rawLbs = parseFloat(lbsField.value);
        if (lbsField.value === "") { kgField.value = ""; return; }
        
        const calculatedKg = rawLbs / 2.2046226218;
        kgField.value = normalizePrecision(calculatedKg);
    } else {
        const rawKg = parseFloat(kgField.value);
        if (kgField.value === "") { lbsField.value = ""; return; }
        
        const calculatedLbs = rawKg * 2.2046226218;
        lbsField.value = normalizePrecision(calculatedLbs);
    }
}

/**
 * Handles the calculation routine for bidirectional Linear metrics.
 * Baseline Const: 1 Foot = 0.3048 Meters exactly.
 */
function processLinearConversion(triggerSource) {
    const ftField = document.getElementById("input-ft");
    const mField = document.getElementById("input-m");

    if (triggerSource === 'ft') {
        const rawFt = parseFloat(ftField.value);
        if (ftField.value === "") { mField.value = ""; return; }
        
        const calculatedM = rawFt * 0.3048;
        mField.value = normalizePrecision(calculatedM);
    } else {
        const rawM = parseFloat(mField.value);
        if (mField.value === "") { ftField.value = ""; return; }
        
        const calculatedFt = rawM / 0.3048;
        ftField.value = normalizePrecision(calculatedFt);
    }
}
