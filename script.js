document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('receiptForm').addEventListener('submit', (event) => {
        event.preventDefault();

        const fields = ['studentName', 'studentID', 'schoolFees', 'extracurricularFees', 'reportCardFees', 'uniformFees', 'feedingFees'];
        const data = fields.reduce((obj, id) => {
            obj[id] = document.getElementById(id).value;
            return obj;
        }, {});

        const fees = ['schoolFees', 'extracurricularFees', 'reportCardFees', 'uniformFees', 'feedingFees'];
        const totalFees = fees.reduce((total, fee) => total + parseFloat(data[fee] || 0), 0);


let receiptHTML = "<h2>School Receipt</h2>";
receiptHTML += "<p><strong>Student Name:</strong> " + data.studentName + "</p>";
receiptHTML += "<p><strong>Student ID:</strong> " + data.studentID + "</p>";

for (let i = 0; i < fees.length; i++) {
  let fee = fees[i];
  // Extract fee name
  let feeName = fee.replace(/([A-Z])/g, ' $1').replace(/^./, function(str) { return str.toUpperCase(); });
  // Get fee amount and convert to float
  let feeAmount = parseFloat(data[fee] || 0).toFixed(2);
  receiptHTML += "<p><strong>" + feeName + ":</strong> $" + feeAmount + "</p>";
}

receiptHTML += "<p><strong>Total Fees:</strong> $" + totalFees.toFixed(2) + "</p>";
receiptHTML += "<p>Thanks for your patronage!</p>"
});


})