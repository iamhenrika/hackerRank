this.insert = function (head, data) {
  //complete this method
  var node = new Node(data);
  if (head == null) {
    head = node;
  } else {
    var temp = head; // temporary variable

    while (temp.next != null) temp = temp.next;
    temp.next = node;
  }

  return head;
};