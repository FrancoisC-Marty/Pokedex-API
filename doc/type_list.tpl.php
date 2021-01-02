<p class="type-title">Cliquez sur un type pour voir tous les Pokémon de ce type</p>
<section class="type">
    <?php foreach($type_list as $currentType): ?>
    <div class="typelist"><a class="type_link" href="<?= $router->generate('by_type') . $currentType->getId() ?>">
        <style>
            .onetype-<?= $currentType->getName() ?> {
                background-color: #<?= $currentType->getColor() ?>;
            }
        </style>
        <div class="onetype onetype-<?= $currentType->getName() ?>"><?= $currentType->getName() ?></div>
    </a></div>
    <?php endforeach; ?>
</section>