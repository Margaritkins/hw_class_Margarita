class RangeWalidator {
  /**
   * 
   * @param {number} from 
   * @param {number} to 
   */
  constructor(from = 0,to = 10){
this.from = from;
this.to = to;
  }

getRange(){
  return[this._from, this._to]
}
validate(number){
  if(typeof number !== 'number'){
    throw new TypeError('must be number')
  }
  return (number>=this._from&& number<=this._to) ? true : false;
}

get from(){
  return this._from;
}
set from(number){
  if(typeof number !== 'number'){
    throw new TypeError('must be number')
  }
  if (number < 0) {
    throw new RangeError("must be positive number");
  }
  this._from = number;
}

get to(){
  return this._to;
}
set to(number){
  if(typeof number !== 'number'){
    throw new TypeError('must be number')
  }
  if (number < 0) {
    throw new RangeError("must be positive number");
  }
  this._to = number;
}
}

try {
  const range = new RangeWalidator(2,15)
  console.log(range);
  console.log(range.getRange());
  console.log(range.validate(5));
} catch (error) {
  console.log(error.message);
}