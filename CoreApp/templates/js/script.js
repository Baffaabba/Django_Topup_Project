// preselect.js for data page
window.onload = function() {
    const urlParams = new URLSearchParams(window.location.search);

    // Loop through all select elements on the page
    const selectElements = document.querySelectorAll('select');
    selectElements.forEach(function(select) {
        const fieldName = select.getAttribute('name');
        const fieldValue = urlParams.get(fieldName);
        
        if (fieldValue) {
            // Set the selected value for the current select element
            select.value = fieldValue;
        }
    });
};

// Data Dropdown_update.js
document.addEventListener("DOMContentLoaded", function() {
    // data
    const dataDropdown = document.getElementById("network");
    const dataPlanDropdown = document.getElementById("plan");

    // Define the options for each data network
    const dataOptions = {
        mtn: [
            { value: "500mb", label: "500MB - ₦117" },
            { value: "1gb", label: "1GB - ₦218" },
            { value: "2gb", label: "2GB - ₦436" },
            { value: "3gb", label: "3GB - ₦654" },
            { value: "5gb", label: "5GB - ₦1090" },
            { value: "10gb", label: "10GB - ₦2180" }

        ],
        airtel: [
            { value: "500mb", label: "500GB - ₦120" },
            { value: "1gb", label: "1GB - ₦240" },
            { value: "2gb", label: "2GB - ₦480" },
            { value: "3gb", label: "3GB - ₦720" },
            { value: "5gb", label: "5GB - ₦1200" },
            { value: "10gb", label: "10GB - ₦2400" }
        ],
        nmobile: [
            { value: "500mb", label: "500MB - ₦117" },
            { value: "1gb", label: "1GB - ₦218" },
            { value: "2gb", label: "2GB - ₦436" },
            { value: "3gb", label: "3GB - ₦654" },
            { value: "5gb", label: "5GB - ₦1090" },
            { value: "10gb", label: "10GB - ₦2180" }
        ],
        glo: [
            { value: "500mb", label: "500MB - ₦117" },
            { value: "1gb", label: "1GB - ₦218" },
            { value: "2gb", label: "2GB - ₦436" },
            { value: "3gb", label: "3GB - ₦654" },
            { value: "5gb", label: "5GB - ₦1090" },
            { value: "10gb", label: "10GB - ₦2180" }
        ]
    };


    // Function to update the data plan options
    function updateDataPlanOptions(selectedDataNetwork) {
        dataPlanDropdown.innerHTML = ""; // Clear existing options
        const options = dataOptions[selectedDataNetwork];
        
        if (options) {
            options.forEach(option => {
                const optionElement = document.createElement("option");
                optionElement.value = option.value;
                optionElement.textContent = option.label;
                dataPlanDropdown.appendChild(optionElement);
            });
        }
    }

    // Event listener for data dropdown change
    dataDropdown.addEventListener("change", function() {
        const selectedDataNetwork = dataDropdown.value;
        updateDataPlanOptions(selectedDataNetwork);
    });

    // Initial update based on default selection (if any)
    updateDataPlanOptions(dataDropdown.value);

});

// Cable Dropdown_update.js
document.addEventListener("DOMContentLoaded", function() {
    // cable
    const cableDropdown = document.getElementById("cable_net");
    const cablePlanDropdown = document.getElementById("cable_plan");
    // Define the options for each cable network
    const cableOptions = {
        dstv: [
            { value: "plan1", label: "Plan 1" },
            { value: "plan2", label: "Plan 2" }
        ],
        gotv: [
            { value: "plan3", label: "Plan 3" },
            { value: "plan4", label: "Plan 4" }
        ],
        startimes: [
            { value: "plan5", label: "Plan 5" },
            { value: "plan6", label: "Plan 6" }
        ]
    };
    // Function to update the cable plan options
    function updateCablePlanOptions(selectedCableNetwork) {
        cablePlanDropdown.innerHTML = ""; // Clear existing options
        const options = cableOptions[selectedCableNetwork];
        
        if (options) {
            options.forEach(option => {
                const optionElement = document.createElement("option");
                optionElement.value = option.value;
                optionElement.textContent = option.label;
                cablePlanDropdown.appendChild(optionElement);
            });
        }
    }
    // Event listener for cable_net dropdown change
    cableDropdown.addEventListener("change", function() {
        const selectedCableNetwork = cableDropdown.value;
        updateCablePlanOptions(selectedCableNetwork);
    });

    // Initial update based on default selection (if any)
    updateCablePlanOptions(cableDropdown.value);
    
});

// Airtime percentage calculation
document.addEventListener("DOMContentLoaded", function() {
    const amountInput = document.getElementById("amount");
    const amountPercentageLabel = document.getElementById("amountPercentageLabel");

    amountInput.addEventListener("input", function() {
        const inputAmount = parseFloat(amountInput.value);
        const amountPercentage = inputAmount * 0.9; // 90% of the inputted amount
        if (!isNaN(amountPercentage)) {
            amountPercentageLabel.textContent = amountPercentage.toFixed(2);
        } else {
            amountPercentageLabel.textContent = "-";
        }
    });
});
