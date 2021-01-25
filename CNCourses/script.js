var courses=$.get('http://api.codingninjas.com/api/v3/courses',(rdata)=>{
    var dataobj=rdata.data.courses;
    var namesOfCourseList=[];
    var levelOfCourseList=[];
    for(let i=0;i<14;i++){
        namesOfCourseList.push(dataobj[i].name);
        levelOfCourseList.push(dataobj[i].level);
    }
    
})