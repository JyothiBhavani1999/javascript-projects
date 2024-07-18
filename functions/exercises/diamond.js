

function makeSquare(size){
    let square = '';
    for(let i=0;i<size;i++)
        {
            let line = makeLine(size);
            square = square+ line;
            if (i < size - 1) {
                square += '\n';
            }
        
        }
        return square;
}


function makeRectangle(width, height){
    let rectangle = '';
    for(let i =0;i<height;i++)
        {
            rectangle = rectangle+(makeLine(width)+'\n');
        }
    return rectangle;    
}

function makeSpaceLine(numSpaces, numChars)
{
    let spaces='';
    let chars = '';
    for(let i =0;i<numSpaces;i++)
        {
            spaces= spaces+ ' ';
        }
    chars = makeLine(numChars);
    return spaces + chars;
}

function makeIsoscelesTriangle(height, character = '#') {
    let triangle = '';
    for (let i = 0; i < height; i++) {
      triangle += (makeSpaceLine(height - i - 1, 2*i + 1) + '\n');
    }
    return triangle;
  }

function makeDiamond(height, character = '#'){
    
    let diamond = '';
    for (let i = 0; i < height; i++) {
        diamond = diamond+ (makeSpaceLine(height - i - 1, 2*i + 1) + '\n');
      }

    for (let i = height - 2; i >= 0; i--) {
        diamond += (makeSpaceLine(height - i - 1, 2*i + 1) + '\n');
    }

    return diamond;

}

function makeLine(size)
{
    let line = '';
    for(let i=0;i<size;i++)
        {
            line = line+'#';
        }
    return line;
}

//console.log(makeLine(5));
//console.log(makeSquare(5));
//console.log(makeRectangle(5, 3));
//console.log(makeSpaceLine(3, 5));
//console.log(makeIsoscelesTriangle(5));
console.log(makeDiamond(5, '*'));
