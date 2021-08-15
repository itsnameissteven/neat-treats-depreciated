declare type Delay = null | number;
declare const useRandomInterval: (callback: () => void, minDelay: Delay, maxDelay: Delay) => () => void;
export default useRandomInterval;
