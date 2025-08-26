import { ConnectContainer } from "./ConnectContainer";
import { CopyrightHolder } from "./CopyrightHolder";

export const BottomBar = () => {
    return (
        <div className="flex justify-between pt-25 pb-5 pl-3.5 pr-3.5">
            <CopyrightHolder />
            <ConnectContainer />
        </div>
    )
}