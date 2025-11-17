var tasks = [];

var editIndex = null;

function newTask(){

    var input = document.getElementById("inputTask");

    var text = input.value.trim();

    if(text === ""){
        alert("Write something to add task");
        return;
    }

    if(editIndex !== null){
    tasks[editIndex] = text;
    editIndex = null;
       
    }else{
        tasks.push(text)
    }

    input.value = "";

    showTasks();
    console.log(tasks);
}

function showTasks(){


    var taskList = document.getElementById("task-list");

    taskList.innerHTML = "";


    for(var i = 0; i < tasks.length;i++){

        var html = '' + '<div class="task-set">' + '<div class="task"><li>' + tasks[i] + '</li></div>'+ ' <div class="icons">' + ' <button class="edit" onclick="editTask('+ i +')">Edit</button>' + ' <button class="del" onclick="deleteTask('+ i +')">Delete</button>' + ' </div>' + '</div>';

        taskList.innerHTML += html
    }
}

function editTask(index){
    
    var update = document.getElementById("inputTask");

    update.value = tasks[index];
       
    editIndex = index;
}

function deleteTask(index){
    tasks.splice(index,1);
    showTasks();
}


window.onload = function(){

    var addBtn = document.getElementById("addBtn");
    var input = document.getElementById("inputTask");




    addBtn.addEventListener('click',function(){
        newTask();
    });


    input.addEventListener('keydown', function(e){
        if(!e){
            e = window.event;
        }

        var key = e.keyCode || e.which;

        if(key === 13) { // enter
            newTask();
        }

    });

    showTasks();


}




    var clearBtn = document.getElementById("clearBtn");


    clearBtn.addEventListener('click', function(){

        var taskList = document.getElementById("task-list");

        taskList.innerHTML = ""
        tasks = [];
    })
    
    
    


