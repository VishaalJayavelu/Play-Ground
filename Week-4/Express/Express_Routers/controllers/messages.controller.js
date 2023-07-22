function getmessages(req,res) {
     res.status(200).send('<ul><li>hi buddy</li></ul>');
}

function postmessages(req,res) {
     console.log('updates');
}

module.exports = {
     getmessages,
     postmessages,
}