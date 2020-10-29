// This object describes a bank account
function account(name = "Alex", startingBalance = 0) {
   
   return{
      // Properties for name and balance
      name: name,
      balance: startingBalance,

      // This method adds a given value to the balance
      credit: function(val)  {
         this.balance += val;
      },
      
      // This method returns the owner and balance on the account
      describe: function() {
         console.log("owner: " + this.name, "balance " + this.balance);
      }
   }
}

const bankAccounts = [];
const prospectiveCustomers = ["John", "Paul", "George", "Ringo"]

// This creates an account for each customer and push it into the accounts array
prospectiveCustomers.forEach(customer => {
   bankAccounts.push(account(customer, 0));
})

// This adds ten to each account balance
bankAccounts.forEach(account => {
   account.describe();
   account.credit(10);
   account.describe();
})

const accountAlex = account();

accountAlex.describe();
accountAlex.credit(250);
accountAlex.credit(-80);
accountAlex.describe();