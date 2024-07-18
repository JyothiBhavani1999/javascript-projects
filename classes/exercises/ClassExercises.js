// Define your Book class here:
class Book{
    constructor(title,author, copyrightDate,ISBN, pages, checkedOut,IsDiscarded){
        this.title = title;
        this.author = author,
        this.copyrightDate = copyrightDate,
        this.ISBN = ISBN;
        this.pages = pages;
        this.checkedOut = checkedOut;
        this.IsDiscarded = IsDiscarded;
        
    }
    checkout(uses =1)
    {
        this.checkedOut += uses;
    }
}

// Define your Manual and Novel classes here:
class Manual extends Book{
    constructor(title,author, copyrightDate,ISBN, pages, checkedOut,IsDiscarded){
        super(title,author, copyrightDate,ISBN, pages, checkedOut,IsDiscarded);
    }

    dispose(currentYear)
    {
        if(currentYear - this.copyrightDate > 5)
            this.IsDiscarded = 'yes';
    }
}

class Novel extends Book{
    constructor(title,author, copyrightDate,ISBN, pages, checkedOut,IsDiscarded){
        super(title,author, copyrightDate,ISBN, pages, checkedOut,IsDiscarded);
    }

    dispose() {
        if(this.checkedOut > 100){
                this.IsDiscarded = 'yes';
            }
    }
}

// Declare the objects for exercises 2 and 3 here:

let objectNovel = new Novel('Pride and Prejudice', 'Jane Austern', 1813,'1111111111111', 432,32, 'No');
let objectManual = new Manual('Top Secret Shuttle Building Manual','Redacted',2013,'0000000000000',1147,1,'No');

// Code exercises 4 & 5 here:

objectManual.dispose();
objectNovel.checkout(5);