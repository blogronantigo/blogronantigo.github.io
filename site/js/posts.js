function showPosts()
{
    let posts = 
    `
    <section>
        <article>
        <img class="post-card-img" src="https://raw.githubusercontent.com/blogronantigo/OitoP/main/app/src/main/res/mipmap-hdpi/oitop.png" width="100" height="100" alt="8p logo">
            <h2>OITOP</h2>
            <p> 
                O quebra-cabeças de 8 peças, como o nome diz, possui 8 peças, 
                composta por uma base para 9 lugares. O objetivo do jogo é mudar 
                as peças numeradas de lugar até que forme o padrão sequencial de 
                1 até 8.
            </p>
            <a class="read" href="/post/02-01-2024_oitop.html">LER</a>
        </article>
        <article>
        <img class="post-card-img" src="https://raw.githubusercontent.com/blogronantigo/Arx/main/app/src/main/res/mipmap-hdpi/arx_icon.png" width="100" height="100" alt="Arx logo">
            <h2>ARX ARCADE 2D</h2>
            <p> 
                Os arxes roubaram as almas da galáxia. Você como 
                único sobrevivente, terá como missão de recuperá-las. 
                Colete almas e garanta um lugar no placar. Disponível 
                para Android.
            </p>
            <a class="read" href="/post/23-09-2023_arx.html">LER</a>
        </article>
        <article>
        <img class="post-card-img" src="https://raw.githubusercontent.com/blogronantigo/blogronantigo.github.io/main/site/img/R.png" width="100" height="100" alt="RonTekhne logo">
            <h2>RONTEKHNE PARA ANDROID</h2>
            <p>
                O blog está no Android. Oba! Leve o  RonTekhne 
                no seu bolso (esqueceram o navegador no churrasco). 
                Mas vamos fingir que você só possa abrir o RonTkhne 
                no smartphone pelo App?
            </p>
            <a class="read" href="/post/11-09-2023_rontekhne_para_android.html">LER</a>
        </article>
        <article>
        <img class="post-card-img" src="../site/img/tree.png" width="100" height="100" alt="Árvore">
            <h2>DIGA OLÁ!</h2>
            <p>
                Nesta primeira postagem o Ron explica o motivo 
                da criação do blog, suas dúvidas sobre a forma 
                de escrita, seu propósito e intenções. Quer saber
                o que é o RonTekhne? 
            </p>
            <a class="read" href="/post/23-12-2023_diga_ola.html">LER</a>
        </article>
    </section>
    `;
    document.write(posts);
}

showPosts();
