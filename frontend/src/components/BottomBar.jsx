import { ConnectContainer } from "./ConnectContainer";
import { CopyrightHolder } from "./CopyrightHolder";

export const BottomBar = () => {
    return (
        <div className="flex justify-between pt-5 pb-10 pl-3.5 pr-3.5">
            <CopyrightHolder />
            <ConnectContainer />
        </div>
    )
}