import React, { memo } from "react";
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";
import { IDepartment } from "@/types/department";
import Card from "./style";

interface DepartmentProps {
    department: IDepartment
    state: string
    onOK: () => void
}

const Department: React.FC<DepartmentProps> = ({department, state, onOK}) => {
    const {name, createAt, members} = department

    return (
        <Card bordered={false} className="department__card">
            <Header state={state} name={name} createAt={createAt} />
            <Content members={members}></Content>
            <Footer members={members} onOK={onOK}></Footer>
        </Card>
        
    )
}

export default memo(Department);