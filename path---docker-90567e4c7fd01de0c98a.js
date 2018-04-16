webpackJsonp([0x9f0fe968e671],{332:function(e,n){e.exports={data:{markdownRemark:{html:'<p><img src="https://upload.wikimedia.org/wikipedia/commons/7/79/Docker_%28container_engine%29_logo.png" alt="alt text" title="Docker"></p>\n<h3>What is Docker and Why Use It?</h3>\n<p>Docker is the leading platform for developing, running and deploying applications within containers. A naive way of explaining a container is to refer to it as a wrapper for a piece of software. It isolates the software from its surroundings while packaging any code, runtimes, system tools, libraries and settings needed to run. Some benefits of containers are:</p>\n<ul>\n<li>Flexible: Even the most complex applications can be containerized.</li>\n<li>Lightweight: Containers leverage and share the host kernel.</li>\n<li>Interchangeable: You can deploy updates and upgrades on-the-fly.</li>\n<li>Portable: You can build locally, deploy to the cloud, and run anywhere.</li>\n<li>Scalable: You can increase and automatically distribute container replicas.</li>\n<li>Stackable: You can stack services vertically and on-the-fly.</li>\n</ul>\n<h3>What Does This Mean in The Real World?</h3>\n<p>Two big practical uses for containers are:</p>\n<ul>\n<li>\n<p>Prepackaged environments for developers. With Docker developers no longer has to worry about application environment setup. Prepackaged images can be made for developer, staging and production enviroments with everything preconfigured. This means no more "It works on my machine errors"!</p>\n</li>\n<li>\n<p>Containers are easy to work in from a deployment standpoint. For devops, platform engineers and sysadmins it means deployed environments are easier to manage. Containers offer flexibility since there is reduced coupling between the enviroment and software itself. You can quickly and easily deploy upgrades and newer versions of software and fix problems with deployments.</p>\n</li>\n</ul>\n<h3>Installing Docker</h3>\n<p>To install docker download the .dmg file by runnin the following command <code>brew cask install docker</code> or by clicking on the following <a href="https://download.docker.com/mac/stable/Docker.dmg">link</a>. Then run the file and give Docker permission to run.</p>\n<p>To verify if you have docker running properly run <code>docker version</code>.</p>\n<h4>The Contents of the Container</h4>\n<p>Now lets create the contents of your first image. First create a new directory for your project and navigate to it. Inside the directory create the following <code>server.js</code> file.</p>\n<pre><code>// server.js\n\n// DEPENDENCIES AND SETUP\n// ===============================================\n\nvar express = require(\'express\'),\n  app = express(),\n  port = Number(5555);\n\nvar five = require(\'five\'); // a useless library\n\n// ROUTES\n// ===============================================\n\n// An arbitrary route to grab resources\napp.get(\'/\', function(req, res) {\n  res.send(`${five()}`);\n});\n\n// START THE SERVER\n// ===============================================\n\napp.listen(port, function() {\n  console.log(\'Listening on port \' + port);\n});\n</code></pre>\n<p>Also the following <code>package.json</code> file.</p>\n<pre><code>{\n  "name": "five-server",\n  "version": "5.5.5",\n  "description": "High Five!",\n  "main": "server.js",\n  "scripts": {\n    "start": "node server.js"\n  },\n  "author": "",\n  "license": "ISC",\n  "dependencies": {\n    "express": "^4.16.3",\n    "five": "^0.8.0"\n  }\n}\n</code></pre>\n<h4>Creating a Dockerfile and .dockerignore file</h4>\n<p>To create an image and run this server as a container using Docker create the following <code>Dockerfile</code>. The <code>Dockerfile</code> provides a set of command line instructions that will run when the image is being built.</p>\n<pre><code># Pull from an existing image\nFROM node:latest\n\n# Create app directory\nWORKDIR /usr/src/app\n\n# Install app dependencies\nCOPY package.json ./\n\nRUN npm install\n\n# Bundle app source\nCOPY . .\n\nEXPOSE 8080\nCMD [ "npm", "start" ]\n</code></pre>\n<p>Also create the following <code>.dockerignore</code> file. All files and directories specified in the <code>.dockerignore</code> file will not be included when building the image.</p>\n<pre><code>**/node_modules\n</code></pre>\n<h4>Building and Running the Image as a Container</h4>\n<p>Run the following command to build the image.</p>\n<pre><code>$ docker build -t five-server .\n</code></pre>\n<p>This command will list the images stored in your Docker registry.</p>\n<pre><code>$ docker image ls\n</code></pre>\n<p>You should see the following images in your directory.</p>\n<pre><code>REPOSITORY          TAG                 IMAGE ID            CREATED             SIZE\nfive-server         latest              ab5578b1699d        20 seconds ago      676MB\nnode               latest              aa3e171e4e95        7 days ago          673MB\n</code></pre>\n<p>Now finally to run the image as a container. Note that this will map port 5555 within the container to port 8080 on your localhost.</p>\n<pre><code>$ docker run -p 5555:8080 five-server\n</code></pre>\n<p>If you access localhost:8080 and recieve the payload \'5\' then congratulations, you have successfully created and run your first Docker container!</p>',frontmatter:{date:"April 11, 2018",path:"/docker",title:"Using Docker"}}},pathContext:{}}}});
//# sourceMappingURL=path---docker-90567e4c7fd01de0c98a.js.map