function myProjects() {
		console.log("hej")
		return {
				cards:[

						{
								title:"Imagine",
								description: "A program to view images and videos in the terminal. Written in C with ffmpeg. Using ffmpeg imagine reads the pixel data for each frame and renders the text based on the pixel values.",
								image:"images/Screen2.png",
								github:"spynets/imagine"
						},
						{
								title:"Fittnessduel",
								description: "A website to track your fitness progress with the core feature to \"compete\" against your friends by acheving your own goals. Don't compete agains eachother, compete agains yourself and win over your friends. This was a school project for web-dev course and was made with React, Express and Mongodb",
								image:"images/fitnessduel.png",
								image2:"images/fitnessduel2.png",
								github:"spynets/webbutveckling"
						}
						,
						{
								title:"Westerbergfastigheter",
								description: "This is a real estate website where the company can post apartment advertisements, news, receive expressions of interest, service reports, etc. I created it during the summer break with Django and htmx.",
								image:"images/westerberg.png",
								github:""
						},
						{
								title:"JavaGameEngine",
								description: "Java Game Engine is a lightweight 2D game engine built on the swing framwork. It was my 'gymnasieproject' where I developed this. It has GameObjects, Scenes, Sprites, Animations, Paralax, basic collision and physiscs etc. ",
								image:"images/JavaGameEngine1.png",
								github:"Java-Game-Maker/JavaGameEngine"
						},
				]
		};
}


function about(){
		return {
				cards: [
						{
								title: 'Education',
								p:"I have studied at Jönköping University since 2023. I'm studying computer sience with AI master",
								icon:"fa-solid fa-user-graduate"
						},
						{
								title: 'Work',
								p:"I have worked about 2.5 years as a webdeveloper at SmartCash AB. I also have worked freelance and sold 2 websites.",
								icon:"fa-solid fa-code"
						}
				]
		};
}
