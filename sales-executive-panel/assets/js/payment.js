  
        // Sample payment data
        const receivedPayments = [
            { id: 56, date: '2025-05-16', project: 'ninamur-project-b', source: 'UP', rate: 12, client: 'Sandeep Kumar', sales: 'Mukul Meena', billing: 'Fix', amount: 232134256, deduction: 860, total: 2345.00 },
            { id: 57, date: '2025-05-17', project: 'ninamur-project-c', source: 'UP', rate: 8, client: 'Sandeep Kumar', sales: 'Mukul Meena', billing: 'Hourly', amount: 232134257, deduction: 900, total: 1500.00 },
            { id: 58, date: '2025-05-18', project: 'ninamur-project-d', source: 'UP', rate: 15, client: 'Sandeep Kumar', sales: 'Mukul Meena', billing: 'Fix', amount: 232134258, deduction: 950, total: 2500.00 },
            { id: 59, date: '2025-05-19', project: 'ninamur-project-e', source: 'UP', rate: 20, client: 'Sandeep Kumar', sales: 'Mukul Meena', billing: 'Hourly', amount: 232134259, deduction: 800, total: 1800.00 },
            { id: 60, date: '2025-05-20', project: 'ninamur-project-f', source: 'UP', rate: 5, client: 'Sandeep Kumar', sales: 'Mukul Meena', billing: 'Fix', amount: 232134260, deduction: 950, total: 1600.00 },
            { id: 61, date: '2025-05-21', project: 'ninamur-project-g', source: 'UP', rate: 18, client: 'Sandeep Kumar', sales: 'Mukul Meena', billing: 'Fix', amount: 232134261, deduction: 880, total: 2300.00 },
            { id: 62, date: '2025-05-22', project: 'ninamur-project-h', source: 'UP', rate: 10, client: 'Sandeep Kumar', sales: 'Mukul Meena', billing: 'Hourly', amount: 232134262, deduction: 920, total: 2100.00 },
            { id: 63, date: '2025-05-23', project: 'ninamur-project-i', source: 'UP', rate: 11, client: 'Sandeep Kumar', sales: 'Mukul Meena', billing: 'Fix', amount: 232134263, deduction: 840, total: 1900.00 },
            { id: 64, date: '2025-05-24', project: 'ninamur-project-j', source: 'UP', rate: 14, client: 'Sandeep Kumar', sales: 'Mukul Meena', billing: 'Fix', amount: 232134264, deduction: 910, total: 2200.00 },
            { id: 65, date: '2025-05-25', project: 'ninamur-project-k', source: 'UP', rate: 9, client: 'Sandeep Kumar', sales: 'Mukul Meena', billing: 'Hourly', amount: 232134265, deduction: 870, total: 2000.00 },
            { id: 66, date: '2025-05-26', project: 'ninamur-project-l', source: 'UP', rate: 7, client: 'Sandeep Kumar', sales: 'Mukul Meena', billing: 'Fix', amount: 232134266, deduction: 950, total: 1700.00 },
            { id: 67, date: '2025-05-27', project: 'ninamur-project-m', source: 'OP', rate: 13, client: 'Sandeep Kumar', sales: 'Mukul Meena', billing: 'Hourly', amount: 232134267, deduction: 890, total: 2400.00 },
            { id: 68, date: '2025-05-28', project: 'ninamur-project-n', source: 'OP', rate: 16, client: 'Sandeep Kumar', sales: 'Mukul Meena', billing: 'Fix', amount: 232134268, deduction: 930, total: 3000.00 }
        ];

        const receivablePayments = [
            { id: 101, date: '2025-06-01', project: 'pending-project-a', source: 'UP', rate: 15, client: 'Ravi Sharma', sales: 'Arjun Patel', billing: 'Fix', amount: 145000, deduction: 500, total: 3500.00 },
            { id: 102, date: '2025-06-02', project: 'pending-project-b', source: 'MP', rate: 12, client: 'Neha Singh', sales: 'Priya Gupta', billing: 'Hourly', amount: 156000, deduction: 600, total: 2800.00 },
            { id: 103, date: '2025-06-03', project: 'pending-project-c', source: 'RJ', rate: 18, client: 'Amit Kumar', sales: 'Rohit Verma', billing: 'Fix', amount: 178000, deduction: 750, total: 4200.00 },
            { id: 104, date: '2025-06-04', project: 'pending-project-d', source: 'GJ', rate: 10, client: 'Sunita Patel', sales: 'Kavita Shah', billing: 'Hourly', amount: 134000, deduction: 400, total: 2200.00 },
            { id: 105, date: '2025-06-05', project: 'pending-project-e', source: 'MH', rate: 22, client: 'Deepak Joshi', sales: 'Manish Agarwal', billing: 'Fix', amount: 189000, deduction: 850, total: 5100.00 }
        ];

        let currentTab = 'received';
        let currentData = receivedPayments;

        // Tab switching functionality
        function switchTab(tab) {
            currentTab = tab;
            
            // Update tab buttons
            document.getElementById('received-tab').classList.toggle('active', tab === 'received');
            document.getElementById('receivable-tab').classList.toggle('active', tab === 'receivable');
            
            // Update data
            currentData = tab === 'received' ? receivedPayments : receivablePayments;
            
            // Re-render table
            renderTable();
        }

        // Render table function
        function renderTable() {
            const tbody = document.getElementById('table-body');
            
            tbody.innerHTML = currentData.map(row => `
                <div class="table-row">
                    <div class="table-cell">${row.id}</div>
                    <div class="table-cell">${row.date}</div>
                    <div class="table-cell">${row.project}</div>
                    <div class="table-cell">${row.source}</div>
                    <div class="table-cell">${row.rate}</div>
                    <div class="table-cell">${row.client}</div>
                    <div class="table-cell">${row.sales}</div>
                    <div class="table-cell">${row.billing}</div>
                    <div class="table-cell">${row.amount}</div>
                    <div class="table-cell">${row.deduction}</div>
                    <div class="table-cell">${row.total.toFixed(2)}</div>
                    <div class="table-cell">
                        <button class="ellipsis-button">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <circle cx="9.99995" cy="10.0008" r="0.83333" fill="#224FB1"/>
                                <circle cx="15.8333" cy="10.0008" r="0.83333" fill="#224FB1"/>
                                <circle cx="4.16662" cy="10.0008" r="0.83333" fill="#224FB1"/>
                            </svg>
                        </button>
                    </div>
                </div>
            `).join('');
        }

        // Event listeners
        document.getElementById('received-tab').addEventListener('click', () => switchTab('received'));
        document.getElementById('receivable-tab').addEventListener('click', () => switchTab('receivable'));

        // Initialize
        document.addEventListener('DOMContentLoaded', function() {
            renderTable();
        });

        // Search functionality
        document.querySelector('.search-input').addEventListener('input', function(e) {
            const searchTerm = e.target.value.toLowerCase();
            const filteredData = currentData.filter(row => 
                Object.values(row).some(value => 
                    value.toString().toLowerCase().includes(searchTerm)
                )
            );
            
            const tbody = document.getElementById('table-body');
            tbody.innerHTML = filteredData.map(row => `
                <div class="table-row">
                    <div class="table-cell">${row.id}</div>
                    <div class="table-cell">${row.date}</div>
                    <div class="table-cell">${row.project}</div>
                    <div class="table-cell">${row.source}</div>
                    <div class="table-cell">${row.rate}</div>
                    <div class="table-cell">${row.client}</div>
                    <div class="table-cell">${row.sales}</div>
                    <div class="table-cell">${row.billing}</div>
                    <div class="table-cell">${row.amount}</div>
                    <div class="table-cell">${row.deduction}</div>
                    <div class="table-cell">${row.total.toFixed(2)}</div>
                    <div class="table-cell">
                        <button class="ellipsis-button">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <circle cx="9.99995" cy="10.0008" r="0.83333" fill="#224FB1"/>
                                <circle cx="15.8333" cy="10.0008" r="0.83333" fill="#224FB1"/>
                                <circle cx="4.16662" cy="10.0008" r="0.83333" fill="#224FB1"/>
                            </svg>
                        </button>
                    </div>
                </div>
            `).join('');
        });

        // Rows per page functionality
        document.querySelector('.rows-select').addEventListener('change', function(e) {
            console.log('Rows per page changed to:', e.target.value);
            // Implement pagination logic here
        });

        // Pagination button functionality
        document.querySelectorAll('.pagination-button').forEach(button => {
            button.addEventListener('click', function() {
                if (!this.classList.contains('disabled')) {
                    console.log('Pagination button clicked');
                    // Implement pagination logic here
                }
            });
        });
    