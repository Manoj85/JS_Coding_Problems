
$(document).ready(function() {
    const inputArr1 = [2, 4, 5, 2, 3, 4, 6, 6, 4, 5];
    const inputArr2 = [9, 8, 7, 6, 5, 5, 6, 7, 8, 9];
    const inputArr3 = [5, 4, 3, 2, 1, 5];
    const inputArr4 = [1, 0, 3, 2];

    $(document).on('click', '.run-btn', function() {
        let finalValue_1 = calculateFloodVolume(inputArr1);
        console.log ('Final Value 1 = ' + finalValue_1);
        $('#output-1').text('Output = ' + finalValue_1);
    });

    $(document).on('click', '.run-btn-2', function() {
        let finalValue_2 = calculateFloodVolume(inputArr2);
        console.log ('Final Value 2 = ' + finalValue_2);
        $('#output-2').text('Output = ' + finalValue_2);
    });

    $(document).on('click', '.run-btn-3', function() {
        let finalValue_3 = calculateFloodVolume(inputArr3);
        console.log ('Final Value 3 = ' + finalValue_3);
        $('#output-3').text('Output = ' + finalValue_3);
    });

    $(document).on('click', '.run-btn-4', function() {
        let finalValue_4 = calculateFloodVolume(inputArr4);
        console.log ('Final Value 4 = ' + finalValue_4);
        $('#output-4').text('Output = ' + finalValue_4);
    });
});

function calculateFloodVolume ( input ) {

    console.log( JSON.stringify(input) );

    let maxHeightLeft = 0;

    const output = input.map(
        function (value, index, arr)  {
            // Base case
            let previousValue = (index === 0) ? 0 : arr[index-1];

            // For each value, determine the maxHeightLeft and maxHeightRight
            // Find the minimum value of the two and subtract the 'value' from it.
            let maxHeightRight = calculateMaxRight(arr.slice(index+1),  arr[index]);

            if (maxHeightLeft <= previousValue) {

                // Set the LEFT max-height to previous_value
                maxHeightLeft = previousValue;

                if (maxHeightRight < maxHeightLeft) {
                    // Find the next maximum value to the RIGHT which is Greater/Equal to maxHeightLeft
                    let newMaxHeightRight = calculateMaxRight(arr.slice(index + 1), maxHeightLeft);

                    if (newMaxHeightRight === 0) {
                        return calculateRetainedVolume(arr[index + 1], maxHeightLeft, value);
                    }
                    return calculateRetainedVolume(newMaxHeightRight, maxHeightLeft, value);
                }
                return calculateRetainedVolume(maxHeightRight, maxHeightLeft, value);
            } else {
                if (maxHeightRight < maxHeightLeft) {
                    // Find the next maximum value to the RIGHT which is Greater/Equal to maxHeightLeft
                    let newMaxHeightRight = calculateMaxRight(arr.slice(index + 1), maxHeightLeft);

                    // Calculate the retained flood volume
                    return calculateRetainedVolume(newMaxHeightRight, maxHeightLeft, value);
                }

                // Calculate the retained flood volume
                return calculateRetainedVolume(maxHeightRight, maxHeightLeft, value);
            }
        }
    );


    const total_value_arr = output.filter(value => value && value > 0);
    const total_flood_volume = total_value_arr.reduce( (previousValue, currentValue) => previousValue + currentValue, 0);

    return total_flood_volume;
}

/*
 *  Calculate the maximum value to the right
 */
const calculateMaxRight = (arr, currentValue) => {
    "use strict";
    return arr.filter(v => v >= currentValue).shift() || 0;
}

/*
 *  Calculate the retained flood volume at the current value
 */
const calculateRetainedVolume = (right, left, value) => {
    "use strict";
    return Math.min(right, left) - value;
}
