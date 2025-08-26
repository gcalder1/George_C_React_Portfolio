import { ConnectBubble } from "./ConnectBubble"
import githubLogo from "../assets/containerImages/githubLogo.png"
import linkedInLogo from "../assets/containerImages/linkedInLogo.png"

export const ConnectContainer = () => {

    return (
        <div className="flex space-x-4 mt-4">
            <ConnectBubble 
            imageContent={githubLogo}
             linkContent={"https://github.com/gcalder1"} 
              altContent={"George's GitHub"} 
               bubbleTitle={"GitHub"} />
            <ConnectBubble 
            imageContent={linkedInLogo}
             linkContent={"https://www.linkedin.com/in/george-calderon-a46535174/"}
              altContent={"George's LinkedIn"} 
               bubbleTitle={"LinkedIn"} />
        </div>
    )
}