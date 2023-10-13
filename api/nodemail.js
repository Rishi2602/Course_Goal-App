import axios from 'axios';

const apiurl= 'https://nodemailer-pssj.onrender.com/text-mail';
const nodemail=async(data)=>{
    let mailData={
        to:'info@redpositive.in',
        subject:"Submission of Details",
        text:`Hello,We have successfully received your details.Thank you for submitting your details.
        Name:${data.username}
        Email:${data.email}
        Phone:${data.phone}
        Message:${data.message}`
    }
    let config = {
        method: 'post',
        url: apiurl,
        headers: { 
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        data : mailData
    }
        try{
            const response=await axios.request(config);
            console.log(response.data);
        }
        catch(error){
            console.log(error);
        }
}
export default nodemail;