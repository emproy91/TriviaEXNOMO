const quizCtrl = {};
// const Note = require('../models/Question');
// import { QuestionSchema } from "../models/Question.js";

const QuestionSchema = require ('../models/Question');
// import { data } from "./data.js";
const data = require ('../data/data');

quizCtrl.renderForm = (req, res) => {
   res.render('/quiz');
   
};

   


quizCtrl.renderQuestion = async(req, res) => {
    //res.send('render edit form')
    const NumQ = Math.floor(Math.random() * ((23+1)-0)+0);
    const Qid = data[NumQ].tq;
     // console.log(Qid);
    const select = data[NumQ].choices;
    const oA = data[NumQ].choices[0];
    const oB = data[NumQ].choices[1];
    const oC = data[NumQ].choices[2];
    const oD = data[NumQ].choices[3];
    console.log(oD);
/*
    if (data[0].id != req.Qid ) { //!
        req.flash('error_msg', 'No autorizado.');
        return res.redirect('/quiz');
    } //!
    */
    res.render('quiz/question', { Qid, select, oA, oB, oC, oD, tq});

};

module.exports = quizCtrl;
