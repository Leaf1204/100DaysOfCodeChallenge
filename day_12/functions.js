
const container =document.querySelector('.conatiner');
const square1 = document.getElementById('.square1');
const square2 = document.getElementById('.square2');

Draggable.create('#square1', {
    type: "rotation",
    inertia: true,
    snap: function(value) {
        return Math.round(value / 90) * 90;
    }
 });

Draggable.create('#square2');