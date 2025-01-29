**Counter App - MVI Architecture with RxJS**
============================================

A simple Counter app built using the **Model-View-Intent (MVI)** architecture pattern and **RxJS** for handling reactive state. The app features an increment and decrement counter with auto-increment functionality.

**Features**
------------

*   **Increment**: Increases the counter by 1 (up to a maximum of 98).
    
*   **Decrement**: Decreases the counter by 1 (down to a minimum of 0).
    
*   **Reset**: Resets the counter back to 0.
    
*   **Auto Increment**: Enables automatic incrementing of the counter by 1 every 1.1 seconds when enabled.
    
*   **State Management**: Utilizes **RxJS**'s BehaviorSubject for managing and updating the app's state reactively.
    
*   **Chakra UI**: Used Chakra UI for styling, providing a clean and modern design.
    

**Architecture**
----------------

The app follows the **Model-View-Intent (MVI)** architecture pattern:

*   **Model**: The application state, handled using **RxJS** BehaviorSubject.
    
*   **View**: The UI components (React components), which subscribe to the state and update based on changes.
    
*   **Intent**: User actions (button presses) that trigger state changes.
    

**Tech Stack**
--------------

*   **React**: JavaScript library for building the UI.
    
*   **RxJS**: For managing state reactively and handling auto-increment.
    
*   **Chakra UI**: UI component library for modern styling.
    
*   **JavaScript**: ES6+ JavaScript features.
    

**Installation**
----------------

### 1\. Clone the repository

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   bashCopyEditgit clone https://github.com/your-username/counter-app.git   `

### 2\. Navigate to the project directory

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   bashCopyEditcd counter-app   `

### 3\. Install dependencies

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   bashCopyEditnpm install   `

### 4\. Run the application

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   bashCopyEditnpm start   `

The app will start on http://localhost:3000.

**Folder Structure**
--------------------

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   bashCopyEdit/src   ├── /components         # UI Components (View Layer)   │    ├── Counter.jsx    # Counter UI Component   │    ├── Button.jsx     # Reusable Button Component   │   ├── /state              # Model Layer (State Management)   │    ├── counterStore.js # BehaviorSubject for Counter State   │    ├── autoIncrement.js # Auto-increment logic using RxJS   │   ├── /intents            # Intent Layer (User Actions)   │    ├── counterIntents.js # Increment, Decrement, Reset, Toggle   │   ├── /pages              # Screens (Combines View + State)   │    ├── CounterPage.jsx # Connects View, Model, and Intents   │   ├── App.js              # Main Application   ├── index.js            # Entry Point   ├── styles.css          # Global Styles   └── package.json        # Dependencies   `

**How It Works**
----------------

1.  **Model**: The counterStore.js file holds the state of the counter and whether auto-increment is enabled or not using a BehaviorSubject.
    
2.  **View**: The React components in the /components folder display the UI and subscribe to the state. Whenever the state changes, the UI automatically updates.
    
3.  **Intent**: The user interacts with the app by clicking buttons. The corresponding intent (action) such as increment(), decrement(), reset(), or toggleAutoIncrement() is called, which triggers an update to the state.
    

### Auto-Increment Logic:

*   Auto Increment works by using an **RxJS interval()** that emits a value every 1.1 seconds and increases the counter by 1, if enabled.
    
*   When auto-increment is turned off, the interval is cleared to stop automatic updates.
    

**Styling**
-----------

This app uses **Chakra UI** for styling, which provides a set of ready-made, responsive UI components.

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   bashCopyEditnpm install @chakra-ui/react @emotion/react @emotion/styled framer-motion   `

In the App.js file, Chakra's ChakraProvider is wrapped around the entire app for global styling support.
