#![cfg_attr(
    all(not(debug_assertions), target_os = "windows"),
    windows_subsystem = "windows"
)]

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![greet, debug])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}

#[tauri::command]
fn greet(name: &str) -> String {
    format!("Hello {}, thanks for using the GlitchTech Hub App!", name)
}

#[tauri::command]
fn debug(msg: &str) -> String {
    format!("DEBUG: {}", msg)
}
