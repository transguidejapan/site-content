<%*
let title = await tp.system.prompt("Enter article title...", "New article");

let lang = await tp.system.suggester(["English", "Japanese"], ["en", "ja"], false, "Select language...");

const this_file = tp.file.find_tfile(tp.file.path(true));
console.log(this_file);
await tp.app.fileManager.processFrontMatter(this_file, (frontmatter) => {
  frontmatter["date"] = tp.file.creation_date();
  frontmatter["title"] = title;
});

await tp.file.rename(tp.user.to_slug(title) + "." + lang);

tp.app.workspace.activeLeaf.view.editor?.focus();
_%>

Enter text here!<% tp.file.cursor() %>