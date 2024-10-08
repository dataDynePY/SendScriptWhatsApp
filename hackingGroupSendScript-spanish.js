async function enviarScript(scriptText) {
  const lines = scriptText
    .split(/[\n\t]+/)
    .map((line) => line.trim())
    .filter((line) => line);
  (main = document.querySelector("#main")), (textarea = main.querySelector(`div[contenteditable="true"]`));

  if (!textarea) throw new Error("No hay una conversación abierta");

  for (const line of lines) {
    console.log(line);

    textarea.focus();
    document.execCommand("insertText", false, line);
    textarea.dispatchEvent(new Event("change", { bubbles: true }));

    setTimeout(() => {
      (main.querySelector(`[data-testid="send"]`) || main.querySelector(`[data-icon="send"]`)).click();
    }, 100);

    if (lines.indexOf(line) !== lines.length - 1) await new Promise((resolve) => setTimeout(resolve, 250));
  }

  return lines.length;
}

enviarScript(`
  \`Inicializando script...\`
  \`Descargando datos del grupo...\`
  \`Descarga de datos completado.\`
  \`Descargando localizacion de participantes...\`
  \`Descargando localizacion de participantes..\`
  \`Descarga de localizacion completada.\`
  \`Descargando datos de los participantes...\`
  \`Descargando datos...\`
  \`Desencriptando seguridad...\`
  \`Llave de encriptacion encontrada.\`
  \`Accesiendo a servidor...\`
  \`Desviando firewall...\`
  \`Firewall desviado.\`
  \`Insertando script...\`
  \`Script insertado satisfactoriamente.\`
  \`Escaneando red...\`
  \`Escaneado de red en progreso...\`
  \`Escaneando vulnerabilidades...\`
  \`Vulnerabilidades detectadas.\`
  \`Aprovechando vulnerabilidades...\`
  \`Vulnerabilidades explotadas satisfactoriamente.\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Descargando datos...\`
  \`Datos conseguidos.\`
  \`Compilando datos de los participantes del grupo...\`
  \`Compilacion de datos completada.\`
  \`Removiendo logs...\`
  \`Logs removidos.\`
  \`Conexion finalizada.\`
  `)
  .then((e) => console.log(`Código finalizado, ${e} mensajes enviados`))
  .catch(console.error);
