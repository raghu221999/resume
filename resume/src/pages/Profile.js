import React, { useState } from 'react'
import DefaultLayout from '../components/DefaultLayout'
import { Form, Tabs, Button, Spin, message } from 'antd';
import Personalinfo from '../components/personalinfo';
import SkillsEducation from '../components/SkillsEducation';
import ExperienceProjects from '../components/ExperienceProjects';
import axios from 'axios'

const { TabPane } = Tabs;
function Profile() {
    const [loading, setLoading]=useState(false)
    const user = JSON.parse(localStorage.getItem('Almabetter-user'))
    const onFinish = async (values) => {
        setLoading(true);
        try {
            const result  = await axios.post("api/user/update", {...values , _id : user._id });
            localStorage.setItem('Almabetter-user' , JSON.stringify(result.data))
            setLoading(false);
            message.success("Profile Updated successfully");
        } catch (error) {
            setLoading(false);
            message.error("Registration failed");
        }
    };
    return (
        <DefaultLayout>
            {loading && <Spin size="large" />}
            <div className='update-profile'>
                <h4><b>Update Profile</b></h4>
                <hr />
                <Form layout="vertical" onFinish={onFinish} initialValues={user}>
                    <Tabs defaultActiveKey="1" >
                        <TabPane tab="Personal Info" key="1">
                            <Personalinfo />
                        </TabPane>
                        <TabPane tab="Education and Sills" key="2">
                            <SkillsEducation />
                        </TabPane>
                        <TabPane tab="Experience / Projects" key="3">
                            <ExperienceProjects />
                        </TabPane>
                    </Tabs>,
                    <Button htmlType="submit">UPDATE</Button>
                </Form>

            </div>
        </DefaultLayout>
    );
}

export default Profile