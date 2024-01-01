const express=require('express')
const bodyParser=require('body-parser')
const mongoose=require('mongoose')
const cors=require('cors')
mongoose.connect('mongodb://127.0.0.1:27017/ABIENDSEM')
app=express();
app.use(cors())
app.use(bodyParser.json())
app.listen(5000)
declareres=new mongoose.Schema({
    sem:String,
    declare:Boolean
})
resmodel=mongoose.model('result',declareres)
app.get('/',function(req,res){
    res.send('hello world')
    
result=new resmodel({sem:"sem7",declare:false})
result.save()
})
const subject_schema=new mongoose.Schema({
    subname:String,
    internal:Number,
    externals:Number,
    final:Number,
    grade: String,
    gradeValue:Number,
    credit:Number
})
submodel=new mongoose.model('subject',subject_schema)
const studentSchema=new mongoose.Schema({
    name:String,
    regno:Number,
    dob:String,
    dept:String,
    sem:String,
    subject1:subject_schema,
    subject2:subject_schema,
    subject3:subject_schema,
    subject4:subject_schema,
    subject5:subject_schema,
    subject6:subject_schema,
    subject7:subject_schema,
    subject8:subject_schema,
    sgpa:Number,
    address:String,
    fathername:String,
    bloodgroup:String
})
const sem5schema=new mongoose.Schema({
    name:String,
    regno:Number,
    dob:String,
    dept:String,
    sem:String,
    subject1:subject_schema,
    subject2:subject_schema,
    subject3:subject_schema,
    subject4:subject_schema,
    subject5:subject_schema,
    subject6:subject_schema,
    subject7:subject_schema,
    subject8:subject_schema,
    sgpa:Number,
    address:String,
    fathername:String,
    bloodgroup:String
})
student_model=mongoose.model('student',studentSchema)
sem5_model=mongoose.model('sem5student',sem5schema)
app.post('/newstudent/sem7',function(req,res){
    data1=new student_model({
        name:req.body.name,
        regno:Number(req.body.rno),
        dob:req.body.dob,
        dept:req.body.dept,
        sem:req.body.sem,
        subject1:new submodel({subname:"Enterprise Blockchain Frameworks",
            internal:0,
            externals:0,
            final:0,
            grade: "",
            gradeValue:0,
            credit:4}),
        subject2:new submodel({subname:"Embedded Security",
        internal:0,
        externals:0,
        final:0,
        grade: "",
        gradeValue:0,
        credit:4}),
        subject3:new submodel({subname:"Firewall and IDS",
        internal:0,
        externals:0,
        final:0,
        grade: "",
        gradeValue:0,
        credit:3}),
        subject4:new submodel({subname:"Full Stack Web Development",
        internal:0,
        externals:0,
        final:0,
        grade: "",
        gradeValue:0,
        credit:4}),
        subject5:new submodel({subname:"Firewall and IDS Laboratory",
        internal:0,
        externals:0,
        final:0,
        grade: "",
        gradeValue:0,
        credit:1}),
        subject6:new submodel({subname:"Blockchain Laboratory",
        internal:0,
        externals:0,
        final:0,
        grade: "",
        gradeValue:0,
        credit:1}),
        subject7:new submodel({subname:"Software Testing",
        internal:0,
        externals:0,
        final:0,
        grade: "",
        gradeValue:0,
        credit:4}),
        subject8:new submodel({subname:"Proffesional Ethics",
        internal:0,
        externals:0,
        final:0,
        grade: "",
        gradeValue:0,
        credit:1}),
        sgpa:0,
        address:req.body.add,
        fathername:req.body.fathername,
        bloodgroup:req.body.blood
    })
    data1.save()
})
app.post('/newstudent/sem5',function(req,res){

    data1=new sem5_model({
        name:req.body.name,
        regno:Number(req.body.rno),
        dob:req.body.dob,
        dept:req.body.dept,
        sem:req.body.sem,
        subject1:new submodel({subname:"Fundamentals of Cryptography and Cryptanalysis",
            internal:0,
            externals:0,
            final:0,
            grade: "",
            gradeValue:0,
            credit:4}),
        subject2:new submodel({subname:"Computer Networks",
        internal:0,
        externals:0,
        final:0,
        grade: "",
        gradeValue:0,
        credit:4}),
        subject3:new submodel({subname:"Network tool and Technique",
        internal:0,
        externals:0,
        final:0,
        grade: "",
        gradeValue:0,
        credit:4}),
        subject4:new submodel({subname:"Operating Systems",
        internal:0,
        externals:0,
        final:0,
        grade: "",
        gradeValue:0,
        credit:3}),
        subject5:new submodel({subname:"FCC Laboratory",
        internal:0,
        externals:0,
        final:0,
        grade: "",
        gradeValue:0,
        credit:1}),
        subject6:new submodel({subname:"Python Programming with web framework",
        internal:0,
        externals:0,
        final:0,
        grade: "",
        gradeValue:0,
        credit:4}),
        subject7:new submodel({subname:"Compter Network Laboratory",
        internal:0,
        externals:0,
        final:0,
        grade: "",
        gradeValue:0,
        credit:1}),
        subject8:new submodel({subname:"SOFT SKILLS - II",
        internal:0,
        externals:0,
        final:0,
        grade: "",
        gradeValue:0,
        credit:1}),
        sgpa:0,
        address:req.body.add,
        fathername:req.body.fathername,
        bloodgroup:req.body.blood
    })
    data1.save()
})
app.get('/update',function(req,res){
    console.log("***")
    student_model.findOne({regno:124157065}).then((data)=>
    {
        d=data
        d.subject1.internal=45;
        d.save()
    })
})
app.post('/addinternals/sem7',function(req,res)
{
    console.log(req.body)
    student_model.findOne({regno:Number(req.body.rno)}).then((data)=>
    {
        sname=req.body.subject
        console.log(sname)
    if(sname==="Enterprise Blockchain Frameworks")
    {
        console.log("***")
        d=data
        d.subject1.internal=Number(req.body.marks);
        d.save()
    }
    else if(sname=="Embedded Security")
    {
        d=data
        d.subject2.internal=Number(req.body.marks);
        d.save()
    }
    else if(sname=="Firewall and IDS")
    {
        d=data
        d.subject3.internal=Number(req.body.marks);
        d.save()
    }
    else if(sname=="Full Stack Web Development")
    {
        d=data
        d.subject4.internal=Number(req.body.marks);
        d.save()
    }
    else if(sname=="Firewall and IDS Laboratory")
    {
        d=data
        d.subject5.internal=Number(req.body.marks);
        d.save()
    }
    else if(sname=="Blockchain Laboratory")
    {
        console.log("&*&*&*&*")
        d=data
        d.subject6.internal=Number(req.body.marks);
        d.save()
    }
    else if(sname=="Software Testing")
    {
        d=data
        d.subject7.internal=Number(req.body.marks);
        d.save()
    }
    else
    {
        d=data
        d.subject8.internal=Number(req.body.marks);
        d.save()
    }
    })
    
})
app.post('/addinternals/sem5',function(req,res)
{
    console.log(req.body)
    sem5_model.findOne({regno:Number(req.body.rno)}).then((data)=>
    {
        sname=req.body.subject
        console.log(sname)
    if(sname==="Fundamentals of Cryptography and Cryptanalysis")
    {
        console.log("***")
        d=data
        d.subject1.internal=Number(req.body.marks);
        d.save()
    }
    else if(sname=="Computer Networks")
    {
        d=data
        d.subject2.internal=Number(req.body.marks);
        d.save()
    }
    else if(sname=="Network tool and Technique")
    {
        d=data
        d.subject3.internal=Number(req.body.marks);
        d.save()
    }
    else if(sname=="Operating Systems")
    {
        d=data
        d.subject4.internal=Number(req.body.marks);
        d.save()
    }
    else if(sname=="FCC Laboratory")
    {
        d=data
        d.subject5.internal=Number(req.body.marks);
        d.save()
    }
    else if(sname=="Python Programming with web framework")
    {
        console.log("&*&*&*&*")
        d=data
        d.subject6.internal=Number(req.body.marks);
        d.save()
    }
    else if(sname=="Compter Network Laboratory")
    {
        d=data
        d.subject7.internal=Number(req.body.marks);
        d.save()
    }
    else
    {
        d=data
        d.subject8.internal=Number(req.body.marks);
        d.save()
    }
    })
    
})
app.post('/addexternals/sem7',function(req,res)
{
    console.log(req.body)
    student_model.findOne({regno:Number(req.body.rno)}).then((data)=>
    {
        sname=req.body.subject
        m=Number(req.body.marks);
    if(sname=="Enterprise Blockchain Frameworks")
    {
        d=data
        d.subject1.externals=m;
        d.subject1.final=((m/2)+d.subject1.internal);
        if(d.subject1.final>90)
        {
            d.subject1.grade="S";
            d.subject1.gradeValue=10;
        }
        else if(d.subject1.final>85 && d.subject1.final <91)
        {
            d.subject1.grade="A+";
            d.subject1.gradeValue=9;
        }
        else if(d.subject1.final>74 && d.subject1.final <86)
        {
            d.subject1.grade="A";
            d.subject1.gradeValue=8;
        }
        else if(d.subject1.final>65 && d.subject1.final <75)
        {
            d.subject1.grade="B";
            d.subject1.gradeValue=7;
        }
        else if(d.subject1.final>55 && d.subject1.final <66)
        {
            d.subject1.grade="C";
            d.subject1.gradeValue=6;
        }
        else if(d.subject1.final>50 && d.subject1.final <56)
        {
            d.subject1.grade="D";
            d.subject1.gradeValue=5;
        }
        else{
            d.subject1.grade="F";
            d.subject1.gradeValue=0;
        }
        d.save()
    }
    else if(sname=="Embedded Security")
    {
        d=data
        d.subject2.externals=m;
        d.subject2.final=((m/2)+d.subject2.internal);
        if(d.subject2.final>90)
        {
            d.subject2.grade="S";
            d.subject2.gradeValue=10;
        }
        else if(d.subject2.final>85 && d.subject2.final <91)
        {
            d.subject2.grade="A+";
            d.subject2.gradeValue=9;
        }
        else if(d.subject2.final>74 && d.subject2.final <86)
        {
            d.subject2.grade="A";
            d.subject2.gradeValue=8;
        }
        else if(d.subject2.final>65 && d.subject2.final <75)
        {
            d.subject2.grade="B";
            d.subject2.gradeValue=7;
        }
        else if(d.subject2.final>55 && d.subject2.final <66)
        {
            d.subject2.grade="C";
            d.subject2.gradeValue=6;
        }
        else if(d.subject2.final>50 && d.subject2.final <56)
        {
            d.subject2.grade="D";
            d.subject2.gradeValue=5;
        }
        else{
            d.subject2.grade="F";
            d.subject2.gradeValue=0;
        }
        d.save()
    }
    else if(sname=="Firewall and IDS")
    {
        d=data
        d.subject3.externals=m;
        d.subject3.final=((m/2)+d.subject3.internal);
        if(d.subject3.final>90)
        {
            d.subject3.grade="S";
            d.subject3.gradeValue=10;
        }
        else if(d.subject3.final>85 && d.subject3.final <91)
        {
            d.subject3.grade="A+";
            d.subject3.gradeValue=9;
        }
        else if(d.subject3.final>74 && d.subject3.final <86)
        {
            d.subject3.grade="A";
            d.subject3.gradeValue=8;
        }
        else if(d.subject3.final>65 && d.subject3.final <75)
        {
            d.subject3.grade="B";
            d.subject3.gradeValue=7;
        }
        else if(d.subject3.final>55 && d.subject3.final <66)
        {
            d.subject3.grade="C";
            d.subject3.gradeValue=6;
        }
        else if(d.subject3.final>50 && d.subject3.final <56)
        {
            d.subject3.grade="D";
            d.subject3.gradeValue=5;
        }
        else{
            d.subject3.grade="F";
            d.subject3.gradeValue=0;
        }
        d.save()
    }
    else if(sname=="Full Stack Web Development")
    {
        d=data
        d.subject4.externals=m;
        d.subject4.final=((m/2)+d.subject4.internal);
        if(d.subject4.final>90)
        {
            d.subject4.grade="S";
            d.subject4.gradeValue=10;
        }
        else if(d.subject4.final>85 && d.subject4.final <91)
        {
            d.subject4.grade="A+";
            d.subject4.gradeValue=9;
        }
        else if(d.subject4.final>74 && d.subject4.final <86)
        {
            d.subject4.grade="A";
            d.subject4.gradeValue=8;
        }
        else if(d.subject4.final>65 && d.subject4.final <75)
        {
            d.subject4.grade="B";
            d.subject4.gradeValue=7;
        }
        else if(d.subject4.final>55 && d.subject4.final <66)
        {
            d.subject4.grade="C";
            d.subject4.gradeValue=6;
        }
        else if(d.subject4.final>50 && d.subject4.final <56)
        {
            d.subject4.grade="D";
            d.subject4.gradeValue=5;
        }
        else{
            d.subject4.grade="F";
            d.subject4.gradeValue=0;
        }
        d.save()
    }
    else if(sname=="Firewall and IDS Laboratory")
    {
        d=data
        d.subject5.externals=m;
        d.subject5.final=((m)+d.subject5.internal);
        if(d.subject5.final>90)
        {
            d.subject5.grade="S";
            d.subject5.gradeValue=10;
        }
        else if(d.subject5.final>85 && d.subject5.final <91)
        {
            d.subject5.grade="A+";
            d.subject5.gradeValue=9;
        }
        else if(d.subject5.final>74 && d.subject5.final <86)
        {
            d.subject5.grade="A";
            d.subject5.gradeValue=8;
        }
        else if(d.subject5.final>65 && d.subject5.final <75)
        {
            d.subject5.grade="B";
            d.subject5.gradeValue=7;
        }
        else if(d.subject5.final>55 && d.subject5.final <66)
        {
            d.subject5.grade="C";
            d.subject5.gradeValue=6;
        }
        else if(d.subject5.final>50 && d.subject5.final <56)
        {
            d.subject5.grade="D";
            d.subject5.gradeValue=5;
        }
        else{
            d.subject5.grade="F";
            d.subject5.gradeValue=0;
        }
        d.save()
    }
    else if(sname=="Blockchain Laboratory")
    {
        d=data
        d.subject6.externals=m;
        d.subject6.final=((m)+d.subject6.internal);
        if(d.subject6.final>90)
        {
            d.subject6.grade="S";
            d.subject6.gradeValue=10;
        }
        else if(d.subject6.final>85 && d.subject6.final <91)
        {
            d.subject6.grade="A+";
            d.subject6.gradeValue=9;
        }
        else if(d.subject6.final>74 && d.subject6.final <86)
        {
            d.subject6.grade="A";
            d.subject6.gradeValue=8;
        }
        else if(d.subject6.final>65 && d.subject6.final <75)
        {
            d.subject6.grade="B";
            d.subject6.gradeValue=7;
        }
        else if(d.subject6.final>55 && d.subject6.final <66)
        {
            d.subject6.grade="C";
            d.subject6.gradeValue=6;
        }
        else if(d.subject6.final>50 && d.subject6.final <56)
        {
            d.subject6.grade="D";
            d.subject6.gradeValue=5;
        }
        else{
            d.subject6.grade="F";
            d.subject6.gradeValue=0;
        }
        d.save()
    }
    else if(sname=="Software Testing")
    {
        d=data
        d.subject7.externals=m;
        d.subject7.final=((m/2)+d.subject7.internal);
        if(d.subject7.final>90)
        {
            d.subject7.grade="S";
            d.subject7.gradeValue=10;
        }
        else if(d.subject7.final>85 && d.subject7.final <91)
        {
            d.subject7.grade="A+";
            d.subject7.gradeValue=9;
        }
        else if(d.subject7.final>74 && d.subject7.final <86)
        {
            d.subject7.grade="A";
            d.subject7.gradeValue=8;
        }
        else if(d.subject7.final>65 && d.subject7.final <75)
        {
            d.subject7.grade="B";
            d.subject7.gradeValue=7;
        }
        else if(d.subject7.final>55 && d.subject7.final <66)
        {
            d.subject7.grade="C";
            d.subject7.gradeValue=6;
        }
        else if(d.subject7.final>50 && d.subject7.final <56)
        {
            d.subject7.grade="D";
            d.subject7.gradeValue=5;
        }
        else{
            d.subject7.grade="F";
            d.subject7.gradeValue=0;
        }
        d.save()
    }
    else
    {
        d=data
        d.subject8.externals=m;
        d.subject8.final=((m)+d.subject8.internal);
        if(d.subject8.final>90)
        {
            d.subject8.grade="S";
            d.subject8.gradeValue=10;
        }
        else if(d.subject8.final>85 && d.subject8.final <91)
        {
            d.subject8.grade="A+";
            d.subject8.gradeValue=9;
        }
        else if(d.subject8.final>74 && d.subject8.final <86)
        {
            d.subject8.grade="A";
            d.subject8.gradeValue=8;
        }
        else if(d.subject8.final>65 && d.subject8.final <75)
        {
            d.subject8.grade="B";
            d.subject8.gradeValue=7;
        }
        else if(d.subject8.final>55 && d.subject8.final <66)
        {
            d.subject8.grade="C";
            d.subject8.gradeValue=6;
        }
        else if(d.subject8.final>50 && d.subject8.final <56)
        {
            d.subject8.grade="D";
            d.subject8.gradeValue=5;
        }
        else{
            d.subject8.grade="F";
            d.subject8.gradeValue=0;
        }
        d.save()
    }
    })
    
})
app.post('/addexternals/sem5',function(req,res)
{
    console.log(req.body)
    sem5_model.findOne({regno:Number(req.body.rno)}).then((data)=>
    {
        sname=req.body.subject
        m=Number(req.body.marks);
    if(sname=="Fundamentals of Cryptography and Cryptanalysis")
    {
        d=data
        d.subject1.externals=m;
        d.subject1.final=((m/2)+d.subject1.internal);
        if(d.subject1.final>90)
        {
            d.subject1.grade="S";
            d.subject1.gradeValue=10;
        }
        else if(d.subject1.final>85 && d.subject1.final <91)
        {
            d.subject1.grade="A+";
            d.subject1.gradeValue=9;
        }
        else if(d.subject1.final>74 && d.subject1.final <86)
        {
            d.subject1.grade="A";
            d.subject1.gradeValue=8;
        }
        else if(d.subject1.final>65 && d.subject1.final <75)
        {
            d.subject1.grade="B";
            d.subject1.gradeValue=7;
        }
        else if(d.subject1.final>55 && d.subject1.final <66)
        {
            d.subject1.grade="C";
            d.subject1.gradeValue=6;
        }
        else if(d.subject1.final>50 && d.subject1.final <56)
        {
            d.subject1.grade="D";
            d.subject1.gradeValue=5;
        }
        else{
            d.subject1.grade="F";
            d.subject1.gradeValue=0;
        }
        d.save()
    }
    else if(sname=="Computer Networks")
    {
        d=data
        d.subject2.externals=m;
        d.subject2.final=((m/2)+d.subject2.internal);
        if(d.subject2.final>90)
        {
            d.subject2.grade="S";
            d.subject2.gradeValue=10;
        }
        else if(d.subject2.final>85 && d.subject2.final <91)
        {
            d.subject2.grade="A+";
            d.subject2.gradeValue=9;
        }
        else if(d.subject2.final>74 && d.subject2.final <86)
        {
            d.subject2.grade="A";
            d.subject2.gradeValue=8;
        }
        else if(d.subject2.final>65 && d.subject2.final <75)
        {
            d.subject2.grade="B";
            d.subject2.gradeValue=7;
        }
        else if(d.subject2.final>55 && d.subject2.final <66)
        {
            d.subject2.grade="C";
            d.subject2.gradeValue=6;
        }
        else if(d.subject2.final>50 && d.subject2.final <56)
        {
            d.subject2.grade="D";
            d.subject2.gradeValue=5;
        }
        else{
            d.subject2.grade="F";
            d.subject2.gradeValue=0;
        }
        d.save()
    }
    else if(sname=="Network tool and Technique")
    {
        d=data
        d.subject3.externals=m;
        d.subject3.final=((m)+d.subject3.internal);
        if(d.subject3.final>90)
        {
            d.subject3.grade="S";
            d.subject3.gradeValue=10;
        }
        else if(d.subject3.final>85 && d.subject3.final <91)
        {
            d.subject3.grade="A+";
            d.subject3.gradeValue=9;
        }
        else if(d.subject3.final>74 && d.subject3.final <86)
        {
            d.subject3.grade="A";
            d.subject3.gradeValue=8;
        }
        else if(d.subject3.final>65 && d.subject3.final <75)
        {
            d.subject3.grade="B";
            d.subject3.gradeValue=7;
        }
        else if(d.subject3.final>55 && d.subject3.final <66)
        {
            d.subject3.grade="C";
            d.subject3.gradeValue=6;
        }
        else if(d.subject3.final>50 && d.subject3.final <56)
        {
            d.subject3.grade="D";
            d.subject3.gradeValue=5;
        }
        else{
            d.subject3.grade="F";
            d.subject3.gradeValue=0;
        }
        d.save()
    }
    else if(sname=="Operating Systems")
    {
        d=data
        d.subject4.externals=m;
        d.subject4.final=((m/2)+d.subject4.internal);
        if(d.subject4.final>90)
        {
            d.subject4.grade="S";
            d.subject4.gradeValue=10;
        }
        else if(d.subject4.final>85 && d.subject4.final <91)
        {
            d.subject4.grade="A+";
            d.subject4.gradeValue=9;
        }
        else if(d.subject4.final>74 && d.subject4.final <86)
        {
            d.subject4.grade="A";
            d.subject4.gradeValue=8;
        }
        else if(d.subject4.final>65 && d.subject4.final <75)
        {
            d.subject4.grade="B";
            d.subject4.gradeValue=7;
        }
        else if(d.subject4.final>55 && d.subject4.final <66)
        {
            d.subject4.grade="C";
            d.subject4.gradeValue=6;
        }
        else if(d.subject4.final>50 && d.subject4.final <56)
        {
            d.subject4.grade="D";
            d.subject4.gradeValue=5;
        }
        else{
            d.subject4.grade="F";
            d.subject4.gradeValue=0;
        }
        d.save()
    }
    else if(sname=="FCC Laboratory")
    {
        d=data
        d.subject5.externals=m;
        d.subject5.final=((m)+d.subject5.internal);
        if(d.subject5.final>90)
        {
            d.subject5.grade="S";
            d.subject5.gradeValue=10;
        }
        else if(d.subject5.final>85 && d.subject5.final <91)
        {
            d.subject5.grade="A+";
            d.subject5.gradeValue=9;
        }
        else if(d.subject5.final>74 && d.subject5.final <86)
        {
            d.subject5.grade="A";
            d.subject5.gradeValue=8;
        }
        else if(d.subject5.final>65 && d.subject5.final <75)
        {
            d.subject5.grade="B";
            d.subject5.gradeValue=7;
        }
        else if(d.subject5.final>55 && d.subject5.final <66)
        {
            d.subject5.grade="C";
            d.subject5.gradeValue=6;
        }
        else if(d.subject5.final>50 && d.subject5.final <56)
        {
            d.subject5.grade="D";
            d.subject5.gradeValue=5;
        }
        else{
            d.subject5.grade="F";
            d.subject5.gradeValue=0;
        }
        d.save()
    }
    else if(sname=="Python Programming with web framework")
    {
        d=data
        d.subject6.externals=m;
        d.subject6.final=((m)+d.subject6.internal);
        if(d.subject6.final>90)
        {
            d.subject6.grade="S";
            d.subject6.gradeValue=10;
        }
        else if(d.subject6.final>85 && d.subject6.final <91)
        {
            d.subject6.grade="A+";
            d.subject6.gradeValue=9;
        }
        else if(d.subject6.final>74 && d.subject6.final <86)
        {
            d.subject6.grade="A";
            d.subject6.gradeValue=8;
        }
        else if(d.subject6.final>65 && d.subject6.final <75)
        {
            d.subject6.grade="B";
            d.subject6.gradeValue=7;
        }
        else if(d.subject6.final>55 && d.subject6.final <66)
        {
            d.subject6.grade="C";
            d.subject6.gradeValue=6;
        }
        else if(d.subject6.final>50 && d.subject6.final <56)
        {
            d.subject6.grade="D";
            d.subject6.gradeValue=5;
        }
        else{
            d.subject6.grade="F";
            d.subject6.gradeValue=0;
        }
        d.save()
    }
    else if(sname=="Compter Network Laboratory")
    {
        d=data
        d.subject7.externals=m;
        d.subject7.final=((m)+d.subject7.internal);
        if(d.subject7.final>90)
        {
            d.subject7.grade="S";
            d.subject7.gradeValue=10;
        }
        else if(d.subject7.final>85 && d.subject7.final <91)
        {
            d.subject7.grade="A+";
            d.subject7.gradeValue=9;
        }
        else if(d.subject7.final>74 && d.subject7.final <86)
        {
            d.subject7.grade="A";
            d.subject7.gradeValue=8;
        }
        else if(d.subject7.final>65 && d.subject7.final <75)
        {
            d.subject7.grade="B";
            d.subject7.gradeValue=7;
        }
        else if(d.subject7.final>55 && d.subject7.final <66)
        {
            d.subject7.grade="C";
            d.subject7.gradeValue=6;
        }
        else if(d.subject7.final>50 && d.subject7.final <56)
        {
            d.subject7.grade="D";
            d.subject7.gradeValue=5;
        }
        else{
            d.subject7.grade="F";
            d.subject7.gradeValue=0;
        }
        d.save()
    }
    else
    {
        d=data
        d.subject8.externals=m;
        d.subject8.final=((m)+d.subject8.internal);
        if(d.subject8.final>90)
        {
            d.subject8.grade="S";
            d.subject8.gradeValue=10;
        }
        else if(d.subject8.final>85 && d.subject8.final <91)
        {
            d.subject8.grade="A+";
            d.subject8.gradeValue=9;
        }
        else if(d.subject8.final>74 && d.subject8.final <86)
        {
            d.subject8.grade="A";
            d.subject8.gradeValue=8;
        }
        else if(d.subject8.final>65 && d.subject8.final <75)
        {
            d.subject8.grade="B";
            d.subject8.gradeValue=7;
        }
        else if(d.subject8.final>55 && d.subject8.final <66)
        {
            d.subject8.grade="C";
            d.subject8.gradeValue=6;
        }
        else if(d.subject8.final>50 && d.subject8.final <56)
        {
            d.subject8.grade="D";
            d.subject8.gradeValue=5;
        }
        else{
            d.subject8.grade="F";
            d.subject8.gradeValue=0;
        }
        d.save()
    }
    })
    
})
app.get('/checkdata/:regno/:dob',function(req,res)
{
    console.log(req.params)
    par=(req.params.regno).slice(1,3)
    console.log(par)
    if(par==="24"){
    student_model.find({$and:[{regno:Number(req.params.regno)},{dob:req.params.dob}]}).then((data)=>{
        console.log(data)
        if(data.length===0){
            res.send("Data not Found")
        }
        else{
            res.send(data)
        }
    })
}
    else{
        console.log("***")
        sem5_model.find({$and:[{regno:Number(req.params.regno)},{dob:req.params.dob}]}).then((data)=>{
            console.log(data)
            if(data.length===0){
                res.send("Data not Found")
            }
            else{
                res.send(data)
            }
        })

    }
})
app.get('/getdata/:regno',function(req,res){
    console.log((req.params.regno).slice(1,3))
    par=(req.params.regno).slice(1,3)
    if(par==="24"){
    student_model.find({regno:Number(req.params.regno)}).then((data)=>{
            res.send(data)
    })
}
else{
    sem5_model.find({regno:Number(req.params.regno)}).then((data)=>{
        res.send(data)
})
}
})
app.get('/getinternals/:regno',function(req,res){
    par=(req.params.regno).slice(1,3)
    if(par==="24"){
    student_model.findOne({regno:Number(req.params.regno)}).then((data)=>{
            res.send(data)
    })
}
else{
    sem5_model.findOne({regno:Number(req.params.regno)}).then((data)=>{
        res.send(data)
})
}
})

