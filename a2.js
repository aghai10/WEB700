const collegeData = require('C:\BTT sem2\WEB\A2\modules\collegeData.js');

collegeData.initialize().then(() => {
    console.log("Successfully initialized collegeData");

    collegeData.getAllStudents().then((students) => {
        console.log(`Successfully retrieved ${students.length} students`);
    }).catch((error) => {
        console.error(error);
    });

    collegeData.getCourses().then((courses) => {
        console.log(`Successfully retrieved ${courses.length} courses`);
    }).catch((error) => {
        console.error(error);
    });

    collegeData.getTAs().then((tas) => {
        console.log(`Successfully retrieved ${tas.length} TAs`);
    }).catch((error) => {
        console.error(error);
    });
}).catch((error) => {
    console.error(error);
});
