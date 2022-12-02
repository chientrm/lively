const confirmDelete =
	(name: string) =>
	({ cancel }: { cancel: () => void }) => {
		if (!confirm(`Confirm delete ${name}?`)) {
			cancel();
		}
	};

export { confirmDelete };
