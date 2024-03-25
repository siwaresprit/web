<?php

namespace App\Form;

use App\Entity\Evennement;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class EvennementType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('nom_event')
            ->add('montant')
            ->add('date')
            ->add('adresse')
            ->add('description')
            ->add('rating')
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Evennement::class,
        ]);
    }
}
