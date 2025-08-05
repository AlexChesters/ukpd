.PHONY: ssh
ssh:
	docker exec -w /workspaces/ukpd -it vscode-devcontainer_ukpd bash
