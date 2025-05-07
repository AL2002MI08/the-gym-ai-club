# Exercises: GitHub Copilot Chat Modes

This exercise will guide you through using the three main GitHub Copilot chat modes to enhance an expense tracker application. You'll have 20 minutes to complete as many tasks as possible.

## Setup Instructions

1. Open the `expense-tracker` folder in Visual Studio Code
2. Run `npm install` to install dependencies
3. Run `npm run dev` to start the development server
4. Open the project in your browser (typically at http://localhost:5173)

## Exercise Overview

You'll be working with a simple expense tracker application that currently has basic functionality. Your task is to use GitHub Copilot's chat modes to enhance the application by adding new features and improving existing ones.

### GitHub Copilot Chat Modes

#### 1. Ask Mode
Use this mode when you need explanations, have questions about code, or need conceptual help.

##### To activate:
- Click on the Copilot Chat icon in VS Code or press `Ctrl+I` (Windows/Linux) or `Cmd+I` (Mac)
- Type your question directly

#### 2. Edit Mode
Use this mode when you want Copilot to modify existing code or generate new code within a specific context.

##### To activate:
- Select the code you want to modify
- Click on the Copilot Chat icon or press `Ctrl+I` (Windows/Linux) or `Cmd+I` (Mac)
- Type `/edit` followed by your instruction for how to change the code

#### 3. Agent Mode
Use this mode when you want Copilot to perform more complex tasks that might involve multiple files or understanding the broader project structure.

##### To activate:
- Click on the Copilot Chat icon or press `Ctrl+I` (Windows/Linux) or `Cmd+I` (Mac)
- Type `/agent` followed by your instruction

## Tasks

Complete as many of the following tasks as possible using the appropriate Copilot chat mode:

### Ask Mode Tasks:
1. Ask Copilot to explain how state is managed in the current application
2. Get recommendations for improving the existing code structure
3. Learn about optimal ways to handle form submission in React

### Edit Mode Tasks:
1. Add a feature to categorize expenses (food, transport, entertainment, etc.)
2. Implement form validation for the expense input fields
3. Add the ability to filter expenses by date range

### Agent Mode Tasks:
1. Implement a feature to calculate and display monthly spending totals
2. Add data persistence using local storage
3. Create a simple data visualization component to show expense distribution

## Tips for Effective Prompting

1. **Be specific**: Clearly describe what you want to achieve
2. **Provide context**: Explain the current state of the code and your goal
3. **Break down complex tasks**: Ask for one thing at a time
4. **Iterate**: Refine your prompts based on the responses you get
5. **Use code references**: Mention specific functions or components when relevant

## Submission

Once you've completed the exercises, be prepared to share:
1. Which tasks you completed
2. What chat modes you found most helpful for different scenarios
3. Examples of effective prompts you discovered
4. Any challenges you encountered