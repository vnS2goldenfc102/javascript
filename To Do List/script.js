// document.querySelector('#push').onclick = function(){
//     if(document.querySelector('#newtask input').value.length == 0){
//         alert("Please Enter a Task")
//     }
//     else{
//         document.querySelector('#tasks').innerHTML += `
//             <div class="task">
//                 <span id="taskname">
//                     ${document.querySelector('#newtask input').value}
//                 </span>
//                 <button class="delete">
//                     <i class="far fa-trash-alt"></i>
//                 </button>
//             </div>
//         `;

//         var current_tasks = document.querySelectorAll(".delete");
//         for(var i=0; i<current_tasks.length; i++){
//             current_tasks[i].onclick = function(){
//                 this.parentNode.remove(); 
//             }
//         }

//         var tasks = document.querySelectorAll(".task");
//         for(var i=0; i<tasks.length; i++){
//             tasks[i].onclick = function(){
//                 this.classList.toggle('completed');
//             }
//         }

//         document.querySelector("#newtask input").value = "";
//     }
// }


let btn_add = document.querySelector('#push')
btn_add.onclick = function(){
    if(document.querySelector('#newtask input').value.length==0){
        alert('Please enter a task')
    }
    else{

    // Add task
        document.querySelector('#tasks').innerHTML += `
        <div class="task">
            <span id="taskname">
                ${document.querySelector('#newtask input').value}
            </span>
            <button class="delete">
                <i class="far fa-trash-alt"></i>
            </button>
        </div>
        `
    // Delete Task
        let delete_task= document.querySelectorAll('.delete');
        for(var i=0; i<delete_task.length; i++){
            delete_task[i].onclick = function(){
                this.parentNode.remove();
            }
        }
    //
        let completed_task= document.querySelectorAll('.task');
        for (let i = 0; i < completed_task.length; i++) {
            completed_task[i].onclick = function() {
                this.classList.toggle('completed')
            }
            
        }
        document.querySelector("#newtask input").value = "";
    }
}
