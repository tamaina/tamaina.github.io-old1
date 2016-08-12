<?php
/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after
 *
 * @package WordPress
 * @subpackage Twenty_Sixteen
 * @since Twenty Sixteen 1.0
 */
?>

		</div><!-- .site-content -->

		<footer id="colophon" class="site-footer" role="contentinfo">
			<?php if ( has_nav_menu( 'primary' ) ) : ?>
				<nav class="main-navigation" role="navigation" aria-label="<?php esc_attr_e( 'Footer Primary Menu', 'twentysixteen' ); ?>">
					<?php
						wp_nav_menu( array(
							'theme_location' => 'primary',
							'menu_class'     => 'primary-menu',
						 ) );
					?>
				</nav><!-- .main-navigation -->
			<?php endif; ?>

			<?php if ( has_nav_menu( 'social' ) ) : ?>
				<nav class="social-navigation" role="navigation" aria-label="<?php esc_attr_e( 'Footer Social Links Menu', 'twentysixteen' ); ?>">
					<?php
						wp_nav_menu( array(
							'theme_location' => 'social',
							'menu_class'     => 'social-links-menu',
							'depth'          => 1,
							'link_before'    => '<span class="screen-reader-text">',
							'link_after'     => '</span>',
						) );
					?>
				</nav><!-- .social-navigation -->
			<?php endif; ?>

			<div class="site-info">
				<?php
					/**
					 * Fires before the twentysixteen footer text for footer customization.
					 *
					 * @since Twenty Sixteen 1.0
					 */
					do_action( 'twentysixteen_credits' );
				?>
			</div><!-- .site-info -->
		</footer><!-- .site-footer -->
	</div><!-- .site-inner -->
</div><!-- .site -->

<?php wp_footer(); ?>

  <footer class="page-footer light-blue darken-3">
   <div class="container">
     <div class="row">
       <div class="col l3 s12">
         <h5 class="white-text">Menu</h5>
         <div class="HereIsFooterMenu"></div>
        </div>
      <div>
      <div class="col l9 s12">
      <p class="grey-text text-lighten-3" style="vertical-align: top;">広告<br><div class="HereIsAd"></div>  <div class="HereIsAd"></div></p>
      </div>
      </div>
      </div>
    </div>
    <div class="footer-copyright">
      <div class="container">
            Copyright ©2016-2017 Takasaki High School Student Council General Administration Department all rights reserved.<br>
            群馬県立高崎高等学校生徒会総務 <a class="modal-trigger" href="#policy_modal">このサイトについて</a>
      </div>
    </div>

  <!-- Modal Structure -->
  <div id="policy_modal" class="modal">
    <div class="modal-content">
      <dl>
      <h2><dt>このサイトについて</dt></h2>
      <dd>
      <p>このサイト(url)(以下、当サイト)は、群馬県立高崎高等学校(以下、高高)の生徒(以下、生徒)の活動を記録および広報するため、高高生徒会総務(以下、生徒会総務)が開設した、生徒が寄稿するブログサイトです。</p>
      <p>当サイトは、生徒会総務によって運営されています。</p>
      <p>当サイトを利用し、または、当サイトの提供する情報を利用した場合は、以下の事項に同意したものとみなされますので、ご注意下さい。</p>
      </dd>

      <h3><dt>免責事項</dt></h3>
      <dd>
      <p>当サイトが提供する情報に関しては、合法性、正確性、安全性等、いかなる保証もされません。</p>
      <p>生徒会総務は、当サイトの利用により発生したトラブルや損害に対して、一切の責任を負いません。</p>
      <p>当サイト内に張られた外部サイトへのリンクは、リンク先のWebサイトを推奨するものではなく、いかなる保証もされません。</p>
      <p>生徒が書いた記事に問題があった場合は、高高ではなく、下記連絡先までお知らせください。</p>
      </dd>

      <h3><dt>二次利用について</dt></h3>
      <dd>
      <p>著作権法などの民法に則ります。</p>
      <p>それぞれの記事に関しての著作権は、記事作成者に帰属します。記事作成者が引用したものについてはこの限りではありません。</p>
      <p>それ以外のデザインや技術に関する著作権は、それぞれの作成者に帰属します。</p>
      </dd>

      <h3><dt>当サイトの閲覧に際して</dt></h3>
      <dd>
      <p>各主要ブラウザの最新版での閲覧を推奨します。</p>
      <p>javascriptを有効にしてご覧ください。</p>
      <p>エンコードはUTF-8です。文字化けした場合は、各ブラウザの設定をご確認ください。</p>
      </dd>

      <h3><dt>さいごに</dt></h3>
      <dd>
      <p>トラブルが起きないように、生徒への注意喚起は徹底しておりますが、不備がありましたら申し訳ございません。</p>
      <p>お気づきの点がありましたら、下記連絡先までご連絡ください。</p>
      <p>このサイトを通して、"高高ワールド"を感じていただけたら幸いです。</p>
      </dd>

      <h3><dt>連絡先</dt></h3>
      <dd>
      <p>メール:メールアドレス(♂を@に読みかえてください。)</p>
      </dd>
      <dd>
      <p>フォーム:フォームアドレス</p>
      </dd>
    </dl></div>
    <div class="modal-footer">
      <a href="javascript:void(0)" class="modal-action modal-close btn-flat">閉じる</a>
    </div>
  </div>
  <!-- Modal Structure -->
</footer>
</body>
</html>
