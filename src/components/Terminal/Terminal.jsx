import { ReactTerminal } from "react-terminal";

export default function Terminal(props) {
  // Define commands here
  const commands = {
    whoami: () => {
        return (
          <div style={{margin:"18px"}}>
            <p>
              I am <span style={{ color: "#fc5e03" }}>Priyadarshi</span>, a passionate <span style={{ color: "#fc5e03", }}>Full Stack Developer</span> currently building a startup. I am deeply exploring <span style={{ color: "#fc5e03" }}>Blockchain technology</span> and its applications to create innovative solutions.
            </p>
            <p style={{ marginTop: "18px" }}>
              <strong>Tech Skills:</strong>
              <ul style={{ marginLeft: "20px", marginTop: "10px", listStyle: "none" }}>
                <li>- <span style={{ color: "#fc5e03" }}>Languages</span>: JavaScript, TypeScript, C++, C, Solidity</li>
                <li>- <span style={{ color: "#fc5e03" }}>Tech</span>: React.js, Next.js, Socket.io, Node.js, Express.js, MongoDB, EVM, Git/GitHub</li>
                <li>- <span style={{ color: "#fc5e03" }}>DevOps</span>: Nginx</li>
              </ul>
            </p>
          </div>
        );
      },
    website: () => {
      window.open("https://portfolio-lovat-nine-26.vercel.app/priyadarshi", "_blank"); // Replace with your website URL
      return "Opening website...";
    },
    contact: () => {
      return (
        <div>
          Connect with me on:
          <ul style={{ marginLeft: "20px", marginTop: "10px", listStyle: "none" }}>
            <li>
              <a href="https://www.instagram.com/priyadarshing_/#" target="_blank" rel="noopener noreferrer" style={{ color: "#1390d4" }}>
                Instagram
              </a>
            </li>
            <li>
              <a href="https://github.com/priyadarshi7" target="_blank" rel="noopener noreferrer" style={{ color: "#1390d4" }}>
                GitHub
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/priyadarshi-satyakam-688127290/" target="_blank" rel="noopener noreferrer" style={{ color: "#1390d4" }}>
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      );
    },
    clear: "clear", // Built-in command to clear the terminal
    tech: () => {
        return (
          <div style={{margin:"18px"}}>
            <p>
              <strong>Tech Skills:</strong>
              <ul style={{ marginLeft: "20px", marginTop: "10px", listStyle: "none" }}>
                <li>- <span style={{ color: "#fc5e03" }}>Languages</span>: JavaScript, TypeScript, C++, C, Solidity</li>
                <li>- <span style={{ color: "#fc5e03" }}>Tech</span>: React.js, Next.js, Socket.io, Node.js, Express.js, MongoDB, EVM, Git/GitHub</li>
                <li>- <span style={{ color: "#fc5e03" }}>DevOps</span>: Nginx</li>
              </ul>
            </p>
          </div>
        );
      },
    help: (
      <ul style={{ marginLeft: "20px", marginTop: "10px", listStyle: "none" }}>
        <li>
          <span style={{ color: "#f53c1b", display: "inline-block", width: "100px" }}>whoami</span>
          <span>know about me</span>
        </li>
        <li>
          <span style={{ color: "#f53c1b", display: "inline-block", width: "100px" }}>tech</span>
          <span>skills</span>
        </li>
        <li>
          <span style={{ color: "#f53c1b", display: "inline-block", width: "100px" }}>website</span>
          <span>Go to the Visual version of the website</span>
        </li>
        <li>
          <span style={{ color: "#f53c1b", display: "inline-block", width: "100px" }}>contact</span>
          <span>Connect with me!!</span>
        </li>
        <li>
          <span style={{ color: "#f53c1b", display: "inline-block", width: "100px" }}>clear</span>
          <span>clear the terminal</span>
        </li>
      </ul>
    ),
  };

  return (
    <ReactTerminal
      commands={commands}
      themes={{
        "my-custom-theme": {
          themeBGColor: "#141414",
          themeToolbarColor: "#18181a",
          themeColor: "white",
        },
      }}
      theme="my-custom-theme"
      welcomeMessage="Welcome to my terminal! Type 'help' to see available commands."
      prompt="priyadarshi@30 >>>"
      errorMessage="command not found: Use 'help' command to view available commands"
    />
  );
}