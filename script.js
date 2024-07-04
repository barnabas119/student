
document.addEventListener('DOMContentLoaded', function() {
    const receiptForm = document.getElementById('receiptForm');
    const receiptOutput = document.getElementById('receiptOutput');

    receiptForm.addEventListener('submit', function(event) {
        event.preventDefault();

        // Get form values
        const studentName = document.getElementById('studentName').value;
        const studentID = document.getElementById('studentID').value;
        const schoolFees = parseFloat(document.getElementById('schoolFees').value);
        const extracurricularFees = parseFloat(document.getElementById('extracurricularFees').value);
        const reportCardFees = parseFloat(document.getElementById('reportCardFees').value);
        const uniformFees = parseFloat(document.getElementById('uniformFees').value);
        const feedingFees = parseFloat(document.getElementById('feedingFees').value);

        // Calculate total fees
        const totalFees = schoolFees + extracurricularFees + reportCardFees + uniformFees + feedingFees;

        // Generate receipt HTML
        const receiptHTML = 
            <h2>School Receipt</h2>
            <p><strong>Student Name:</strong> ${studentName}</p>
            <p><strong>Student ID:</strong> ${studentID}</p>
            <p><strong>School Fees:</strong> $${schoolFees.toFixed(2)}</p>
            <p><strong>Extracurricular Fees:</strong> $${extracurricularFees.toFixed(2)}</p>
            <p><strong>Report Card Fees:</strong> $${reportCardFees.toFixed(2)}</p>
            <p><strong>Uniform Fees:</strong> $${uniformFees.toFixed(2)}</p>
            <p><strong>Feeding Fees:</strong> $${feedingFees.toFixed(2)}</p>
            <p><strong>Total Fees:</strong> $${totalFees.toFixed(2)}</p>
            <p>Thanks for your patronage!</p>
        ;

        // Display receipt
        receiptOutput.innerHTML = receiptHTML;
    });
});
  
