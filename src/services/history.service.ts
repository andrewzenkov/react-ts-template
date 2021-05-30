import { createBrowserHistory, History, Pathname } from "history";

interface IHistoryService {
	history: History;
	isCurrent: (path: Pathname) => boolean;
	isIncluded: (path: Pathname) => boolean;
	push: (path: string) => void;
}

class HistoryService implements IHistoryService {
	history: History

	constructor() {
		this.history = createBrowserHistory({});
	}

	isCurrent(path: Pathname) {
		return this.history.location.pathname === path;
	}

	isIncluded(path: Pathname) {
		return this.history.location.pathname.includes(path);
	}

	push(path: Pathname) {
		this.history.push(path);
	}

	get() {
		return this.history;
	}
}

export const historyService = new HistoryService();
