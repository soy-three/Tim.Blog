import firebase from 'firebase';
import 'firebase/firestore';

firebase.initializeApp(JSON.parse(process.env.FireBaseAuth));
const firestore = firebase.firestore();

module.exports = async (req, res) => {
	const Blogs = await Get();
	res.send(JSON.stringify(Blogs));
}

async function Get(){
	let BlogsArray = [];
	const BlogReference = firestore.collection("post1");
	const Blogs = await BlogReference.orderBy("Date").get();
	Blogs.forEach((document) => {
		BlogsArray.push(document.data());
	});

	console.log(BlogsArray);
	return BlogsArray;
}