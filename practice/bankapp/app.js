const bankInfo = {
    '000256784': '790',
    '000986056': '5600',
    '001546238': '78065',
    '030987456': '120910'
}

const bankForm = document.querySelector('.accountNumberForm');
const input = document.querySelector('.acc-number');
const output = document.querySelector('h1 .balance');
const statementTable = document.querySelector('.statement-table');

const getData = (e) => {
    e.preventDefault();
    let accInputedByUser = input.value;
    
    let accId = Object.keys(bankInfo);
    if (e.target.className === 'getData') {
        let accInputedByUser = input.value;
        if (accInputedByUser !== '') {
            accId.map(id => {
                if (accInputedByUser === id) {
                    output.textContent = bankInfo[accInputedByUser];
                    
                }
            })
        } else {
            output.textContent = 'Please Input Correct Bank Account';
        }


    } else if (e.target.className === 'withDraw'){
        const inputWithdraw = document.createElement('input');
        const confirmButton = document.createElement('button');
        confirmButton.className = 'confrimWidraw';
        confirmButton.textContent = 'Confirm';
        inputWithdraw.className = 'withdrawInput';

        bankForm.appendChild(inputWithdraw);
        bankForm.appendChild(confirmButton);

        
        confirmButton.addEventListener('click', () => {

            let widthdrawAmmount = parseInt(inputWithdraw.value);
            let currentBalance = parseInt(bankInfo[accInputedByUser]);
            let newBalance = currentBalance - widthdrawAmmount;

            let h2 = document.querySelector('h2');
            h2.innerText = `Your have withdrawn ${widthdrawAmmount} from your bank Acc# ${accInputedByUser} and your new available balance is ${newBalance}`;
            output.textContent = newBalance;

            bankInfo[accInputedByUser] = newBalance;

            if(newBalance < 0) {
                output.textContent = `${newBalance} You have no funds available`;
                h2.textContent = '';
            }

            console.log(bankInfo[accInputedByUser]);
            
        })
    }
}

bankForm.addEventListener('click', getData);