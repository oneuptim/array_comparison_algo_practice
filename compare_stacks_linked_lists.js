
var Node = function(val){
 this.val = val;
 this.next = null;
}

var SingleList= function(){
 this.head = null;
 this.tail = null;
}

SingleList.prototype.pop = function(){
  var cur = this.head
  while(cur.next.next){
    cur = cur.next
  }
  cur.next = null;
  this.tail = cur;
  return this;
}

SingleList.prototype.add = function (val) {
 if (!this.head){
   this.head = new Node(val);
   return this;
 }
 var current = this.head;
 while(current.next){
   current = current.next;
 }
 current.next = new Node(val);
 this.tail == current.next;
 return this;
};

sList1 = new SingleList();
sList1.add(2)
// console.log(sList1)

sList2 = new SingleList();
sList2.add(2)
// console.log(sList2)

compareLists = function(SLL1, SLL2){
  if(SLL1.head == null && SLL2.head == null) {
    console.log(SLL1)
    return true;
  }

  if(SLL1.head.next == null || SLL2.head.next == null){
      if(SLL1.head.val != SLL2.head.val){
        console.log("False")
        return false
      }
  }
  if(SLL1.head == null || SLL2.head == null){
    return false;
  }
  else{
    var cur1 = SLL1.head;
    var cur2 = SLL2.head;

    while(cur1.next || cur2.next){
      if(cur1.next == null || cur2.next == null){
        console.log("False")
        return false
      }
        if(cur1.next.val != cur2.next.val){

          console.log("False")
          return false
        }
          cur1 = cur1.next;
          cur2 = cur2.next;
    }
    console.log("True")
    return true;
  }
}

compareLists(sList1, sList2);
