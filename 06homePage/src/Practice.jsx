function Practice() {
    const student = [];
    return(
        <>
        <h1>Interview Question</h1>

{/* if array is empty then show  "NO STUDENT FOUND "   otherwise  it will show nothing*/}

{/* 1st Approach */}

        {/* <p>{student.length === 0 && "No students Found"}</p> */}


        {/* 2nd Approach */}
          <p>{!student.length  && "No students Found"}</p>
        
            <p>Number of Students : {student.length}</p>

        

        
        
        </>
    )
}
export default Practice;