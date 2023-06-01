import { ObjectId } from "bson";
import { client } from "../db.js";


export function getAllStudents(req){
    return client
    .db("Student").collection("students")
    .find(req.query).toArray()
}

export function getStudentsById(id){
    return client
    .db("Student").collection("students")
    .findOne({_id:new ObjectId(id)})
}

export function addStudentsData(data){
    return client
    .db("Student").collection("students")
    .insertOne(data)
}

export function UpdateStudentData(id,updatedData){
    return client
    .db("Student").collection("students")
    .findOneAndUpdate({_id:new ObjectId(id)},{$set:updatedData})
}

export function DeleteStudentData(id){
    return client
    .db("Student").collection("students")
    .deleteOne({_id:new ObjectId(id)})
}