app.get('/declareresult',function(req,res){
    console.log("****")
   resmodel.updateOne({sem:"sem7"},{declare:true}).then((res)=>{
    console.log(res)
   })
})
app.get('/checkres',function(req,res)
{
   resmodel.findOne({sem:"sem7"}).then((data)=>{
    res.send(data.declare)
   })
})
app.get('/announceresult/:regno',function(req,res)
{
    par=(req.params.regno).slice(1,3)
    if(par==="24")
    {
    student_model.findOne({regno:Number(req.params.regno)}).then((data)=>{
        dec=data
        dec.sgpa=((dec.subject1.gradeValue*dec.subject1.credit)+(dec.subject2.gradeValue*dec.subject2.credit)+(dec.subject3.gradeValue*dec.subject3.credit)+(dec.subject4.gradeValue*dec.subject4.credit)+(dec.subject5.gradeValue*dec.subject5.credit)+(dec.subject6.gradeValue*dec.subject6.credit)+(dec.subject7.gradeValue*dec.subject7.credit)+(dec.subject8.gradeValue*dec.subject8.credit))/22
        console.log(dec)
        res.send(dec)
    })
}
else{
    sem5_model.findOne({regno:Number(req.params.regno)}).then((data)=>{
        dec=data
        dec.sgpa=((dec.subject1.gradeValue*dec.subject1.credit)+(dec.subject2.gradeValue*dec.subject2.credit)+(dec.subject3.gradeValue*dec.subject3.credit)+(dec.subject4.gradeValue*dec.subject4.credit)+(dec.subject5.gradeValue*dec.subject5.credit)+(dec.subject6.gradeValue*dec.subject6.credit)+(dec.subject7.gradeValue*dec.subject7.credit)+(dec.subject8.gradeValue*dec.subject8.credit))/22
        console.log(dec)
        res.send(dec)
    })
}
})